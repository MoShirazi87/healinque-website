"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight, MapPin, Star, ArrowDown } from "lucide-react";
import { useState, useEffect, useCallback, useRef } from "react";
import { useMediaQuery } from "@/hooks/use-media-query";
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
  cta1: { label: string; href: string };
  cta2: { label: string; href: string };
}

const SLIDES: CarouselSlide[] = [
  {
    title: "Natural results,",
    titleHighlight: "medically delivered.",
    subtitle: "Physician-Led Aesthetic Medicine",
    description:
      "Healinque is a physician-led aesthetic and longevity practice in Poway, founded by Dr. Azi Shirazi, MD. Internal medicine background, 10+ years of aesthetic medicine — and I personally perform every treatment.",
    imageId: pageImages.heroSlide1.primary,
    imageAlts: pageImages.heroSlide1.alts,
    cta1: { label: "Book a Consultation", href: "/book" },
    cta2: { label: "Meet Dr. Shirazi", href: "/about/dr-azi-shirazi" },
  },
  {
    title: "I don't overfill. I don't chase",
    titleHighlight: "trends.",
    subtitle: "How I Practice",
    description:
      "I treat the face medically — conservative, layered plans that age with you. Most of my patients choose me because they want to look like themselves, only refreshed.",
    imageId: pageImages.heroSlide2.primary,
    imageAlts: pageImages.heroSlide2.alts,
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
    cta1: { label: "Men's Clinic", href: "/mens-clinic" },
    cta2: { label: "Schedule Friday", href: "/book" },
  },
];

const AUTOPLAY_INTERVAL = 7000;
const TRANSITION_DURATION = 1.0;

/* ═══════════════════════════════════════════════════
   HOME HERO V2 — Full-bleed slides with video accent
   ═══════════════════════════════════════════════════ */
export function HomeHero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isHovering, setIsHovering] = useState(false);
  const [autoplayEnabled] = useState(true);
  const [slideImages, setSlideImages] = useState<string[]>([]);
  const isDesktop = useMediaQuery("(min-width: 1024px)");
  const prefersReducedMotion = useReducedMotion();

  // Pick random images on mount (client-side only)
  useEffect(() => {
    const picked = SLIDES.map((s) =>
      pexelsUrl(pickImage(s.imageId, s.imageAlts), 1920)
    );
    setSlideImages(picked);
  }, []);

  // Autoplay
  useEffect(() => {
    if (!autoplayEnabled || isHovering) return;
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % SLIDES.length);
    }, AUTOPLAY_INTERVAL);
    return () => clearInterval(interval);
  }, [autoplayEnabled, isHovering]);

  const goToSlide = useCallback((index: number) => {
    setCurrentSlide(index % SLIDES.length);
  }, []);

  // Fallback until client-side images are picked
  const currentImage =
    slideImages[currentSlide] || pexelsUrl(SLIDES[currentSlide].imageId, 1920);

  return (
    <section
      className="relative w-full h-screen max-h-[900px] lg:max-h-[1000px] flex items-center overflow-hidden bg-navy-deep"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      {/* ── Video Layer (Desktop, subtle ambient) ── */}
      {isDesktop && !prefersReducedMotion && (
        <div className="absolute inset-0 z-0 opacity-30">
          <video
            autoPlay
            muted
            loop
            playsInline
            preload="none"
            className="absolute inset-0 w-full h-full object-cover"
            poster={pexelsUrl(SLIDES[0].imageId, 1920)}
          >
            <source src={videos.heroHome} type="video/mp4" />
          </video>
        </div>
      )}

      {/* ── Image Slides — These are the PRIMARY visual ── */}
      <AnimatePresence mode="sync">
        <motion.div
          key={`img-${currentSlide}`}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{
            duration: TRANSITION_DURATION,
            ease: [0.25, 0.1, 0.25, 1],
          }}
          className="absolute inset-0 z-[1]"
        >
          <Image
            src={currentImage}
            alt={`${SLIDES[currentSlide].title} ${SLIDES[currentSlide].titleHighlight}`}
            fill
            className="object-cover"
            priority={currentSlide === 0}
            sizes="100vw"
            quality={85}
          />
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
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.6 }}
            >
              {/* Location Pill */}
              <motion.div
                initial={{ opacity: 0, y: -10 }}
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
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15, duration: 0.5 }}
                className="text-xs sm:text-sm font-sans uppercase tracking-[0.25em] text-gold/80 mb-3 lg:mb-4"
              >
                {SLIDES[currentSlide].subtitle}
              </motion.p>

              {/* Headline */}
              <motion.h1
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="font-serif font-bold text-white leading-[1.05] mb-5 lg:mb-6"
                style={{
                  fontSize: "clamp(2.5rem, 6vw, 5.5rem)",
                }}
              >
                {SLIDES[currentSlide].title}{" "}
                <span className="text-gold italic font-medium" data-letter-reveal key={`hl-${currentSlide}`}>
                  {SLIDES[currentSlide].titleHighlight}
                </span>
              </motion.h1>

              {/* Description */}
              <motion.p
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="text-base sm:text-lg lg:text-xl text-white/70 leading-relaxed max-w-2xl mb-8 lg:mb-10"
              >
                {SLIDES[currentSlide].description}
              </motion.p>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.5 }}
                className="flex flex-col sm:flex-row gap-3 sm:gap-4"
              >
                <Link href={SLIDES[currentSlide].cta1.href}>
                  <button className="group inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-lg font-medium text-navy-deep bg-gradient-to-r from-gold to-[#DEB84A] hover:shadow-lg hover:shadow-gold/25 transition-all duration-300">
                    {SLIDES[currentSlide].cta1.label}
                    <ChevronRight className="h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
                  </button>
                </Link>
                <Link href={SLIDES[currentSlide].cta2.href}>
                  <button className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-lg font-medium text-white border border-white/20 hover:border-white/40 hover:bg-white/5 backdrop-blur-sm transition-all duration-300">
                    {SLIDES[currentSlide].cta2.label}
                  </button>
                </Link>
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* ── Slide Indicators (bottom-left, editorial style) ── */}
      <div className="absolute bottom-8 left-6 md:left-12 lg:left-20 z-20 flex items-center gap-4">
        {SLIDES.map((_, idx) => (
          <button
            key={idx}
            onClick={() => goToSlide(idx)}
            className={`relative h-0.5 rounded-full transition-all duration-700 ${
              idx === currentSlide
                ? "bg-gold w-16"
                : "bg-white/20 w-8 hover:bg-white/40"
            }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
        <span className="text-xs text-white/40 ml-2 font-mono">
          {String(currentSlide + 1).padStart(2, "0")} / {String(SLIDES.length).padStart(2, "0")}
        </span>
      </div>

      {/* ── Trust Bar (bottom-right, minimal) ── */}
      <div className="absolute bottom-8 right-6 md:right-12 lg:right-20 z-20 hidden lg:flex items-center gap-6 text-sm">
        <span className="text-white/50">MD, Internal Medicine</span>
        <div className="w-px h-4 bg-white/15" />
        <span className="text-white/50">20+ Years Clinical</span>
        <div className="w-px h-4 bg-white/15" />
        <span className="text-white/50">10+ Years Aesthetic</span>
      </div>

      {/* ── Scroll Indicator ── */}
      <motion.div
        initial={{ opacity: 0 }}
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
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
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

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className={`font-serif font-bold text-white leading-[1.05] mb-6 ${
            isCentered ? "mx-auto" : ""
          }`}
          style={{
            fontSize: "clamp(2.5rem, 6vw, 5rem)",
            maxWidth: isCentered ? "56rem" : undefined,
          }}
        >
          <span data-letter-reveal>{title}</span>
        </motion.h1>

        {description && (
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className={`text-lg lg:text-xl text-white/75 leading-relaxed ${
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
