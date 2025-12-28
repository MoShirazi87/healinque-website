"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Phone, Calendar } from "lucide-react";
import { cn } from "@/lib/utils";
import { siteConfig, getPhoneLink } from "@/lib/config/site";

interface CTASectionProps {
  title?: string;
  description?: string;
  primaryCta?: {
    text: string;
    href: string;
  };
  secondaryCta?: {
    text: string;
    href: string;
  };
  variant?: "default" | "split" | "minimal";
  backgroundImage?: string;
  showPhone?: boolean;
}

export function CTASection({
  title = "Ready to Begin Your Transformation?",
  description = "Book your complimentary consultation with Dr. Azi to discover your personalized treatment plan.",
  primaryCta = { text: "Book Consultation", href: "/book" },
  secondaryCta,
  variant = "default",
  backgroundImage,
  showPhone = true,
}: CTASectionProps) {
  if (variant === "minimal") {
    return (
      <section className="py-16 bg-gold">
        <div className="container-healinque">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h2 className="text-2xl font-serif text-white mb-2">{title}</h2>
              {description && (
                <p className="text-white/80">{description}</p>
              )}
            </div>
            <div className="flex gap-4">
              <Link href={primaryCta.href}>
                <Button size="lg" className="bg-navy-deep hover:bg-navy-deep/90">
                  <Calendar className="mr-2 h-4 w-4" />
                  {primaryCta.text}
                </Button>
              </Link>
              {showPhone && (
                <a href={getPhoneLink()}>
                  <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-gold">
                    <Phone className="mr-2 h-4 w-4" />
                    Call Now
                  </Button>
                </a>
              )}
            </div>
          </div>
        </div>
      </section>
    );
  }

  if (variant === "split") {
    return (
      <section className="relative overflow-hidden">
        <div className="grid lg:grid-cols-2">
          {/* Image Side */}
          <div className="relative h-64 lg:h-auto">
            <Image
              src={backgroundImage || "/images/cta-consultation.jpg"}
              alt="Consultation at Healinque"
              fill
              className="object-cover"
            />
          </div>

          {/* Content Side */}
          <div className="bg-navy-deep py-16 lg:py-24 px-8 lg:px-16 flex items-center">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-display font-serif text-white mb-6">{title}</h2>
              <p className="text-cream/80 mb-8 max-w-md">{description}</p>
              <div className="flex flex-wrap gap-4">
                <Link href={primaryCta.href}>
                  <Button size="lg">
                    <Calendar className="mr-2 h-4 w-4" />
                    {primaryCta.text}
                  </Button>
                </Link>
                {showPhone && (
                  <a href={getPhoneLink()}>
                    <Button size="lg" variant="outline" className="border-gold text-gold hover:bg-gold hover:text-white">
                      <Phone className="mr-2 h-4 w-4" />
                      {siteConfig.phone}
                    </Button>
                  </a>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    );
  }

  // Default variant
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        {backgroundImage ? (
          <>
            <Image
              src={backgroundImage}
              alt=""
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-navy-deep/80" />
          </>
        ) : (
          <div className="absolute inset-0 bg-gradient-to-br from-navy-deep via-navy-deep to-navy-deep/90" />
        )}
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gold/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-gold/5 rounded-full blur-2xl" />

      {/* Content */}
      <div className="container-healinque relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="text-display font-serif text-white mb-6">{title}</h2>
          <p className="text-lg text-cream/80 mb-10">{description}</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href={primaryCta.href}>
              <Button size="xl">
                <Calendar className="mr-2 h-5 w-5" />
                {primaryCta.text}
              </Button>
            </Link>
            {secondaryCta && (
              <Link href={secondaryCta.href}>
                <Button size="xl" variant="outline" className="border-white text-white hover:bg-white hover:text-navy-deep">
                  {secondaryCta.text}
                </Button>
              </Link>
            )}
            {showPhone && !secondaryCta && (
              <a href={getPhoneLink()}>
                <Button size="xl" variant="outline" className="border-gold text-gold hover:bg-gold hover:text-white">
                  <Phone className="mr-2 h-5 w-5" />
                  {siteConfig.phone}
                </Button>
              </a>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

