"use client";

import { motion } from "framer-motion";
import { Layers, ShieldCheck, Sprout } from "lucide-react";

/**
 * Approach Section — Session 22
 *
 * Client-provided copy. Three-word lead — "Layered. Conservative. Regenerative." —
 * followed by the paragraph framing phased treatment plans that respect the
 * skin and scalp's natural healing cycles. Sits on a LIGHT (cream) band
 * between DoctorIntro (LIGHT) and ConcernCards (DARK) on the homepage —
 * the cream continuity is intentional so DoctorIntro and Approach feel like
 * two beats of the same chapter before the next dark contrast break.
 *
 * Voice: first-person, Dr. Shirazi. Minimal adornment — the three pillars
 * carry the visual weight; paragraph stays short per the client's declutter
 * directive.
 */

const pillars = [
  {
    icon: Layers,
    label: "Layered",
    note: "Treatments sequenced to compound — not compete.",
  },
  {
    icon: ShieldCheck,
    label: "Conservative",
    note: "Restraint by default. Intention at every step.",
  },
  {
    icon: Sprout,
    label: "Regenerative",
    note: "Supporting your skin and scalp's own biology.",
  },
];

export function ApproachSection() {
  return (
    <section
      className="relative bg-cream py-20 md:py-28 overflow-hidden"
      aria-labelledby="approach-heading"
    >
      <div className="container-healinque relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Eyebrow */}
          <motion.p
            initial={{ y: 10 }}
            whileInView={{ y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="text-xs font-sans uppercase tracking-[0.25em] text-gold mb-5"
          >
            My Approach
          </motion.p>

          {/* Tagline — three beats, client-provided */}
          <motion.h2
            id="approach-heading"
            initial={{ y: 15 }}
            whileInView={{ y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="font-serif font-bold text-navy-deep leading-tight mb-6"
            style={{ fontSize: "clamp(1.75rem, 4vw, 3.25rem)" }}
          >
            Layered.{" "}
            <span className="text-gold italic">
              Conservative.
            </span>{" "}
            Regenerative.
          </motion.h2>

          {/* Paragraph — client-provided, lightly first-personed */}
          <motion.p
            initial={{ y: 12 }}
            whileInView={{ y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.12 }}
            className="text-base md:text-lg text-navy-deep/75 leading-relaxed max-w-2xl mx-auto"
          >
            I believe in phased treatment plans that respect the skin and
            scalp&apos;s natural healing cycles. Real change is layered,
            paced, and built on your own biology — not rushed or stacked.
          </motion.p>
        </div>

        {/* Three pillars */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
          }}
          className="mt-14 md:mt-20 grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-5xl mx-auto"
        >
          {pillars.map((pillar) => (
            <motion.div
              key={pillar.label}
              variants={{
                hidden: { y: 20 },
                visible: { y: 0, transition: { duration: 0.5, ease: "easeOut" } },
              }}
              className="group relative bg-white border border-taupe/15 rounded-2xl p-7 md:p-8 text-center transition-colors duration-300 hover:border-gold/40"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gold/10 text-gold mb-5 group-hover:bg-gold/15 transition-colors duration-500">
                <pillar.icon className="w-5 h-5" aria-hidden="true" />
              </div>
              <h3 className="font-serif text-xl md:text-2xl text-navy-deep mb-2 tracking-tight">
                {pillar.label}
              </h3>
              <p className="text-sm md:text-base text-navy-deep/60 leading-relaxed">
                {pillar.note}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
