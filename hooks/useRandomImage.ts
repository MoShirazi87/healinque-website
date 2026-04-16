"use client";

import { useState, useEffect } from "react";
import { pickImage } from "@/lib/data/images";

/**
 * Hook to get a random image from a primary + alts array
 * Rotates between variants on page reload
 *
 * @param primary - The primary image ID
 * @param alts - Optional array of alternate image IDs
 * @returns The URL of a randomly selected image from the set
 *
 * @example
 * ```tsx
 * const imageUrl = useRandomImage("5407206", ["8413204", "31768384"]);
 * ```
 */
export function useRandomImage(primary: string, alts?: string[]): string {
  const [src, setSrc] = useState(primary);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Only select random image on client to avoid hydration mismatch
    setSrc(pickImage(primary, alts));
  }, [primary, alts]);

  // Return primary on server, random on client
  return mounted ? src : primary;
}
