"use client";

import { useEffect, useState } from "react";

/**
 * A thin gold scroll-progress bar pinned to the top of the viewport.
 * Pure CSS transforms + rAF-throttled scroll listener for 60fps.
 */
export function ScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let raf = 0;
    const update = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const pct = docHeight > 0 ? Math.min(1, Math.max(0, scrollTop / docHeight)) : 0;
      setProgress(pct);
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

  return (
    <div
      aria-hidden
      className="fixed top-0 left-0 right-0 z-[60] h-[2px] pointer-events-none"
    >
      <div
        className="h-full origin-left bg-gradient-to-r from-[#C9A227] via-[#DEB84A] to-[#C9A227]"
        style={{
          transform: `scaleX(${progress})`,
          transition: "transform 80ms linear",
          boxShadow: "0 0 12px rgba(201, 162, 39, 0.6)",
        }}
      />
    </div>
  );
}
