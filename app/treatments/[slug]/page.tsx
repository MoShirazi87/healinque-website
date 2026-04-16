"use client";

import { useState } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { motion } from "framer-motion";
import {
  ChevronDown,
  Clock,
  Sparkles,
  Shield,
  ArrowRight,
  Check,
  Phone,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { treatments } from "@/lib/data/treatments";
import type { Treatment } from "@/lib/data/treatments";
import { pickImage } from "@/lib/data/images";
import { Disclaimer } from "@/components/ui/disclaimer";

/* ─── FAQ Accordion ─── */
function FAQItem({
  question,
  answer,
}: {
  question: string;
  answer: string;
  index: number;
}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-navy-deep/10 last:border-0">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center py-5 text-left group"
      >
        <span className="font-medium text-navy-deep group-hover:text-gold transition-colors pr-4">
          {question}
        </span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
          className="flex-shrink-0"
        >
          <ChevronDown className="h-5 w-5 text-gold" />
        </motion.div>
      </button>
      <motion.div
        initial={false}
        animate={{ height: isOpen ? "auto" : 0 }}
        transition={{ duration: 0.3 }}
        className="overflow-hidden"
      >
        <div className="pb-5">
          <p className="text-navy-deep/60 leading-relaxed">{answer}</p>
        </div>
      </motion.div>
    </div>
  );
}

/* ─── Main Treatment Page ─── */
export default function TreatmentPage() {
  const params = useParams();
  const slug = params.slug as string;

  const treatment = treatments.find((t) => t.slug === slug);
  if (!treatment) notFound();

  return (
    <main>
      {/* ═══ HERO — Dark, full-bleed image ═══ */}
      <section className="relative min-h-[60vh] lg:min-h-[70vh] flex items-end overflow-hidden bg-navy-deep pt-[160px]">
        <div className="absolute inset-0 z-0">
          <Image
            src={pickImage(treatment.image, treatment.imageAlts)}
            alt={treatment.name}
            fill
            className="object-cover"
            priority
            sizes="100vw"
            quality={85}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy-deep via-navy-deep/50 to-navy-deep/40" />
        </div>

        <div className="relative z-10 container-healinque pb-12 lg:pb-16">
          {/* Breadcrumb */}
          <nav className="mb-6 flex items-center flex-wrap gap-2 text-xs md:text-sm text-white/50">
            <Link href="/" className="hover:text-gold transition-colors">Home</Link>
            <span>/</span>
            <Link href="/treatments" className="hover:text-gold transition-colors">Treatments</Link>
            <span>/</span>
            <span className="text-gold">{treatment.name}</span>
          </nav>

          <span className="inline-block px-3 py-1 mb-4 rounded-full border border-gold/30 text-gold text-xs uppercase tracking-wider">
            {treatment.category.replace(/-/g, " ")}
          </span>

          <h1
            className="font-serif font-bold text-white leading-[1.05] mb-4"
            style={{ fontSize: "clamp(2.5rem, 5vw, 4.5rem)" }}
          >
            {treatment.name}
          </h1>

          <p className="text-lg lg:text-xl text-white/70 max-w-2xl leading-relaxed">
            {treatment.tagline}
          </p>
        </div>
      </section>

      {/* ═══ QUICK FACTS — Light strip ═══ */}
      <section className="bg-cream border-y border-taupe/10">
        <div className="container-healinque py-6 lg:py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 text-center">
            <div>
              <Clock className="h-5 w-5 mx-auto mb-2 text-gold" />
              <p className="text-[10px] text-navy-deep/40 uppercase tracking-wider mb-1">Duration</p>
              <p className="text-sm font-semibold text-navy-deep">{treatment.procedure.duration}</p>
            </div>
            <div>
              <Sparkles className="h-5 w-5 mx-auto mb-2 text-gold" />
              <p className="text-[10px] text-navy-deep/40 uppercase tracking-wider mb-1">Results</p>
              <p className="text-sm font-semibold text-navy-deep">{treatment.procedure.results}</p>
            </div>
            <div>
              <Shield className="h-5 w-5 mx-auto mb-2 text-gold" />
              <p className="text-[10px] text-navy-deep/40 uppercase tracking-wider mb-1">Downtime</p>
              <p className="text-sm font-semibold text-navy-deep">{treatment.procedure.downtime}</p>
            </div>
            <div>
              <span className="inline-block text-gold font-bold text-lg mb-2">$</span>
              <p className="text-[10px] text-navy-deep/40 uppercase tracking-wider mb-1">Price</p>
              <p className="text-sm font-semibold text-navy-deep">
                {treatment.pricing.range || `From $${treatment.pricing.starting}`}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ ABOUT — Light (cream) background ═══ */}
      <section className="bg-cream py-16 lg:py-24">
        <div className="container-healinque">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <p className="text-xs font-sans uppercase tracking-[0.25em] text-gold mb-3">
                About This Treatment
              </p>
              <h2
                className="font-serif font-bold text-navy-deep leading-tight mb-6"
                style={{ fontSize: "clamp(1.5rem, 3vw, 2.5rem)" }}
              >
                What Is <span className="text-gold italic">{treatment.name}</span>?
              </h2>
              <p className="text-base lg:text-lg text-navy-deep/70 leading-relaxed">
                {treatment.description}
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══ BENEFITS — Dark ═══ */}
      <section className="bg-navy-deep py-16 lg:py-24">
        <div className="container-healinque">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-10"
          >
            <p className="text-xs font-sans uppercase tracking-[0.25em] text-gold/80 mb-3">
              Benefits
            </p>
            <h2
              className="font-serif font-bold text-white leading-tight"
              style={{ fontSize: "clamp(1.5rem, 3vw, 2.5rem)" }}
            >
              Key <span className="text-gold italic">Benefits</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-4">
            {treatment.benefits.map((benefit, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05, duration: 0.4 }}
                className="flex gap-3 p-4 rounded-lg bg-white/[0.03] border border-white/5 hover:border-gold/20 transition-colors"
              >
                <Check className="h-5 w-5 text-gold flex-shrink-0 mt-0.5" />
                <p className="text-white/75 text-sm leading-relaxed">{benefit}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ IDEAL FOR — Light ═══ */}
      <section className="bg-cream py-16 lg:py-24">
        <div className="container-healinque">
          <div className="grid gap-6 lg:grid-cols-[1fr_1.5fr] lg:gap-10 items-start">
            <motion.div
              initial={{ opacity: 0, x: -15 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <p className="text-xs font-sans uppercase tracking-[0.25em] text-gold mb-3">
                Is This Right For You?
              </p>
              <h2
                className="font-serif font-bold text-navy-deep leading-tight mb-4"
                style={{ fontSize: "clamp(1.5rem, 3vw, 2.5rem)" }}
              >
                Who <span className="text-gold italic">Benefits</span> Most
              </h2>
              <p className="text-navy-deep/50 text-sm">
                {treatment.name} may be ideal if any of the following describe you.
              </p>
            </motion.div>

            <div className="space-y-3">
              {treatment.idealFor.map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: 10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.05, duration: 0.4 }}
                  className="flex gap-3 p-4 bg-white rounded-lg border border-taupe/10 hover:border-gold/30 transition-colors"
                >
                  <span className="text-gold font-serif text-lg">•</span>
                  <p className="text-navy-deep/70 text-sm leading-relaxed">{item}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══ FAQ — Dark ═══ */}
      <section className="bg-navy-deep py-16 lg:py-24">
        <div className="container-healinque">
          <div className="grid gap-6 lg:grid-cols-[1fr_2fr] lg:gap-10">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <p className="text-xs font-sans uppercase tracking-[0.25em] text-gold/80 mb-3">
                Questions
              </p>
              <h2
                className="font-serif font-bold text-white leading-tight mb-4"
                style={{ fontSize: "clamp(1.5rem, 3vw, 2.5rem)" }}
              >
                Frequently <span className="text-gold italic">Asked</span>
              </h2>
              <p className="text-white/40 text-sm">
                Can&apos;t find your answer? Call or text us at{" "}
                <a href="tel:+18583377999" className="text-gold hover:underline">(858) 337-7999</a>
              </p>
            </motion.div>

            <div className="bg-cream rounded-xl p-6 lg:p-8">
              {treatment.faqs.map((faq, idx) => (
                <FAQItem
                  key={idx}
                  question={faq.question}
                  answer={faq.answer}
                  index={idx}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══ CTA — Gold accent ═══ */}
      <section className="relative bg-navy-deep py-16 lg:py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-gold/5 via-transparent to-gold/5" />
        <div className="container-healinque relative z-10 text-center">
          <h2
            className="font-serif font-bold text-white leading-tight mb-4"
            style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.75rem)" }}
          >
            Ready for Your <span className="text-gold italic">Transformation</span>?
          </h2>
          <p className="text-white/50 max-w-xl mx-auto mb-8">
            Schedule a consultation with Dr. Shirazi to discuss how {treatment.name.toLowerCase()} can help you achieve your goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/book">
              <Button className="bg-gold hover:bg-gold/90 text-navy-deep px-8 py-3 rounded-lg font-semibold">
                Book Consultation <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <a href="tel:+18583377999">
              <Button
                variant="outline"
                className="border-2 border-white/20 text-white hover:bg-white/5 px-8 py-3 rounded-lg font-semibold"
              >
                <Phone className="mr-2 h-4 w-4" /> Call or Text
              </Button>
            </a>
          </div>
          <div className="mt-10 max-w-2xl mx-auto">
            <Disclaimer className="text-white/40 text-center" />
          </div>
        </div>
      </section>
    </main>
  );
}
