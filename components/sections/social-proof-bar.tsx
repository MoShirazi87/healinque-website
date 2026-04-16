"use client";

import { Star, Award, GraduationCap, Heart } from "lucide-react";
import { motion } from "framer-motion";

/**
 * Social Proof Bar — V2
 *
 * Slim, elegant credibility strip on a LIGHT (cream) background.
 * Creates visual breathing room between dark hero and dark services.
 * Replaces the old TrustBadges component with a more editorial approach.
 */

const proofPoints = [
  {
    icon: Award,
    metric: "Top 100 Physicians",
    label: "San Diego Magazine 2023",
  },
  {
    icon: Heart,
    metric: "Sharp Healthcare",
    label: "CORE Award (3x)",
  },
  {
    icon: GraduationCap,
    metric: "Chair, Urgent Care",
    label: "2022–2025",
  },
  {
    icon: Star,
    metric: "Guest Speaker",
    label: "SRS & Sharp Healthcare",
    filled: true,
  },
];

export function SocialProofBar() {
  return (
    <section className="bg-cream border-y border-taupe/10 relative overflow-hidden" data-wipe>
      <div className="container-healinque py-6 lg:py-8">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-wrap items-center justify-center gap-8 lg:gap-14"
        >
          {proofPoints.map((point, idx) => (
            <div
              key={idx}
              data-magnetic=""
              className="flex items-center gap-3 text-navy-deep cursor-default"
            >
              <point.icon
                className={`h-5 w-5 flex-shrink-0 icon-pulse ${
                  point.filled
                    ? "fill-gold text-gold"
                    : "text-gold"
                }`}
              />
              <div className="flex items-baseline gap-1.5">
                <span className="font-serif font-semibold text-base lg:text-lg text-navy-deep">
                  {point.metric}
                </span>
                <span className="text-sm text-navy-deep/60">
                  {point.label}
                </span>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
