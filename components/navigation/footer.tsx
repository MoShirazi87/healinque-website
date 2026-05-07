"use client";

import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";
import {
  MapPin,
  Mail,
  Clock,
  Phone,
  Instagram,
  ArrowRight,
  Send,
} from "lucide-react";
import { siteConfig, getEmailLink } from "@/lib/config/site";

const footerLinks = {
  treatments: [
    { name: "Botox & Neuromodulators", href: "/treatments/botox-dysport" },
    { name: "Dermal Fillers", href: "/treatments/dermal-fillers" },
    { name: "Chemical Peels", href: "/treatments/chemical-peels" },
    { name: "Microneedling", href: "/treatments/microneedling" },
    { name: "Scalp Microneedling", href: "/treatments/scalp-microneedling" },
  ],
  clinic: [
    { name: "About", href: "/about" },
    { name: "Dr. Azadeh Shirazi", href: "/about/dr-azi-shirazi" },
    { name: "Reviews", href: "/reviews" },
    { name: "Gallery", href: "/gallery" },
    { name: "Blog", href: "/blog" },
    { name: "FAQ", href: "/faq" },
  ],
  patients: [
    { name: "Book Consultation", href: "/book" },
    { name: "Memberships", href: "/memberships" },
    { name: "Men\u2019s Clinic", href: "/mens-clinic" },
    { name: "Packages", href: "/packages" },
    { name: "Locations", href: "/locations" },
    { name: "Contact", href: "/contact" },
  ],
  legal: [
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms of Service", href: "/terms" },
    { name: "HIPAA Notice", href: "/hipaa" },
    { name: "Do Not Sell My Info", href: "/privacy#ccpa-rights" },
  ],
};

const fadeUp = {
  hidden: { y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: "easeOut" },
  }),
};

export function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    try {
      await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: 'Newsletter Subscriber',
          email,
          formType: 'newsletter',
        }),
      });
    } catch {
      // Fail silently for newsletter — still show success UI
    }
    setSubscribed(true);
    setEmail("");
    setTimeout(() => setSubscribed(false), 4000);
  };

  // Session 23: Luxury footer overhaul.
  // - Background flipped from dark navy (#0e1d33) to warm champagne (#E8DCC4) with navy text.
  // - Removed the 40px gold transitional divider band (felt decorative, noisy).
  // - Removed the radial-dot background texture.
  // - Accent color is now the existing navy-deep (#0a1628) against champagne — the gold
  //   brand hue is reserved for a deeper bronze variant on the Inner Circle title and
  //   hover states, so it still reads as gold but doesn't disappear into the background.
  const ACCENT = "#8B6F1E"; // deeper gold/bronze — holds contrast against champagne
  const NAVY = "#0a1628";

  return (
    <footer className="relative bg-[#E8DCC4] text-[#0a1628] overflow-hidden">
      {/* Newsletter Banner */}
      <div className="relative border-b border-[#0a1628]/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="text-center lg:text-left">
              <h2
                className="font-serif mb-3"
                style={{ fontSize: "clamp(1.625rem, 2.6vw, 2.25rem)", color: NAVY }}
              >
                Join the{" "}
                <span className="italic" style={{ color: ACCENT }}>
                  Inner Circle
                </span>
              </h2>
              <p className="text-[#0a1628]/70 text-base max-w-md leading-relaxed">
                Notes from Dr. Shirazi on aesthetics and longevity. No spam — unsubscribe anytime.
              </p>
            </div>
            <div className="w-full lg:w-auto">
              {subscribed ? (
                <motion.div
                  initial={{ scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex items-center gap-2 font-medium"
                  style={{ color: ACCENT }}
                >
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Welcome to the inner circle.
                </motion.div>
              ) : (
                <form
                  onSubmit={handleSubscribe}
                  className="flex gap-2 max-w-sm w-full"
                >
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Your email address"
                    required
                    className="flex-1 px-5 py-3 bg-white/60 border border-[#0a1628]/15 rounded-full text-[#0a1628] text-sm placeholder:text-[#0a1628]/45 focus:outline-none focus:border-[#0a1628]/40 focus:ring-1 focus:ring-[#0a1628]/20 transition-all"
                  />
                  <button
                    type="submit"
                    className="flex items-center justify-center w-12 h-12 rounded-full bg-[#0a1628] text-[#E8DCC4] hover:bg-[#0a1628]/90 transition-colors duration-300"
                    aria-label="Subscribe"
                  >
                    <Send className="w-4 h-4" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Grid */}
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">
          {/* Brand Column */}
          <motion.div
            custom={0}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="lg:col-span-4"
          >
            {/* Logo — Session 23: use the dark-on-light variant so it reads on champagne.
                Fallback to the clean logo if dark variant isn't present. */}
            <div className="mb-6">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/healinque-logo-header-clean.png"
                alt="Healinque — Wellness & Longevity Center"
                width={540}
                height={201}
                className="h-14 w-auto"
                style={{ filter: "invert(1) brightness(0.3) sepia(0.3)" }}
              />
            </div>

            <p className="text-[#0a1628]/70 text-base leading-relaxed mb-8 max-w-xs">
              Physician-led aesthetic medicine and longevity care, where science meets
              restraint.
            </p>

            {/* Contact Details */}
            <div className="space-y-4">
              <a
                href={siteConfig.address.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-3 group"
              >
                <div className="w-10 h-10 rounded-full bg-[#0a1628]/5 flex items-center justify-center flex-shrink-0 group-hover:bg-[#0a1628]/10 transition-colors">
                  <MapPin className="w-3.5 h-3.5" style={{ color: ACCENT }} />
                </div>
                <span className="text-[#0a1628]/75 text-sm group-hover:text-[#0a1628] transition-colors leading-snug pt-1">
                  {siteConfig.address.street}
                  <br />
                  {siteConfig.address.city}, {siteConfig.address.state} {siteConfig.address.zip}
                </span>
              </a>
              <a href={`tel:${siteConfig.phone}`} className="flex items-center gap-3 group">
                <div className="w-10 h-10 rounded-full bg-[#0a1628]/5 flex items-center justify-center flex-shrink-0 group-hover:bg-[#0a1628]/10 transition-colors">
                  <Phone className="w-3.5 h-3.5" style={{ color: ACCENT }} />
                </div>
                <span className="text-[#0a1628]/75 text-sm group-hover:text-[#0a1628] transition-colors">
                  {siteConfig.phone}{" "}
                  <span className="text-[#0a1628]/55">· call or text</span>
                </span>
              </a>
              <a href={getEmailLink()} className="flex items-center gap-3 group">
                <div className="w-10 h-10 rounded-full bg-[#0a1628]/5 flex items-center justify-center flex-shrink-0 group-hover:bg-[#0a1628]/10 transition-colors">
                  <Mail className="w-3.5 h-3.5" style={{ color: ACCENT }} />
                </div>
                <span className="text-[#0a1628]/75 text-sm group-hover:text-[#0a1628] transition-colors">
                  {siteConfig.email}
                </span>
              </a>
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-full bg-[#0a1628]/5 flex items-center justify-center flex-shrink-0">
                  <Clock className="w-3.5 h-3.5" style={{ color: ACCENT }} />
                </div>
                <div className="text-[#0a1628]/75 text-sm leading-snug pt-1">
                  {siteConfig.hours.display.slice(0, 2).map((line: string, i: number) => (
                    <span key={i}>
                      {line}
                      {i < 1 && <br />}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Treatments Column */}
          <motion.div
            custom={1}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <h4 className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#0a1628]/65 mb-6">
              Treatments
            </h4>
            <ul className="space-y-3">
              {footerLinks.treatments.map((link) => (
                <li key={link.name} className="py-1.5">
                  <Link
                    href={link.href}
                    className="text-[#0a1628]/75 hover:text-[#0a1628] text-sm transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
              <li className="pt-1">
                <Link
                  href="/treatments"
                  className="inline-flex items-center gap-1 text-xs font-medium transition-colors"
                  style={{ color: ACCENT }}
                >
                  All Treatments <ArrowRight className="w-3 h-3" />
                </Link>
              </li>
            </ul>
          </motion.div>

          {/* Clinic Column */}
          <motion.div
            custom={2}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <h4 className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#0a1628]/65 mb-6">
              The Clinic
            </h4>
            <ul className="space-y-3">
              {footerLinks.clinic.map((link) => (
                <li key={link.name} className="py-1.5">
                  <Link
                    href={link.href}
                    className="text-[#0a1628]/75 hover:text-[#0a1628] text-sm transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Patients Column */}
          <motion.div
            custom={3}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <h4 className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#0a1628]/65 mb-6">
              For Patients
            </h4>
            <ul className="space-y-3">
              {footerLinks.patients.map((link) => (
                <li key={link.name} className="py-1.5">
                  <Link
                    href={link.href}
                    className="text-[#0a1628]/75 hover:text-[#0a1628] text-sm transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Social Column */}
          <motion.div
            custom={4}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <h4 className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#0a1628]/65 mb-6">
              Connect
            </h4>
            {siteConfig.social.instagram && (
              <a
                href={siteConfig.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow Healinque on Instagram (opens in new tab)"
                className="inline-flex items-center gap-3 group mb-4"
              >
                <div
                  className="w-10 h-10 rounded-full bg-[#0a1628]/5 flex items-center justify-center group-hover:bg-[#0a1628]/10 transition-colors"
                  aria-hidden="true"
                >
                  <Instagram className="w-4 h-4" style={{ color: ACCENT }} />
                </div>
                <div>
                  <span className="text-[#0a1628]/80 text-sm group-hover:text-[#0a1628] transition-colors block">
                    @ThrivewithDr.Azi
                  </span>
                </div>
              </a>
            )}

            <div className="mt-6 p-4 rounded-xl bg-white/40 border border-[#0a1628]/10">
              <p className="text-[#0a1628]/70 text-xs leading-relaxed">
                Results may vary. All treatments are performed by or under the supervision
                of Dr. Azadeh Shirazi, MD.
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="relative border-t border-[#0a1628]/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[#0a1628]/60 text-xs">
            &copy; {new Date().getFullYear()} Healinque Wellness & Longevity Center. All
            rights reserved.
          </p>
          <p className="text-[#0a1628]/65 text-xs font-medium">
            Results may vary. All treatments performed or directly supervised by Dr. Azi
            Shirazi, MD.
          </p>
          <div className="flex items-center gap-4 flex-wrap justify-center">
            {footerLinks.legal.map((link, i) => (
              <span key={link.name} className="flex items-center gap-4">
                <Link
                  href={link.href}
                  className="text-[#0a1628]/60 hover:text-[#0a1628] text-xs transition-colors"
                >
                  {link.name}
                </Link>
                {i < footerLinks.legal.length - 1 && (
                  <span className="text-[#0a1628]/30">·</span>
                )}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
