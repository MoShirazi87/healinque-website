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
      className={`relative py-20 md:py-32 overflow-hidden has-particles ${
        isLight ? "bg-cream" : "bg-navy-deep orb-bg"
      }`}
      data-wipe
    >
      <div className="container-healinque relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Image Column */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
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
                priority
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
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
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
                <span data-count="20" data-count-suffix="+">0</span>
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
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
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
              <span className="text-gold italic heading-shimmer">Shirazi</span>, MD
            </h2>

            <p
              className={`text-base lg:text-lg leading-relaxed mb-4 ${
                isLight ? "text-navy-deep/70" : "text-white/70"
              }`}
            >
              Dr. Azadeh Shirazi is a physician with more than 20 years of clinical
              experience in internal medicine and over a decade in aesthetic medicine.
              Trained at UC San Diego, she received advanced aesthetic training with
              leading physician injectors in the United States and Europe. She founded
              Healinque to bring together regenerative medicine and longevity care
              under one roof.
            </p>

            <p
              className={`text-base lg:text-lg leading-relaxed mb-8 ${
                isLight ? "text-navy-deep/70" : "text-white/70"
              }`}
            >
              Her philosophy is straightforward: treat the whole person, not just
              isolated concerns. Dr. Shirazi personally performs or supervises
              every procedure at Healinque — because physician-led care
              isn&apos;t a marketing phrase here, it&apos;s how we practice.
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

            {/* CTA */}
            <Link href="/about/dr-azi-shirazi">
              <Button size="lg" className="group">
                Learn More About Dr. Shirazi
                <ChevronRight className="h-4 w-4 ml-2 group-hover:translate-x-0.5 transition-transform" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
