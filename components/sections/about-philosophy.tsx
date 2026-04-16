"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useRandomImage } from "@/hooks/useRandomImage";
import { pexelsUrl, pageImages } from "@/lib/data/images";

export function AboutPhilosophy() {
  const philosophyImage = useRandomImage(
    pexelsUrl(pageImages.aboutPhilosophy.primary, 1200),
    pageImages.aboutPhilosophy.alts?.map(id => pexelsUrl(id, 1200))
  );

  const imageVariants = {
    hidden: { opacity: 0, scale: 1.05 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 1.2, ease: "easeOut" },
    },
  };

  const contentVariants = {
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
      transition: { duration: 0.8 },
    },
  };

  return (
    <section className="relative py-24 md:py-40 bg-[#0a1628] overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-[#C9A227]/8 to-transparent rounded-full filter blur-3xl opacity-20 -z-10" />
      <div className="absolute bottom-20 right-0 w-80 h-80 bg-gradient-to-l from-blue-500/8 to-transparent rounded-full filter blur-3xl opacity-15 -z-10" />

      <div className="container-healinque relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-[55%_45%] gap-12 lg:gap-20 items-center">
          {/* Left Column - Image with Stats Card */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={imageVariants}
            className="relative order-2 lg:order-1"
          >
            {/* Image Container with Gold Border Glow */}
            <div className="relative rounded-2xl overflow-hidden aspect-[4/5] border-2 border-[#C9A227]/30 shadow-2xl group hover:border-[#C9A227]/60 transition-all duration-500 hover:shadow-[0_20px_60px_rgba(201,162,39,0.15)]">
              <Image
                src={philosophyImage}
                alt="Dr. Shirazi - Healinque Wellness"
                fill
                className="object-cover transition-transform duration-700"
              />
              {/* Subtle overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a1628]/40 via-transparent to-transparent" />
            </div>

            {/* Stats Card - Overlapping */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              viewport={{ once: true }}
              className="absolute -bottom-8 -right-8 bg-[#0a1628] border-2 border-[#C9A227]/40 rounded-xl p-6 md:p-8 shadow-2xl w-56 backdrop-blur-sm hover:border-[#C9A227]/60 transition-all duration-500"
            >
              <p className="text-5xl md:text-6xl font-serif font-bold text-[#C9A227] mb-2">
                20+
              </p>
              <p className="text-white/80 text-sm font-medium leading-tight">
                Years of Medical Excellence
              </p>
            </motion.div>
          </motion.div>

          {/* Right Column - Content */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={contentVariants}
            className="flex flex-col justify-center order-1 lg:order-2"
          >
            {/* Subtitle */}
            <motion.p
              variants={itemVariants}
              className="text-[#C9A227] font-medium tracking-[0.2em] uppercase text-xs mb-4 font-sans"
            >
              ABOUT HEALINQUE
            </motion.p>

            {/* Main Title with Gold Italic Accent */}
            <motion.h2
              variants={itemVariants}
              className="text-5xl md:text-6xl lg:text-6xl font-serif font-bold text-white mb-2 leading-tight"
            >
              Where Science Meets{" "}
              <span className="text-[#C9A227] italic">Artistry</span>
            </motion.h2>

            {/* Gold Decorative Line */}
            <motion.div
              variants={itemVariants}
              className="w-20 h-1 bg-gradient-to-r from-[#C9A227] to-[#C9A227]/40 mb-10"
            />

            {/* Philosophy Paragraphs */}
            <motion.p
              variants={itemVariants}
              className="text-lg text-white/75 leading-relaxed mb-6"
            >
              At Healinque, we believe that lasting results start beneath the surface. Our approach combines advanced dermatologic science with a deep understanding of facial anatomy, skin biology, and whole-body health.
            </motion.p>

            <motion.p
              variants={itemVariants}
              className="text-lg text-white/75 leading-relaxed mb-8"
            >
              Every treatment is tailored to your individual anatomy, goals, and medical history. Dr. Shirazi personally evaluates every patient and designs each protocol — because your face deserves more than a template.
            </motion.p>

            {/* Large Pull Quote */}
            <motion.div
              variants={itemVariants}
              className="border-l-4 border-[#C9A227]/60 pl-6 md:pl-8 py-6 mb-10 bg-white/[0.02] px-6 md:px-8 rounded-r-lg"
            >
              <p className="text-xl md:text-2xl font-serif italic text-white/90 leading-relaxed">
                &quot;Beauty is not about becoming someone else. It&apos;s about becoming the most refined version of yourself.&quot;
              </p>
            </motion.div>

            {/* Dr. Credential Line */}
            <motion.p
              variants={itemVariants}
              className="text-sm text-white/70 mb-10 font-medium"
            >
              <span className="text-[#C9A227]">Dr. Azadeh Shirazi</span>
              <span className="text-white/50 mx-2">·</span>
              <span>MD, Internal Medicine</span>
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link href="/about" className="flex-1 sm:flex-none">
                <Button
                  size="lg"
                  className="w-full rounded-xl bg-[#C9A227] text-[#0a1628] hover:bg-[#C9A227]/90 font-semibold h-auto px-8 py-4 transition-all duration-500 hover:shadow-[0_10px_30px_rgba(201,162,39,0.3)]"
                >
                  Meet Dr. Shirazi
                </Button>
              </Link>
              <Link href="/about/healinque-method" className="flex-1 sm:flex-none">
                <Button
                  size="lg"
                  className="w-full rounded-xl border-2 border-[#C9A227]/40 text-[#C9A227] hover:bg-[#C9A227]/10 hover:border-[#C9A227]/70 font-semibold h-auto px-8 py-4 bg-transparent transition-all duration-500 backdrop-blur-sm"
                >
                  Our Philosophy
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
