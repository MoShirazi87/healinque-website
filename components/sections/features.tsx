"use client";

import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface Feature {
  icon: LucideIcon;
  title: string;
  description: string;
}

interface FeaturesProps {
  title?: string;
  subtitle?: string;
  features: Feature[];
  columns?: 2 | 3 | 4;
  variant?: "cards" | "minimal" | "icons";
}

export function Features({
  title,
  subtitle,
  features,
  columns = 3,
  variant = "cards",
}: FeaturesProps) {
  const gridCols = {
    2: "md:grid-cols-2",
    3: "md:grid-cols-2 lg:grid-cols-3",
    4: "md:grid-cols-2 lg:grid-cols-4",
  };

  return (
    <section className="section-padding bg-cream">
      <div className="container-healinque">
        {(title || subtitle) && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            {subtitle && (
              <p className="text-gold font-medium tracking-wide uppercase text-sm mb-3">
                {subtitle}
              </p>
            )}
            {title && (
              <h2 className="text-display font-serif text-navy-deep">{title}</h2>
            )}
          </motion.div>
        )}

        <div className={cn("grid gap-8", gridCols[columns])}>
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={cn(
                variant === "cards" && "bg-white rounded-xl p-8 shadow-sm",
                variant === "minimal" && "text-center",
                variant === "icons" && "flex gap-4"
              )}
            >
              <div
                className={cn(
                  "flex items-center justify-center",
                  variant === "cards" && "w-14 h-14 rounded-full bg-cream mb-4",
                  variant === "minimal" && "w-16 h-16 rounded-full bg-white mx-auto mb-4 shadow-sm",
                  variant === "icons" && "w-12 h-12 rounded-full bg-gold/10 flex-shrink-0"
                )}
              >
                <feature.icon className={cn(
                  variant === "cards" && "h-7 w-7 text-gold",
                  variant === "minimal" && "h-8 w-8 text-gold",
                  variant === "icons" && "h-6 w-6 text-gold"
                )} />
              </div>
              <div>
                <h3 className="text-lg font-serif font-semibold text-navy-deep mb-2">
                  {feature.title}
                </h3>
                <p className="text-taupe text-sm">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

