const { withSentryConfig } = require("@sentry/nextjs");

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      // Session 21: cdn.shopify.com removed — Shopify integration was deleted
      // in Session 20 cleanup. Unsplash kept for any editorial alt slots; Pexels
      // is the primary CDN fallback when NEXT_PUBLIC_IMAGES_LOCAL ≠ "true".
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'images.pexels.com',
      },
    ],
  },
  async headers() {
    // Report-Only CSP (Session 17). Observable via the `report-uri`; does not
    // enforce yet, so it cannot break the app. Promote to `Content-Security-Policy`
    // (without `-Report-Only`) once the CSP report endpoint confirms no real
    // violations over a week of traffic.
    const csp = [
      "default-src 'self'",
      // Next.js requires inline scripts for hydration + framer-motion inline styles
      "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com https://www.google-analytics.com",
      "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
      "img-src 'self' data: blob: https://images.pexels.com https://images.unsplash.com https://www.google-analytics.com",
      "font-src 'self' data: https://fonts.gstatic.com",
      "connect-src 'self' https://www.google-analytics.com https://*.sentry.io https://api.resend.com https://api.pabau.com",
      "frame-src 'self' https://www.google.com https://maps.google.com https://www.youtube-nocookie.com",
      "media-src 'self' https://videos.pexels.com",
      "object-src 'none'",
      "base-uri 'self'",
      "form-action 'self'",
      "frame-ancestors 'none'",
      "upgrade-insecure-requests",
    ].join('; ');

    // Permissions-Policy (Session 18 hardening). The site has no first-party
    // need for sensors, payment APIs, USB/serial devices, or browsing-topics.
    // Deny everything we can; selectively allow only what the page actually uses.
    // - `fullscreen=(self)` so embedded YouTube/maps can fullscreen if asked.
    // - `interest-cohort=()` opts out of Google FLoC/Topics cohort tracking.
    // - Sentry replay does NOT need any of these (it captures the DOM, not media).
    const permissionsPolicy = [
      'accelerometer=()',
      'ambient-light-sensor=()',
      'autoplay=(self)',
      'battery=()',
      'browsing-topics=()',
      'camera=()',
      'cross-origin-isolated=()',
      'display-capture=()',
      'document-domain=()',
      'encrypted-media=()',
      'execution-while-not-rendered=()',
      'execution-while-out-of-viewport=()',
      'fullscreen=(self)',
      'geolocation=()',
      'gyroscope=()',
      'hid=()',
      'identity-credentials-get=()',
      'idle-detection=()',
      'interest-cohort=()',
      'keyboard-map=()',
      'magnetometer=()',
      'microphone=()',
      'midi=()',
      'navigation-override=()',
      'otp-credentials=()',
      'payment=()',
      'picture-in-picture=()',
      'publickey-credentials-create=()',
      'publickey-credentials-get=()',
      'screen-wake-lock=()',
      'serial=()',
      'storage-access=()',
      'sync-xhr=()',
      'unload=()',
      'usb=()',
      'web-share=()',
      'window-management=()',
      'xr-spatial-tracking=()',
    ].join(', ');

    return [
      {
        source: '/(.*)',
        headers: [
          { key: 'X-Frame-Options', value: 'DENY' },
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'X-DNS-Prefetch-Control', value: 'on' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
          { key: 'Permissions-Policy', value: permissionsPolicy },
          { key: 'Strict-Transport-Security', value: 'max-age=63072000; includeSubDomains; preload' },
          { key: 'Content-Security-Policy-Report-Only', value: csp },
          // Cross-Origin isolation — conservative defaults
          { key: 'Cross-Origin-Opener-Policy', value: 'same-origin-allow-popups' },
          // Resource-Policy — allows same-origin loading; pairs with COOP above.
          { key: 'Cross-Origin-Resource-Policy', value: 'same-origin' },
        ],
      },
    ];
  },
  async redirects() {
    return [
      {
        source: '/book-consultation',
        destination: '/book',
        permanent: true,
      },
      {
        source: '/philosophy',
        destination: '/about/healinque-method',
        permanent: true,
      },
    ];
  },
};

module.exports = withSentryConfig(nextConfig, {
  // Suppresses source map upload logs during build
  silent: true,

  // Upload source maps for better stack traces
  org: process.env.SENTRY_ORG,
  project: process.env.SENTRY_PROJECT,

  // Only upload source maps in CI/production builds
  disableServerWebpackPlugin: !process.env.SENTRY_AUTH_TOKEN,
  disableClientWebpackPlugin: !process.env.SENTRY_AUTH_TOKEN,

  // Hides source maps from generated client bundles
  hideSourceMaps: true,

  // Tree-shake Sentry debug logging in production
  webpack: {
    treeshake: {
      removeDebugLogging: true,
    },
  },
});
