"use client";

import * as React from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronRight, ChevronLeft, Phone, Calendar } from "lucide-react";
import { siteConfig, getPhoneLink } from "@/lib/config/site";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

type MenuLevel = "main" | "treatments" | "concerns";

/* Mirrors the desktop mega menu — full list of individual treatments */
const treatmentGroups = [
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
    heading: "Men's Clinic",
    items: [
      { name: "Hair Restoration", href: "/treatments/hair-restoration" },
      { name: "Discreet Aesthetics", href: "/treatments/discreet-aesthetics" },
      { name: "Hormone Optimization", href: "/treatments/hormone-optimization", comingSoon: true },
      { name: "Men's Clinic Home", href: "/mens-clinic" },
    ],
  },
];

const concernCategories = [
  { name: "Fine Lines & Wrinkles", href: "/concerns/fine-lines-wrinkles" },
  { name: "Acne Scarring", href: "/concerns/acne-scarring" },
  { name: "Dark Circles & Under-Eye", href: "/concerns/dark-circles-under-eye" },
  { name: "Hyperpigmentation & Melasma", href: "/concerns/hyperpigmentation-melasma" },
  { name: "Skin Laxity & Sagging", href: "/concerns/skin-laxity-sagging" },
  { name: "Hair Thinning", href: "/concerns/hair-thinning" },
];

const primaryNav = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Men's Clinic", href: "/mens-clinic" },
  { name: "Memberships", href: "/memberships" },
  { name: "Packages", href: "/packages" },
  { name: "Financing", href: "/financing" },
];

const secondaryNav = [
  { name: "Gallery", href: "/gallery" },
  { name: "Reviews", href: "/reviews" },
  { name: "Blog", href: "/blog" },
  { name: "Contact", href: "/contact" },
  { name: "FAQ", href: "/faq" },
];

export function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const [menuLevel, setMenuLevel] = React.useState<MenuLevel>("main");

  React.useEffect(() => {
    if (!isOpen) {
      const timer = setTimeout(() => setMenuLevel("main"), 300);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  React.useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const handleLinkClick = () => onClose();

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-md z-40 lg:hidden"
            onClick={onClose}
          />

          {/* Drawer */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 28, stiffness: 320 }}
            className="mobile-menu-container fixed top-0 right-0 bottom-0 w-full sm:max-w-md bg-[#0a1628] z-50 lg:hidden flex flex-col overflow-hidden shadow-2xl"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-6 pt-[calc(env(safe-area-inset-top)+1rem)] pb-4 border-b border-white/[0.06]">
              <div className="flex flex-col">
                <span className="font-sans text-[10px] uppercase tracking-[0.3em] text-[#C9A227]/80">
                  Menu
                </span>
                <span className="font-serif text-xl font-bold text-white tracking-wide mt-0.5">
                  HEALINQUE
                </span>
              </div>
              <button
                onClick={onClose}
                className="h-11 w-11 flex items-center justify-center rounded-full border border-white/10 text-white hover:text-[#C9A227] hover:border-[#C9A227]/40 transition-colors"
                aria-label="Close menu"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Content */}
            <div className="flex-1 overflow-hidden relative">
              <AnimatePresence mode="wait">
                {menuLevel === "main" && (
                  <motion.div
                    key="main"
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -30 }}
                    transition={{ duration: 0.2 }}
                    className="absolute inset-0 overflow-y-auto"
                  >
                    <nav className="px-6 py-6 space-y-1">
                      {/* Section label */}
                      <div className="flex items-center gap-3 mb-3">
                        <div className="h-px w-8 bg-[#C9A227]/60" />
                        <span className="font-sans text-[10px] uppercase tracking-[0.25em] text-white/40">
                          Explore
                        </span>
                      </div>

                      <button
                        onClick={() => setMenuLevel("treatments")}
                        className="mobile-menu-item w-full flex items-center justify-between py-4 text-white/90 border-b border-white/[0.05] hover:text-[#C9A227] transition-colors"
                      >
                        <span className="font-serif text-xl">Treatments</span>
                        <ChevronRight className="w-5 h-5 text-[#C9A227]" />
                      </button>

                      <button
                        onClick={() => setMenuLevel("concerns")}
                        className="mobile-menu-item w-full flex items-center justify-between py-4 text-white/90 border-b border-white/[0.05] hover:text-[#C9A227] transition-colors"
                      >
                        <span className="font-serif text-xl">Concerns</span>
                        <ChevronRight className="w-5 h-5 text-[#C9A227]" />
                      </button>

                      {primaryNav.map((link) => (
                        <Link
                          key={link.href}
                          href={link.href}
                          onClick={handleLinkClick}
                          className="mobile-menu-item block py-4 font-serif text-xl text-white/90 border-b border-white/[0.05] hover:text-[#C9A227] transition-colors"
                        >
                          {link.name}
                        </Link>
                      ))}

                      {/* Secondary */}
                      <div className="flex items-center gap-3 pt-6 mb-3">
                        <div className="h-px w-8 bg-[#C9A227]/60" />
                        <span className="font-sans text-[10px] uppercase tracking-[0.25em] text-white/40">
                          More
                        </span>
                      </div>

                      <div className="grid grid-cols-2 gap-x-4">
                        {secondaryNav.map((link) => (
                          <Link
                            key={link.href}
                            href={link.href}
                            onClick={handleLinkClick}
                            className="py-3 text-sm font-medium text-white/60 hover:text-[#C9A227] transition-colors"
                          >
                            {link.name}
                          </Link>
                        ))}
                      </div>
                    </nav>
                  </motion.div>
                )}

                {menuLevel === "treatments" && (
                  <motion.div
                    key="treatments"
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 30 }}
                    transition={{ duration: 0.2 }}
                    className="absolute inset-0 overflow-y-auto"
                  >
                    <div className="px-6 py-6">
                      <button
                        onClick={() => setMenuLevel("main")}
                        className="flex items-center gap-2 mb-6 text-xs uppercase tracking-[0.2em] text-[#C9A227] hover:text-white transition-colors"
                      >
                        <ChevronLeft className="w-4 h-4" />
                        Back
                      </button>

                      <div className="flex items-center gap-3 mb-5">
                        <div className="h-px w-8 bg-[#C9A227]/60" />
                        <span className="font-sans text-[10px] uppercase tracking-[0.25em] text-white/40">
                          All Treatments
                        </span>
                      </div>

                      <div className="space-y-7">
                        {treatmentGroups.map((group) => (
                          <div key={group.heading}>
                            <p className="font-sans text-[11px] uppercase tracking-[0.22em] text-[#C9A227]/90 mb-2">
                              {group.heading}
                            </p>
                            <div>
                              {group.items.map((item) => (
                                <Link
                                  key={item.href}
                                  href={item.href}
                                  onClick={handleLinkClick}
                                  className="flex items-center justify-between py-3 font-serif text-[17px] text-white/90 border-b border-white/[0.05] hover:text-[#C9A227] transition-colors"
                                >
                                  <span>{item.name}</span>
                                  {item.comingSoon && (
                                    <span className="ml-2 text-[9px] font-sans uppercase tracking-[0.15em] text-[#C9A227]/70">
                                      Soon
                                    </span>
                                  )}
                                </Link>
                              ))}
                            </div>
                          </div>
                        ))}

                        <Link
                          href="/treatments"
                          onClick={handleLinkClick}
                          className="block mt-6 py-3 text-sm font-sans font-semibold uppercase tracking-[0.2em] text-[#C9A227] hover:text-white transition-colors"
                        >
                          View All Treatments →
                        </Link>
                      </div>
                    </div>
                  </motion.div>
                )}

                {menuLevel === "concerns" && (
                  <motion.div
                    key="concerns"
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 30 }}
                    transition={{ duration: 0.2 }}
                    className="absolute inset-0 overflow-y-auto"
                  >
                    <div className="px-6 py-6">
                      <button
                        onClick={() => setMenuLevel("main")}
                        className="flex items-center gap-2 mb-6 text-xs uppercase tracking-[0.2em] text-[#C9A227] hover:text-white transition-colors"
                      >
                        <ChevronLeft className="w-4 h-4" />
                        Back
                      </button>

                      <div className="flex items-center gap-3 mb-4">
                        <div className="h-px w-8 bg-[#C9A227]/60" />
                        <span className="font-sans text-[10px] uppercase tracking-[0.25em] text-white/40">
                          Concerns
                        </span>
                      </div>

                      <div className="space-y-1">
                        {concernCategories.map((concern) => (
                          <Link
                            key={concern.href}
                            href={concern.href}
                            onClick={handleLinkClick}
                            className="block py-4 font-serif text-lg text-white/90 border-b border-white/[0.05] hover:text-[#C9A227] transition-colors"
                          >
                            {concern.name}
                          </Link>
                        ))}

                        <Link
                          href="/concerns"
                          onClick={handleLinkClick}
                          className="block mt-6 py-3 text-sm font-sans font-semibold uppercase tracking-[0.2em] text-[#C9A227] hover:text-white transition-colors"
                        >
                          View All Concerns →
                        </Link>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Footer — Call + Book */}
            <div className="px-6 pt-4 pb-[calc(env(safe-area-inset-bottom)+1rem)] bg-gradient-to-t from-black/40 to-transparent border-t border-white/[0.06] space-y-3">
              <Link
                href="/book"
                onClick={handleLinkClick}
                className="mobile-menu-cta-book flex items-center justify-center gap-2 w-full py-4 bg-gradient-to-r from-[#C9A227] to-[#DEB84A] text-[#0a1628] rounded-lg font-semibold text-base shadow-lg hover:shadow-xl transition-all"
              >
                <Calendar className="w-5 h-5" />
                Book Consultation
              </Link>
              <a
                href={getPhoneLink()}
                className="flex items-center justify-center gap-2 w-full py-3.5 border border-white/15 text-white/90 rounded-lg font-medium text-sm hover:border-[#C9A227]/40 hover:text-[#C9A227] transition-colors"
              >
                <Phone className="w-4 h-4" />
                {siteConfig.phone}
              </a>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
