"use client";

import { useEffect } from "react";

/**
 * AutoReveal — quiet scroll-reveal tag.
 *
 * On scroll, tags each <section> with `data-revealed="true"` as it enters the
 * viewport. CSS may optionally key off this attribute for a subtle flourish.
 *
 * Critical contract: sections must ALWAYS render visibly by default. This
 * component only ADDS an attribute — it never writes inline styles, never
 * hides, never primes. If the observer never fires (SSR stream, reduced
 * motion, bot render), the section simply appears normally.
 *
 * Opt out: add `data-no-reveal` to the section.
 */
export function AutoReveal() {
  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const el = entry.target as HTMLElement;
          el.dataset.revealed = "true";
          io.unobserve(el);
        });
      },
      { threshold: 0.08, rootMargin: "0px 0px -6% 0px" }
    );

    document
      .querySelectorAll<HTMLElement>("section")
      .forEach((s) => {
        if (s.hasAttribute("data-no-reveal")) return;
        if (s.dataset.revealed) return;
        io.observe(s);
      });

    return () => io.disconnect();
  }, []);

  return null;
}
