"use client";

import { useRef, useEffect, useState } from "react";

interface VideoBackgroundProps {
  src: string;
  fallbackImage?: string;
  className?: string;
  overlay?: string;
  priority?: boolean;
}

/**
 * Looping video background component for hero sections.
 * Plays muted, looping video with graceful fallback to a static image.
 * Optimized for performance with lazy loading and IntersectionObserver.
 */
export function VideoBackground({
  src,
  fallbackImage,
  className = "",
  overlay = "bg-gradient-to-b from-black/30 via-black/50 to-black/30",
  priority = false,
}: VideoBackgroundProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Use IntersectionObserver for lazy loading (unless priority)
    if (!priority) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              video.src = src;
              video.load();
              observer.disconnect();
            }
          });
        },
        { rootMargin: "200px" }
      );

      if (containerRef.current) {
        observer.observe(containerRef.current);
      }

      return () => observer.disconnect();
    } else {
      video.src = src;
      video.load();
    }
  }, [src, priority]);

  return (
    <div ref={containerRef} className={`absolute inset-0 overflow-hidden ${className}`}>
      {/* Video Element */}
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        preload={priority ? "auto" : "none"}
        onCanPlayThrough={() => setIsVideoLoaded(true)}
        onError={() => setHasError(true)}
        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
          isVideoLoaded && !hasError ? "opacity-100" : "opacity-0"
        }`}
      />

      {/* Fallback Image (visible until video loads, or on error) */}
      {fallbackImage && (!isVideoLoaded || hasError) && (
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${fallbackImage})` }}
        />
      )}

      {/* Overlay gradient */}
      {overlay && <div className={`absolute inset-0 ${overlay}`} />}
    </div>
  );
}

export default VideoBackground;
