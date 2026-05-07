"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Award, BookOpen, Lightbulb, Clock, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

/**
 * DoctorIntro V2 — Editorial "Meet the Doctor" Section
 *
 * Supports two variants:
 * - "dark" (default): Navy background, white text — matches original
 * - "light": Cream background, navy text — for homepage light/dark rhythm
 *
 * Uses the REAL doctor photo from /public/images/dr-azi-shirazi.jpg
 */

interface DoctorIntroProps {
  variant?: "dark" | "light";
}

const credentials = [
  { icon: Award, text: "Physician, MD — Internal Medicine" },
  { icon: BookOpen, text: "UCSD-Trained" },
  { icon: Lightbulb, text: "Personally Tests Every Treatment" },
  { icon: Clock, text: "20+ Years Clinical Experience" },
];

export function DoctorIntro({ variant = "dark" }: DoctorIntroProps) {
  const isLight = variant === "light";

  return (
    <section
      className={`relative py-20 md:py-32 overflow-hidden ${
        isLight ? "bg-cream" : "bg-navy-deep"
      }`}
    >
      <div className="container-healinque relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Image Column */}
          <motion.div
            initial={{ x: -20 }}
            whileInView={{ x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative order-first"
          >
            <div className="relative rounded-2xl overflow-hidden aspect-[3/4] max-w-md mx-auto lg:max-w-none shadow-[0_20px_60px_-20px_rgba(201,162,39,0.35)] ring-1 ring-gold/20">
              <Image
                src="/images/dr-azi-shirazi.jpg"
                alt="Dr. Azadeh Shirazi, MD — Physician-Led Aesthetic Care"
                fill
                className="object-cover object-top"
                sizes="(max-width: 768px) 90vw, (max-width: 1024px) 50vw, 40vw"
                quality={90}
                // Session 19 (Track D): `priority` removed. This image lives
                // mid-homepage (after hero, social-proof, services-grid) so it's
                // below the fold for nearly all viewports. Letting Next.js lazy-
                // load it reduces LCP competition with the hero image.
                loading="lazy"
              />
              {/* Subtle bottom gradient */}
              <div
                className={`absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t ${
                  isLight
                    ? "from-cream/50 to-transparent"
                    : "from-navy-deep/40 to-transparent"
                }`}
              />
            </div>

            {/* Floating credential card */}
            <motion.div
              initial={{ y: 20 }}
              whileInView={{ y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className={`absolute -bottom-4 -right-4 lg:right-4 p-4 rounded-xl backdrop-blur-md border shadow-lg ${
                isLight
                  ? "bg-white/90 border-gold/20 shadow-gold/10"
                  : "bg-navy-deep/80 border-gold/20 shadow-gold/10"
              }`}
            >
              <p
                className={`font-serif text-2xl font-bold ${
                  isLight ? "text-gold" : "text-gold"
                }`}
              >
                {/* Session 19 regression fix: the InteractionEngine code-split
                    (Track D) delayed its hydration and the engine itself never
                    actually shipped a `data-count` handler (the Session 13 Pass 5
                    changelog referenced one, but the code was never landed).
                    Result: badge rendered permanently as "0". Replaced with
                    static "20+" so the number is visible regardless of engine
                    load order or whether the handler ever ships. */}
                20<span className="text-gold/80">+</span>
              </p>
              <p
                className={`text-xs ${
                  isLight ? "text-navy-deep/60" : "text-white/60"
                }`}
              >
                Years of Medical Excellence
              </p>
            </motion.div>
          </motion.div>

          {/* Content Column */}
          <motion.div
            initial={{ x: 20 }}
            whileInView={{ x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <p
              className={`text-xs font-sans uppercase tracking-[0.25em] mb-3 ${
                isLight ? "text-gold" : "text-gold/80"
              }`}
            >
              Meet Your Doctor
            </p>

            <h2
              className={`font-serif font-bold leading-tight mb-6 ${
                isLight ? "text-navy-deep" : "text-white"
              }`}
              style={{ fontSize: "clamp(1.75rem, 3.5vw, 3rem)" }}
            >
              Dr. Azadeh{" "}
              <span className="text-gold italic">Shirazi</span>, MD
            </h2>

            {/* Session 22: Tightened per declutter directive. Shifted to her own voice
                (aligned with "Thrive with Dr. Azi" podcast cadence) — shorter, first-person,
                outcome-forward. Two short paragraphs instead of two long ones. */}
            <p
              className={`text-base lg:text-lg leading-relaxed mb-4 ${
                isLight ? "text-navy-deep/70" : "text-white/70"
              }`}
            >
              I&apos;m a UCSD-trained physician with 20+ years in internal medicine
              and over a decade in aesthetic and regenerative care. I trained with
              leading physician injectors in the U.S. and Europe, and I built
              Healinque to bring regenerative skin, scalp, and longevity care under
              one roof.
            </p>

            <p
              className={`text-base lg:text-lg leading-relaxed mb-6 ${
                isLight ? "text-navy-deep/80" : "text-white/80"
              }`}
            >
              I don&apos;t overfill. I don&apos;t chase trends. Every patient at
              Healinque is seen by me — or by a nurse practitioner or physician
              assistant I&apos;ve personally trained.
            </p>

            {/* Session 23: Approach tagline absorbed from the former
                ApproachSection component (now removed from the homepage). */}
            <p
              className={`font-serif text-lg lg:text-xl italic leading-snug mb-8 ${
                isLight ? "text-navy-deep" : "text-white"
              }`}
            >
              Layered.{" "}
              <span className="text-gold">Conservative.</span>{" "}
              Regenerative.
            </p>

            {/* Credentials — 2x2 grid */}
            <div className="grid grid-cols-2 gap-3 mb-8">
              {credentials.map((cred, i) => (
                <div
                  key={i}
                  className={`flex items-center gap-3 p-3 rounded-lg transition-colors duration-300 ${
                    isLight
                      ? "bg-white border border-taupe/10 hover:border-gold/30"
                      : "bg-white/[0.03] border border-white/5 hover:border-gold/20"
                  }`}
                >
                  <cred.icon className="h-4 w-4 text-gold flex-shrink-0" />
                  <p
                    className={`text-xs font-medium leading-snug ${
                      isLight ? "text-navy-deep/80" : "text-white/80"
                    }`}
                  >
                    {cred.text}
                  </p>
                </div>
              ))}
            </div>

            {/* CTA — Session 22: First-person voice + outcome verb. */}
            <Link href="/about/dr-azi-shirazi">
              <Button size="lg" className="group">
                Read My Story
                <ChevronRight className="h-4 w-4 ml-2 group-hover:translate-x-0.5 transition-transform" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
