"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { PageHero as Hero } from "@/components/sections/hero";
import { Button } from "@/components/ui/button";
import { pexelsUrl, pageImages } from "@/lib/data/images";
import { siteConfig } from "@/lib/config/site";

// Session 22: Values rewritten in Dr. Shirazi's first-person voice.
const coreValues = [
  {
    title: "Natural Results",
    description:
      "Enhancement, not transformation. I preserve your unique features while revealing the best version of you.",
  },
  {
    title: "Medical Integrity",
    description:
      "Every protocol is grounded in science, safety, and 20+ years of clinical experience. I lead every treatment personally or through a provider I've trained.",
  },
  {
    title: "Personalized Care",
    description:
      "Bespoke treatment plans tailored to your anatomy, goals, and health profile. No two faces are treated the same.",
  },
  {
    title: "Innovation",
    description:
      "Continuously advancing my methodology with the latest evidence in regenerative medicine and aesthetic science.",
  },
];

const pillars = [
  {
    icon: "◆",
    title: "Precision Medicine",
    description:
      "Physician-led expertise with evidence-based protocols. Every treatment is individually calibrated for optimal outcomes.",
  },
  {
    icon: "◆",
    title: "Regenerative Science",
    description:
      "Harnessing the body's natural healing mechanisms through advanced biologics and cutting-edge aesthetic techniques.",
  },
  {
    icon: "◆",
    title: "Holistic Wellness",
    description:
      "Addressing beauty from the inside out—integrating longevity medicine, skincare, and preventative health.",
  },
];

const stats = [
  { number: 20, label: "Years Experience", suffix: "+" },
  { number: 10000, label: "Patients Transformed", suffix: "+" },
  { number: 50, label: "Advanced Treatments", suffix: "+" },
  { number: 49, label: "Star Rating", suffix: "/5" },
];

function AnimatedCounter({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const increment = target / 100;
    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 20);
    return () => clearInterval(timer);
  }, [target]);

  return (
    <span>
      {count}
      {suffix}
    </span>
  );
}

const containerVariants = {
  hidden: {},
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { y: 15 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export default function AboutContent() {
  return (
    <main className="bg-[#0a1628]">
      {/* Hero Section */}
      <Hero
        variant="page"
        subtitle="About Healinque"
        title="Physician-Led Aesthetics & Longevity"
        description="Founded by Dr. Azi Shirazi, MD. Personally tested treatments, natural results, conservative approach combined with longevity medicine. Poway, California."
        image={pexelsUrl(pageImages.aboutIntro.primary, 1920)}
      />

      {/* Our Story Section */}
      <section className="relative py-24 bg-[#0a1628]">
        <div className="container-healinque">
          <motion.div
            className="grid lg:grid-cols-2 gap-16 items-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
          >
            {/* Story Content */}
            <motion.div variants={itemVariants} className="relative z-10">
              {/* Session 22: Rewritten in first-person. Dr. Shirazi speaks directly. */}
              <div className="mb-8 flex items-center gap-4">
                <div className="h-px w-12 bg-[#C9A227]"></div>
                <p className="font-montserrat text-xs uppercase tracking-widest text-white/60">
                  My Heritage
                </p>
              </div>

              <h2 className="font-cormorant-garamond text-5xl lg:text-6xl mb-8 text-white leading-tight">
                Aesthetic Medicine, <span className="text-[#C9A227] italic">Medically</span> Delivered
              </h2>

              <div className="space-y-6 text-white/70 leading-relaxed font-montserrat">
                <p className="text-lg">
                  I founded Healinque on a conviction: aesthetics is medicine. Not a salon service — a clinical discipline. I&apos;m an internal medicine physician with 20+ years of clinical experience and 10+ years in aesthetic medicine. Treatments are performed by me or by one of the nurse practitioners or physician assistants I&apos;ve personally trained.
                </p>
                <p className="text-lg">
                  Unlike conventional spas that apply templates, I investigate the deeper causes of aging. Why is your skin accelerating? What foundational interventions deliver lasting results? I combine aesthetic mastery with longevity science — treating you holistically, not cosmetically. Every treatment is personally tested before it enters my practice.
                </p>
                <p className="text-lg">
                  My approach: conservative, layered planning. Medical-grade precision. Natural results that age well. You won&apos;t be sold treatments you don&apos;t need, and I&apos;ll never overfill or chase trends.
                </p>
              </div>

              <div className="mt-10 flex items-center gap-8">
                <div className="flex flex-col">
                  <p className="font-cormorant-garamond text-4xl text-[#C9A227] font-light">20+</p>
                  <p className="text-white/50 font-montserrat text-sm">Years of Excellence</p>
                </div>
                <div className="h-12 w-px bg-white/10"></div>
                <div className="flex flex-col">
                  <p className="font-cormorant-garamond text-4xl text-[#C9A227] font-light">10K+</p>
                  <p className="text-white/50 font-montserrat text-sm">Transformations</p>
                </div>
              </div>
            </motion.div>

            {/* Story Image */}
            <motion.div variants={itemVariants} className="relative">
              <div className="absolute -inset-4 bg-gradient-to-br from-[#C9A227] to-transparent opacity-20 rounded-2xl blur-3xl"></div>
              <div className="relative aspect-[3/4] rounded-xl overflow-hidden border border-white/10 shadow-2xl">
                <Image
                  src={pexelsUrl(pageImages.aboutStory.primary, 1260)}
                  alt="Healinque wellness sanctuary"
                  fill
                  className="object-cover"
                />
              </div>

              {/* Decorative Gold Line */}
              <motion.div
                className="absolute top-0 -left-8 w-1 h-32 bg-[#C9A227]"
                initial={{ height: 0 }}
                whileInView={{ height: 128 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              ></motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Dr. Shirazi Section */}
      <section className="relative py-24 bg-[#0a1628] border-t border-white/5">
        <div className="container-healinque">
          <motion.div
            className="grid lg:grid-cols-2 gap-16 items-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
          >
            {/* Portrait */}
            <motion.div variants={itemVariants} className="relative order-last lg:order-first">
              <div className="absolute inset-0 bg-gradient-to-t from-[#C9A227] to-transparent opacity-10 rounded-2xl"></div>
              <div className="relative aspect-[2/3] rounded-2xl overflow-hidden border border-white/10">
                <Image
                  src={pexelsUrl(pageImages.aboutApproach.primary, 1260)}
                  alt="Dr. Azadeh Shirazi, MD"
                  fill
                  className="object-cover"
                />
              </div>

              {/* Accent Badge — Session 23: dialed from scale:0 pop to subtle scale:0.92 settle */}
              <motion.div
                className="absolute -bottom-6 -right-6 bg-[#C9A227] text-[#0a1628] rounded-full w-32 h-32 flex items-center justify-center text-center"
                initial={{ scale: 0.92 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
              >
                <div className="font-cormorant-garamond text-center">
                  <p className="text-xl font-bold">MD</p>
                  <p className="text-xs font-montserrat">Internal</p>
                  <p className="text-xs font-montserrat">Medicine</p>
                </div>
              </motion.div>
            </motion.div>

            {/* Credentials & Philosophy */}
            <motion.div variants={itemVariants} className="relative z-10">
              <div className="mb-8">
                <p className="font-montserrat text-xs uppercase tracking-widest text-[#C9A227] mb-4">
                  Medical Leadership
                </p>
                <h2 className="font-cormorant-garamond text-5xl lg:text-6xl text-white mb-4">
                  Dr. Azadeh Shirazi
                </h2>
                <p className="font-montserrat text-white/60">MD, Internal Medicine | 20+ Years Clinical | 10+ Years in Aesthetics</p>
              </div>

              <div className="mb-12">
                <p className="font-cormorant-garamond text-2xl text-white/90 italic mb-8 leading-relaxed">
                  &quot;{siteConfig.doctor.philosophy}&quot;
                </p>
              </div>

              {/* Credentials */}
              <div className="space-y-4 mb-12">
                <div className="flex gap-4 items-start">
                  <Check className="w-5 h-5 text-[#C9A227] flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-montserrat font-semibold text-white">MD, Internal Medicine</p>
                    <p className="text-white/60 text-sm">University of California, San Diego (UCSD)</p>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <Check className="w-5 h-5 text-[#C9A227] flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-montserrat font-semibold text-white">Advanced Aesthetic Training</p>
                    <p className="text-white/60 text-sm">Leading physician injectors in US and Europe</p>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <Check className="w-5 h-5 text-[#C9A227] flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-montserrat font-semibold text-white">Chair, Urgent Care Department</p>
                    <p className="text-white/60 text-sm">2022–2025 | Sharp Healthcare</p>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <Check className="w-5 h-5 text-[#C9A227] flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-montserrat font-semibold text-white">Physician-Led Care</p>
                    <p className="text-white/60 text-sm">Every treatment performed or supervised by Dr. Shirazi and her clinical team.</p>
                  </div>
                </div>
              </div>

              {/* Philosophy Statement — Session 22: first-person. */}
              <div className="pt-8 border-t border-white/10">
                <p className="text-white/70 font-montserrat leading-relaxed">
                  I treat the face medically. Conservative, layered approach. Every treatment is personally tested before I offer it. I prioritize long-term tissue health and natural-looking results over short-term maximalism.
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Our Approach - Three Pillars */}
      <section className="relative py-24 bg-[#0a1628] border-t border-white/5">
        <div className="container-healinque">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
          >
            <div className="text-center mb-16">
              <motion.div variants={itemVariants} className="mb-6">
                <p className="font-montserrat text-xs uppercase tracking-widest text-white/60 mb-4">
                  My Methodology
                </p>
                <h2 className="font-cormorant-garamond text-5xl lg:text-6xl text-white">
                  The Three Pillars
                </h2>
              </motion.div>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {pillars.map((pillar, idx) => (
                <motion.div key={idx} variants={itemVariants}>
                  <div className="group relative h-full">
                    <div className="absolute inset-0 bg-gradient-to-br from-[#C9A227]/10 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                    <div className="relative bg-white/[0.03] backdrop-blur-sm border border-white/10 rounded-2xl p-8 h-full hover:border-[#C9A227]/30 transition-all duration-500">
                      <div className="text-4xl text-[#C9A227] mb-6 font-serif">
                        {pillar.icon}
                      </div>

                      <h3 className="font-cormorant-garamond text-2xl text-white mb-4">
                        {pillar.title}
                      </h3>

                      <p className="text-white/70 font-montserrat leading-relaxed">
                        {pillar.description}
                      </p>

                      <motion.div
                        className="mt-6 h-0.5 bg-[#C9A227] origin-left"
                        initial={{ scaleX: 0 }}
                        whileInView={{ scaleX: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.5 + idx * 0.1 }}
                      ></motion.div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* By The Numbers - Animated Stats */}
      <section className="relative py-24 bg-[#0a1628] border-t border-white/5">
        <div className="container-healinque">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
          >
            <div className="text-center mb-16">
              <motion.div variants={itemVariants}>
                <h2 className="font-cormorant-garamond text-5xl lg:text-6xl text-white">
                  By The Numbers
                </h2>
              </motion.div>
            </div>

            <div className="grid md:grid-cols-4 gap-8">
              {stats.map((stat, idx) => (
                <motion.div key={idx} variants={itemVariants}>
                  <div className="text-center">
                    <div className="text-6xl lg:text-7xl font-cormorant-garamond text-[#C9A227] font-light mb-3">
                      <AnimatedCounter target={stat.number} suffix={stat.suffix} />
                    </div>
                    <p className="font-montserrat text-white/70">
                      {stat.label}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Core Values Grid */}
      <section className="relative py-24 bg-[#0a1628] border-t border-white/5">
        <div className="container-healinque">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
          >
            <div className="text-center mb-16">
              <motion.div variants={itemVariants}>
                <p className="font-montserrat text-xs uppercase tracking-widest text-white/60 mb-4">
                  My Foundation
                </p>
                <h2 className="font-cormorant-garamond text-5xl lg:text-6xl text-white">
                  Core Values
                </h2>
              </motion.div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {coreValues.map((value, idx) => (
                <motion.div key={idx} variants={itemVariants}>
                  <div className="group relative h-full">
                    <div className="absolute inset-0 bg-gradient-to-br from-[#C9A227]/5 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                    <div className="relative bg-white/[0.03] backdrop-blur-sm border border-white/10 rounded-xl p-6 h-full hover:border-[#C9A227]/50 transition-all duration-500">
                      <h3 className="font-cormorant-garamond text-xl text-white mb-3">
                        {value.title}
                      </h3>
                      <p className="text-white/60 font-montserrat text-sm leading-relaxed">
                        {value.description}
                      </p>

                      <motion.div
                        className="mt-4 h-0.5 bg-[#C9A227] origin-left"
                        initial={{ scaleX: 0 }}
                        whileInView={{ scaleX: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.4 + idx * 0.08 }}
                      ></motion.div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Premium CTA Section */}
      <section className="relative py-24 bg-[#0a1628] border-t border-white/5">
        <div className="container-healinque">
          <motion.div
            className="max-w-4xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
          >
            <motion.div variants={itemVariants} className="text-center">
              <h2 className="font-cormorant-garamond text-5xl lg:text-6xl text-white mb-6">
                Begin Your Transformation
              </h2>
              <p className="font-montserrat text-white/70 text-lg mb-12 max-w-2xl mx-auto">
                Discover how personalized aesthetic medicine and longevity science can reveal your most radiant self. Schedule a private consultation with Dr. Shirazi.
              </p>

              <motion.div
                className="flex flex-col sm:flex-row gap-6 justify-center items-center"
                variants={containerVariants}
              >
                <motion.div variants={itemVariants}>
                  <Link href="/book">
                    <Button className="bg-[#C9A227] hover:bg-[#b8921f] text-[#0a1628] px-10 py-6 font-montserrat font-semibold rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300">
                      Schedule Consultation <ArrowRight className="ml-3 h-5 w-5" />
                    </Button>
                  </Link>
                </motion.div>

                <motion.div variants={itemVariants}>
                  <Link href="/treatments">
                    <Button
                      variant="outline"
                      className="border-[#C9A227] text-[#C9A227] hover:bg-[#C9A227]/10 px-10 py-6 font-montserrat font-semibold rounded-lg transition-all duration-300"
                    >
                      Explore Treatments
                    </Button>
                  </Link>
                </motion.div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Footer Divider */}
      <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
    </main>
  );
}
