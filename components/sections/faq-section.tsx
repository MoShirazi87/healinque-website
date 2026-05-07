"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const faqs = [
  // Session 22: FAQ rewritten in first-person — Dr. Shirazi speaks directly.
  {
    question: "Do I need to be a certain age to have treatments?",
    answer: "There is no hard age requirement. Many of my patients in their late 20s and 30s start with preventative neuromodulators or skin-quality treatments, while others begin addressing volume loss or skin laxity later. During your consultation, I evaluate your skin, anatomy, and goals to recommend what makes sense for where you are right now.",
  },
  {
    question: "How long do results typically last?",
    answer: "It depends on the treatment. Neuromodulators (Botox, Dysport) typically last 3–4 months. Hyaluronic acid fillers last 6–18 months depending on the product and placement area. Biostimulators like Sculptra can last two years or more. Laser and microneedling results build over a series and can last a year or longer with proper skincare. I'll map out a realistic timeline during your consultation.",
  },
  {
    question: "What should I expect during my first consultation?",
    answer: "Your consultation is a 45–60 minute appointment with me. I'll review your medical history, assess your concerns, examine your skin and facial anatomy, and walk you through my recommendations. You'll leave with a written treatment plan, realistic expectations, and transparent pricing. The $100 consultation fee is credited toward any treatment you choose.",
  },
  {
    question: "Are treatments painful?",
    answer: "Most injectable treatments feel like a brief pinch. I use topical numbing for procedures like microneedling, laser resurfacing, and PRP. I prioritize comfort — if you're nervous, just tell me. I'll walk you through every step before anything happens.",
  },
  {
    question: "Do you offer financing options?",
    answer: "Yes. I partner with CareCredit and Cherry for flexible payment plans, including 0% APR options for qualified applicants. I also accept HSA/FSA cards for qualifying services. Ask my team for details when you book.",
  },
  {
    question: "What is your cancellation policy?",
    answer: "I ask for 48 hours' notice for cancellations or rescheduling. Late cancellations or no-shows may incur a $50 fee. If something comes up last minute, call me — I understand life happens.",
  },
];

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20 },
    visible: {
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section className="relative py-24 md:py-40 bg-[#0d1b2e] overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-l from-gold/8 to-transparent rounded-full filter blur-3xl opacity-10 -z-10" />
      <div className="absolute top-20 left-0 w-80 h-80 bg-gradient-to-r from-blue-500/8 to-transparent rounded-full filter blur-3xl opacity-10 -z-10" />

      <div className="container-healinque relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left Column - Section Header (Sticky) */}
          <motion.div
            initial={{ x: -15 }}
            whileInView={{ x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="lg:sticky lg:top-32 lg:h-fit"
          >
            {/* Subtitle */}
            <p className="text-gold font-medium tracking-[0.2em] uppercase text-xs mb-6">
              Common Questions
            </p>

            {/* Title */}
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6 leading-tight">
              Before You <span className="text-gold italic">Book</span>
            </h2>

            {/* Supporting text */}
            <p className="text-lg text-white/65 leading-relaxed mb-10">
              Everything you need to know about treatments, pricing, and what to expect during your visit.
            </p>

            {/* Contact CTA */}
            <div className="space-y-4">
              <p className="text-white/70 font-medium">
                Still have questions?
              </p>
              <Link href="/contact">
                <Button
                  className="rounded-xl bg-gold/10 border border-gold/30 text-gold hover:bg-gold/20 hover:border-gold/50 font-semibold h-auto px-8 py-3 transition-all duration-500"
                >
                  Get in Touch
                </Button>
              </Link>
            </div>
          </motion.div>

          {/* Right Column - Accordion */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-4 faq-accordion"
          >
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="group"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  aria-expanded={openIndex === index}
                  aria-controls={`faq-panel-${index}`}
                  id={`faq-trigger-${index}`}
                  className="w-full text-left p-6 md:p-8 rounded-xl bg-surface-card border border-white/5 hover:border-gold/20 transition-colors duration-300 hover:bg-surface-card/95 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
                >
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="text-lg md:text-xl font-serif font-semibold text-white group-hover:text-gold transition-colors duration-300 flex-1">
                      {faq.question}
                    </h3>
                    <motion.div
                      animate={{
                        rotate: openIndex === index ? 180 : 0,
                      }}
                      transition={{ duration: 0.3 }}
                      className="flex-shrink-0 mt-1"
                      aria-hidden="true"
                    >
                      <ChevronDown className="h-5 w-5 text-gold" />
                    </motion.div>
                  </div>
                </button>

                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      id={`faq-panel-${index}`}
                      role="region"
                      aria-labelledby={`faq-trigger-${index}`}
                      initial={{ height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 md:px-8 py-6 md:py-8 bg-surface-card/50 border-l-2 border-gold/40 border-r border-b border-white/5 rounded-b-xl">
                        <p className="text-white/75 leading-relaxed text-base md:text-lg">
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
