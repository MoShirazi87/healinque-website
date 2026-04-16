"use client";

import { useEffect } from "react";

/**
 * Attaches a single IntersectionObserver that reveals every `<section>` on the page
 * when it enters the viewport. No per-component wrapping required.
 *
 * To opt out of a section: add `data-no-reveal` to it.
 *
 * Mount once per route. The observer is re-created per navigation (cheap).
 */
export function AutoReveal() {
  useEffect(() => {
    if (typeof window === "undefined") return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const sections = Array.from(
      document.querySelectorAll<HTMLElement>("section:not([data-no-reveal]):not([data-revealed])")
    );

    if (reduced) {
      sections.forEach((s) => {
        s.style.opacity = "1";
        s.style.transform = "none";
        s.dataset.revealed = "true";
      });
      return;
    }

    // Prime initial state
    sections.forEach((s) => {
      if (s.dataset.revealed) return;
      s.style.opacity = "0";
      s.style.transform = "translate3d(0, 28px, 0)";
      s.style.transition =
        "opacity 800ms cubic-bezier(0.22, 1, 0.36, 1), transform 900ms cubic-bezier(0.22, 1, 0.36, 1)";
      s.style.willChange = "opacity, transform";
    });

    // Reveal as soon as any section reaches 10% into viewport
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target as HTMLElement;
            el.style.opacity = "1";
            el.style.transform = "translate3d(0, 0, 0)";
            el.dataset.revealed = "true";
            io.unobserve(el);
          }
        });
      },
      { threshold: 0.08, rootMargin: "0px 0px -6% 0px" }
    );

    sections.forEach((s) => io.observe(s));

    // Also reveal sections already in view (above the fold)
    requestAnimationFrame(() => {
      sections.forEach((s) => {
        const rect = s.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.95) {
          s.style.opacity = "1";
          s.style.transform = "translate3d(0, 0, 0)";
          s.dataset.revealed = "true";
          io.unobserve(s);
        }
      });
    });

    return () => io.disconnect();
  }, []);

  return null;
}
