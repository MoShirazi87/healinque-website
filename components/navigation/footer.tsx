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
    { name: "Botox & Dysport", href: "/treatments/botox-dysport" },
    { name: "Dermal Fillers", href: "/treatments/dermal-fillers" },
    { name: "Microneedling", href: "/treatments/microneedling" },
    { name: "PRF Therapy", href: "/treatments/prf-therapy" },
    { name: "Chemical Peels", href: "/treatments/chemical-peels" },
    { name: "PDO Thread Lift", href: "/treatments/pdo-thread-lift" },
  ],
  clinic: [
    { name: "About Us", href: "/about" },
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
    { name: "IV Therapy", href: "/treatments/iv-therapy" },
    { name: "Contact", href: "/contact" },
    { name: "Patient Portal", href: "/account" },
  ],
  legal: [
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms of Service", href: "/terms" },
    { name: "HIPAA Notice", href: "/hipaa" },
    { name: "Do Not Sell My Info", href: "/privacy#ccpa-rights" },
  ],
};

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
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

  return (
    <footer className="relative bg-[#060e1a] text-white overflow-hidden">
      {/* Decorative top gradient */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-[#C9A227]/40 to-transparent" />

      {/* Subtle background texture */}
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
        backgroundSize: "48px 48px",
      }} />

      {/* Newsletter Banner */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="relative border-b border-white/5"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="text-center lg:text-left">
              <h2 className="font-serif text-2xl md:text-3xl text-white mb-2">
                Join the <span className="italic text-[#C9A227]">Inner Circle</span>
              </h2>
              <p className="text-white/50 text-sm max-w-md">
                Notes from Dr. Shirazi on aesthetics and longevity. No spam — unsubscribe anytime.
              </p>
            </div>
            <div className="w-full lg:w-auto">
              {subscribed ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex items-center gap-2 text-[#C9A227] font-medium"
                >
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Welcome to the inner circle!
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
                    className="flex-1 px-5 py-3 bg-white/5 border border-white/10 rounded-full text-white text-sm placeholder:text-white/30 focus:outline-none focus:border-[#C9A227]/50 focus:ring-1 focus:ring-[#C9A227]/20 transition-all"
                  />
                  <button
                    type="submit"
                    className="flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r from-[#C9A227] to-[#DEB84A] text-[#0a1628] hover:shadow-lg hover:shadow-[#C9A227]/20 transition-all duration-300"
                    aria-label="Subscribe"
                  >
                    <Send className="w-4 h-4" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </motion.div>

      {/* Main Footer Grid */}
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-8">

          {/* Brand Column */}
          <motion.div
            custom={0}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="lg:col-span-4"
          >
            {/* Logo */}
            <div className="mb-6">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/healinque-logo-header-clean.png"
                alt="Healinque — Wellness & Longevity Center"
                width={540}
                height={201}
                className="h-14 w-auto opacity-90"
              />
            </div>

            <p className="text-white/40 text-sm leading-relaxed mb-8 max-w-xs">
              Physician-led aesthetic medicine and longevity care.
              Where science meets artistry for naturally beautiful results.
            </p>

            {/* Contact Details */}
            <div className="space-y-4">
              <a
                href={siteConfig.address.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-3 group"
              >
                <div className="w-10 h-10 rounded-full bg-[#C9A227]/10 flex items-center justify-center flex-shrink-0 group-hover:bg-[#C9A227]/20 transition-colors">
                  <MapPin className="w-3.5 h-3.5 text-[#C9A227]" />
                </div>
                <span className="text-white/40 text-sm group-hover:text-white/60 transition-colors leading-snug pt-1">
                  {siteConfig.address.street}<br />
                  {siteConfig.address.city}, {siteConfig.address.state} {siteConfig.address.zip}
                </span>
              </a>
              <a href={`tel:${siteConfig.phone}`} className="flex items-center gap-3 group">
                <div className="w-10 h-10 rounded-full bg-[#C9A227]/10 flex items-center justify-center flex-shrink-0 group-hover:bg-[#C9A227]/20 transition-colors">
                  <Phone className="w-3.5 h-3.5 text-[#C9A227]" />
                </div>
                <span className="text-white/40 text-sm group-hover:text-white/60 transition-colors">
                  {siteConfig.phone} <span className="text-white/30">· call or text</span>
                </span>
              </a>
              <a href={getEmailLink()} className="flex items-center gap-3 group">
                <div className="w-10 h-10 rounded-full bg-[#C9A227]/10 flex items-center justify-center flex-shrink-0 group-hover:bg-[#C9A227]/20 transition-colors">
                  <Mail className="w-3.5 h-3.5 text-[#C9A227]" />
                </div>
                <span className="text-white/40 text-sm group-hover:text-white/60 transition-colors">
                  {siteConfig.email}
                </span>
              </a>
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-full bg-[#C9A227]/10 flex items-center justify-center flex-shrink-0">
                  <Clock className="w-3.5 h-3.5 text-[#C9A227]" />
                </div>
                <div className="text-white/40 text-sm leading-snug pt-1">
                  {siteConfig.hours.display.slice(0, 2).map((line: string, i: number) => (
                    <span key={i}>{line}{i < 1 && <br />}</span>
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
            <h4 className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/60 mb-6">
              Treatments
            </h4>
            <ul className="space-y-3">
              {footerLinks.treatments.map((link) => (
                <li key={link.name} className="py-1.5">
                  <Link
                    href={link.href}
                    className="text-white/40 hover:text-[#C9A227] text-sm transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
              <li className="pt-1">
                <Link
                  href="/treatments"
                  className="inline-flex items-center gap-1 text-[#C9A227]/70 hover:text-[#C9A227] text-xs font-medium transition-colors"
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
            <h4 className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/60 mb-6">
              Our Clinic
            </h4>
            <ul className="space-y-3">
              {footerLinks.clinic.map((link) => (
                <li key={link.name} className="py-1.5">
                  <Link
                    href={link.href}
                    className="text-white/40 hover:text-[#C9A227] text-sm transition-colors duration-200"
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
            <h4 className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/60 mb-6">
              For Patients
            </h4>
            <ul className="space-y-3">
              {footerLinks.patients.map((link) => (
                <li key={link.name} className="py-1.5">
                  <Link
                    href={link.href}
                    className="text-white/40 hover:text-[#C9A227] text-sm transition-colors duration-200"
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
            <h4 className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/60 mb-6">
              Connect
            </h4>
            {siteConfig.social.instagram && (
              <a
                href={siteConfig.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 group mb-4"
              >
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#C9A227]/20 to-[#C9A227]/5 flex items-center justify-center group-hover:from-[#C9A227]/30 group-hover:to-[#C9A227]/10 transition-all">
                  <Instagram className="w-4 h-4 text-[#C9A227]" />
                </div>
                <div>
                  <span className="text-white/50 text-sm group-hover:text-white/70 transition-colors block">
                    @ThrivewithDr.Azi
                  </span>
                </div>
              </a>
            )}

            <div className="mt-6 p-4 rounded-xl bg-white/[0.02] border border-white/5">
              <p className="text-white/30 text-xs leading-relaxed">
                Results may vary. All treatments are performed by or under the supervision of Dr. Azadeh Shirazi, MD.
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="relative border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/25 text-xs">
            &copy; {new Date().getFullYear()} Healinque Wellness & Longevity Center. All rights reserved.
          </p>
          <p className="text-white/30 text-xs font-medium">
            Results may vary. All treatments performed or directly supervised by Dr. Azi Shirazi, MD.
          </p>
          <div className="flex items-center gap-4">
            {footerLinks.legal.map((link, i) => (
              <span key={link.name} className="flex items-center gap-4">
                <Link
                  href={link.href}
                  className="text-white/25 hover:text-[#C9A227] text-xs transition-colors"
                >
                  {link.name}
                </Link>
                {i < footerLinks.legal.length - 1 && (
                  <span className="text-white/10">·</span>
                )}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
