"use client";

import { motion } from "framer-motion";
import { Stethoscope, Shield, Sparkles, Heart, RefreshCw, User } from "lucide-react";

const differentiators = [
  {
    icon: Stethoscope,
    title: "Physician-Performed",
    description:
      "Dr. Shirazi personally performs all injectable treatments—not delegated to nurses or aestheticians. Your face is in physician hands.",
  },
  {
    icon: Shield,
    title: "20 Years Emergency Experience",
    description:
      "Two decades treating emergencies—including cosmetic complications. That experience informs every treatment decision for your safety.",
  },
  {
    icon: RefreshCw,
    title: "Inside-Out Philosophy",
    description:
      "We address root causes (hormones, nutrition, inflammation) not just surface symptoms. Results that are more natural and lasting.",
  },
  {
    icon: Sparkles,
    title: "Natural Results",
    description:
      "Conservative approach that enhances your features without masking who you are. The goal: people notice YOU, not your work.",
  },
  {
    icon: Heart,
    title: "Longevity Integration",
    description:
      "Unique combination of aesthetic medicine with internal medicine. Dr. Shirazi treats the whole person, not just the lines.",
  },
  {
    icon: User,
    title: "Continuity of Care",
    description:
      "One doctor, all your data, complete medical oversight. No being passed between providers or starting over each visit.",
  },
];

interface DifferentiatorsProps {
  variant?: "grid" | "list";
  title?: string;
  subtitle?: string;
}

export function Differentiators({
  variant = "grid",
  title = "Why Choose Healinque?",
  subtitle = "The Healinque Difference",
}: DifferentiatorsProps) {
  return (
    <section className="section-padding bg-cream">
      <div className="container-healinque">
        <div className="text-center mb-12">
          <p className="section-subtitle">{subtitle}</p>
          <h2 className="section-title">{title}</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {differentiators.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl p-6 hover:shadow-elegant transition-shadow"
            >
              <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center mb-4">
                <item.icon className="h-6 w-6 text-gold" />
              </div>
              <h3 className="font-serif text-lg font-semibold text-navy-deep mb-2">
                {item.title}
              </h3>
              <p className="text-sm text-taupe leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

