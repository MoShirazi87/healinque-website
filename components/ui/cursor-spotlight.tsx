import { ReactNode } from "react";

interface CursorSpotlightProps {
  children: ReactNode;
  className?: string;
  color?: string;
  size?: number;
}

/**
 * Deprecated (Session 23): the cursor-following radial glow was part of the
 * Level-20 interaction layer that the luxury direction pulled back from.
 * This is now a transparent pass-through wrapper so any lingering call-sites
 * keep compiling while we finish removing imports. No runtime effect.
 */
export function CursorSpotlight({ children, className = "" }: CursorSpotlightProps) {
  return <div className={`relative ${className}`}>{children}</div>;
}
