"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { motion } from "framer-motion";
import { PageHero as Hero } from "@/components/sections/hero";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/config/site";
import { pexelsUrl, pageImages } from "@/lib/data/images";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
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

const credentials = [
  {
    title: "MD, Internal Medicine",
    detail: "University of California, San Diego (UCSD)",
  },
  {
    title: "Internal Medicine Residency",
    detail: "UC San Diego Medical Center",
  },
  {
    title: "Chair, Urgent Care Department",
    detail: "2022–2025 | Sharp Healthcare",
  },
  {
    title: "Advanced Aesthetic Training",
    detail: "Leading physician injectors in the United States and Europe",
  },
  {
    title: "20+ Years Clinical Experience",
    detail: "Internal medicine physician | 10+ years aesthetic medicine",
  },
  {
    title: "Personally Performs Every Treatment",
    detail: "No delegation. Direct care from consultation through results.",
  },
];

export default function DrAziShiraziPage() {
  return (
    <main className="bg-[#0a1628]">
      <Hero
        variant="page"
        subtitle="Meet Your Physician"
        title="Dr. Azadeh Shirazi, MD"
        description="MD, Internal Medicine | 20+ Years Clinical Experience | 10+ Years in Aesthetic Medicine | Personally Performs Every Treatment"
        image={pexelsUrl(pageImages.drAziHero.primary, 1920)}
      />

      {/* Story Section — CREAM */}
      <section className="relative py-24 bg-cream">
        <div className="container-healinque">
          <motion.div
            className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
          >
            {/* Image Column */}
            <motion.div variants={itemVariants} className="relative">
              <div className="absolute -inset-4 bg-gradient-to-br from-[#C9A227]/20 to-transparent opacity-40 rounded-2xl blur-3xl" />
              <div className="relative aspect-[3/4] rounded-xl overflow-hidden border border-taupe/10 shadow-2xl">
                <Image
                  src="/images/dr-azi-shirazi.jpg"
                  alt="Dr. Azi Shirazi, MD Internal Medicine"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority
                />
              </div>

              {/* Accent Badge */}
              <motion.div
                className="absolute -bottom-6 -right-6 bg-[#C9A227] text-[#0a1628] rounded-full w-28 h-28 lg:w-32 lg:h-32 flex items-center justify-center text-center shadow-xl"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ type: "spring", delay: 0.4 }}
              >
                <div>
                  <p className="font-serif text-lg lg:text-xl font-bold">MD</p>
                  <p className="text-xs font-sans font-medium">Internal</p>
                  <p className="text-xs font-sans font-medium">Medicine</p>
                </div>
              </motion.div>
            </motion.div>

            {/* Content Column */}
            <motion.div variants={itemVariants} className="relative z-10">
              <div className="mb-8 flex items-center gap-4">
                <div className="h-px w-12 bg-[#C9A227]" />
                <p className="font-sans text-xs uppercase tracking-[0.2em] text-navy-deep/50">
                  Her Story
                </p>
              </div>

              <h2 className="font-serif text-4xl lg:text-5xl mb-8 text-navy-deep leading-tight">
                My <span className="text-[#C9A227] italic">Approach</span> to Aesthetics
              </h2>

              <div className="space-y-5 text-navy-deep/70 leading-relaxed">
                <p className="text-lg">
                  {siteConfig.doctor.story}
                </p>
                <p className="text-lg">
                  I completed my MD at UC San Diego and my internal medicine residency there as well. After spending two decades in internal medicine—including serving as Chair of our Urgent Care Department—I pursued advanced aesthetic training with leading physician injectors in the United States and Europe. This background gives me a unique perspective: I see patients holistically. I don&apos;t separate aesthetic goals from overall health and longevity.
                </p>
                <p className="text-lg">
                  Every treatment at Healinque is personally tested by me before it enters our practice. I don&apos;t overfill. I don&apos;t chase trends. I treat the face medically—with the same clinical precision I brought to internal medicine, applied to aesthetic outcomes that look natural and last.
                </p>
              </div>

              {/* Philosophy Quote */}
              <motion.blockquote
                className="border-l-4 border-[#C9A227] pl-6 my-10"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <p className="font-serif text-xl text-[#C9A227] italic leading-relaxed">
                  &ldquo;{siteConfig.doctor.philosophy}&rdquo;
                </p>
              </motion.blockquote>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Credentials — DARK */}
      <section className="relative py-24 bg-[#0a1628]">
        <div className="container-healinque">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
          >
            <div className="text-center mb-16">
              <motion.div variants={itemVariants}>
                <p className="font-sans text-xs uppercase tracking-[0.2em] text-white/50 mb-4">
                  Background & Recognition
                </p>
                <h2 className="font-serif text-4xl lg:text-5xl text-white">
                  Education & <span className="text-[#C9A227] italic">Achievement</span>
                </h2>
              </motion.div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {credentials.map((cred, idx) => (
                <motion.div key={idx} variants={itemVariants}>
                  <div className="group relative h-full">
                    <div className="absolute inset-0 bg-gradient-to-br from-[#C9A227]/10 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="relative bg-white/[0.03] backdrop-blur-sm border border-white/10 rounded-xl p-6 h-full hover:border-[#C9A227]/30 transition-all duration-500">
                      <Check className="w-5 h-5 text-[#C9A227] mb-3" />
                      <h3 className="font-serif text-lg text-white mb-2">
                        {cred.title}
                      </h3>
                      <p className="text-white/50 text-sm">{cred.detail}</p>

                      <motion.div
                        className="mt-4 h-0.5 bg-[#C9A227] origin-left"
                        initial={{ scaleX: 0 }}
                        whileInView={{ scaleX: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.4 + idx * 0.08 }}
                      />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Awards & Recognition — CREAM */}
      <section className="relative py-24 bg-cream">
        <div className="container-healinque">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
          >
            <div className="max-w-3xl mx-auto">
              <motion.div variants={itemVariants} className="mb-12">
                <div className="flex items-center gap-4 mb-6">
                  <div className="h-px w-12 bg-[#C9A227]" />
                  <p className="font-sans text-xs uppercase tracking-[0.2em] text-navy-deep/50">
                    Awards & Recognition
                  </p>
                </div>
                <h2 className="font-serif text-4xl lg:text-5xl text-navy-deep">
                  Recognized <span className="text-[#C9A227] italic">Excellence</span>
                </h2>
              </motion.div>

              <div className="space-y-4">
                {siteConfig.doctor.recognition.map((item: string, index: number) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    className="flex items-start gap-4 p-5 bg-white border border-taupe/10 rounded-lg hover:border-[#C9A227]/30 transition-colors"
                  >
                    <span className="w-8 h-8 rounded-full bg-[#C9A227]/10 flex items-center justify-center flex-shrink-0">
                      <span className="text-[#C9A227] font-serif font-bold text-sm">{index + 1}</span>
                    </span>
                    <p className="text-navy-deep/80 leading-relaxed">{item}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Philosophy Section — DARK */}
      <section className="relative py-24 bg-[#0a1628]">
        <div className="container-healinque">
          <motion.div
            className="max-w-4xl mx-auto text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
          >
            <motion.div variants={itemVariants}>
              <p className="font-sans text-xs uppercase tracking-[0.2em] text-white/50 mb-4">
                Guiding Principles
              </p>
              <h2 className="font-serif text-4xl lg:text-5xl text-white mb-8">
                A Philosophy of <span className="text-[#C9A227] italic">Care</span>
              </h2>
            </motion.div>

            <motion.p
              variants={itemVariants}
              className="text-white/70 text-lg leading-relaxed mb-12"
            >
              My practice is guided by four core principles: treat the face medically, lead with conservative layered plans, personally test every treatment, and always prioritize long-term tissue health over short-term cosmetic wins.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="grid sm:grid-cols-3 gap-8"
            >
              {[
                { label: "Medically Trained", desc: "I bring internal medicine precision to aesthetic outcomes—clinical assessment first, treatment plan second." },
                { label: "Conservative & Layered", desc: "I'd rather under-treat and add than over-treat and undo. Subtle, staged plans almost always look more natural." },
                { label: "Personally Tested", desc: "Every treatment I recommend, I've tested myself. If I wouldn't choose it for my own face, we don't offer it." },
              ].map((item, idx) => (
                <div key={idx} className="text-center">
                  <div className="w-16 h-16 rounded-full bg-[#C9A227]/10 flex items-center justify-center mx-auto mb-4">
                    <span className="text-[#C9A227] font-serif text-2xl font-bold">◆</span>
                  </div>
                  <h3 className="font-serif text-xl text-white mb-2">{item.label}</h3>
                  <p className="text-white/50 text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section — DARK with gold accent */}
      <section className="relative py-24 bg-[#0a1628] border-t border-white/5">
        <div className="container-healinque">
          <motion.div
            className="max-w-3xl mx-auto text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
          >
            <motion.div variants={itemVariants}>
              <h2 className="font-serif text-4xl lg:text-5xl text-white mb-6">
                Schedule Your <span className="text-[#C9A227] italic">Consultation</span>
              </h2>
              <p className="text-white/70 text-lg mb-12">
                Every patient consultation is 90 minutes with me. We discuss your goals, review your anatomy, and design a personalized plan. Results may vary. Individual results are not guaranteed.
              </p>
            </motion.div>

            <motion.div
              className="flex flex-col sm:flex-row gap-6 justify-center items-center"
              variants={containerVariants}
            >
              <motion.div variants={itemVariants}>
                <Link href="/book">
                  <Button className="bg-[#C9A227] hover:bg-[#b8921f] text-[#0a1628] px-10 py-6 font-sans font-semibold rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300">
                    Schedule Consultation <ArrowRight className="ml-3 h-5 w-5" />
                  </Button>
                </Link>
              </motion.div>

              <motion.div variants={itemVariants}>
                <Link href="/treatments">
                  <Button
                    variant="outline"
                    className="border-[#C9A227] text-[#C9A227] hover:bg-[#C9A227]/10 px-10 py-6 font-sans font-semibold rounded-lg transition-all duration-300"
                  >
                    Explore Treatments
                  </Button>
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      {/* Disclaimer */}
      <section className="py-12 bg-[#0a1628] text-center">
        <div className="container-healinque">
          <p className="text-white/50 text-xs leading-relaxed max-w-3xl mx-auto font-sans">
            Results may vary. Individual results are not guaranteed. Treatment recommendations are determined during your consultation with Dr. Shirazi. All treatments at Healinque are performed or directly supervised by Dr. Azi Shirazi, MD.
          </p>
        </div>
      </section>
    </main>
  );
}
