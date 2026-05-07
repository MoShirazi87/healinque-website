"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";
import { pexelsUrl, pageImages, pickImage } from "@/lib/data/images";

interface Service {
  id: string;
  name: string;
  description: string;
  image: string;
  link: string;
}

// Session 22: Restructured from 5 cards → 6 cards per client directive.
// Order: the 4 regenerative protocols first (client's primary focus), then Botox + Fillers as the
// foundational injectables. Copy is deliberately short — declutter directive from client.
const services: Service[] = [
  {
    id: "microneedling",
    name: "Microneedling + Exosomes",
    description:
      "Collagen induction paired with exosome support to improve texture, acne scarring, and skin renewal.",
    image: pexelsUrl(
      pickImage(
        pageImages.servicesMensHealth.primary,
        pageImages.servicesMensHealth.alts
      ),
      800
    ),
    link: "/treatments/microneedling",
  },
  {
    id: "peels",
    name: "Chemical Peels",
    description:
      "Targeted resurfacing for clarity, even tone, and healthy skin turnover.",
    image: pexelsUrl(
      pickImage(
        pageImages.servicesRegenerative.primary,
        pageImages.servicesRegenerative.alts
      ),
      800
    ),
    link: "/treatments/chemical-peels",
  },
  {
    id: "hair-restoration",
    name: "Hair Restoration",
    description:
      "Scalp-focused regenerative protocols for stronger, more resilient hair growth.",
    image: pexelsUrl(
      pickImage(
        pageImages.servicesWellness.primary,
        pageImages.servicesWellness.alts
      ),
      800
    ),
    link: "/treatments/scalp-microneedling",
  },
  {
    id: "custom-regenerative-plans",
    name: "Custom Regenerative Plans",
    description:
      "Strategically layered skin and scalp regeneration, paced to your goals over time.",
    image: pexelsUrl(
      pickImage(
        pageImages.servicesSkinRejuv.primary,
        pageImages.servicesSkinRejuv.alts
      ),
      800
    ),
    link: "/treatments/custom-regenerative-plans",
  },
  {
    id: "botox",
    name: "Botox & Neuromodulators",
    description:
      "Conservative, precise dosing for natural movement — not frozen, not overdone.",
    image: pexelsUrl(
      pickImage(
        pageImages.servicesAesthetics.primary,
        pageImages.servicesAesthetics.alts
      ),
      800
    ),
    link: "/treatments/botox-dysport",
  },
  {
    id: "fillers",
    name: "Dermal Fillers",
    description:
      "Subtle structural volume — lips, cheeks, jawline, and under-eyes — placed with restraint.",
    image: pexelsUrl(
      pickImage(
        pageImages.servicesSkinRejuv.primary,
        pageImages.servicesSkinRejuv.alts
      ),
      800
    ),
    link: "/treatments/dermal-fillers",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12 },
  },
};

const cardVariants = {
  hidden: { y: 20 },
  visible: {
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export function ServicesGrid() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleExpansionSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: wire to email service
    setSubmitted(true);
  };

  return (
    <section className="relative py-20 md:py-32 bg-navy-deep overflow-hidden">
      <div className="container-healinque relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ y: 15 }}
          whileInView={{ y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-6 md:mb-8"
        >
          {/* Session 22: Client-provided copy replaces prior "Our Core Treatments" framing. */}
          <p className="text-xs font-sans uppercase tracking-[0.25em] text-gold/80 mb-3">
            What I Offer
          </p>
          <h2
            className="font-serif font-bold text-white leading-tight mb-4"
            style={{ fontSize: "clamp(1.75rem, 3.5vw, 3rem)" }}
          >
            Personalized treatment plans, designed with{" "}
            <span className="text-gold italic">
              intention and balance.
            </span>
          </h2>
          <p className="text-base md:text-lg text-white/75 leading-relaxed max-w-2xl">
            Each protocol is carefully layered and timed to align with your
            goals and your skin&apos;s needs.
          </p>
        </motion.div>

        {/* Provider Model Note — Session 23: bumped to readable body copy (base/75 was sm/50). */}
        <motion.p
          initial={{ y: 10 }}
          whileInView={{ y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          viewport={{ once: true }}
          className="text-base text-white/75 italic mb-14 md:mb-20 max-w-2xl leading-relaxed"
        >
          Every treatment is performed by me, or by a nurse practitioner or
          physician assistant I&apos;ve personally trained.
        </motion.p>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {services.map((service) => (
            <motion.div key={service.id} variants={cardVariants}>
              <Link
                href={service.link}
                className="group block h-full rounded-2xl overflow-hidden bg-white/[0.03] border border-white/[0.06] backdrop-blur-sm transition-colors duration-500 hover:border-[#C9A227]/30 hover:bg-white/[0.05]"
              >
                {/* Card Image */}
                <div className="relative w-full aspect-[16/10] overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a1628]/80 via-[#0a1628]/20 to-transparent" />
                </div>

                {/* Card Content */}
                <div className="p-6 lg:p-7">
                  <h3 className="font-serif text-lg lg:text-xl font-bold text-white mb-3 group-hover:text-[#C9A227] transition-colors duration-300">
                    {service.name}
                  </h3>
                  <p className="text-white/75 text-base leading-relaxed mb-5">
                    {service.description}
                  </p>
                  {/* Session 22 CTA: stronger outcome verb than "Learn More". */}
                  <span className="inline-flex items-center gap-2 text-[#C9A227] text-sm font-medium group-hover:gap-3 transition-all duration-300">
                    See the Protocol
                    <span className="transition-transform duration-300 group-hover:translate-x-1">
                      &rarr;
                    </span>
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* Session 22: CTA pair below the grid — primary Book, secondary See all. */}
        <motion.div
          initial={{ y: 15 }}
          whileInView={{ y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          viewport={{ once: true }}
          className="mt-12 md:mt-16 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link
            href="/book"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full text-[#0a1628] font-semibold text-base bg-[#C9A227] hover:bg-[#D4AF37] transition-colors duration-300"
          >
            Book a Consultation
            <span aria-hidden>→</span>
          </Link>
          <Link
            href="/treatments"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full text-white font-medium text-base border border-white/20 hover:border-[#C9A227]/50 hover:text-[#C9A227] transition-all duration-300"
          >
            See All Treatments
          </Link>
        </motion.div>

        {/* Expanding Soon */}
        <motion.div
          initial={{ y: 20 }}
          whileInView={{ y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-20 md:mt-28 pt-12 border-t border-white/[0.06]"
        >
          <div className="max-w-2xl mx-auto text-center">
            <p className="text-xs font-sans uppercase tracking-[0.25em] text-gold/60 mb-3">
              On the Horizon
            </p>
            <h3
              className="font-serif font-bold text-white mb-4"
              style={{ fontSize: "clamp(1.25rem, 2.5vw, 1.75rem)" }}
            >
              Additional services are{" "}
              <span className="text-gold italic">expanding soon</span>
            </h3>
            <p className="text-white/75 text-base md:text-lg leading-relaxed mb-8 max-w-lg mx-auto">
              Medical weight loss, regenerative medicine, and longevity protocols
              are in development. I&apos;m building these programs the right
              way — with proper credentialing, safety infrastructure, and the
              same standard of care you expect from me.
            </p>

            {/* Email Capture */}
            {submitted ? (
              <motion.p
                initial={{ scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-[#C9A227] font-medium text-sm"
              >
                You&apos;re on the list. I&apos;ll be in touch.
              </motion.p>
            ) : (
              <form
                onSubmit={handleExpansionSubmit}
                className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
              >
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email address"
                  className="flex-1 px-4 py-3 rounded-lg bg-white/[0.05] border border-white/[0.1] text-white text-sm placeholder:text-white/30 focus:outline-none focus:border-[#C9A227]/50 focus:ring-1 focus:ring-[#C9A227]/30 transition-all duration-300"
                />
                <button
                  type="submit"
                  className="px-6 py-3 rounded-lg bg-[#C9A227] text-[#0a1628] text-sm font-semibold hover:bg-[#D4AF37] transition-colors duration-300 whitespace-nowrap"
                >
                  Notify Me
                </button>
              </form>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
