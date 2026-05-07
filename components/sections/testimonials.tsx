"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";
import Link from "next/link";

/**
 * Testimonials V2 — Supports dark and light variants
 *
 * Variants:
 * - "dark" (default): Navy background, white text
 * - "light": Cream background, navy text — for homepage rhythm
 * - "featured": Large featured quote + grid (always dark)
 */

interface Testimonial {
  name: string;
  text: string;
  treatment: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    name: "Victoria L.",
    text: "Dr. Shirazi completely transformed my confidence. Her attention to detail and artistic eye gave me results that look so natural — everyone asks what my secret is.",
    treatment: "Botox & Dermal Fillers",
    rating: 5,
  },
  {
    name: "Sarah M.",
    text: "Dr. Shirazi's approach was completely different from what I expected. She truly listens and understands what natural beauty means. The results speak for themselves.",
    treatment: "Dermal Fillers",
    rating: 5,
  },
  {
    name: "James L.",
    text: "Finally found a medical spa that treats men's aesthetics seriously. Professional, knowledgeable, and the results are incredibly natural. Highly recommend.",
    treatment: "Botox & Skin Rejuvenation",
    rating: 5,
  },
  {
    name: "Michelle R.",
    text: "The personalized attention and medical expertise make all the difference. I felt truly cared for throughout my entire experience at Healinque.",
    treatment: "Comprehensive Facial Aesthetics",
    rating: 5,
  },
];

interface TestimonialsProps {
  variant?: "dark" | "light" | "featured";
  limit?: number;
}

export function Testimonials({ variant = "dark", limit }: TestimonialsProps) {
  const isLight = variant === "light";
  const isFeatured = variant === "featured";

  const displayed = limit ? testimonials.slice(0, limit) : testimonials;

  return (
    <section
      className={`relative py-16 md:py-24 overflow-hidden ${
        isLight ? "bg-cream" : "bg-navy-deep"
      }`}
    >
      <div className="container-healinque relative z-10">
        {/* Section Header — Session 23: tightened header margins for the smaller, quieter testimonials band */}
        <motion.div
          initial={{ y: 15 }}
          whileInView={{ y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <p
            className={`text-xs font-sans uppercase tracking-[0.25em] mb-3 ${
              isLight ? "text-gold" : "text-gold/80"
            }`}
          >
            Patient Stories
          </p>
          <h2
            className={`font-serif font-bold leading-tight ${
              isLight ? "text-navy-deep" : "text-white"
            }`}
            style={{ fontSize: "clamp(1.75rem, 3.5vw, 3rem)" }}
          >
            What Patients Say About Working With{" "}
            <span className="text-gold italic">Dr. Shirazi</span>
          </h2>
        </motion.div>

        {/* Featured Large Quote (only in featured mode) */}
        {isFeatured && (
          <motion.div
            initial={{ scale: 0.98 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto mb-16 text-center"
          >
            <div className="relative p-10 md:p-14 rounded-2xl bg-white/[0.03] border border-white/5">
              <div className="text-7xl font-serif text-gold/15 leading-none mb-4">
                &ldquo;
              </div>
              <p className="text-xl md:text-2xl font-serif italic text-white/90 leading-relaxed mb-6">
                {testimonials[0].text}
              </p>
              <div className="flex justify-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-gold text-gold" />
                ))}
              </div>
              <p className="font-serif font-semibold text-white">
                {testimonials[0].name}
              </p>
              <p className="text-sm text-gold/70">{testimonials[0].treatment}</p>
            </div>
          </motion.div>
        )}

        {/* Testimonial Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {displayed.map((t, idx) => (
            <motion.div
              key={t.name}
              initial={{ y: 20 }}
              whileInView={{ y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.08, duration: 0.5 }}
              className={`group p-5 md:p-6 rounded-xl transition-colors duration-300 ${
                isLight
                  ? "bg-white border border-taupe/10 hover:border-gold/30"
                  : "bg-white/[0.03] border border-white/5 hover:border-gold/20 hover:bg-white/[0.05]"
              }`}
            >
              {/* Stars */}
              <div className="flex gap-0.5 mb-4">
                {[...Array(t.rating)].map((_, i) => (
                  <Star key={i} className="h-3.5 w-3.5 fill-gold text-gold" />
                ))}
              </div>

              {/* Quote — Session 23: bumped to 17px (readable luxury body), opacity /70 → /80 */}
              <p
                className={`text-[17px] leading-relaxed mb-5 ${
                  isLight ? "text-navy-deep/80" : "text-white/80"
                }`}
              >
                &ldquo;{t.text}&rdquo;
              </p>

              {/* Author */}
              <div
                className={`pt-4 border-t ${
                  isLight ? "border-taupe/10" : "border-white/5"
                }`}
              >
                <p
                  className={`font-serif font-semibold text-sm ${
                    isLight ? "text-navy-deep" : "text-white"
                  }`}
                >
                  {t.name}
                </p>
                <p className="text-xs text-gold/70 mt-0.5">{t.treatment}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA + Disclaimer */}
        <motion.div
          initial={{ y: 10 }}
          whileInView={{ y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="text-center mt-10"
        >
          <Link
            href="/reviews"
            className={`text-sm font-medium transition-colors underline underline-offset-4 ${
              isLight
                ? "text-navy-deep/75 hover:text-gold decoration-navy-deep/25"
                : "text-white/75 hover:text-gold decoration-white/25"
            }`}
          >
            Read All Patient Reviews →
          </Link>
          <p
            className={`text-xs mt-4 max-w-2xl mx-auto ${
              isLight ? "text-navy-deep/55" : "text-white/55"
            }`}
          >
            Illustrative testimonials — real patient reviews with signed consent will replace these before launch. Results may vary; individual results are not guaranteed.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
