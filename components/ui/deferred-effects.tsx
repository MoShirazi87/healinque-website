"use client";

import dynamic from "next/dynamic";

/**
 * DEFERRED EFFECTS
 *
 * Originally scaffolded in Session 19 (Track D) to code-split heavy client-only
 * flourish components and keep them off the initial hydration path.
 *
 * Session 23 overhaul: the Level-20 InteractionEngine + all of its cascading
 * decorations (cursor-spotlight, flip-on-tap, magnetic buttons, scroll hue,
 * letter-reveals, ripple effects, etc.) were removed. What remains here is
 * only AutoReveal, which quietly tags sections with `data-revealed="true"`
 * as they enter the viewport. FlipOnTap is intentionally a no-op now — the
 * import is kept only to avoid churn with old layouts that still include it.
 *
 * If you find yourself adding more effects to this file, stop and reconsider:
 * the luxury direction deliberately avoids ambient motion decoration.
 */

const AutoReveal = dynamic(
  () => import("./auto-reveal").then((m) => ({ default: m.AutoReveal })),
  { ssr: false, loading: () => null }
);

export function DeferredEffects() {
  return (
    <>
      <AutoReveal />
    </>
  );
}
