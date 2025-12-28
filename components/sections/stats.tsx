"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface Stat {
  value: string;
  label: string;
  suffix?: string;
}

interface StatsProps {
  stats: Stat[];
  variant?: "default" | "dark" | "gold";
}

export function Stats({ stats, variant = "default" }: StatsProps) {
  const bgStyles = {
    default: "bg-cream",
    dark: "bg-navy-deep",
    gold: "bg-gold",
  };

  const textStyles = {
    default: {
      value: "text-navy-deep",
      label: "text-taupe",
    },
    dark: {
      value: "text-gold",
      label: "text-cream/80",
    },
    gold: {
      value: "text-white",
      label: "text-white/80",
    },
  };

  return (
    <section className={cn("py-16", bgStyles[variant])}>
      <div className="container-healinque">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center"
            >
              <div className={cn("text-4xl md:text-5xl font-serif font-bold", textStyles[variant].value)}>
                {stat.value}
                {stat.suffix && <span className="text-2xl">{stat.suffix}</span>}
              </div>
              <div className={cn("text-sm mt-2", textStyles[variant].label)}>
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

