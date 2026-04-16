"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

interface ImageSlideshowProps {
  /**
   * Array of image IDs to cycle through
   * Can pass directly from pageImages entries: [primary, ...alts]
   */
  images: string[];

  /**
   * Alt text for accessibility
   */
  altText?: string;

  /**
   * Time between slides in milliseconds (default: 5000)
   */
  interval?: number;

  /**
   * Optional CSS class name for styling
   */
  className?: string;

  /**
   * Responsive image sizes for Next.js Image optimization
   * @default "100vw"
   */
  sizes?: string;

  /**
   * Image fill object-fit (default: "cover")
   */
  objectFit?: "cover" | "contain" | "fill" | "scale-down";

  /**
   * Image fill object-position (default: "center")
   */
  objectPosition?: string;

  /**
   * Show slide indicators (default: true)
   */
  showIndicators?: boolean;

  /**
   * Image quality 1-100 (default: 75)
   */
  quality?: number;

  /**
   * Priority loading for LCP optimization
   */
  priority?: boolean;

  /**
   * Image width for Pexels URL (default: 1200)
   */
  width?: number;
}

/**
 * ImageSlideshow Component
 *
 * Automatically cycles through an array of image IDs
 * with smooth fade transitions. Perfect for hero sections or featured image areas.
 *
 * @example
 * ```tsx
 * <ImageSlideshow
 *   images={["5407206", "8413204", "31768384"]}
 *   altText="Hero slideshow"
 *   interval={6000}
 *   sizes="100vw"
 *   showIndicators={true}
 * />
 * ```
 */
export function ImageSlideshow({
  images,
  altText = "Slideshow image",
  interval = 5000,
  className,
  sizes = "100vw",
  objectFit = "cover",
  objectPosition = "center",
  showIndicators = true,
  quality = 75,
  priority = false,
  width = 1200,
}: ImageSlideshowProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [mounted, setMounted] = useState(false);
  const [isHovering, setIsHovering] = useState(false);

  const validImages = images.filter(Boolean);
  const totalImages = validImages.length;

  // Prevent hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  // Slideshow logic
  useEffect(() => {
    if (!mounted || totalImages <= 1 || isHovering) return;

    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % totalImages);
    }, interval);

    return () => clearInterval(timer);
  }, [mounted, interval, totalImages, isHovering]);

  // Manual slide navigation
  const goToSlide = (index: number) => {
    setCurrentIndex(index % totalImages);
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % totalImages);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + totalImages) % totalImages);
  };

  // Build Pexels URL from ID
  const getImageUrl = (id: string) => {
    return `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=${width}`;
  };

  if (!mounted || totalImages === 0) {
    // Render first image during SSR
    const firstUrl = validImages[0] ? getImageUrl(validImages[0]) : "";
    return (
      <div
        className={cn("relative w-full h-full", className)}
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
        {firstUrl && (
          <Image
            src={firstUrl}
            alt={altText}
            fill
            className={`object-${objectFit}`}
            style={{ objectPosition }}
            sizes={sizes}
            quality={quality}
            priority={priority}
          />
        )}
      </div>
    );
  }

  // Single image - no slideshow
  if (totalImages <= 1) {
    const imageUrl = getImageUrl(validImages[0]);
    return (
      <div className={cn("relative w-full h-full", className)}>
        <Image
          src={imageUrl}
          alt={altText}
          fill
          className={`object-${objectFit}`}
          style={{ objectPosition }}
          sizes={sizes}
          quality={quality}
          priority={priority}
        />
      </div>
    );
  }

  // Multiple images - slideshow
  const currentImageUrl = getImageUrl(validImages[currentIndex]);

  return (
    <div
      className={cn("relative w-full h-full overflow-hidden group", className)}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      {/* Image Container with Fade Transition */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="absolute inset-0 w-full h-full"
        >
          <Image
            src={currentImageUrl}
            alt={`${altText} - Slide ${currentIndex + 1}`}
            fill
            className={`object-${objectFit}`}
            style={{ objectPosition }}
            sizes={sizes}
            quality={quality}
            priority={currentIndex === 0 && priority}
          />
        </motion.div>
      </AnimatePresence>

      {/* Navigation Arrows (show on hover) */}
      {totalImages > 1 && (
        <>
          {/* Previous Button */}
          <motion.button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all opacity-0 group-hover:opacity-100"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Previous slide"
          >
            <svg
              className="w-6 h-6 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </motion.button>

          {/* Next Button */}
          <motion.button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all opacity-0 group-hover:opacity-100"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Next slide"
          >
            <svg
              className="w-6 h-6 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </motion.button>

          {/* Slide Indicators */}
          {showIndicators && (
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2">
              {validImages.map((_, idx) => (
                <motion.button
                  key={idx}
                  onClick={() => goToSlide(idx)}
                  className={cn(
                    "h-2 rounded-full transition-all duration-300",
                    idx === currentIndex
                      ? "bg-white w-8"
                      : "bg-white/40 w-2 hover:bg-white/60"
                  )}
                  aria-label={`Go to slide ${idx + 1}`}
                  whileHover={{ scale: 1.2 }}
                />
              ))}
            </div>
          )}
        </>
      )}
    </div>
  );
}
