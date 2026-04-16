"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { PageHero as Hero } from "@/components/sections/hero";
import { ConsultationForm } from "@/components/sections/consultation-form";
import { concerns } from "@/lib/data/concerns";
import { Button } from "@/components/ui/button";
import { pexelsUrl, pageImages, videos } from "@/lib/data/images";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

export default function ConcernsPage() {
  return (
    <main className="bg-[#0a1628]">
      <Hero
        variant="page"
        subtitle="Your Concerns"
        title="What Would You Like to Address?"
        description="Every patient is unique. Tell us what's bothering you, and we'll help you find the treatments that can make a difference."
        image={pexelsUrl(pageImages.concernsHero.primary, 1920)}
        video={videos.skincare}
      />

      {/* Intro — CREAM */}
      <section className="relative py-20 bg-cream">
        <div className="container-healinque">
          <motion.div
            className="max-w-3xl mx-auto text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
          >
            <motion.div variants={itemVariants} className="flex items-center justify-center gap-4 mb-6">
              <div className="h-px w-12 bg-[#C9A227]" />
              <p className="font-sans text-xs uppercase tracking-[0.2em] text-navy-deep/50">
                Start Here
              </p>
              <div className="h-px w-12 bg-[#C9A227]" />
            </motion.div>
            <motion.h2
              variants={itemVariants}
              className="font-serif text-4xl lg:text-5xl text-navy-deep mb-6 leading-tight"
            >
              Find Your <span className="text-[#C9A227] italic">Path</span> Forward
            </motion.h2>
            <motion.p variants={itemVariants} className="text-navy-deep/70 text-lg leading-relaxed">
              Explore the concerns below. Each one links to a detailed page with treatment options,
              expected results, and at-home care. If you&apos;re not sure what you need, we&apos;re here
              to help you decide.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Concerns Grid — DARK */}
      <section className="relative py-24 bg-[#0a1628]">
        <div className="container-healinque">
          <motion.div
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
          >
            <motion.div variants={itemVariants} className="flex items-center justify-center gap-4 mb-4">
              <div className="h-px w-12 bg-[#C9A227]" />
              <p className="font-sans text-xs uppercase tracking-[0.2em] text-white/50">
                Common Concerns
              </p>
              <div className="h-px w-12 bg-[#C9A227]" />
            </motion.div>
            <motion.h2
              variants={itemVariants}
              className="font-serif text-4xl lg:text-5xl text-white"
            >
              What Brings You <span className="text-[#C9A227] italic">In</span>
            </motion.h2>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={containerVariants}
          >
            {concerns.map((concern) => (
              <motion.div key={concern.id} variants={itemVariants}>
                <Link href={`/concerns/${concern.slug}`} className="group block h-full">
                  <div className="relative bg-white/[0.03] backdrop-blur-sm border border-white/10 rounded-xl overflow-hidden hover:border-[#C9A227]/40 transition-all duration-500 h-full flex flex-col">
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0a1628] via-transparent to-transparent z-10 opacity-60 group-hover:opacity-80 transition-opacity" />
                      <Image
                        src={concern.image}
                        alt={concern.name}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                    </div>
                    <div className="p-6 flex-1 flex flex-col">
                      <h2 className="font-serif text-xl text-white group-hover:text-[#C9A227] transition-colors mb-2">
                        {concern.name}
                      </h2>
                      <p className="text-sm text-white/60 mb-5 flex-1 leading-relaxed">
                        {concern.tagline}
                      </p>
                      <div className="flex flex-wrap gap-2 mb-5">
                        {concern.treatments.slice(0, 2).map((treatment) => (
                          <span
                            key={treatment.slug}
                            className="text-[11px] px-2.5 py-1 bg-[#C9A227]/10 border border-[#C9A227]/20 rounded-full text-[#C9A227]/80 font-sans tracking-wide"
                          >
                            {treatment.name}
                          </span>
                        ))}
                        {concern.treatments.length > 2 && (
                          <span className="text-[11px] px-2.5 py-1 bg-white/5 rounded-full text-white/40 font-sans">
                            +{concern.treatments.length - 2}
                          </span>
                        )}
                      </div>
                      <span className="inline-flex items-center text-sm font-sans font-medium text-[#C9A227] group-hover:gap-3 gap-2 transition-all">
                        Explore <ArrowRight className="h-4 w-4" />
                      </span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA — CREAM */}
      <section className="relative py-24 bg-cream">
        <div className="container-healinque">
          <motion.div
            className="max-w-3xl mx-auto text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
          >
            <motion.div variants={itemVariants}>
              <p className="font-sans text-xs uppercase tracking-[0.2em] text-navy-deep/50 mb-4">
                Not Sure Yet?
              </p>
              <h2 className="font-serif text-4xl lg:text-5xl text-navy-deep mb-6">
                Let&apos;s Talk <span className="text-[#C9A227] italic">It Through</span>
              </h2>
              <p className="text-navy-deep/70 text-lg leading-relaxed mb-10">
                Schedule a consultation with Dr. Shirazi. She&apos;ll listen to your concerns,
                assess your unique needs, and create a personalized treatment plan.
              </p>
            </motion.div>

            <motion.div variants={itemVariants}>
              <Link href="/book">
                <Button
                  size="lg"
                  className="bg-[#C9A227] hover:bg-[#b8921f] text-[#0a1628] px-10 py-6 font-sans font-semibold rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300"
                >
                  Schedule Your Consultation <ArrowRight className="ml-3 h-5 w-5" />
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Consultation Form — DARK */}
      <ConsultationForm
        variant="split"
        title="Tell Us About Your Concerns"
        subtitle="Get Started"
      />
    </main>
  );
}
