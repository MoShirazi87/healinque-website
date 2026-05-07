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

type MenuLevel = "main" | "treatments" | "about";

/* 5 core services for v2 launch */
const treatmentItems = [
  { name: "Botox & Neuromodulators", href: "/treatments/botox-dysport" },
  { name: "Dermal Fillers", href: "/treatments/dermal-fillers" },
  { name: "Chemical Peels", href: "/treatments/chemical-peels" },
  { name: "Microneedling + Skin Boosters", href: "/treatments/microneedling" },
  { name: "Scalp Microneedling + Growth Factor Boost", href: "/treatments/scalp-microneedling" },
];

const aboutItems = [
  { name: "Dr. Azi Shirazi", href: "/about/dr-azi-shirazi" },
  { name: "The Healinque Method", href: "/about/healinque-method" },
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

  // Session 19 (Track C): Escape key closes mobile menu — basic dialog behavior.
  // Full focus-trap deferred; Escape + aria-modal covers the most common SR/kb
  // failure modes without adding a focus-trap dependency.
  React.useEffect(() => {
    if (!isOpen) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [isOpen, onClose]);

  const handleLinkClick = () => onClose();

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{}}
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
            role="dialog"
            aria-modal="true"
            aria-label="Site navigation menu"
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
                    initial={{ x: 30 }}
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
                        onClick={() => setMenuLevel("about")}
                        className="mobile-menu-item w-full flex items-center justify-between py-4 text-white/90 border-b border-white/[0.05] hover:text-[#C9A227] transition-colors"
                      >
                        <span className="font-serif text-xl">About</span>
                        <ChevronRight className="w-5 h-5 text-[#C9A227]" />
                      </button>

                      <Link
                        href="/mens-clinic"
                        onClick={handleLinkClick}
                        className="mobile-menu-item block py-4 font-serif text-xl text-white/90 border-b border-white/[0.05] hover:text-[#C9A227] transition-colors"
                      >
                        Men&apos;s Clinic
                      </Link>

                      <Link
                        href="/blog"
                        onClick={handleLinkClick}
                        className="mobile-menu-item block py-4 font-serif text-xl text-white/90 border-b border-white/[0.05] hover:text-[#C9A227] transition-colors"
                      >
                        Blog
                      </Link>

                      <Link
                        href="/memberships"
                        onClick={handleLinkClick}
                        className="mobile-menu-item block py-4 font-serif text-xl text-white/90 border-b border-white/[0.05] hover:text-[#C9A227] transition-colors"
                      >
                        Memberships
                      </Link>

                      <Link
                        href="/contact"
                        onClick={handleLinkClick}
                        className="mobile-menu-item block py-4 font-serif text-xl text-white/90 border-b border-white/[0.05] hover:text-[#C9A227] transition-colors"
                      >
                        Contact
                      </Link>
                    </nav>
                  </motion.div>
                )}

                {menuLevel === "treatments" && (
                  <motion.div
                    key="treatments"
                    initial={{ x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 30 }}
                    transition={{ duration: 0.2 }}
                    className="absolute inset-0 overflow-y-auto"
                  >
                    <div className="px-6 py-6">
                      <button
                        onClick={() => setMenuLevel("main")}
                        aria-label="Back to main menu"
                        className="flex items-center gap-2 mb-6 text-xs uppercase tracking-[0.2em] text-[#C9A227] hover:text-white transition-colors"
                      >
                        <ChevronLeft className="w-4 h-4" aria-hidden="true" />
                        Back
                      </button>

                      <div className="flex items-center gap-3 mb-5">
                        <div className="h-px w-8 bg-[#C9A227]/60" />
                        <span className="font-sans text-[10px] uppercase tracking-[0.25em] text-white/40">
                          Treatments
                        </span>
                      </div>

                      <div>
                        {treatmentItems.map((item) => (
                          <Link
                            key={item.href}
                            href={item.href}
                            onClick={handleLinkClick}
                            className="flex items-center justify-between py-3 font-serif text-[17px] text-white/90 border-b border-white/[0.05] hover:text-[#C9A227] transition-colors"
                          >
                            <span>{item.name}</span>
                          </Link>
                        ))}

                        <Link
                          href="/treatments"
                          onClick={handleLinkClick}
                          className="block mt-6 py-3 text-sm font-sans font-semibold uppercase tracking-[0.2em] text-[#C9A227] hover:text-white transition-colors"
                        >
                          View All Treatments &rarr;
                        </Link>
                      </div>
                    </div>
                  </motion.div>
                )}

                {menuLevel === "about" && (
                  <motion.div
                    key="about"
                    initial={{ x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 30 }}
                    transition={{ duration: 0.2 }}
                    className="absolute inset-0 overflow-y-auto"
                  >
                    <div className="px-6 py-6">
                      <button
                        onClick={() => setMenuLevel("main")}
                        aria-label="Back to main menu"
                        className="flex items-center gap-2 mb-6 text-xs uppercase tracking-[0.2em] text-[#C9A227] hover:text-white transition-colors"
                      >
                        <ChevronLeft className="w-4 h-4" aria-hidden="true" />
                        Back
                      </button>

                      <div className="flex items-center gap-3 mb-4">
                        <div className="h-px w-8 bg-[#C9A227]/60" />
                        <span className="font-sans text-[10px] uppercase tracking-[0.25em] text-white/40">
                          About
                        </span>
                      </div>

                      <div className="space-y-1">
                        {aboutItems.map((item) => (
                          <Link
                            key={item.href}
                            href={item.href}
                            onClick={handleLinkClick}
                            className="block py-4 font-serif text-lg text-white/90 border-b border-white/[0.05] hover:text-[#C9A227] transition-colors"
                          >
                            {item.name}
                          </Link>
                        ))}
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
