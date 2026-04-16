"use client";

import { motion } from "framer-motion";
import {
  Heart,
  Award,
  Stethoscope,
  Sparkles,
  TrendingUp,
  Users,
} from "lucide-react";

interface Differentiator {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const differentiators: Differentiator[] = [
  {
    icon: <Stethoscope className="w-8 h-8" />,
    title: "Physician-Led",
    description:
      "Every treatment is performed or directly supervised by Dr. Shirazi, MD. I personally test every treatment we offer before it enters the practice.",
  },
  {
    icon: <Award className="w-8 h-8" />,
    title: "20+ Years Clinical Experience",
    description:
      "Internal medicine physician with deep clinical training at UCSD. 10+ years in aesthetic medicine with advanced training from leading physicians in the US and Europe.",
  },
  {
    icon: <Heart className="w-8 h-8" />,
    title: "Whole-Person Approach",
    description:
      "I see aesthetic goals within the context of overall health and longevity. We address how you feel alongside how you look—inside-out medicine.",
  },
  {
    icon: <Sparkles className="w-8 h-8" />,
    title: "Natural Results",
    description:
      "Conservative, layered approach that enhances your unique features. I'd rather under-treat and add than over-treat and undo. Results that age well.",
  },
  {
    icon: <TrendingUp className="w-8 h-8" />,
    title: "Long-Term Planning",
    description:
      "Every plan prioritizes lasting results and tissue health. We think in quarters and years, not quick wins. Sustainability over maximalism.",
  },
  {
    icon: <Users className="w-8 h-8" />,
    title: "Dedicated Men's Clinic",
    description:
      "Friday focus day for male patients seeking discreet, medically-guided aesthetic care. Same clinical precision, male-specific concerns and goals.",
  },
];

export function Differentiators() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  };

  return (
    <section className="relative py-24 md:py-40 bg-[#0a1628] overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-[#C9A227]/8 to-transparent rounded-full filter blur-3xl opacity-20 -z-10" />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-gradient-to-l from-blue-500/8 to-transparent rounded-full filter blur-3xl opacity-15 -z-10" />

      <div className="container-healinque relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20 md:mb-28 max-w-3xl mx-auto"
        >
          <p className="text-[#C9A227] font-medium tracking-[0.2em] uppercase text-xs mb-6">
            WHY HEALINQUE
          </p>
          <h2 className="text-5xl md:text-6xl font-serif font-bold text-white mb-2 leading-tight">
            What Sets Us{" "}
            <span className="text-[#C9A227] italic">Apart</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#C9A227] to-[#C9A227]/40 mx-auto mt-10 mb-10" />
          <p className="text-lg text-white/75 leading-relaxed">
            From physician-led care to integrated wellness, discover why Healinque is different.
          </p>
        </motion.div>

        {/* Differentiators Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-6"
        >
          {differentiators.map((item, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group relative p-8 md:p-10 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-[#C9A227]/30 transition-all duration-500 flex flex-col hover:shadow-[0_20px_50px_rgba(201,162,39,0.12)] hover:translate-y-[-4px] hover:bg-white/[0.04]"
            >
              {/* Icon Container */}
              <div className="mb-8 inline-flex w-16 h-16 items-center justify-center rounded-xl bg-[#C9A227]/10 text-[#C9A227] group-hover:bg-[#C9A227]/20 transition-all duration-300">
                {item.icon}
              </div>

              {/* Title */}
              <h3 className="text-xl md:text-2xl font-serif font-bold text-white mb-4 group-hover:text-[#C9A227] transition-colors duration-300">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-base text-white/75 leading-relaxed flex-grow">
                {item.description}
              </p>

              {/* Accent line */}
              <div className="mt-6 w-0 h-0.5 bg-gradient-to-r from-[#C9A227] to-transparent group-hover:w-12 transition-all duration-500" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
