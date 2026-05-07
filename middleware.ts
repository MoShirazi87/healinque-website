/**
 * Next.js Middleware — CSP nonce scaffolding (Session 19, Track E)
 *
 * This middleware generates a per-request base64 nonce and attaches it to both
 * the request (as `x-nonce`) and the response as part of the Content-Security-
 * Policy-Report-Only header. It is deliberately NON-ENFORCING:
 *
 *   1. Uses `Content-Security-Policy-Report-Only` — violations are reported
 *      (or logged by the browser) but never blocked.
 *   2. Retains `'unsafe-inline'` alongside `'nonce-...'`. Per CSP3 spec, once
 *      a nonce is present, `'unsafe-inline'` is ignored by modern browsers —
 *      BUT only for non-Report-Only CSPs. In Report-Only mode, both are read,
 *      and `'unsafe-inline'` remains the effective fallback. This lets us
 *      observe which inline scripts WOULD fire nonce-less before we ever
 *      promote to enforcing.
 *   3. `'unsafe-eval'` is kept in place — Next.js App Router still needs it
 *      for HMR in dev, and some framer-motion code paths use `new Function()`.
 *
 * Promotion plan (deferred until post-launch, after report logs are clean):
 *   (a) Remove `'unsafe-inline'` from both script-src and style-src.
 *   (b) Thread the nonce into every <Script>/inline <script> tag via
 *       `headers().get('x-nonce')` in a root layout helper.
 *   (c) Flip `Content-Security-Policy-Report-Only` → `Content-Security-Policy`.
 *
 * The existing next.config.js CSP header remains as a fallback for any request
 * paths that fall outside this middleware's matcher (static assets, _next/*,
 * /api/health checks). For matched routes, this middleware's CSP header takes
 * precedence via response.headers.set().
 */

import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

/**
 * Generate a cryptographically-strong nonce using Web Crypto. Base64-encodes
 * 16 random bytes → 24-char token. Runs on the Edge runtime (middleware), so
 * Node's `crypto` module is unavailable; we use `globalThis.crypto`.
 */
function generateNonce(): string {
  const bytes = new Uint8Array(16);
  crypto.getRandomValues(bytes);
  // btoa is available in the Edge runtime.
  let binary = "";
  for (let i = 0; i < bytes.length; i++) {
    binary += String.fromCharCode(bytes[i]);
  }
  return btoa(binary);
}

function buildCsp(nonce: string): string {
  return [
    "default-src 'self'",
    // `'nonce-N'` + `'unsafe-inline'`: report-only observability without breakage.
    // Next.js still needs `'unsafe-inline'` for its hydration/flight payload
    // inline scripts until we thread the nonce into every one of them.
    `script-src 'self' 'nonce-${nonce}' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com https://www.google-analytics.com`,
    `style-src 'self' 'nonce-${nonce}' 'unsafe-inline' https://fonts.googleapis.com`,
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
  ].join("; ");
}

export function middleware(request: NextRequest) {
  const nonce = generateNonce();
  const csp = buildCsp(nonce);

  // Forward the nonce to the downstream handler via request headers. A future
  // layout/page can read this with `headers().get('x-nonce')` and pass it to
  // <Script nonce={...} /> components for inline scripts.
  const requestHeaders = new Headers(request.headers);
  requestHeaders.set("x-nonce", nonce);

  const response = NextResponse.next({
    request: { headers: requestHeaders },
  });

  // Set the Report-Only CSP on the response. This OVERRIDES the static
  // Content-Security-Policy-Report-Only emitted by next.config.js for matched
  // routes. next.config.js keeps serving its CSP for unmatched paths (images,
  // _next assets).
  response.headers.set("Content-Security-Policy-Report-Only", csp);

  // Also surface the nonce on the response so client-side debugging can
  // correlate it with reported violations. Not strictly required for CSP to
  // work; purely diagnostic.
  response.headers.set("x-nonce", nonce);

  return response;
}

/**
 * Matcher: run on actual page routes only. Skip:
 *   - /_next/static/* and /_next/image/* (Next.js-generated, already hashed)
 *   - /api/* (API routes set their own headers)
 *   - Favicons, manifest, robots, sitemap, llms, og-image (static files)
 *   - Any path with a file extension (images, fonts, JS, etc.)
 *
 * This keeps middleware overhead off the hot path for static asset requests,
 * which is the main reason we don't use middleware for every single request.
 */
export const config = {
  matcher: [
    "/((?!api|_next/static|_next/image|favicon|manifest|robots\\.txt|sitemap\\.xml|llms\\.txt|.*\\.(?:png|jpg|jpeg|gif|webp|avif|svg|ico|woff|woff2|ttf|otf|eot|mp4|webm|mov|js|css|map|xml|json|txt)).*)",
  ],
};
