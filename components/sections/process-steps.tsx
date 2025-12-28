"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface Step {
  number: number;
  title: string;
  description: string;
}

interface ProcessStepsProps {
  title?: string;
  subtitle?: string;
  steps: Step[];
  variant?: "horizontal" | "vertical";
}

export function ProcessSteps({
  title = "The Healinque Method",
  subtitle = "Your Journey",
  steps,
  variant = "horizontal",
}: ProcessStepsProps) {
  if (variant === "vertical") {
    return (
      <section className="section-padding bg-white">
        <div className="container-healinque">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p className="text-gold font-medium tracking-wide uppercase text-sm mb-3">
              {subtitle}
            </p>
            <h2 className="text-display font-serif text-navy-deep">{title}</h2>
          </motion.div>

          <div className="max-w-3xl mx-auto">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex gap-6 mb-12 last:mb-0"
              >
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-gold text-white flex items-center justify-center font-serif text-xl font-bold">
                    {step.number}
                  </div>
                  {index < steps.length - 1 && (
                    <div className="w-0.5 h-full bg-cream-dark mt-4" />
                  )}
                </div>
                <div className="flex-1 pb-12">
                  <h3 className="text-xl font-serif font-semibold text-navy-deep mb-2">
                    {step.title}
                  </h3>
                  <p className="text-taupe">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  // Horizontal variant
  return (
    <section className="section-padding bg-cream">
      <div className="container-healinque">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-gold font-medium tracking-wide uppercase text-sm mb-3">
            {subtitle}
          </p>
          <h2 className="text-display font-serif text-navy-deep">{title}</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className="relative text-center"
            >
              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-6 left-1/2 w-full h-0.5 bg-gold/30" />
              )}

              <div className="relative z-10 w-12 h-12 mx-auto rounded-full bg-gold text-white flex items-center justify-center font-serif text-xl font-bold mb-6">
                {step.number}
              </div>
              <h3 className="text-lg font-serif font-semibold text-navy-deep mb-2">
                {step.title}
              </h3>
              <p className="text-taupe text-sm">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

