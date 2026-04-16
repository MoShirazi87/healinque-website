"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";

/**
 * ConcernCards V2 — "What Brings You In?" Section
 *
 * Entry point for patients who don't know treatment names.
 * Sits on DARK background in homepage rhythm.
 * 8 concern cards in a 2x4 or 4x2 grid with editorial hover effects.
 */

const concerns = [
  {
    title: "Fine Lines & Wrinkles",
    description: "If you've noticed dynamic wrinkles, here's what I typically recommend.",
    href: "/concerns/fine-lines-wrinkles",
    treatments: ["Botox", "Dysport", "Morpheus8"],
    icon: "✦",
  },
  {
    title: "Volume Loss & Sagging",
    description: "If your cheeks, temples, or jawline feel deflated, we can talk about volume restoration.",
    href: "/concerns/volume-loss-sagging",
    treatments: ["Dermal Fillers", "PDO Threads", "PRF"],
    icon: "✦",
  },
  {
    title: "Dark Circles & Under-Eye",
    description: "If the under-eye area looks hollow or tired, there are several options I like.",
    href: "/concerns/dark-circles-under-eye",
    treatments: ["Fillers", "PRF", "Laser"],
    icon: "✦",
  },
  {
    title: "Skin Texture & Tone",
    description: "If your skin feels rough or looks uneven, resurfacing and renewal treatments may help.",
    href: "/concerns/skin-texture-tone",
    treatments: ["Chemical Peels", "Microneedling", "Laser"],
    icon: "✦",
  },
  {
    title: "Acne Scarring",
    description: "If acne left its mark, layered treatments can typically improve the appearance.",
    href: "/concerns/acne-scarring",
    treatments: ["Morpheus8", "Microneedling", "Laser"],
    icon: "✦",
  },
  {
    title: "Hyperpigmentation & Melasma",
    description: "If you have dark spots or melasma, we have tools to address uneven tone.",
    href: "/concerns/hyperpigmentation-melasma",
    treatments: ["IPL", "Chemical Peels", "Skincare"],
    icon: "✦",
  },
  {
    title: "Hair Thinning",
    description: "If hair density concerns you, regenerative therapies may support growth.",
    href: "/concerns/hair-thinning",
    treatments: ["PRP", "PRF", "Peptide Therapy"],
    icon: "✦",
  },
  {
    title: "Weight Management",
    description: "If you're seeking medically supervised support for weight goals, I offer personalized programs.",
    href: "/concerns/weight-management",
    treatments: ["Semaglutide", "Tirzepatide"],
    icon: "✦",
  },
];

interface ConcernCardsProps {
  title?: string;
  subtitle?: string;
}

export function ConcernCards({ title, subtitle }: ConcernCardsProps) {
  return (
    <section className="relative py-20 md:py-32 bg-navy-deep overflow-hidden orb-bg has-particles" data-wipe>
      <div className="container-healinque relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <p className="text-xs font-sans uppercase tracking-[0.25em] text-gold/80 mb-3">
            {subtitle || "Common Concerns"}
          </p>
          <h2
            className="font-serif font-bold text-white leading-tight mb-4"
            style={{ fontSize: "clamp(1.75rem, 3.5vw, 3rem)" }}
          >
            {title || (
              <>
                What Brings You{" "}
                <span className="text-gold italic heading-shimmer">In?</span>
              </>
            )}
          </h2>
          <p className="text-white/50 max-w-xl mx-auto">
            Select a concern to explore treatment options.
          </p>
        </motion.div>

        {/* Concern Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {concerns.map((concern, index) => (
            <motion.div
              key={concern.title}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05, duration: 0.4 }}
            >
              <Link
                href={concern.href}
                data-interactive=""
                data-tilt=""
                data-ripple=""
                className="group block p-5 rounded-xl bg-white/[0.03] border border-white/5 hover:border-gold/25 hover:bg-white/[0.06] transition-all duration-300 h-full card-interactive"
              >
                <div className="flex items-start justify-between mb-3">
                  <h3 className="font-serif text-lg font-semibold text-white group-hover:text-gold transition-colors leading-snug">
                    {concern.title}
                  </h3>
                  <ChevronRight className="h-4 w-4 text-white/20 group-hover:text-gold group-hover:translate-x-0.5 transition-all flex-shrink-0 mt-1" />
                </div>

                <p className="text-sm text-white/50 mb-4 leading-relaxed">
                  {concern.description}
                </p>

                <div className="flex flex-wrap gap-1.5">
                  {concern.treatments.map((t) => (
                    <span
                      key={t}
                      className="text-[10px] px-2 py-1 rounded-full bg-gold/5 text-gold/60 border border-gold/10"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* View All */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="text-center mt-8"
        >
          <Link
            href="/concerns"
            className="text-sm text-white/40 hover:text-gold transition-colors underline underline-offset-4 decoration-white/15"
          >
            View All Concerns →
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
