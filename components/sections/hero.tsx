"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight, MapPin, Star, ArrowDown } from "lucide-react";
import { useState, useEffect, useCallback, useRef } from "react";
import { useReducedMotion } from "@/hooks/use-reduced-motion";
import { pexelsUrl, pageImages, pickImage, videos } from "@/lib/data/images";

/* ─── Carousel Slide Data ─── */
interface CarouselSlide {
  title: string;
  titleHighlight: string;
  subtitle: string;
  description: string;
  imageId: string;
  imageAlts: string[];
  /**
   * Session 20 fix: CSS object-position for the hero Image. Portraits (Session 20
   * approved 66-pool is heavy on chest-up editorial shots) get cropped at the face
   * when using the default `center center`. Default to `"center top"` so faces
   * stay visible; override per-slide if a specific image needs different framing.
   */
  objectPosition?: string;
  /**
   * Session 24: Optional compressed HD video URL (Pexels, ~1280x720). When set,
   * the hero renders this as the PRIMARY visual on desktop (autoplay muted loop)
   * with the still image as poster + mobile/reduced-motion fallback. If omitted,
   * the slide uses the still image as it did pre-Session-24.
   */
  videoSrc?: string;
  cta1: { label: string; href: string };
  cta2: { label: string; href: string };
}

const DEFAULT_HERO_OBJECT_POSITION = "center 25%";

const SLIDES: CarouselSlide[] = [
  {
    title: "Natural results,",
    titleHighlight: "medically delivered.",
    subtitle: "Physician-Led Aesthetic Medicine",
    description:
      "Healinque is a physician-led aesthetic and longevity practice in Poway, founded by Dr. Azi Shirazi, MD. Treatments are performed by Dr. Shirazi or one of her highly trained nurse practitioners or physician assistants.",
    imageId: pageImages.heroSlide1.primary,
    imageAlts: pageImages.heroSlide1.alts,
    objectPosition: "center 20%", // v2 #1 hero bucket — editorial portraits, face in upper third
    videoSrc: videos.heroSlide1, // Session 24: aesthetic/wellness ambient
    cta1: { label: "Book a Consultation", href: "/book" },
    cta2: { label: "Meet Dr. Shirazi", href: "/about/dr-azi-shirazi" },
  },
  {
    // Session 22: First-person voice throughout — Dr. Shirazi speaks directly.
    title: "I don't overfill. I don't chase",
    titleHighlight: "trends.",
    subtitle: "How I Practice",
    description:
      "I treat the face medically — conservative, layered plans that age with you. Most of my patients choose me because they want to look like themselves, only refreshed.",
    imageId: pageImages.heroSlide2.primary,
    imageAlts: pageImages.heroSlide2.alts,
    objectPosition: "center 25%", // Diverse-smiling / women's portraits
    videoSrc: videos.heroSlide2, // Session 24: editorial skincare close-up
    cta1: { label: "The Healinque Method", href: "/about/healinque-method" },
    cta2: { label: "View Treatments", href: "/treatments" },
  },
  {
    title: "Discreet care,",
    titleHighlight: "built for men.",
    subtitle: "Men's Clinic Fridays",
    description:
      "Botox, fillers, hair restoration, and performance-based treatments — delivered in a focused, physician-led environment one day a week.",
    imageId: pageImages.heroSlide3.primary,
    imageAlts: pageImages.heroSlide3.alts,
    objectPosition: "center 20%", // Male editorial — bearded men chest-up
    videoSrc: videos.heroSlide3, // Session 24: men's grooming / clinic b-roll
    cta1: { label: "Men's Clinic", href: "/mens-clinic" },
    cta2: { label: "Schedule Friday", href: "/book" },
  },
];

const AUTOPLAY_INTERVAL = 7000;
const TRANSITION_DURATION = 1.0;

/* ───────────────────────────────────────────────────
   HeroVideo — Session 25 hardened video overlay
   ───────────────────────────────────────────────────
   Mobile-hidden via `hidden lg:block` (display:none below 1024px means most
   browsers skip the video fetch entirely). Explicit .play() on mount defends
   against autoplay policy edge cases where muted autoplay is throttled in
   low-power states or when tab was background-loaded. key prop on the parent
   forces unmount/remount between slides so each video loads fresh.            */
function HeroVideo({
  src,
  poster,
  objectPosition,
}: {
  src: string;
  poster: string;
  objectPosition: string;
}) {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const v = ref.current;
    if (!v) return;
    // Nudge autoplay — muted + playsInline should satisfy every modern browser's
    // autoplay policy, but some browsers still need an explicit .play() call.
    const p = v.play();
    if (p !== undefined) {
      p.catch(() => {
        // Autoplay was blocked; poster stays visible. Silent — nothing user can do.
      });
    }
  }, [src]);

  return (
    <video
      ref={ref}
      autoPlay
      muted
      loop
      playsInline
      preload="metadata"
      poster={poster}
      className="hidden lg:block absolute inset-0 w-full h-full object-cover"
      style={{ objectPosition }}
      aria-hidden="true"
    >
      <source src={src} type="video/mp4" />
    </video>
  );
}

/* ═══════════════════════════════════════════════════
   HOME HERO V2 — Full-bleed slides with video accent
   ═══════════════════════════════════════════════════ */
export function HomeHero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isHovering, setIsHovering] = useState(false);
  const [autoplayEnabled] = useState(true);
  const [slideImages, setSlideImages] = useState<string[]>([]);
  const prefersReducedMotion = useReducedMotion();

  // Pick random images on mount (client-side only)
  useEffect(() => {
    const picked = SLIDES.map((s) =>
      pexelsUrl(pickImage(s.imageId, s.imageAlts), 1920)
    );
    setSlideImages(picked);
  }, []);

  // Autoplay — respects prefers-reduced-motion (Session 19, Track C).
  // Users with vestibular disorders get a static hero; the slide indicator
  // buttons still work as manual controls.
  useEffect(() => {
    if (!autoplayEnabled || isHovering || prefersReducedMotion) return;
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % SLIDES.length);
    }, AUTOPLAY_INTERVAL);
    return () => clearInterval(interval);
  }, [autoplayEnabled, isHovering, prefersReducedMotion]);

  const goToSlide = useCallback((index: number) => {
    setCurrentSlide(((index % SLIDES.length) + SLIDES.length) % SLIDES.length);
  }, []);

  // Keyboard navigation — ArrowLeft / ArrowRight / Home / End (Session 19, Track C).
  // Only fires when the section has focus within, to avoid intercepting
  // arrow keys used by other page widgets.
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target?.closest?.("[data-hero-carousel]")) return;
      if (e.key === "ArrowRight") {
        e.preventDefault();
        setCurrentSlide((prev) => (prev + 1) % SLIDES.length);
      } else if (e.key === "ArrowLeft") {
        e.preventDefault();
        setCurrentSlide((prev) => (prev - 1 + SLIDES.length) % SLIDES.length);
      } else if (e.key === "Home") {
        e.preventDefault();
        setCurrentSlide(0);
      } else if (e.key === "End") {
        e.preventDefault();
        setCurrentSlide(SLIDES.length - 1);
      }
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, []);

  // Fallback until client-side images are picked
  const currentImage =
    slideImages[currentSlide] || pexelsUrl(SLIDES[currentSlide].imageId, 1920);

  return (
    <section
      data-hero-carousel=""
      aria-roledescription="carousel"
      aria-label="Healinque hero slideshow"
      className="relative w-full h-screen max-h-[900px] lg:max-h-[1000px] flex items-center overflow-hidden bg-navy-deep"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      {/* ── Primary Visual Layer (Session 24, hardened Session 25) ─────────
          Architecture: ALWAYS render the Image (SSR-safe, no hydration race).
          Then conditionally mount the <video> as an overlay on top — gated by
          slide having a videoSrc + not reduced-motion. The video is hidden on
          mobile via CSS (`hidden lg:block`) so it never paints below 1024px.

          This bypasses the prior useMediaQuery SSR→client hydration race where
          `isDesktop` started false, rendered Image, and the post-hydration
          re-render to <video> sometimes failed silently (stale dev bundle,
          autoplay policy edge cases, etc).                                   */}
      <AnimatePresence mode="sync">
        <motion.div
          key={`visual-${currentSlide}`}
          initial={{ scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{
            duration: TRANSITION_DURATION,
            ease: [0.25, 0.1, 0.25, 1],
          }}
          className="absolute inset-0 z-[1]"
        >
          {/* Base layer: Image. Always in DOM, serves as mobile-default +
              reduced-motion fallback + poster-visible-while-video-loads. */}
          <Image
            src={currentImage}
            alt={`${SLIDES[currentSlide].title} ${SLIDES[currentSlide].titleHighlight}`}
            fill
            className="object-cover"
            style={{
              objectPosition:
                SLIDES[currentSlide].objectPosition || DEFAULT_HERO_OBJECT_POSITION,
            }}
            priority={currentSlide === 0}
            sizes="100vw"
            quality={85}
          />

          {/* Overlay layer: Video. Desktop-only via CSS; gated on reduced-motion via JS.
              Sits above the Image with same inset-0. Uses later DOM order to win z-stack tie. */}
          {SLIDES[currentSlide].videoSrc && !prefersReducedMotion && (
            <HeroVideo
              key={`video-${currentSlide}`}
              src={SLIDES[currentSlide].videoSrc!}
              poster={currentImage}
              objectPosition={
                SLIDES[currentSlide].objectPosition || DEFAULT_HERO_OBJECT_POSITION
              }
            />
          )}
        </motion.div>
      </AnimatePresence>

      {/* ── Gradient Overlays ── */}
      <div className="absolute inset-0 z-[2] bg-gradient-to-r from-navy-deep/90 via-navy-deep/50 to-navy-deep/20" />
      <div className="absolute inset-0 z-[2] bg-gradient-to-t from-navy-deep/80 via-transparent to-navy-deep/30" />

      {/* ── Content ── */}
      <div className="relative z-10 w-full px-6 md:px-12 lg:px-20">
        <div className="max-w-6xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={`content-${currentSlide}`}
              initial={{}}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.6 }}
            >
              {/* Location Pill */}
              <motion.div
                initial={{ y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1, duration: 0.4 }}
                className="mb-6 lg:mb-8"
              >
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gold/20 bg-gold/5 backdrop-blur-sm">
                  <MapPin className="h-3.5 w-3.5 text-gold" />
                  <span className="text-xs sm:text-sm text-white/80 tracking-wide">
                    San Diego, CA · Accepting New Patients
                  </span>
                </div>
              </motion.div>

              {/* Subtitle */}
              <motion.p
                initial={{ y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15, duration: 0.5 }}
                className="text-xs sm:text-sm font-sans uppercase tracking-[0.25em] text-gold/80 mb-3 lg:mb-4"
              >
                {SLIDES[currentSlide].subtitle}
              </motion.p>

              {/* Headline — Session 23: dialed down to luxury clamp (2.5/5vw/4.25) */}
              <motion.h1
                initial={{ y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="font-serif font-bold text-white leading-[1.05] mb-5 lg:mb-6"
                style={{
                  fontSize: "clamp(2.5rem, 5vw, 4.25rem)",
                }}
              >
                {SLIDES[currentSlide].title}{" "}
                <span className="text-gold italic font-medium" key={`hl-${currentSlide}`}>
                  {SLIDES[currentSlide].titleHighlight}
                </span>
              </motion.h1>

              {/* Description — Session 23: body min 16px, opacity bumped /70 → /80 */}
              <motion.p
                initial={{ y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="text-base sm:text-lg lg:text-xl text-white/80 leading-relaxed max-w-2xl mb-8 lg:mb-10"
              >
                {SLIDES[currentSlide].description}
              </motion.p>

              {/* CTA Buttons */}
              <motion.div
                initial={{ y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.5 }}
                className="flex flex-col sm:flex-row gap-3 sm:gap-4"
              >
                <Link href={SLIDES[currentSlide].cta1.href}>
                  <button className="group inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-lg font-medium text-navy-deep bg-gradient-to-r from-gold to-[#DEB84A] hover:shadow-lg hover:shadow-gold/25 transition-all duration-300 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white">
                    {SLIDES[currentSlide].cta1.label}
                    <ChevronRight className="h-4 w-4 group-hover:translate-x-0.5 transition-transform" aria-hidden="true" />
                  </button>
                </Link>
                <Link href={SLIDES[currentSlide].cta2.href}>
                  <button className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-lg font-medium text-white border border-white/20 hover:border-white/40 hover:bg-white/5 backdrop-blur-sm transition-all duration-300 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold">
                    {SLIDES[currentSlide].cta2.label}
                  </button>
                </Link>
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* ── Slide Indicators (bottom-left, editorial style) ── */}
      <div
        className="absolute bottom-8 left-6 md:left-12 lg:left-20 z-20 flex items-center gap-4"
        role="group"
        aria-label="Slide selection"
      >
        {SLIDES.map((_, idx) => (
          <button
            key={idx}
            onClick={() => goToSlide(idx)}
            className={`relative h-0.5 rounded-full transition-all duration-700 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold ${
              idx === currentSlide
                ? "bg-gold w-16"
                : "bg-white/30 w-8 hover:bg-white/50"
            }`}
            aria-label={`Go to slide ${idx + 1} of ${SLIDES.length}`}
            aria-current={idx === currentSlide ? "true" : undefined}
          />
        ))}
        <span
          className="text-xs text-white/60 ml-2 font-mono"
          aria-live="polite"
          aria-atomic="true"
        >
          <span className="sr-only">Showing slide </span>
          {String(currentSlide + 1).padStart(2, "0")} / {String(SLIDES.length).padStart(2, "0")}
        </span>
      </div>

      {/* ── Trust Bar (bottom-right, minimal) ── */}
      <div className="absolute bottom-8 right-6 md:right-12 lg:right-20 z-20 hidden lg:flex items-center gap-6 text-sm">
        <span className="text-white/65">MD, Internal Medicine</span>
        <div className="w-px h-4 bg-white/15" aria-hidden="true" />
        <span className="text-white/65">20+ Years Clinical</span>
        <div className="w-px h-4 bg-white/15" aria-hidden="true" />
        <span className="text-white/65">10+ Years Aesthetic</span>
      </div>

      {/* ── Scroll Indicator ── */}
      <motion.div
        initial={{}}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 hidden md:flex lg:hidden flex-col items-center"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ArrowDown className="h-4 w-4 text-white/30" />
        </motion.div>
      </motion.div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════
   PAGE HERO — For inner pages (treatments, about, etc.)
   ═══════════════════════════════════════════════════ */
interface PageHeroProps {
  variant?: "default" | "centered" | "split" | "compact" | "page";
  title: string;
  subtitle?: string;
  description?: string;
  image?: string;
  video?: string;
  overlay?: boolean | string;
  sizes?: string;
  /**
   * Session 20 fix: CSS object-position for the hero background image.
   * Defaults to `"center 25%"` so portrait subjects (face in upper third)
   * don't get clipped. Pass a custom value per-page if needed.
   */
  objectPosition?: string;
}

/* Overlay className resolver — supports true/false, or named strings */
function resolveOverlay(overlay: boolean | string | undefined, hasVideo: boolean): string | null {
  if (overlay === false) return null;
  if (typeof overlay === "string") {
    // Named overlay presets
    if (overlay === "dark") {
      return "absolute inset-0 bg-gradient-to-b from-navy-deep/70 via-navy-deep/55 to-navy-deep/80";
    }
    if (overlay === "light") {
      return "absolute inset-0 bg-gradient-to-b from-navy-deep/40 via-navy-deep/30 to-navy-deep/60";
    }
    // Assume caller passed a full className string
    return overlay;
  }
  // overlay === true (default)
  return hasVideo
    ? "absolute inset-0 bg-gradient-to-b from-navy-deep/75 via-navy-deep/55 to-navy-deep/85"
    : "absolute inset-0 bg-gradient-to-b from-navy-deep/70 via-navy-deep/55 to-navy-deep/85";
}

export function PageHero({
  variant = "default",
  title,
  subtitle,
  description,
  image,
  video,
  overlay = true,
  sizes = "100vw",
  objectPosition = "center 25%",
}: PageHeroProps) {
  const isCentered = variant === "centered" || variant === "page";
  const overlayClass = resolveOverlay(overlay, !!video);
  const bgRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const reduced = useReducedMotion();

  // Subtle parallax: translate the background image up to ~60px as the hero scrolls out of view.
  useEffect(() => {
    if (reduced) return;
    if (typeof window === "undefined") return;
    const el = bgRef.current;
    const sec = sectionRef.current;
    if (!el || !sec) return;

    let raf = 0;
    const update = () => {
      const rect = sec.getBoundingClientRect();
      // Only animate while the section is in or near the viewport
      if (rect.bottom < -100 || rect.top > window.innerHeight + 100) {
        raf = 0;
        return;
      }
      // scrolled = how far past the top of the section we've scrolled, clamped
      const scrolled = Math.max(0, -rect.top);
      const translate = Math.min(scrolled * 0.25, 80);
      const scale = 1 + Math.min(scrolled * 0.00035, 0.04);
      el.style.transform = `translate3d(0, ${translate}px, 0) scale(${scale})`;
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
  }, [reduced]);

  // Header clearance: utility bar (~36px) + main nav (~104px) = ~140px
  // Generous hero: 60vh minimum for consistent visual impact across all subpages.
  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-[#0a1628] min-h-[60vh] lg:min-h-[65vh] flex items-end pt-[160px] pb-16 md:pb-20"
    >
      {/* Video Background */}
      {video && (
        <div ref={bgRef} className="absolute inset-0 z-0 will-change-transform">
          <video
            autoPlay
            muted
            loop
            playsInline
            preload="none"
            className="absolute inset-0 w-full h-full object-cover"
            poster={image}
          >
            <source src={video} type="video/mp4" />
          </video>
        </div>
      )}
      {video && overlayClass && <div className={`${overlayClass} z-[1]`} />}

      {/* Background Image */}
      {image && !video && (
        <div ref={bgRef} className="absolute inset-0 z-0 will-change-transform">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover"
            style={{ objectPosition }}
            sizes={sizes}
            quality={80}
            priority
          />
        </div>
      )}
      {image && !video && overlayClass && <div className={`${overlayClass} z-[1]`} />}

      {/* Fallback dark when no image/video */}
      {!image && !video && (
        <div className="absolute inset-0 z-0 bg-gradient-to-br from-[#0a1628] via-[#0a1628] to-[#0f1f3a]" />
      )}

      {/* Content */}
      <div
        className={`relative z-10 container-healinque w-full ${
          isCentered ? "text-center" : ""
        }`}
      >
        {subtitle && (
          <motion.div
            initial={{ y: 8 }}
            whileInView={{ y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className={`flex items-center gap-4 mb-6 ${
              isCentered ? "justify-center" : ""
            }`}
          >
            <div className="h-px w-12 bg-[#C9A227]" />
            <p className="font-sans text-xs uppercase tracking-[0.25em] text-[#C9A227]">
              {subtitle}
            </p>
            {isCentered && <div className="h-px w-12 bg-[#C9A227]" />}
          </motion.div>
        )}

        {/* Headline — Session 23: inner-page hero slightly calmer than HomeHero */}
        <motion.h1
          initial={{ y: 20 }}
          whileInView={{ y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className={`font-serif font-bold text-white leading-[1.05] mb-6 ${
            isCentered ? "mx-auto" : ""
          }`}
          style={{
            fontSize: "clamp(2.25rem, 4.5vw, 3.75rem)",
            maxWidth: isCentered ? "56rem" : undefined,
          }}
        >
          <span>{title}</span>
        </motion.h1>

        {description && (
          <motion.p
            initial={{ y: 12 }}
            whileInView={{ y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className={`text-base md:text-lg lg:text-xl text-white/80 leading-relaxed ${
              isCentered ? "max-w-2xl mx-auto" : "max-w-2xl"
            }`}
          >
            {description}
          </motion.p>
        )}
      </div>
    </section>
  );
}

export default PageHero;
