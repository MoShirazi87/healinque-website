"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useMediaQuery } from "@/hooks/use-media-query";
import { Button } from "@/components/ui/button";
import { pexelsUrl, pageImages } from "@/lib/data/images";

export function CTABanner() {
  const isDesktop = useMediaQuery("(min-width: 1024px)");

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  };

  return (
    <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
      {/* Full-bleed background image - parallax only on desktop */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url('${pexelsUrl(pageImages.ctaBanner.primary, 2000)}')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: isDesktop ? "fixed" : "scroll",
        }}
      />

      {/* Overlay Layer 1: Angled gradient overlay */}
      <div
        className="absolute inset-0 z-10"
        style={{
          background: `linear-gradient(71deg, rgba(10,22,40,0.85) 8%, rgba(10,22,40,0.4) 88%)`,
        }}
      />

      {/* Overlay Layer 2: Vertical gradient for depth */}
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-transparent via-[#0a1628]/10 to-[#0a1628]/30" />

      {/* Content */}
      <div className="container-healinque relative z-20 py-24 md:py-32 lg:py-40">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="w-full max-w-4xl mx-auto text-center"
        >
          {/* Decorative top separator */}
          <motion.div
            variants={itemVariants}
            className="flex items-center justify-center gap-4 mb-8"
          >
            <div className="w-12 h-px bg-gradient-to-r from-transparent to-[#C9A227]" />
            <p className="text-[#C9A227] font-medium tracking-[0.2em] uppercase text-xs whitespace-nowrap">
              YOUR TRANSFORMATION AWAITS
            </p>
            <div className="w-12 h-px bg-gradient-to-l from-transparent to-[#C9A227]" />
          </motion.div>

          {/* Main Heading - Split with gold italic */}
          <div className="mb-8 md:mb-12">
            <motion.h2
              variants={itemVariants}
              className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-white mb-3 leading-tight"
            >
              Redefine Your Glow.
            </motion.h2>
            <motion.h2
              variants={itemVariants}
              className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-[#C9A227] italic leading-tight"
            >
              Reimagine Your Life.
            </motion.h2>
          </div>

          {/* Decorative divider */}
          <motion.div
            variants={itemVariants}
            className="w-20 h-1 bg-gradient-to-r from-[#C9A227]/30 via-[#C9A227] to-[#C9A227]/30 mx-auto mb-10"
          />

          {/* Supporting Paragraph */}
          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl text-white/80 mb-10 md:mb-14 leading-relaxed max-w-2xl mx-auto font-light"
          >
            Experience personalized aesthetic and wellness solutions from a physician who combines medical expertise with an artistic vision for your natural beauty.
          </motion.p>

          {/* CTA Button */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link href="/book" className="w-full sm:w-auto">
              <Button
                size="lg"
                className="w-full rounded-xl bg-[#C9A227] text-[#0a1628] hover:bg-[#C9A227]/90 font-semibold h-auto px-12 py-5 text-lg transition-all duration-500 hover:shadow-[0_15px_40px_rgba(201,162,39,0.35)]"
              >
                Reserve Your Consultation
              </Button>
            </Link>
          </motion.div>

          {/* Phone link below button */}
          <motion.div
            variants={itemVariants}
            className="mt-6"
          >
            <a
              href="tel:+18583377999"
              className="text-white/70 hover:text-[#C9A227] transition-colors duration-300 text-sm font-medium tracking-wide"
            >
              Call (858) 337-7999
            </a>
          </motion.div>

          {/* Decorative bottom separator */}
          <motion.div
            variants={itemVariants}
            className="mt-10 md:mt-16 w-20 h-px bg-gradient-to-r from-transparent via-[#C9A227]/50 to-transparent mx-auto"
          />
        </motion.div>
      </div>
    </section>
  );
}
