'use client';

import { useEffect, useRef, useState, useCallback } from 'react';
import { siteConfig } from '@/lib/config/site';

interface BookingWidgetProps {
  /** Optional class for the container */
  className?: string;
  /** Show inline booking calendar instead of button (default: true) */
  inline?: boolean;
}

type Provider = 'pabau' | 'calendly' | 'fallback';

function getProvider(): { provider: Provider; url: string } {
  const pabauSlug = process.env.NEXT_PUBLIC_PABAU_COMPANY_SLUG;
  if (pabauSlug) {
    return { provider: 'pabau', url: `https://booking.pabau.com/${pabauSlug}` };
  }

  const calendlyUrl = process.env.NEXT_PUBLIC_CALENDLY_URL;
  if (calendlyUrl) {
    const separator = calendlyUrl.includes('?') ? '&' : '?';
    const params = `hide_gdpr_banner=1&background_color=0a1628&text_color=ffffff&primary_color=C9A227`;
    return { provider: 'calendly', url: `${calendlyUrl}${separator}${params}` };
  }

  return { provider: 'fallback', url: '' };
}

function LoadingSpinner() {
  return (
    <div className="flex items-center justify-center py-12">
      <div className="flex flex-col items-center gap-4">
        <div className="w-8 h-8 border-2 border-[#C9A227]/30 border-t-[#C9A227] rounded-full animate-spin" />
        <p className="text-white/50 text-sm">Loading booking system...</p>
      </div>
    </div>
  );
}

function ContactFallback({ className = '' }: { className?: string }) {
  return (
    <div
      className={`rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-sm p-10 text-center ${className}`}
    >
      <div className="mb-6">
        <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-[#C9A227]/10 mb-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-6 h-6 text-[#C9A227]"
          >
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
          </svg>
        </div>
        <h3 className="text-xl font-semibold text-white mb-2">
          Book Your Consultation
        </h3>
        <p className="text-white/60 text-sm max-w-md mx-auto">
          Online booking is being set up. Call or text to schedule your
          appointment, or send an email.
        </p>
      </div>

      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <a
          href={`tel:+1${siteConfig.phoneRaw}`}
          className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#C9A227] text-[#0a1628] font-semibold rounded-lg hover:bg-[#C9A227]/90 transition-colors"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-4 h-4"
          >
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
          </svg>
          Call {siteConfig.phone}
        </a>
        <a
          href={`mailto:${siteConfig.email}?subject=Appointment%20Request`}
          className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-[#C9A227]/50 text-[#C9A227] font-semibold rounded-lg hover:bg-[#C9A227]/10 transition-colors"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-4 h-4"
          >
            <rect width="20" height="16" x="2" y="4" rx="2" />
            <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
          </svg>
          Email Me
        </a>
      </div>
    </div>
  );
}

function ErrorState({ className = '' }: { className?: string }) {
  return (
    <div
      className={`rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-sm p-8 text-center ${className}`}
    >
      <p className="text-white/60 text-sm mb-4">
        The booking system is temporarily unavailable. Please get in touch
        directly:
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <a
          href={`tel:+1${siteConfig.phoneRaw}`}
          className="inline-flex items-center justify-center px-6 py-3 bg-[#C9A227] text-[#0a1628] font-semibold rounded-lg hover:bg-[#C9A227]/90 transition-colors"
        >
          Call {siteConfig.phone}
        </a>
        <a
          href="/contact"
          className="inline-flex items-center justify-center px-6 py-3 border border-[#C9A227]/50 text-[#C9A227] font-semibold rounded-lg hover:bg-[#C9A227]/10 transition-colors"
        >
          Contact Form
        </a>
      </div>
    </div>
  );
}

export function BookingWidget({
  className = '',
  inline = true,
}: BookingWidgetProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);
  const { provider, url } = getProvider();

  const handleLoad = useCallback(() => setIsLoading(false), []);
  const handleError = useCallback(() => {
    setIsLoading(false);
    setError(true);
  }, []);

  useEffect(() => {
    if (provider === 'fallback' || !containerRef.current) {
      setIsLoading(false);
      return;
    }

    const container = containerRef.current;

    if (inline) {
      const iframe = document.createElement('iframe');
      iframe.src = url;
      iframe.style.width = '100%';
      iframe.style.minHeight = '700px';
      iframe.style.border = 'none';
      iframe.style.borderRadius = '12px';
      iframe.style.background = 'transparent';
      iframe.title = 'Book an appointment at Healinque';
      iframe.allow = 'payment';
      iframe.onload = handleLoad;
      iframe.onerror = handleError;

      // Timeout fallback: if iframe hasn't loaded after 15s, show error
      const timeout = setTimeout(() => {
        if (isLoading) {
          handleError();
        }
      }, 15000);

      container.appendChild(iframe);

      return () => {
        clearTimeout(timeout);
        if (container.contains(iframe)) {
          container.removeChild(iframe);
        }
      };
    } else {
      // Non-inline: open in new tab on interaction
      setIsLoading(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [provider, url, inline, handleLoad, handleError]);

  // Fallback provider: show contact card
  if (provider === 'fallback') {
    return <ContactFallback className={className} />;
  }

  // Non-inline mode: render a styled link/button to open booking in new tab
  if (!inline) {
    return (
      <div className={className}>
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#C9A227] text-[#0a1628] font-semibold rounded-lg hover:bg-[#C9A227]/90 transition-colors text-lg"
        >
          Book Online
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-5 h-5"
          >
            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
            <polyline points="15 3 21 3 21 9" />
            <line x1="10" x2="21" y1="14" y2="3" />
          </svg>
        </a>
      </div>
    );
  }

  // Inline mode: embed iframe
  return (
    <div className={className}>
      {isLoading && <LoadingSpinner />}

      {error && <ErrorState />}

      <div
        ref={containerRef}
        style={{ display: isLoading || error ? 'none' : 'block' }}
      />
    </div>
  );
}
