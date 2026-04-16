"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  MapPin,
  Phone,
  Clock,
  ChevronRight,
  Mail,
} from "lucide-react";
import { siteConfig } from "@/lib/config/site";

/**
 * LocationCTA — V2 Combined Section
 *
 * Merges the old LocationShowcase + CTABanner into one purposeful section.
 * Split layout: Left = location info, Right = CTA with gold accent.
 * This is the final section before the footer — drives conversion.
 */
export function LocationCTA() {
  return (
    <section className="relative overflow-hidden has-particles" data-wipe>
      {/* Split background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-navy-deep" />
        <div className="absolute right-0 top-0 bottom-0 w-full lg:w-1/2 bg-gradient-to-br from-gold/10 via-gold/5 to-transparent" />
      </div>

      <div className="relative z-10 container-healinque py-16 lg:py-24">
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-20 items-center">
          {/* Left: Location Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-xs font-sans uppercase tracking-[0.25em] text-gold/80 mb-3">
              Visit Us
            </p>
            <h2
              className="font-serif font-bold text-white leading-tight mb-8"
              style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.75rem)" }}
            >
              Visit Us in
              <br />
              <span className="text-gold italic heading-shimmer">Poway</span>
            </h2>

            <div className="space-y-5">
              {/* Address */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-gold/10 flex items-center justify-center flex-shrink-0 icon-pulse" data-magnetic="">
                  <MapPin className="h-5 w-5 text-gold" />
                </div>
                <div>
                  <p className="font-medium text-white">{siteConfig.address.street}</p>
                  <p className="text-white/60 text-sm">
                    {siteConfig.address.city}, {siteConfig.address.state} {siteConfig.address.zip}
                  </p>
                  <p className="text-white/50 text-xs mt-1">
                    Serving Rancho Bernardo, Scripps Ranch, Escondido, San Marcos, and Del Mar.
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-gold/10 flex items-center justify-center flex-shrink-0 icon-pulse" data-magnetic="">
                  <Phone className="h-5 w-5 text-gold" />
                </div>
                <div>
                  <a
                    href={`tel:${siteConfig.phone}`}
                    className="font-medium text-white hover:text-gold transition-colors"
                  >
                    {siteConfig.phone}
                  </a>
                  <p className="text-white/60 text-sm">Call or text</p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-gold/10 flex items-center justify-center flex-shrink-0 icon-pulse" data-magnetic="">
                  <Mail className="h-5 w-5 text-gold" />
                </div>
                <div>
                  <a
                    href={`mailto:${siteConfig.email}`}
                    className="font-medium text-white hover:text-gold transition-colors"
                  >
                    {siteConfig.email}
                  </a>
                </div>
              </div>

              {/* Hours */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-gold/10 flex items-center justify-center flex-shrink-0 icon-pulse" data-magnetic="">
                  <Clock className="h-5 w-5 text-gold" />
                </div>
                <div className="text-sm">
                  {siteConfig.hours.short.map((h: { day: string; hours: string; note?: string }, i: number) => (
                    <p key={i} className={h.hours === "Closed" ? "text-white/40" : "text-white/70"}>
                      <span className="font-medium text-white/90 inline-block w-24">{h.day}</span>
                      {h.hours}
                      {h.note && <span className="text-gold/60 ml-1">({h.note})</span>}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: CTA Block */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="bg-white/[0.03] backdrop-blur-sm border border-white/10 rounded-2xl p-8 lg:p-10">
              {/* Decorative corner */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-gold/10 to-transparent rounded-tr-2xl" />

              <h3
                className="font-serif font-bold text-white leading-tight mb-4"
                style={{ fontSize: "clamp(1.5rem, 2.5vw, 2.25rem)" }}
              >
                Ready to Talk Through<br />
                <span className="text-gold italic">What&apos;s Right for You?</span>
              </h3>

              <p className="text-white/60 leading-relaxed mb-8">
                Book a $100 consultation with Dr. Shirazi — 45–60 minutes to assess your concerns, discuss your goals, and create a personalized treatment plan. Credited toward your first treatment.
              </p>

              <div className="space-y-4">
                <Link href="/book" className="block">
                  <button className="group w-full inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-lg font-semibold text-navy-deep bg-gradient-to-r from-gold to-[#DEB84A] hover:shadow-lg hover:shadow-gold/25 transition-all duration-300">
                    Book Your Consultation
                    <ChevronRight className="h-5 w-5 group-hover:translate-x-0.5 transition-transform" />
                  </button>
                </Link>

                <div className="text-center text-xs text-white/40">
                  $100 consultation, credited toward your first treatment
                </div>

                <div className="flex items-center justify-center gap-6 pt-2">
                  <a
                    href={`tel:${siteConfig.phone}`}
                    className="text-sm text-white/50 hover:text-gold transition-colors underline underline-offset-4 decoration-white/20"
                  >
                    Prefer to call?
                  </a>
                  <Link
                    href="/contact"
                    className="text-sm text-white/50 hover:text-gold transition-colors underline underline-offset-4 decoration-white/20"
                  >
                    Send a message
                  </Link>
                </div>
              </div>

              {/* Trust note */}
              <div className="mt-8 pt-6 border-t border-white/5 text-center">
                <p className="text-xs text-white/30">
                  MD, Internal Medicine · 10+ Years Aesthetic Medicine · All treatments performed by Dr. Shirazi
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
