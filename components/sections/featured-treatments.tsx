"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { treatments } from "@/lib/data/treatments";

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
  // Filter featured treatments from data and map to display format
  const featuredTreatments = treatments
    .filter((t) => t.featured || t.popular || t.isNew)
    .slice(0, limit)
    .map((t) => {
      // Pick randomly from alts if available
      const allImages = t.imageAlts ? [t.image, ...t.imageAlts] : [t.image];
      const imageUrl = allImages[Math.floor(Math.random() * allImages.length)];
      return {
        name: t.name,
        category: t.category,
        description: t.description,
        image: imageUrl,
        href: `/treatments/${t.slug}`,
        tag: t.popular ? "Most Popular" : t.isNew ? "New" : undefined,
      };
    });

  const displayTreatments = featuredTreatments;

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
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
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

