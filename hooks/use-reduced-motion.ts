import { useMediaQuery } from './use-media-query';

/**
 * Hook to detect if user prefers reduced motion
 * @returns boolean indicating if prefers-reduced-motion is set
 */
export function useReducedMotion(): boolean {
  return useMediaQuery('(prefers-reduced-motion: reduce)');
}
