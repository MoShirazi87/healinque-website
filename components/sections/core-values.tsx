"use client";

import { motion } from "framer-motion";
import { Heart, Shield, Sparkles, Users, Award, Leaf } from "lucide-react";

const coreValues = [
  {
    icon: Shield,
    title: "Medical Excellence",
    description: "Every treatment is physician-led with the highest safety standards and evidence-based protocols.",
  },
  {
    icon: Heart,
    title: "Holistic Wellness",
    description: "We treat the whole person—mind, body, and spirit—for lasting transformation.",
  },
  {
    icon: Sparkles,
    title: "Natural Beauty",
    description: "Enhancement that honors your unique features. Never overdone, always authentically you.",
  },
  {
    icon: Users,
    title: "Patient-Centered Care",
    description: "Your goals and comfort are our priority. We listen, we explain, we deliver.",
  },
  {
    icon: Award,
    title: "Continuous Innovation",
    description: "We invest in the latest technologies and techniques to offer you the best possible outcomes.",
  },
  {
    icon: Leaf,
    title: "Emotional Wellness",
    description: "Unique in our field, we integrate mental health screening into every aesthetic consultation.",
  },
];

export function CoreValues() {
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
            What We Stand For
          </p>
          <h2 className="text-display font-serif text-navy-deep">
            Our Core Values
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {coreValues.map((value, index) => {
            const Icon = value.icon;
            return (
              <motion.div
                key={value.title}
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
                  {value.title}
                </h3>
                <p className="text-taupe text-sm">{value.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

