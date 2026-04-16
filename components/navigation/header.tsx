"use client";

import * as React from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown, Mail, Phone, MapPin } from "lucide-react";
import { cn } from "@/lib/utils";
import { MobileMenu } from "./mobile-menu";

/* ─── Mega Menu Data ─── */
const megaMenuColumns = [
  {
    heading: "Aesthetic Treatments",
    items: [
      { name: "Botox & Dysport", href: "/treatments/botox-dysport" },
      { name: "Daxxify", href: "/treatments/daxxify" },
      { name: "Dermal Fillers", href: "/treatments/dermal-fillers" },
      { name: "PDO Threads", href: "/treatments/pdo-thread-lift" },
      { name: "Morpheus8", href: "/treatments/morpheus8" },
      { name: "Kybella", href: "/treatments/kybella" },
    ],
  },
  {
    heading: "Skin Rejuvenation",
    items: [
      { name: "Laser Resurfacing", href: "/treatments/laser-resurfacing" },
      { name: "Microneedling", href: "/treatments/microneedling" },
      { name: "Chemical Peels", href: "/treatments/chemical-peels" },
      { name: "Medical-Grade Skincare", href: "/treatments/medical-grade-skincare" },
      { name: "IPL Photo Facial", href: "/treatments/ipl-photo-facial" },
    ],
  },
  {
    heading: "Regenerative Medicine",
    items: [
      { name: "PRF Therapy", href: "/treatments/prf-therapy" },
      { name: "Regenerative Consultation", href: "/treatments/regenerative-consultation" },
      { name: "IV Therapy", href: "/treatments/iv-therapy" },
      { name: "GLP-1 Weight Loss", href: "/treatments/glp1-weight-loss", comingSoon: true },
    ],
  },
  {
    heading: "Men\u2019s Clinic",
    items: [
      { name: "Hair Restoration", href: "/treatments/hair-restoration" },
      { name: "Discreet Aesthetics", href: "/treatments/discreet-aesthetics" },
      { name: "Hormone Optimization", href: "/treatments/hormone-optimization", comingSoon: true },
      { name: "Men\u2019s Clinic", href: "/mens-clinic" },
    ],
  },
  {
    heading: "Concerns",
    items: [
      { name: "Fine Lines & Wrinkles", href: "/concerns/fine-lines-wrinkles" },
      { name: "Acne Scarring", href: "/concerns/acne-scarring" },
      { name: "Dark Circles & Under-Eye", href: "/concerns/dark-circles-under-eye" },
      { name: "Hyperpigmentation & Melasma", href: "/concerns/hyperpigmentation-melasma" },
      { name: "Skin Laxity & Sagging", href: "/concerns/skin-laxity-sagging" },
      { name: "Hair Thinning", href: "/concerns/hair-thinning" },
    ],
  },
  {
    heading: "Wellness & Longevity",
    items: [
      { name: "Peptide Therapy", href: "/treatments/peptide-therapy" },
      { name: "Hormone Optimization", href: "/treatments/hormone-optimization", comingSoon: true },
      { name: "GLP-1 Weight Loss", href: "/treatments/glp1-weight-loss", comingSoon: true },
      { name: "Metabolic Health", href: "/treatments/iv-therapy" },
    ],
  },
];

export function Header() {
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  const [megaMenuOpen, setMegaMenuOpen] = React.useState(false);
  const closeTimerRef = React.useRef<NodeJS.Timeout | null>(null);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    const handleOpenMenu = () => setMobileMenuOpen(true);
    window.addEventListener("healinque:open-mobile-menu", handleOpenMenu);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("healinque:open-mobile-menu", handleOpenMenu);
    };
  }, []);

  const handleMouseEnterTrigger = () => {
    if (closeTimerRef.current) clearTimeout(closeTimerRef.current);
    setMegaMenuOpen(true);
  };

  const handleMouseLeaveTrigger = () => {
    closeTimerRef.current = setTimeout(() => setMegaMenuOpen(false), 150);
  };

  const handleMouseEnterMenu = () => {
    if (closeTimerRef.current) clearTimeout(closeTimerRef.current);
  };

  const handleMouseLeaveMenu = () => {
    closeTimerRef.current = setTimeout(() => setMegaMenuOpen(false), 150);
  };

  return (
    <>
      {/* ═══ Fixed Header — fully transparent, overlays hero ═══ */}
      <div className="fixed top-0 left-0 right-0 z-40">

        {/* ── Utility Bar: thin, semi-transparent strip ── */}
        <div
          className={cn(
            "transition-all duration-300 border-b border-white/10",
            isScrolled
              ? "bg-[#0a1628]"
              : "bg-white/5 backdrop-blur-sm"
          )}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-center gap-8 h-9 text-xs tracking-wide">
            <a
              href="tel:+18583377999"
              className="flex items-center gap-1.5 text-white/70 hover:text-[#C9A227] transition-colors"
            >
              <Phone className="w-3 h-3" />
              <span>(858) 337-7999</span>
            </a>
            <span className="hidden sm:inline text-white/20">|</span>
            <a
              href="mailto:info@healinque.com"
              className="hidden sm:flex items-center gap-1.5 text-white/70 hover:text-[#C9A227] transition-colors"
            >
              <Mail className="w-3 h-3" />
              <span>info@healinque.com</span>
            </a>
            <span className="hidden sm:inline text-white/20">|</span>
            <Link
              href="/book"
              className="text-white/70 hover:text-[#C9A227] transition-colors font-medium"
            >
              Book Now
            </Link>
          </div>
        </div>

        {/* ── Main Navigation ── */}
        <header
          className={cn(
            "transition-all duration-300",
            isScrolled
              ? "bg-[#0a1628]/95 backdrop-blur-md shadow-lg"
              : "bg-transparent"
          )}
        >
          <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-[104px]">
              {/* Logo */}
              <Link
                href="/"
                className="flex-shrink-0 flex items-center gap-3 hover:opacity-90 transition-opacity"
                aria-label="Healinque Home"
              >
                {/* Optimized header logo — 28KB instead of 4.3MB */}
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/healinque-logo-header-clean.png"
                  alt="Healinque — Aesthetic Medicine & Longevity Center"
                  className="h-20 md:h-24 w-auto"
                  width={805}
                  height={300}
                />
              </Link>

              {/* Desktop Nav Links */}
              <div className="hidden lg:flex items-center justify-center gap-7 flex-1">
                <Link href="/" className="text-[13px] font-medium text-white/80 hover:text-[#C9A227] transition-colors tracking-wide">
                  Home
                </Link>
                <Link href="/about" className="text-[13px] font-medium text-white/80 hover:text-[#C9A227] transition-colors tracking-wide">
                  About
                </Link>

                {/* Treatments Dropdown Trigger */}
                <div
                  onMouseEnter={handleMouseEnterTrigger}
                  onMouseLeave={handleMouseLeaveTrigger}
                >
                  <button
                    className="flex items-center gap-1 text-[13px] font-medium text-white/80 hover:text-[#C9A227] transition-colors tracking-wide py-2"
                    onClick={() => setMegaMenuOpen(!megaMenuOpen)}
                    aria-expanded={megaMenuOpen}
                    aria-haspopup="true"
                  >
                    <span>Treatments</span>
                    <ChevronDown
                      className={cn(
                        "w-3.5 h-3.5 transition-transform duration-300",
                        megaMenuOpen && "rotate-180"
                      )}
                    />
                  </button>
                </div>

                <Link href="/blog" className="text-[13px] font-medium text-white/80 hover:text-[#C9A227] transition-colors tracking-wide">
                  Blog
                </Link>
                <Link href="/contact" className="text-[13px] font-medium text-white/80 hover:text-[#C9A227] transition-colors tracking-wide">
                  Contact
                </Link>
                <Link href="/financing" className="text-[13px] font-medium text-white/80 hover:text-[#C9A227] transition-colors tracking-wide">
                  Financing
                </Link>
                <Link href="/reviews" className="text-[13px] font-medium text-white/80 hover:text-[#C9A227] transition-colors tracking-wide">
                  Reviews
                </Link>
                <Link href="/memberships" className="text-[13px] font-medium text-white/80 hover:text-[#C9A227] transition-colors tracking-wide">
                  Memberships
                </Link>
                <Link href="/packages" className="text-[13px] font-medium text-white/80 hover:text-[#C9A227] transition-colors tracking-wide">
                  Packages
                </Link>
              </div>

              {/* Book Now Button (Desktop) */}
              <div className="hidden lg:flex items-center flex-shrink-0">
                <Link
                  href="/book"
                  className="px-6 py-2 border border-white/40 text-white text-[13px] font-medium tracking-wide rounded-sm hover:border-[#C9A227] hover:text-[#C9A227] transition-all duration-300"
                >
                  Book Now
                </Link>
              </div>

              {/* Mobile Toggle */}
              <button
                className="lg:hidden p-2 text-white hover:text-[#C9A227] transition-colors"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </nav>

          {/* ═══ Mega Menu Dropdown ═══ */}
          <AnimatePresence>
            {megaMenuOpen && (
              <motion.div
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
                className="hidden lg:block"
                onMouseEnter={handleMouseEnterMenu}
                onMouseLeave={handleMouseLeaveMenu}
              >
                <div className="bg-[#0a1628]/95 backdrop-blur-xl border-t border-white/5 shadow-2xl">
                  <div className="max-w-[1440px] mx-auto px-8 xl:px-12 py-10">
                    <div className="grid gap-6" style={{ gridTemplateColumns: "repeat(6, minmax(0, 1fr)) minmax(200px, 1.4fr)" }}>
                      {megaMenuColumns.map((column) => (
                        <div key={column.heading} className="min-w-0">
                          <h3 className="text-[#C9A227] font-serif text-xs font-semibold mb-4 tracking-[0.15em] uppercase whitespace-nowrap">
                            {column.heading}
                          </h3>
                          <ul className="space-y-2.5">
                            {column.items.map((item) => {
                              const isComingSoon = "comingSoon" in item && item.comingSoon;
                              return (
                                <li key={item.href}>
                                  {isComingSoon ? (
                                    <span className="text-sm text-white/30 block">
                                      {item.name}
                                      <span className="ml-2 inline-flex items-center gap-1 text-[10px] text-[#C9A227]/60 uppercase font-medium tracking-wide">
                                        <span className="inline-block w-1 h-1 bg-[#C9A227]/60 rounded-full" />
                                        Soon
                                      </span>
                                    </span>
                                  ) : (
                                    <Link
                                      href={item.href}
                                      onClick={() => setMegaMenuOpen(false)}
                                      className="text-sm text-white/60 hover:text-[#C9A227] transition-colors block"
                                    >
                                      {item.name}
                                    </Link>
                                  )}
                                </li>
                              );
                            })}
                          </ul>
                        </div>
                      ))}

                      {/* Contact Column */}
                      <div className="border-l border-white/10 pl-6">
                        <h3 className="text-[#C9A227] font-serif text-xs font-semibold mb-4 tracking-[0.15em] uppercase whitespace-nowrap">
                          Get in Touch
                        </h3>
                        <div className="space-y-3 text-sm text-white/60 mb-6">
                          <a
                            href="tel:+18583377999"
                            className="flex items-center gap-2 hover:text-[#C9A227] transition-colors whitespace-nowrap"
                          >
                            <Phone className="w-3.5 h-3.5 text-[#C9A227]/70 flex-shrink-0" />
                            <span>(858) 337-7999</span>
                          </a>
                          <a
                            href="mailto:info@healinque.com"
                            className="flex items-center gap-2 hover:text-[#C9A227] transition-colors whitespace-nowrap"
                          >
                            <Mail className="w-3.5 h-3.5 text-[#C9A227]/70 flex-shrink-0" />
                            <span>info@healinque.com</span>
                          </a>
                          <div className="flex items-start gap-2">
                            <MapPin className="w-3.5 h-3.5 text-[#C9A227]/70 flex-shrink-0 mt-0.5" />
                            <div className="leading-relaxed">
                              <div>15644 Pomerado Road</div>
                              <div>Suite 103, Poway, CA 92064</div>
                            </div>
                          </div>
                        </div>
                        <Link
                          href="/treatments"
                          onClick={() => setMegaMenuOpen(false)}
                          className="inline-flex items-center text-sm text-[#C9A227] hover:text-[#D4AF37] font-medium transition-colors group mt-2"
                        >
                          <span>View All Treatments</span>
                          <span className="ml-1.5 group-hover:translate-x-0.5 transition-transform">&rarr;</span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

        </header>
      </div>
      {/* End fixed header wrapper */}

      {/* Mobile Menu — Rendered outside fixed wrapper to cover full viewport */}
      <MobileMenu isOpen={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)} />
    </>
  );
}
