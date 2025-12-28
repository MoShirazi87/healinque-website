"use client";

import Link from "next/link";
import { motion } from "framer-motion";

interface ConcernCardsProps {
  title?: string;
  subtitle?: string;
}

const concerns = [
  {
    title: "Fine Lines & Wrinkles",
    description: "Smooth dynamic wrinkles and prevent new ones from forming",
    href: "/concerns/wrinkles-fine-lines",
    treatments: ["Botox", "Dysport", "Morpheus8"],
  },
  {
    title: "Volume Loss & Sagging",
    description: "Restore youthful volume and lift to cheeks, temples, and jawline",
    href: "/concerns/volume-loss",
    treatments: ["Dermal Fillers", "PDO Threads", "PRF"],
  },
  {
    title: "Skin Texture & Tone",
    description: "Improve dull, uneven, or damaged skin for a radiant glow",
    href: "/concerns/dull-skin",
    treatments: ["HydraFacial", "Chemical Peels", "Microneedling"],
  },
  {
    title: "Weight Management",
    description: "Achieve sustainable weight loss with medical supervision",
    href: "/concerns/weight-management",
    treatments: ["Semaglutide", "Tirzepatide", "Metabolic Support"],
  },
];

export function ConcernCards({ title, subtitle }: ConcernCardsProps) {
  return (
    <section className="section-padding bg-sage/20">
      <div className="container-healinque">
        <div className="text-center mb-12">
          <p className="section-subtitle">{subtitle || "Find What Treatment is Right for You"}</p>
          <h2 className="section-title">{title || "What is your primary concern?"}</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {concerns.map((concern, index) => (
            <motion.div
              key={concern.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Link
                href={concern.href}
                className="block bg-white rounded-xl p-6 h-full border-2 border-transparent hover:border-gold transition-all duration-300 hover:shadow-elegant group"
              >
                <h3 className="font-serif text-xl text-navy-deep mb-2 group-hover:text-gold transition-colors">
                  {concern.title}
                </h3>
                <p className="text-sm text-taupe mb-4">{concern.description}</p>
                <div className="flex flex-wrap gap-2">
                  {concern.treatments.map((treatment) => (
                    <span
                      key={treatment}
                      className="text-xs px-2 py-1 bg-cream rounded-full text-taupe"
                    >
                      {treatment}
                    </span>
                  ))}
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-8">
          <Link
            href="/concerns"
            className="text-sm font-medium text-gold hover:text-gold-dark transition-colors"
          >
            View All Concerns →
          </Link>
        </div>
      </div>
    </section>
  );
}

