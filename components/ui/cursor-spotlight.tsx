"use client";

import { ReactNode, useEffect, useRef } from "react";

interface CursorSpotlightProps {
  children: ReactNode;
  className?: string;
  color?: string;   // rgba / hsla color for the spotlight
  size?: number;    // px diameter
}

/**
 * Wraps a section so the cursor emits a soft radial glow that follows the pointer.
 * Renders only on devices with fine-pointer + no reduced-motion preference.
 * Uses CSS variables (updated via rAF) — zero React re-renders.
 */
export function CursorSpotlight({
  children,
  className = "",
  color = "rgba(201, 162, 39, 0.18)",
  size = 520,
}: CursorSpotlightProps) {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const supportsHover = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!supportsHover || reduced) return;

    el.dataset.spotlightActive = "true";
    let raf = 0;
    const onMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      if (raf) cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        el.style.setProperty("--spotlight-x", `${x}px`);
        el.style.setProperty("--spotlight-y", `${y}px`);
        el.style.setProperty("--spotlight-opacity", "1");
      });
    };
    const onLeave = () => {
      el.style.setProperty("--spotlight-opacity", "0");
    };

    el.addEventListener("mousemove", onMove);
    el.addEventListener("mouseleave", onLeave);
    return () => {
      el.removeEventListener("mousemove", onMove);
      el.removeEventListener("mouseleave", onLeave);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div
      ref={ref}
      className={`relative ${className}`}
      style={
        {
          "--spotlight-x": "50%",
          "--spotlight-y": "50%",
          "--spotlight-opacity": "0",
          "--spotlight-size": `${size}px`,
          "--spotlight-color": color,
        } as React.CSSProperties
      }
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-0 transition-opacity duration-500"
        style={{
          opacity: "var(--spotlight-opacity)" as unknown as number,
          background:
            "radial-gradient(var(--spotlight-size) circle at var(--spotlight-x) var(--spotlight-y), var(--spotlight-color), transparent 60%)",
        }}
      />
      <div className="relative z-10">{children}</div>
    </div>
  );
}
