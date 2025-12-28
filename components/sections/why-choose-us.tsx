"use client";

import { motion } from "framer-motion";
import { Shield, Sparkles, Heart, Award } from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "Board-Certified Physician",
    description: "Dr. Azi personally performs or supervises every treatment with medical precision.",
  },
  {
    icon: Sparkles,
    title: "Natural-Looking Results",
    description: "We enhance your unique beauty—never overdone, always authentically you.",
  },
  {
    icon: Heart,
    title: "Holistic Approach",
    description: "Aesthetics meets internal medicine for complete mind-body wellness.",
  },
  {
    icon: Award,
    title: "Premium Experience",
    description: "Luxurious, private setting with personalized attention to every detail.",
  },
];

export function WhyChooseUs() {
  return (
    <section className="section-padding bg-cream">
      <div className="container-healinque">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p className="text-gold font-medium tracking-wide uppercase text-sm mb-3">
            Why Choose Us
          </p>
          <h2 className="text-display font-serif text-navy-deep">
            The Healinque Difference
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl p-8 shadow-sm"
              >
                <div className="flex items-center justify-center w-14 h-14 rounded-full bg-cream mb-4">
                  <Icon className="h-7 w-7 text-gold" />
                </div>
                <h3 className="text-lg font-serif font-semibold text-navy-deep mb-2">
                  {feature.title}
                </h3>
                <p className="text-taupe text-sm">{feature.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

