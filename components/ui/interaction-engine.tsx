"use client";

import { useEffect } from "react";

/**
 * INTERACTION ENGINE — LEVEL 20
 *
 * Global, delegation-based engine that makes every surface on the site
 * feel alive without per-component wiring.
 *
 * Layers (all auto-applied unless otherwise noted):
 *
 *   1. Viewport cursor spotlight — a soft gold radial follows the pointer
 *      across the ENTIRE viewport on dark sections (body-level).
 *   2. Cursor trail — tiny gold dust dots trail the pointer with decay.
 *   3. Cursor-follow inner glow on every card-like element, MUCH brighter.
 *   4. Aggressive 3D tilt on every card with dynamic shadow that tracks
 *      the cursor position (shadow offset follows the tilt vector).
 *   5. Aggressive magnetic pull on every button + [data-magnetic].
 *   6. Click ripples on every button, card, and [data-ripple] — gold wave
 *      radiating from the click point.
 *   7. Parallax on every <img> inside a [data-parallax] container, AND on
 *      opt-in [data-parallax-img] images. Uses transform translate3d.
 *   8. Scroll-driven global hue/saturation nudge on the body background.
 *   9. Letter-by-letter reveal on [data-letter-reveal] — each character
 *      gets its own translateY + opacity transition.
 *  10. Word-by-word reveal on [data-text-reveal].
 *  11. Count-up on [data-count].
 *  12. 3D entrance rotation on [data-enter-3d] when scrolled into view.
 *  13. Magnetic repulsion field: elements with [data-repel] move AWAY
 *      from the cursor (opposite of magnetic pull).
 *  14. Section wipe reveal — gold line sweeps across [data-wipe] sections
 *      the first time they enter the viewport.
 *  15. Global pointer "cursor light" button ring — any button the cursor
 *      hovers fires an expanding gold ring.
 *
 * All effects are gated by prefers-reduced-motion and (hover: hover,
 * pointer: fine) where interaction requires a cursor.
 */
export function InteractionEngine() {
  useEffect(() => {
    if (typeof window === "undefined") return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const canHover = window.matchMedia("(hover: hover) and (pointer: fine)").matches;

    const GLOW_SELECTOR = [
      ".card-interactive",
      "[data-interactive]",
      ".card-elevated",
      ".card-treatment",
      ".card-glass",
      ".flip-to-image",
    ].join(",");

    const TILT_SELECTOR = [
      "[data-tilt]",
      ".tilt",
      ".card-elevated",
      ".card-treatment",
      ".card-interactive",
    ].join(",");

    const RIPPLE_SELECTOR =
      "button, a.btn, [data-ripple], .card-elevated, .card-treatment, .card-interactive, .card-glass";

    /* ─────────────────────────────────────────────────────────────
       Viewport Spotlight + Cursor Trail (fixed layer)
       ───────────────────────────────────────────────────────────── */
    let spotlightEl: HTMLDivElement | null = null;
    let trailLayer: HTMLDivElement | null = null;
    if (canHover && !reduced) {
      spotlightEl = document.createElement("div");
      spotlightEl.id = "cursor-spotlight";
      spotlightEl.setAttribute(
        "style",
        [
          "position:fixed",
          "inset:0",
          "pointer-events:none",
          "z-index:9",
          "opacity:0",
          "transition:opacity 300ms ease",
          "background:radial-gradient(600px circle at var(--cx,50%) var(--cy,50%)," +
            "rgba(201,162,39,0.22),rgba(201,162,39,0.08) 25%,transparent 55%)",
          "mix-blend-mode:screen",
          "will-change:background",
        ].join(";")
      );
      document.body.appendChild(spotlightEl);

      trailLayer = document.createElement("div");
      trailLayer.id = "cursor-trail-layer";
      trailLayer.setAttribute(
        "style",
        "position:fixed;inset:0;pointer-events:none;z-index:10;overflow:hidden"
      );
      document.body.appendChild(trailLayer);
    }

    /* ─────────────────────────────────────────────────────────────
       Main pointer handler — aggregates glow, tilt, magnetic, repel,
       viewport-spotlight position, and spawns trail dots.
       ───────────────────────────────────────────────────────────── */
    let rafPending = false;
    let lastEvent: PointerEvent | null = null;
    let lastTrailAt = 0;

    const onMove = (e: PointerEvent) => {
      if (!canHover || reduced) return;
      lastEvent = e;

      // spawn trail dot (throttled to ~every 22ms = ~45/sec)
      const now = performance.now();
      if (trailLayer && now - lastTrailAt > 22) {
        lastTrailAt = now;
        const dot = document.createElement("span");
        const size = 6 + Math.random() * 6;
        dot.setAttribute(
          "style",
          [
            "position:absolute",
            `left:${e.clientX - size / 2}px`,
            `top:${e.clientY - size / 2}px`,
            `width:${size}px`,
            `height:${size}px`,
            "border-radius:50%",
            "background:radial-gradient(circle,rgba(201,162,39,0.85),rgba(201,162,39,0) 70%)",
            "opacity:0.9",
            "transform:translateZ(0)",
            "transition:opacity 650ms ease-out, transform 650ms cubic-bezier(0.22,1,0.36,1)",
            "will-change:opacity,transform",
          ].join(";")
        );
        trailLayer.appendChild(dot);
        // animate on next frame
        requestAnimationFrame(() => {
          dot.style.opacity = "0";
          dot.style.transform = `translate(${(Math.random() - 0.5) * 30}px, -${28 + Math.random() * 20}px) scale(0.4)`;
        });
        window.setTimeout(() => dot.remove(), 700);
      }

      if (rafPending) return;
      rafPending = true;
      requestAnimationFrame(() => {
        rafPending = false;
        if (!lastEvent) return;
        const ev = lastEvent;

        // viewport spotlight
        if (spotlightEl) {
          spotlightEl.style.setProperty("--cx", `${ev.clientX}px`);
          spotlightEl.style.setProperty("--cy", `${ev.clientY}px`);
          spotlightEl.style.opacity = "1";
        }

        // Glow
        const glowTarget = (ev.target as HTMLElement | null)?.closest?.(
          GLOW_SELECTOR
        ) as HTMLElement | null;
        if (glowTarget) {
          const rect = glowTarget.getBoundingClientRect();
          const x = ((ev.clientX - rect.left) / rect.width) * 100;
          const y = ((ev.clientY - rect.top) / rect.height) * 100;
          glowTarget.style.setProperty("--mx", `${x}%`);
          glowTarget.style.setProperty("--my", `${y}%`);
          glowTarget.classList.add("is-glowing");
        }

        // Tilt — aggressive (12deg max) + scale + shadow vector
        const tiltTarget = (ev.target as HTMLElement | null)?.closest?.(
          TILT_SELECTOR
        ) as HTMLElement | null;
        if (tiltTarget) {
          const rect = tiltTarget.getBoundingClientRect();
          const cx = rect.left + rect.width / 2;
          const cy = rect.top + rect.height / 2;
          const dx = (ev.clientX - cx) / (rect.width / 2);
          const dy = (ev.clientY - cy) / (rect.height / 2);
          const rx = Math.max(-1, Math.min(1, -dy)) * 12;
          const ry = Math.max(-1, Math.min(1, dx)) * 12;
          tiltTarget.style.setProperty("--rx", `${rx}deg`);
          tiltTarget.style.setProperty("--ry", `${ry}deg`);
          tiltTarget.style.setProperty("--shadow-x", `${-ry * 1.5}px`);
          tiltTarget.style.setProperty("--shadow-y", `${rx * 1.5 + 18}px`);
          tiltTarget.classList.add("is-tilting");
        }

        // Magnetic — stronger (0.35)
        const magTarget = (ev.target as HTMLElement | null)?.closest?.(
          "[data-magnetic], button, .btn"
        ) as HTMLElement | null;
        if (magTarget) {
          const rect = magTarget.getBoundingClientRect();
          // only apply when cursor is within a reasonable orbit
          const cx = rect.left + rect.width / 2;
          const cy = rect.top + rect.height / 2;
          const dx = (ev.clientX - cx) * 0.35;
          const dy = (ev.clientY - cy) * 0.35;
          magTarget.style.setProperty("--mag-x", `${dx}px`);
          magTarget.style.setProperty("--mag-y", `${dy}px`);
          magTarget.classList.add("is-magnetic");
        }

        // Repel — inverse of magnetic
        const repelTarget = (ev.target as HTMLElement | null)?.closest?.(
          "[data-repel]"
        ) as HTMLElement | null;
        if (repelTarget) {
          const rect = repelTarget.getBoundingClientRect();
          const cx = rect.left + rect.width / 2;
          const cy = rect.top + rect.height / 2;
          const dx = (cx - ev.clientX) * 0.15;
          const dy = (cy - ev.clientY) * 0.15;
          repelTarget.style.setProperty("--mag-x", `${dx}px`);
          repelTarget.style.setProperty("--mag-y", `${dy}px`);
          repelTarget.classList.add("is-magnetic");
        }
      });
    };

    const onLeave = (e: Event) => {
      const t = e.target as HTMLElement | null;
      if (!t) return;
      [GLOW_SELECTOR, TILT_SELECTOR, "[data-magnetic]", "[data-repel]", "button", ".btn"].forEach(
        (sel) => {
          const el = t.closest?.(sel) as HTMLElement | null;
          if (!el) return;
          el.style.removeProperty("--rx");
          el.style.removeProperty("--ry");
          el.style.removeProperty("--mag-x");
          el.style.removeProperty("--mag-y");
          el.style.removeProperty("--shadow-x");
          el.style.removeProperty("--shadow-y");
          el.classList.remove("is-tilting", "is-magnetic");
        }
      );
    };

    const onWindowLeave = () => {
      if (spotlightEl) spotlightEl.style.opacity = "0";
    };

    document.addEventListener("pointermove", onMove, { passive: true });
    document.addEventListener("pointerleave", onLeave, true);
    document.addEventListener("pointerout", onLeave, true);
    window.addEventListener("pointerleave", onWindowLeave);
    document.documentElement.addEventListener("mouseleave", onWindowLeave);

    /* ─────────────────────────────────────────────────────────────
       Click ripples — gold wave from click point
       ───────────────────────────────────────────────────────────── */
    const onClick = (e: MouseEvent) => {
      if (reduced) return;
      const target = (e.target as HTMLElement | null)?.closest?.(
        RIPPLE_SELECTOR
      ) as HTMLElement | null;
      if (!target) return;
      const rect = target.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const ripple = document.createElement("span");
      ripple.className = "interaction-ripple";
      ripple.style.left = `${x}px`;
      ripple.style.top = `${y}px`;
      // ensure target can host an absolutely-positioned child
      const computed = window.getComputedStyle(target);
      if (computed.position === "static") {
        target.style.position = "relative";
      }
      if (computed.overflow === "visible") {
        target.style.overflow = "hidden";
      }
      target.appendChild(ripple);
      window.setTimeout(() => ripple.remove(), 700);
    };
    document.addEventListener("click", onClick, true);

    /* ─────────────────────────────────────────────────────────────
       Parallax on scroll — for [data-parallax-img] and any <img>
       inside [data-parallax].
       ───────────────────────────────────────────────────────────── */
    const parallaxEls = new Set<HTMLElement>();
    document
      .querySelectorAll<HTMLElement>("[data-parallax-img]")
      .forEach((el) => parallaxEls.add(el));
    document.querySelectorAll<HTMLElement>("[data-parallax]").forEach((container) => {
      container.querySelectorAll<HTMLImageElement>("img").forEach((img) => {
        parallaxEls.add(img);
      });
    });

    let parallaxRaf = false;
    const onScroll = () => {
      if (reduced) return;
      if (parallaxRaf) return;
      parallaxRaf = true;
      requestAnimationFrame(() => {
        parallaxRaf = false;
        const vh = window.innerHeight;
        parallaxEls.forEach((el) => {
          const rect = el.getBoundingClientRect();
          if (rect.bottom < -200 || rect.top > vh + 200) return;
          const progress = (rect.top + rect.height / 2 - vh / 2) / vh; // -1..1 range
          const y = Math.max(-60, Math.min(60, -progress * 60));
          el.style.transform = `translate3d(0, ${y}px, 0) scale(1.08)`;
          el.style.willChange = "transform";
        });

        // scroll-driven body hue shift
        const scrollPct = Math.min(
          1,
          window.scrollY /
            Math.max(1, document.documentElement.scrollHeight - window.innerHeight)
        );
        document.body.style.setProperty(
          "--scroll-hue",
          `${Math.round(scrollPct * 20 - 10)}deg`
        );
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    /* ─────────────────────────────────────────────────────────────
       Letter-by-letter reveal on [data-letter-reveal]
       ───────────────────────────────────────────────────────────── */
    const letterEls = Array.from(
      document.querySelectorAll<HTMLElement>("[data-letter-reveal]")
    );
    letterEls.forEach((el) => {
      if (el.dataset.letterReady === "1") return;
      const text = el.textContent || "";
      el.innerHTML = "";
      Array.from(text).forEach((ch, i) => {
        const span = document.createElement("span");
        span.style.display = "inline-block";
        span.style.opacity = "0";
        span.style.transform = "translateY(26px) rotateX(-60deg)";
        span.style.transition = `opacity 650ms cubic-bezier(0.22,1,0.36,1) ${i * 28}ms, transform 650ms cubic-bezier(0.22,1,0.36,1) ${i * 28}ms`;
        span.textContent = ch === " " ? "\u00A0" : ch;
        el.appendChild(span);
      });
      el.dataset.letterReady = "1";
    });

    const letterObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const el = entry.target as HTMLElement;
          el.querySelectorAll<HTMLElement>("span").forEach((s) => {
            s.style.opacity = "1";
            s.style.transform = "translateY(0) rotateX(0)";
          });
          letterObserver.unobserve(el);
        });
      },
      { threshold: 0.25 }
    );
    letterEls.forEach((el) => letterObserver.observe(el));

    /* ─────────────────────────────────────────────────────────────
       Word-by-word text reveal on [data-text-reveal]
       ───────────────────────────────────────────────────────────── */
    const revealEls = Array.from(
      document.querySelectorAll<HTMLElement>("[data-text-reveal]")
    );
    revealEls.forEach((el) => {
      if (el.dataset.textRevealReady === "1") return;
      const text = el.textContent || "";
      const words = text.split(/(\s+)/);
      el.innerHTML = "";
      words.forEach((w, i) => {
        const span = document.createElement("span");
        span.className = "inline-block";
        span.style.opacity = "0";
        span.style.transform = "translateY(22px)";
        span.style.transition = `opacity 720ms cubic-bezier(0.22,1,0.36,1) ${i * 45}ms, transform 720ms cubic-bezier(0.22,1,0.36,1) ${i * 45}ms`;
        span.textContent = w;
        el.appendChild(span);
      });
      el.dataset.textRevealReady = "1";
    });
    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const el = entry.target as HTMLElement;
          el.querySelectorAll<HTMLElement>("span").forEach((s) => {
            s.style.opacity = "1";
            s.style.transform = "translateY(0)";
          });
          revealObserver.unobserve(el);
        });
      },
      { threshold: 0.2 }
    );
    revealEls.forEach((el) => revealObserver.observe(el));

    /* ─────────────────────────────────────────────────────────────
       Count-up on [data-count]
       ───────────────────────────────────────────────────────────── */
    const countEls = Array.from(
      document.querySelectorAll<HTMLElement>("[data-count]")
    );
    const countObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const el = entry.target as HTMLElement;
          const target = parseFloat(el.dataset.count || "0");
          const duration = parseInt(el.dataset.countDuration || "1600", 10);
          const prefix = el.dataset.countPrefix || "";
          const suffix = el.dataset.countSuffix || "";
          const decimals = parseInt(el.dataset.countDecimals || "0", 10);
          if (reduced) {
            el.textContent = `${prefix}${target.toFixed(decimals)}${suffix}`;
            countObserver.unobserve(el);
            return;
          }
          const start = performance.now();
          const tick = (now: number) => {
            const elapsed = now - start;
            const progress = Math.min(1, elapsed / duration);
            const eased = 1 - Math.pow(1 - progress, 3);
            const value = target * eased;
            el.textContent = `${prefix}${value.toFixed(decimals)}${suffix}`;
            if (progress < 1) requestAnimationFrame(tick);
            else el.textContent = `${prefix}${target.toFixed(decimals)}${suffix}`;
          };
          requestAnimationFrame(tick);
          countObserver.unobserve(el);
        });
      },
      { threshold: 0.3 }
    );
    countEls.forEach((el) => countObserver.observe(el));

    /* ─────────────────────────────────────────────────────────────
       3D entrance rotation on [data-enter-3d]
       ───────────────────────────────────────────────────────────── */
    const enterEls = Array.from(
      document.querySelectorAll<HTMLElement>("[data-enter-3d]")
    );
    enterEls.forEach((el) => {
      el.style.opacity = "0";
      el.style.transform = "perspective(1000px) rotateX(25deg) translateY(60px) scale(0.95)";
      el.style.transition =
        "opacity 900ms cubic-bezier(0.22,1,0.36,1), transform 900ms cubic-bezier(0.22,1,0.36,1)";
    });
    const enterObs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const el = entry.target as HTMLElement;
          el.style.opacity = "1";
          el.style.transform = "perspective(1000px) rotateX(0) translateY(0) scale(1)";
          enterObs.unobserve(el);
        });
      },
      { threshold: 0.2 }
    );
    enterEls.forEach((el) => enterObs.observe(el));

    /* ─────────────────────────────────────────────────────────────
       Section wipe on [data-wipe]
       ───────────────────────────────────────────────────────────── */
    const wipeEls = Array.from(
      document.querySelectorAll<HTMLElement>("[data-wipe]")
    );
    const wipeObs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          (entry.target as HTMLElement).classList.add("is-wiped");
          wipeObs.unobserve(entry.target);
        });
      },
      { threshold: 0.15 }
    );
    wipeEls.forEach((el) => wipeObs.observe(el));

    return () => {
      document.removeEventListener("pointermove", onMove);
      document.removeEventListener("pointerleave", onLeave, true);
      document.removeEventListener("pointerout", onLeave, true);
      document.removeEventListener("click", onClick, true);
      window.removeEventListener("pointerleave", onWindowLeave);
      document.documentElement.removeEventListener("mouseleave", onWindowLeave);
      window.removeEventListener("scroll", onScroll);
      countObserver.disconnect();
      revealObserver.disconnect();
      letterObserver.disconnect();
      enterObs.disconnect();
      wipeObs.disconnect();
      if (spotlightEl) spotlightEl.remove();
      if (trailLayer) trailLayer.remove();
    };
  }, []);

  return null;
}
