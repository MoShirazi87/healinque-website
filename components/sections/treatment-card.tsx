"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface TreatmentCardProps {
  title: string;
  description: string;
  image: string;
  href: string;
  badge?: string;
  price?: string;
  index?: number;
}

export function TreatmentCard({
  title,
  description,
  image,
  href,
  badge,
  price,
  index = 0,
}: TreatmentCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Link href={href} className="group block">
        <div className="relative overflow-hidden rounded-xl bg-cream">
          {/* Image */}
          <div className="relative aspect-[4/5] overflow-hidden">
            <Image
              src={image}
              alt={title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/60 via-transparent to-transparent" />
            
            {badge && (
              <span className="absolute top-4 left-4 px-3 py-1 bg-gold text-white text-xs font-medium rounded-full">
                {badge}
              </span>
            )}
          </div>

          {/* Content */}
          <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
            <h3 className="text-xl font-serif font-semibold mb-2 group-hover:text-gold transition-colors">
              {title}
            </h3>
            <p className="text-sm text-cream/80 line-clamp-2 mb-3">
              {description}
            </p>
            <div className="flex items-center justify-between">
              {price && (
                <span className="text-sm text-gold font-medium">
                  Starting at {price}
                </span>
              )}
              <span className="inline-flex items-center text-sm text-gold group-hover:translate-x-1 transition-transform">
                Learn More <ArrowRight className="ml-1 h-4 w-4" />
              </span>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}

interface TreatmentGridProps {
  title?: string;
  subtitle?: string;
  treatments: TreatmentCardProps[];
  columns?: 2 | 3 | 4;
}

export function TreatmentGrid({
  title,
  subtitle,
  treatments,
  columns = 3,
}: TreatmentGridProps) {
  const gridCols = {
    2: "md:grid-cols-2",
    3: "md:grid-cols-2 lg:grid-cols-3",
    4: "md:grid-cols-2 lg:grid-cols-4",
  };

  return (
    <section className="section-padding bg-white">
      <div className="container-healinque">
        {(title || subtitle) && (
          <div className="text-center mb-12">
            {subtitle && (
              <p className="text-gold font-medium tracking-wide uppercase text-sm mb-3">
                {subtitle}
              </p>
            )}
            {title && (
              <h2 className="text-display font-serif text-navy-deep">
                {title}
              </h2>
            )}
          </div>
        )}

        <div className={cn("grid gap-6", gridCols[columns])}>
          {treatments.map((treatment, index) => (
            <TreatmentCard key={treatment.href} {...treatment} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

