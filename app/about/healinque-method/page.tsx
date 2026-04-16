"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { PageHero as Hero } from "@/components/sections/hero";
import { Button } from "@/components/ui/button";
import { pexelsUrl, pageImages } from "@/lib/data/images";

const steps = [
  {
    number: "01",
    title: "Assess",
    description:
      "I start every consultation with a clinical assessment, not a sales menu. I review your medical history, examine your facial anatomy, and listen to what actually matters to you. In 90 minutes, we build a complete picture—not just surface concerns, but the underlying factors driving aging. This is foundational to good results.",
  },
  {
    number: "02",
    title: "Plan",
    description: `Based on that assessment, I create a personalized treatment plan. It's layered and conservative—we start with what will make the most difference, leave room to refine, and plan for maintenance. I believe in enhancement, not transformation. You'll look like the best version of you, not like someone else.`,
  },
  {
    number: "03",
    title: "Deliver",
    description: `I personally perform every treatment. We use premium products and advanced techniques with careful attention to comfort and precision. But the work doesn't end after the needle. I provide detailed aftercare, schedule follow-ups, and adjust over time. Lasting results come from consistency and thoughtfulness.`,
  },
];

const whyMatters = [
  {
    title: `You won't be sold something you don't need.`,
    description: `I assess first, recommend second. If a treatment won't move the needle for your goals, I'll tell you that. Conservative medicine is good medicine.`,
  },
  {
    title: "Your plan fits your budget and pace.",
    description: `Layered plans give you control. Start here, refine next quarter, maintain long-term. You're never locked into a package or pressured into more than feels right.`,
  },
  {
    title: "Results that actually look natural.",
    description: `Subtle, staged outcomes almost always age better and last longer than the 'wow' initial result. I'd rather people notice you look great than that you had work done.`,
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

export default function HealinqueMethodPage() {
  return (
    <main className="overflow-hidden">
      {/* Hero - Dark */}
      <Hero
        variant="page"
        title="The Healinque Method"
        subtitle="Our Approach"
        description="A thoughtful, physician-led approach to aesthetic treatment focused on natural results and your overall wellbeing."
        image={pexelsUrl(pageImages.aboutApproach.primary, 1920)}
        overlay="dark"
      />

      {/* Intro - Cream */}
      <motion.section
        className="section-padding bg-cream text-navy-deep"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="container-healinque">
          <div className="max-w-3xl mx-auto">
            {/* Section Label */}
            <div className="flex items-center gap-4 mb-8">
              <motion.div
                className="h-0.5 w-8 bg-[#C9A227]"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              />
              <span className="text-xs font-sans font-semibold uppercase tracking-[0.15em] text-navy-deep/60">
                Our Philosophy
              </span>
            </div>

            {/* Heading with Gold Accent */}
            <motion.h2
              className="font-serif text-5xl mb-6 text-navy-deep leading-tight"
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              The <span className="text-[#C9A227] italic">Healinque</span> Method
            </motion.h2>

            {/* Description */}
            <motion.p
              className="text-lg text-navy-deep/80 leading-relaxed font-sans"
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              Aesthetics is medicine. Every patient gets a clinical assessment, a personalized plan, and personally performed treatments. I lead with conservative, layered approaches that prioritize long-term tissue health and natural-looking results over short-term maximalism.
            </motion.p>
          </div>
        </div>
      </motion.section>

      {/* Steps - Dark */}
      <motion.section
        className="section-padding bg-[#0a1628] text-white"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="container-healinque">
          {/* Section Label */}
          <div className="flex items-center gap-4 mb-12">
            <motion.div
              className="h-0.5 w-8 bg-[#C9A227]"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            />
            <span className="text-xs font-sans font-semibold uppercase tracking-[0.15em] text-white/60">
              Three Steps
            </span>
          </div>

          {/* Steps Grid */}
          <motion.div
            className="space-y-16"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {steps.map((step, idx) => (
              <motion.div
                key={step.number}
                variants={itemVariants}
                className="relative"
              >
                {/* Step Number - Large Gold */}
                <div className="flex gap-8 lg:gap-12 items-start">
                  <motion.div
                    className="flex-shrink-0"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                  >
                    <span className="font-serif text-7xl lg:text-8xl font-bold text-[#C9A227]/20 block leading-none">
                      {step.number}
                    </span>
                  </motion.div>

                  {/* Step Content */}
                  <div className="flex-grow pt-4">
                    <motion.h3
                      className="font-serif text-3xl lg:text-4xl text-[#C9A227] mb-4"
                      variants={itemVariants}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      transition={{ delay: 0.2 }}
                    >
                      {step.title}
                    </motion.h3>

                    <motion.p
                      className="text-base lg:text-lg text-white/80 leading-relaxed font-sans"
                      variants={itemVariants}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 }}
                    >
                      {step.description}
                    </motion.p>

                    {/* Gold Underline */}
                    <motion.div
                      className="mt-6 h-0.5 bg-[#C9A227] origin-left w-12"
                      initial={{ scaleX: 0 }}
                      whileInView={{ scaleX: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.4 }}
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Why This Matters - Cream */}
      <motion.section
        className="section-padding bg-cream text-navy-deep"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="container-healinque">
          {/* Section Label */}
          <div className="flex items-center gap-4 mb-12">
            <motion.div
              className="h-0.5 w-8 bg-[#C9A227]"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            />
            <span className="text-xs font-sans font-semibold uppercase tracking-[0.15em] text-navy-deep/60">
              The Impact
            </span>
          </div>

          {/* Heading */}
          <motion.h2
            className="font-serif text-4xl lg:text-5xl mb-12 text-navy-deep leading-tight max-w-2xl"
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            Why This <span className="text-[#C9A227] italic">Approach</span> Matters
          </motion.h2>

          {/* Cards Grid */}
          <motion.div
            className="grid md:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {whyMatters.map((item, idx) => (
              <motion.div
                key={item.title}
                variants={itemVariants}
                className="bg-white border border-taupe/10 rounded-xl p-8 hover:shadow-lg transition-shadow duration-300"
              >
                <motion.h3
                  className="font-serif text-2xl text-navy-deep mb-4"
                  variants={itemVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + idx * 0.1 }}
                >
                  {item.title}
                </motion.h3>

                <motion.p
                  className="text-navy-deep/75 leading-relaxed font-sans"
                  variants={itemVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + idx * 0.1 }}
                >
                  {item.description}
                </motion.p>

                {/* Gold Underline - animated */}
                <motion.div
                  className="mt-6 h-0.5 bg-[#C9A227] origin-left"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.4 + idx * 0.08 }}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* CTA - Dark */}
      <motion.section
        className="section-padding bg-[#0a1628] text-white relative overflow-hidden"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        {/* Subtle background accent */}
        <motion.div
          className="absolute top-0 right-0 w-96 h-96 bg-[#C9A227]/5 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
          }}
        />

        <div className="container-healinque relative z-10">
          <div className="max-w-2xl mx-auto text-center">
            {/* Section Label */}
            <div className="flex items-center gap-4 mb-8 justify-center">
              <motion.div
                className="h-0.5 w-8 bg-[#C9A227]"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              />
              <span className="text-xs font-sans font-semibold uppercase tracking-[0.15em] text-white/60">
                Ready?
              </span>
              <motion.div
                className="h-0.5 w-8 bg-[#C9A227]"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              />
            </div>

            {/* Heading */}
            <motion.h2
              className="font-serif text-4xl lg:text-5xl mb-6 text-white leading-tight"
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              Experience the <span className="text-[#C9A227] italic">Difference</span>
            </motion.h2>

            {/* Description */}
            <motion.p
              className="text-lg text-white/80 mb-10 font-sans"
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              Book a 90-minute consultation. We&apos;ll assess, discuss, and design a plan that works for you. Results may vary. Individual results are not guaranteed.
            </motion.p>

            {/* CTA Button */}
            <motion.div
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <Link href="/book">
                <Button className="bg-[#C9A227] hover:bg-[#B8941D] text-[#0a1628] px-8 py-3 font-sans font-semibold">
                  Schedule Your Consultation <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </motion.section>
    </main>
  );
}
