"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";
import { Button } from "@/components/ui/button";

interface HeroProps {
  variant?: "home" | "page";
  title: string;
  subtitle?: string;
  description?: string;
  image?: string;
  video?: string;
  cta?: {
    primary?: { label: string; href: string };
    secondary?: { label: string; href: string };
  };
  stats?: { value: string; label: string }[];
  overlay?: "dark" | "light" | "gradient";
}

export function Hero({
  variant = "home",
  title,
  subtitle,
  description,
  image = "https://images.pexels.com/photos/3985326/pexels-photo-3985326.jpeg?auto=compress&cs=tinysrgb&w=1920",
  cta,
  stats,
  overlay = "gradient",
}: HeroProps) {
  const overlayClasses = {
    dark: "bg-navy-deep/60",
    light: "bg-white/30",
    gradient: "bg-gradient-to-r from-navy-deep/80 via-navy-deep/50 to-transparent",
  };

  if (variant === "page") {
    return (
      <section className="relative bg-navy-deep text-white py-20 md:py-28">
        <div className="absolute inset-0">
          <Image
            src={image}
            alt=""
            fill
            className="object-cover opacity-20"
            priority
          />
        </div>
        <div className="container-healinque relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            {subtitle && (
              <p className="text-gold font-medium tracking-wide uppercase text-sm mb-4">
                {subtitle}
              </p>
            )}
            <h1 className="text-display-lg font-serif mb-6">{title}</h1>
            {description && (
              <p className="text-lg text-cream/80 leading-relaxed max-w-2xl">
                {description}
              </p>
            )}
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src={image}
          alt="Aesthetic treatment at Healinque"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className={`absolute inset-0 ${overlayClasses[overlay]}`} />
      </div>

      {/* Content */}
      <div className="container-healinque relative z-10 py-20">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {subtitle && (
              <p className="text-gold font-medium tracking-wider uppercase text-sm mb-4">
                {subtitle}
              </p>
            )}
            <h1 className="text-display-xl font-serif text-white mb-6 leading-tight">
              {title}
            </h1>
            {description && (
              <p className="text-lg md:text-xl text-cream/90 leading-relaxed mb-8 max-w-2xl">
                {description}
              </p>
            )}

            {cta && (
              <div className="flex flex-wrap gap-4 mb-12">
                {cta.primary && (
                  <Link href={cta.primary.href}>
                    <Button size="lg" className="bg-gold hover:bg-gold-dark text-navy-deep font-semibold">
                      {cta.primary.label}
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                )}
                {cta.secondary && (
                  <Link href={cta.secondary.href}>
                    <Button
                      size="lg"
                      variant="outline"
                      className="border-white text-white hover:bg-white/10"
                    >
                      {cta.secondary.label}
                    </Button>
                  </Link>
                )}
              </div>
            )}

            {stats && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="grid grid-cols-3 gap-8 max-w-lg"
              >
                {stats.map((stat) => (
                  <div key={stat.label}>
                    <div className="font-serif text-3xl md:text-4xl font-bold text-gold mb-1">
                      {stat.value}
                    </div>
                    <div className="text-sm text-cream/70">{stat.label}</div>
                  </div>
                ))}
              </motion.div>
            )}
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:block"
      >
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-2">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1.5 h-1.5 bg-gold rounded-full"
          />
        </div>
      </motion.div>
    </section>
  );
}
