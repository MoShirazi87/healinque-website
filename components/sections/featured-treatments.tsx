"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const featuredTreatments = [
  {
    name: "Botox & Dysport",
    category: "Aesthetics",
    description: "Smooth lines and prevent new wrinkles with precision-placed neuromodulators.",
    image: "https://images.pexels.com/photos/3985360/pexels-photo-3985360.jpeg?auto=compress&cs=tinysrgb&w=600",
    href: "/treatments/botox-dysport",
    tag: "Most Popular",
  },
  {
    name: "Dermal Fillers",
    category: "Aesthetics",
    description: "Restore volume and sculpt facial contours with hyaluronic acid fillers.",
    image: "https://images.pexels.com/photos/3985356/pexels-photo-3985356.jpeg?auto=compress&cs=tinysrgb&w=600",
    href: "/treatments/dermal-fillers",
  },
  {
    name: "Morpheus8",
    category: "Skin Rejuvenation",
    description: "Revolutionary RF microneedling that tightens skin and stimulates collagen.",
    image: "https://images.pexels.com/photos/5069612/pexels-photo-5069612.jpeg?auto=compress&cs=tinysrgb&w=600",
    href: "/treatments/morpheus8",
    tag: "Featured",
  },
  {
    name: "GLP-1 Weight Loss",
    category: "Wellness",
    description: "Medical weight loss with Semaglutide & Tirzepatide under physician care.",
    image: "https://images.pexels.com/photos/4498294/pexels-photo-4498294.jpeg?auto=compress&cs=tinysrgb&w=600",
    href: "/treatments/glp1-weight-loss",
    tag: "New",
  },
  {
    name: "PRF/PRP Therapy",
    category: "Regenerative",
    description: "Harness your body's own growth factors for natural regeneration.",
    image: "https://images.pexels.com/photos/5069600/pexels-photo-5069600.jpeg?auto=compress&cs=tinysrgb&w=600",
    href: "/treatments/prp-therapy",
  },
  {
    name: "Hormone Therapy",
    category: "Longevity",
    description: "Bioidentical hormone optimization for vitality and wellness.",
    image: "https://images.pexels.com/photos/4498362/pexels-photo-4498362.jpeg?auto=compress&cs=tinysrgb&w=600",
    href: "/treatments/hormone-therapy",
  },
];

interface FeaturedTreatmentsProps {
  title?: string;
  subtitle?: string;
  limit?: number;
}

export function FeaturedTreatments({
  title = "Our Signature Treatments",
  subtitle = "Explore Our Services",
  limit = 6,
}: FeaturedTreatmentsProps) {
  const displayTreatments = featuredTreatments.slice(0, limit);

  return (
    <section className="section-padding bg-white">
      <div className="container-healinque">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12">
          <div>
            <p className="section-subtitle">{subtitle}</p>
            <h2 className="section-title">{title}</h2>
          </div>
          <Link href="/treatments" className="mt-4 md:mt-0">
            <Button variant="outline">
              View All Treatments <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayTreatments.map((treatment, index) => (
            <motion.div
              key={treatment.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Link href={treatment.href} className="group block">
                <div className="card-treatment">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={treatment.image}
                      alt={treatment.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    {treatment.tag && (
                      <span className="absolute top-4 left-4 badge-gold">
                        {treatment.tag}
                      </span>
                    )}
                  </div>
                  <div className="p-6">
                    <span className="text-xs text-gold font-medium uppercase tracking-wider">
                      {treatment.category}
                    </span>
                    <h3 className="font-serif text-xl text-navy-deep mt-1 mb-2 group-hover:text-gold transition-colors">
                      {treatment.name}
                    </h3>
                    <p className="text-sm text-taupe leading-relaxed">
                      {treatment.description}
                    </p>
                    <span className="inline-flex items-center text-sm font-medium text-gold mt-4 group-hover:gap-2 transition-all">
                      Learn More <ArrowRight className="ml-1 h-4 w-4" />
                    </span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

