'use client';

import { useEffect, useRef, useState } from 'react';

/**
 * Pabau Online Booking Widget
 *
 * Embeds Pabau's booking interface into the page.
 *
 * Setup:
 * 1. Go to Pabau → Setup → Online Bookings → Configure
 * 2. Copy your company_slug from the booking URL
 * 3. Set NEXT_PUBLIC_PABAU_COMPANY_SLUG in .env.local
 *
 * Docs: https://support.pabau.com/en/pabau2/how-to-implement-your-online-booking-platform-on-your-website
 */

interface PabauBookingProps {
  /** Your Pabau company slug (from your booking URL) */
  companySlug?: string;
  /** Widget button style (1-4) */
  btnStyle?: number;
  /** Optional class for the container */
  className?: string;
  /** Show inline booking calendar instead of button */
  inline?: boolean;
}

export function PabauBooking({
  companySlug,
  btnStyle = 1,
  className = '',
  inline = true,
}: PabauBookingProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

  const slug =
    companySlug || process.env.NEXT_PUBLIC_PABAU_COMPANY_SLUG || '';

  useEffect(() => {
    if (!slug || !containerRef.current) {
      setIsLoading(false);
      setError(!slug);
      return;
    }

    // Build the Pabau widget script URL
    const scriptSrc = inline
      ? `https://booking.pabau.com/${slug}`
      : `https://pabau.com/widgets/online-bookings/book-now-button.js?company_slug=${slug}&btnStyle=${btnStyle}`;

    if (inline) {
      // For inline booking, embed via iframe
      const iframe = document.createElement('iframe');
      iframe.src = scriptSrc;
      iframe.style.width = '100%';
      iframe.style.minHeight = '700px';
      iframe.style.border = 'none';
      iframe.style.borderRadius = '12px';
      iframe.style.background = 'transparent';
      iframe.title = 'Book an appointment at Healinque';
      iframe.onload = () => setIsLoading(false);
      iframe.onerror = () => {
        setIsLoading(false);
        setError(true);
      };

      containerRef.current.appendChild(iframe);

      return () => {
        if (containerRef.current?.contains(iframe)) {
          containerRef.current.removeChild(iframe);
        }
      };
    } else {
      // For button widget, inject the script
      const script = document.createElement('script');
      script.id = 'pabau-script';
      script.src = scriptSrc;
      script.async = true;
      script.onload = () => setIsLoading(false);
      script.onerror = () => {
        setIsLoading(false);
        setError(true);
      };

      containerRef.current.appendChild(script);

      return () => {
        if (containerRef.current?.contains(script)) {
          containerRef.current.removeChild(script);
        }
      };
    }
  }, [slug, btnStyle, inline]);

  // Not configured state
  if (!slug) {
    return (
      <div className={`rounded-2xl border border-white/10 bg-white/5 p-8 text-center ${className}`}>
        <p className="text-white/60 text-sm mb-4">
          Online booking is being configured. In the meantime:
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="tel:+18583377999"
            className="inline-flex items-center justify-center px-6 py-3 bg-[#C9A227] text-[#0a1628] font-semibold rounded-lg hover:bg-[#C9A227]/90 transition-colors"
          >
            Call (858) 337-7999
          </a>
          <a
            href="mailto:info@healinque.com?subject=Appointment%20Request"
            className="inline-flex items-center justify-center px-6 py-3 border border-[#C9A227]/50 text-[#C9A227] font-semibold rounded-lg hover:bg-[#C9A227]/10 transition-colors"
          >
            Email Us
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className={className}>
      {isLoading && (
        <div className="flex items-center justify-center py-12">
          <div className="flex flex-col items-center gap-4">
            <div className="w-8 h-8 border-2 border-[#C9A227]/30 border-t-[#C9A227] rounded-full animate-spin" />
            <p className="text-white/50 text-sm">Loading booking system...</p>
          </div>
        </div>
      )}

      {error && (
        <div className="rounded-2xl border border-white/10 bg-white/5 p-8 text-center">
          <p className="text-white/60 text-sm mb-4">
            The booking system is temporarily unavailable. Please contact us directly:
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+18583377999"
              className="inline-flex items-center justify-center px-6 py-3 bg-[#C9A227] text-[#0a1628] font-semibold rounded-lg hover:bg-[#C9A227]/90 transition-colors"
            >
              Call (858) 337-7999
            </a>
            <a
              href="/contact"
              className="inline-flex items-center justify-center px-6 py-3 border border-[#C9A227]/50 text-[#C9A227] font-semibold rounded-lg hover:bg-[#C9A227]/10 transition-colors"
            >
              Contact Form
            </a>
          </div>
        </div>
      )}

      <div
        ref={containerRef}
        id="pabau-book-now"
        style={{ display: isLoading || error ? 'none' : 'block' }}
      />
    </div>
  );
}
