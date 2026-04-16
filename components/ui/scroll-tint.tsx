"use client";

import { useEffect } from "react";

/**
 * Updates CSS variables on the <body> so the scroll position subtly shifts
 * a radial gold tint (defined in globals.css).  Zero React re-renders.
 */
export function ScrollTint() {
  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) return;

    let raf = 0;
    const update = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const pct = docHeight > 0 ? Math.min(1, Math.max(0, scrollTop / docHeight)) : 0;
      // Y position oscillates between 0% and 100% across the scroll.
      // Intensity peaks in the middle of the page for a soft "spotlight through page" effect.
      const y = pct * 100;
      const intensity = 0.6 + 0.6 * Math.sin(pct * Math.PI); // 0.6 → 1.2 → 0.6
      document.body.style.setProperty("--scroll-tint-y", `${y}%`);
      document.body.style.setProperty("--scroll-tint-intensity", `${intensity}`);
      raf = 0;
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return null;
}
