"use client";

import { useEffect } from "react";

/**
 * Touch-device handler for `.flip-to-image` cards.
 *
 * On devices without hover (touch/mobile), tapping a `.flip-to-image` card
 * toggles its `.is-active` class, revealing the image face. Tapping outside
 * or on another card resets. On desktop (hover: hover), this component is a no-op
 * because CSS `:hover` already handles the flip.
 *
 * Mount once globally via layout.
 */
export function FlipOnTap() {
  useEffect(() => {
    if (typeof window === "undefined") return;
    const canHover = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    if (canHover) return;

    let activeEl: HTMLElement | null = null;

    const onPointer = (e: Event) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;
      const card = target.closest<HTMLElement>(".flip-to-image");

      if (!card) {
        if (activeEl) {
          activeEl.classList.remove("is-active");
          activeEl = null;
        }
        return;
      }

      // If tapping an anchor/button inside the card, let the click proceed as-is.
      if (target.closest("a, button")) return;

      if (activeEl && activeEl !== card) {
        activeEl.classList.remove("is-active");
      }
      card.classList.toggle("is-active");
      activeEl = card.classList.contains("is-active") ? card : null;
    };

    document.addEventListener("click", onPointer, { passive: true });
    return () => document.removeEventListener("click", onPointer);
  }, []);

  return null;
}
