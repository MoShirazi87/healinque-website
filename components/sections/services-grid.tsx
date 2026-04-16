"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { treatmentCategories } from "@/lib/data/treatments";
import { pexelsUrl, pageImages, pickImage } from "@/lib/data/images";

interface TreatmentCategory {
  id: string;
  number: string;
  name: string;
  tagline: string;
  description: string;
  treatments: string[];
  image: string;
  link: string;
}

const categories: TreatmentCategory[] = [
  {
    id: "aesthetics",
    number: "01",
    name: treatmentCategories.aesthetics.name,
    tagline: "Conservative, Layered",
    description:
      "Injectables, threads, and refining treatments performed by me for results that look like you, only refreshed. I typically recommend layering smaller amounts over time.",
    treatments: [
      "Botox & Dysport",
      "Dermal Fillers",
      "Kybella",
      "PDO Thread Lift",
    ],
    image: pexelsUrl(pickImage(pageImages.servicesAesthetics.primary, pageImages.servicesAesthetics.alts), 800),
    link: "/treatments?category=aesthetics",
  },
  {
    id: "skin",
    number: "02",
    name: treatmentCategories["skin-rejuvenation"].name,
    tagline: "Cellular Renewal",
    description:
      "Peels, microneedling, and laser work that may improve skin texture, tone, and clarity by stimulating your skin's natural healing response.",
    treatments: [
      "Chemical Peels",
      "Microneedling",
      "PRP Facial",
      "Laser Resurfacing",
    ],
    image: pexelsUrl(pickImage(pageImages.servicesSkinRejuv.primary, pageImages.servicesSkinRejuv.alts), 800),
    link: "/treatments?category=skin-rejuvenation",
  },
  {
    id: "regenerative",
    number: "03",
    name: treatmentCategories.regenerative.name,
    tagline: "Growth Factor Therapy",
    description:
      "PRP and PRF harness your own growth factors to support tissue repair and collagen remodeling. Results typically develop over weeks to months.",
    treatments: ["PRP Therapy", "Regenerative Consultation", "PRF Therapy"],
    image: pexelsUrl(pickImage(pageImages.servicesRegenerative.primary, pageImages.servicesRegenerative.alts), 800),
    link: "/treatments?category=regenerative",
  },
  {
    id: "mens",
    number: "04",
    name: treatmentCategories["mens-health"].name,
    tagline: "Men's-Focused Care",
    description:
      "Discreet treatments for men — from aesthetic refinement to performance optimization, delivered in a focused environment one day a week.",
    treatments: [
      "P-Shot",
      "Testosterone Optimization",
      "Hair Restoration",
    ],
    image: pexelsUrl(pickImage(pageImages.servicesMensHealth.primary, pageImages.servicesMensHealth.alts), 800),
    link: "/treatments?category=mens-health",
  },
  {
    id: "wellness",
    number: "05",
    name: treatmentCategories.wellness.name,
    tagline: "Longevity & Vitality",
    description:
      "IV therapy, peptides, and metabolic optimization designed to support your long-term health and how you feel, not just how you look.",
    treatments: [
      "IV Therapy",
      "Peptide Therapy",
      "Hormone Optimization (Coming Soon)",
      "GLP-1 Weight Loss (Coming Soon)",
    ],
    image: pexelsUrl(pickImage(pageImages.servicesWellness.primary, pageImages.servicesWellness.alts), 800),
    link: "/treatments?category=wellness",
  },
];

export function ServicesGrid() {
  const [activeCategory, setActiveCategory] = useState<string>(categories[0].id);

  const activeData = categories.find((cat) => cat.id === activeCategory);

  const tabVariants = {
    inactive: {
      opacity: 0.4,
      transition: { duration: 0.3 },
    },
    active: {
      opacity: 1,
      transition: { duration: 0.3 },
    },
  };

  const contentVariants = {
    enter: {
      opacity: 0,
      transition: { duration: 0.2 },
    },
    center: {
      opacity: 1,
      transition: { duration: 0.4, delay: 0.1 },
    },
    exit: {
      opacity: 0,
      transition: { duration: 0.2 },
    },
  };

  const imageVariants = {
    enter: {
      opacity: 0,
      scale: 0.98,
    },
    center: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, delay: 0.15 },
    },
    exit: {
      opacity: 0,
      scale: 0.98,
    },
  };

  return (
    <section className="relative py-20 md:py-32 bg-navy-deep overflow-hidden orb-bg has-particles" data-wipe>
      <div className="container-healinque relative z-10">
        {/* Section Header — V2 style */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-14 md:mb-20"
        >
          <p className="text-xs font-sans uppercase tracking-[0.25em] text-gold/80 mb-3">
            What We Offer
          </p>
          <h2
            className="font-serif font-bold text-white leading-tight mb-4"
            style={{ fontSize: "clamp(1.75rem, 3.5vw, 3rem)" }}
          >
            Treatments, paced and combined the way I&apos;d <span className="text-gold italic">recommend</span>
          </h2>
          <p className="text-base text-white/50 leading-relaxed max-w-xl">
            Every plan is layered, personal, and built for your goals.
          </p>
        </motion.div>

        {/* Treatment Showcase Accordion */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-[40%_60%] gap-8 lg:gap-12 items-start"
        >
          {/* Left Side - Tab List */}
          <div className="flex lg:flex-col gap-4 overflow-x-auto lg:overflow-x-visible pb-4 lg:pb-0">
            {categories.map((category) => (
              <motion.button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                variants={tabVariants}
                animate={
                  activeCategory === category.id ? "active" : "inactive"
                }
                data-interactive=""
                data-magnetic=""
                className={`relative flex-shrink-0 lg:flex-shrink text-left p-4 lg:p-6 rounded-lg lg:rounded-xl transition-all duration-500 group ${
                  activeCategory === category.id
                    ? "bg-white/5 border-l-2 border-[#C9A227]"
                    : "border-l-2 border-white/10 hover:bg-white/[0.02]"
                }`}
              >
                <div className="flex lg:flex-col gap-2 lg:gap-1">
                  <div className="text-[#C9A227] font-serif text-xl lg:text-2xl font-bold min-w-fit lg:min-w-0">
                    {category.number}
                  </div>
                  <div>
                    <h3 className="text-white font-serif text-lg lg:text-xl font-bold leading-tight">
                      {category.name}
                    </h3>
                    <p className="text-white/40 text-xs lg:text-sm italic mt-1 lg:mt-2">
                      {category.tagline}
                    </p>
                  </div>
                </div>
              </motion.button>
            ))}
          </div>

          {/* Right Side - Content Area */}
          <AnimatePresence mode="wait">
            {activeData && (
              <motion.div
                key={activeData.id}
                variants={contentVariants}
                initial="enter"
                animate="center"
                exit="exit"
                className="space-y-6"
              >
                {/* Image */}
                <motion.div
                  variants={imageVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl card-interactive"
                  data-parallax=""
                >
                  <Image
                    src={activeData.image}
                    alt={activeData.name}
                    fill
                    className="object-cover"
                    priority
                    data-parallax-img=""
                  />
                </motion.div>

                {/* Tagline */}
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="text-[#C9A227] italic font-serif text-lg"
                >
                  {activeData.tagline}
                </motion.p>

                {/* Description */}
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.25 }}
                  className="text-white/70 leading-relaxed text-base lg:text-lg"
                >
                  {activeData.description}
                </motion.p>

                {/* Treatments List */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="flex flex-wrap gap-3"
                >
                  {activeData.treatments.map((treatment) => (
                    <span
                      key={treatment}
                      className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-white/80 text-sm font-medium"
                    >
                      {treatment}
                    </span>
                  ))}
                </motion.div>

                {/* Explore Link */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.35 }}
                >
                  <Link
                    href={activeData.link}
                    className="inline-flex items-center gap-2 text-[#C9A227] hover:text-[#D4AF37] transition-all duration-300 font-medium group/link"
                  >
                    <span>Explore {activeData.name}</span>
                    <span className="group-hover/link:translate-x-1 transition-transform duration-300">
                      →
                    </span>
                  </Link>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
