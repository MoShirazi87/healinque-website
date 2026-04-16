"use client";

import { motion } from "framer-motion";
import { Star, Award, Zap, Users } from "lucide-react";

interface Badge {
  icon: React.ReactNode;
  label: string;
}

const badges: Badge[] = [
  {
    icon: <Star className="w-6 h-6" />,
    label: "4.9 Google Rating",
  },
  {
    icon: <Award className="w-6 h-6" />,
    label: "20+ Years Experience",
  },
  {
    icon: <Zap className="w-6 h-6" />,
    label: "UCSD-Trained Physician",
  },
  {
    icon: <Users className="w-6 h-6" />,
    label: "Thousands of Treatments Performed",
  },
];

export function TrustBadges() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section className="relative py-16 md:py-20 bg-[#0a1628] overflow-hidden">
      <div className="container-healinque relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12 lg:gap-16"
        >
          {badges.map((badge, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="flex flex-col items-center text-center md:text-left gap-3"
            >
              <div className="text-[#C9A227]">
                {badge.icon}
              </div>
              <p className="text-base md:text-lg font-medium text-white/90 max-w-xs">
                {badge.label}
              </p>
              
              {/* Vertical divider for desktop (except last) */}
              {index < badges.length - 1 && (
                <div className="hidden md:block absolute right-0 w-px h-12 bg-gradient-to-b from-transparent via-[#C9A227]/30 to-transparent" />
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
