"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { 
  X, 
  ChevronRight, 
  ChevronLeft, 
  Phone, 
  ShoppingBag, 
  User,
  Heart,
  Calendar
} from "lucide-react";
import { siteConfig, getPhoneLink } from "@/lib/config/site";
import { treatments, treatmentCategories, TreatmentCategory } from "@/lib/data/treatments";
import { concerns } from "@/lib/data/concerns";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

type MenuLevel = "main" | "treatments" | "treatments-category" | "concerns" | "about" | "shop";

interface NavigationState {
  level: MenuLevel;
  categorySlug?: string;
}

// Full navigation data matching desktop
const aboutItems = [
  { name: "About Healinque", href: "/about" },
  { name: "Dr. Azi Shirazi", href: "/about/dr-azi-shirazi" },
  { name: "The Healinque Method", href: "/about/healinque-method" },
  { name: "Before & After Gallery", href: "/gallery" },
  { name: "Patient Reviews", href: "/reviews" },
  { name: "FAQ", href: "/faq" },
];

const shopItems = [
  { name: "All Products", href: "/shop" },
  { name: "Skincare by Healinque", href: "/shop/collections/skincare" },
  { name: "Supplements", href: "/shop/collections/supplements" },
  { name: "Dr. Azi's Picks", href: "/shop/collections/dr-azi-picks" },
  { name: "Memberships", href: "/memberships" },
  { name: "Treatment Packages", href: "/shop/collections/packages" },
  { name: "Gift Cards", href: "/shop/collections/gift-cards" },
];

export function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const [navState, setNavState] = React.useState<NavigationState>({ level: "main" });

  // Reset to main menu when closed
  React.useEffect(() => {
    if (!isOpen) {
      // Small delay to allow animation to complete
      const timer = setTimeout(() => {
        setNavState({ level: "main" });
      }, 300);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  // Prevent body scroll when menu is open
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

  const handleNavigate = (level: MenuLevel, categorySlug?: string) => {
    setNavState({ level, categorySlug });
  };

  const handleBack = () => {
    if (navState.level === "treatments-category") {
      setNavState({ level: "treatments" });
    } else {
      setNavState({ level: "main" });
    }
  };

  const handleLinkClick = () => {
    onClose();
  };

  // Get treatments for a category
  const getTreatmentsForCategory = (categorySlug: string) => {
    return treatments.filter(t => t.category === categorySlug);
  };

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
            className="fixed inset-0 bg-navy-deep/50 backdrop-blur-sm z-40 lg:hidden"
            onClick={onClose}
          />

          {/* Menu Container */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="fixed top-0 right-0 bottom-0 w-full max-w-md bg-white z-50 lg:hidden flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-5 py-4 border-b border-cream-dark safe-top">
              <Link href="/" onClick={handleLinkClick}>
                <Image
                  src="/images/logo.svg"
                  alt="Healinque"
                  width={160}
                  height={40}
                  className="h-10 w-auto"
                />
              </Link>
              <button
                onClick={onClose}
                className="p-2 -mr-2 text-navy-deep hover:text-gold transition-colors"
                aria-label="Close menu"
              >
                <X className="h-6 w-6" />
              </button>
            </div>

            {/* Dual Login Buttons - Above the fold */}
            <div className="px-5 py-4 bg-gradient-to-r from-cream to-cream/50 border-b border-cream-dark">
              <p className="text-xs font-semibold uppercase tracking-wide text-taupe mb-3">
                Quick Access
              </p>
              <div className="grid grid-cols-2 gap-3">
                <Link
                  href="/login?type=shop"
                  onClick={handleLinkClick}
                  className="flex flex-col items-center justify-center py-3 px-2 bg-navy-deep text-white rounded-lg transition-transform active:scale-95"
                >
                  <ShoppingBag className="h-5 w-5 mb-1.5" />
                  <span className="text-sm font-medium">Shop Login</span>
                  <span className="text-[10px] opacity-70 mt-0.5">Orders & Tracking</span>
                </Link>
                <Link
                  href="/login?type=patient"
                  onClick={handleLinkClick}
                  className="flex flex-col items-center justify-center py-3 px-2 bg-gold text-white rounded-lg transition-transform active:scale-95"
                >
                  <Heart className="h-5 w-5 mb-1.5" />
                  <span className="text-sm font-medium">Patient Portal</span>
                  <span className="text-[10px] opacity-70 mt-0.5">Appointments</span>
                </Link>
              </div>
            </div>

            {/* Menu Content */}
            <div className="flex-1 overflow-hidden relative">
              {/* Main Menu */}
              <AnimatePresence mode="wait">
                {navState.level === "main" && (
                  <motion.div
                    key="main"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0, x: -50 }}
                    transition={{ duration: 0.15 }}
                    className="absolute inset-0 overflow-y-auto"
                  >
                    <nav className="py-2">
                      {/* Treatments */}
                      <button
                        onClick={() => handleNavigate("treatments")}
                        className="flex items-center justify-between w-full px-5 py-4 text-left border-b border-cream/50 hover:bg-cream/30 transition-colors"
                      >
                        <span className="font-serif text-lg font-semibold text-navy-deep">
                          Our Treatments
                        </span>
                        <ChevronRight className="h-5 w-5 text-taupe" />
                      </button>

                      {/* Concerns */}
                      <button
                        onClick={() => handleNavigate("concerns")}
                        className="flex items-center justify-between w-full px-5 py-4 text-left border-b border-cream/50 hover:bg-cream/30 transition-colors"
                      >
                        <span className="font-serif text-lg font-semibold text-navy-deep">
                          Your Concerns
                        </span>
                        <ChevronRight className="h-5 w-5 text-taupe" />
                      </button>

                      {/* About */}
                      <button
                        onClick={() => handleNavigate("about")}
                        className="flex items-center justify-between w-full px-5 py-4 text-left border-b border-cream/50 hover:bg-cream/30 transition-colors"
                      >
                        <span className="font-serif text-lg font-semibold text-navy-deep">
                          About
                        </span>
                        <ChevronRight className="h-5 w-5 text-taupe" />
                      </button>

                      {/* Shop */}
                      <button
                        onClick={() => handleNavigate("shop")}
                        className="flex items-center justify-between w-full px-5 py-4 text-left border-b border-cream/50 hover:bg-cream/30 transition-colors"
                      >
                        <span className="font-serif text-lg font-semibold text-navy-deep flex items-center gap-2">
                          <ShoppingBag className="h-5 w-5" />
                          Shop
                        </span>
                        <ChevronRight className="h-5 w-5 text-taupe" />
                      </button>

                      {/* Direct Links */}
                      <Link
                        href="/memberships"
                        onClick={handleLinkClick}
                        className="flex items-center justify-between w-full px-5 py-4 text-left border-b border-cream/50 hover:bg-cream/30 transition-colors"
                      >
                        <span className="font-serif text-lg font-semibold text-navy-deep">
                          Memberships
                        </span>
                        <span className="text-xs bg-gold/10 text-gold px-2 py-0.5 rounded-full font-medium">
                          Save 20%
                        </span>
                      </Link>

                      <Link
                        href="/contact"
                        onClick={handleLinkClick}
                        className="flex items-center w-full px-5 py-4 text-left border-b border-cream/50 hover:bg-cream/30 transition-colors"
                      >
                        <span className="font-serif text-lg font-semibold text-navy-deep">
                          Contact
                        </span>
                      </Link>
                    </nav>
                  </motion.div>
                )}

                {/* Treatments Menu */}
                {navState.level === "treatments" && (
                  <motion.div
                    key="treatments"
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 50 }}
                    transition={{ duration: 0.15 }}
                    className="absolute inset-0 overflow-y-auto"
                  >
                    <button
                      onClick={handleBack}
                      className="flex items-center gap-2 w-full px-5 py-3 text-sm font-medium text-gold bg-cream/50 border-b border-cream-dark"
                    >
                      <ChevronLeft className="h-4 w-4" />
                      Back to Menu
                    </button>
                    <div className="px-5 py-3 border-b border-cream-dark bg-cream/30">
                      <h2 className="font-serif text-xl font-semibold text-navy-deep">
                        Our Treatments
                      </h2>
                      <p className="text-xs text-taupe mt-1">
                        All performed by Dr. Azi Shirazi
                      </p>
                    </div>
                    <nav className="py-2">
                      <Link
                        href="/treatments"
                        onClick={handleLinkClick}
                        className="block px-5 py-3 text-gold font-medium hover:bg-cream/30 transition-colors border-b border-cream/50"
                      >
                        View All Treatments →
                      </Link>
                      {Object.entries(treatmentCategories).map(([slug, category]) => (
                        <button
                          key={slug}
                          onClick={() => handleNavigate("treatments-category", slug)}
                          className="flex items-center justify-between w-full px-5 py-4 text-left border-b border-cream/50 hover:bg-cream/30 transition-colors"
                        >
                          <div>
                            <span className="font-serif text-base font-semibold text-navy-deep block">
                              {category.name}
                            </span>
                            <span className="text-xs text-taupe">
                              {getTreatmentsForCategory(slug).length} treatments
                            </span>
                          </div>
                          <ChevronRight className="h-5 w-5 text-taupe" />
                        </button>
                      ))}
                    </nav>
                  </motion.div>
                )}

                {/* Treatment Category Detail */}
                {navState.level === "treatments-category" && navState.categorySlug && (
                  <motion.div
                    key="treatments-category"
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 50 }}
                    transition={{ duration: 0.15 }}
                    className="absolute inset-0 overflow-y-auto"
                  >
                    <button
                      onClick={handleBack}
                      className="flex items-center gap-2 w-full px-5 py-3 text-sm font-medium text-gold bg-cream/50 border-b border-cream-dark"
                    >
                      <ChevronLeft className="h-4 w-4" />
                      Back to Categories
                    </button>
                    <div className="px-5 py-3 border-b border-cream-dark bg-cream/30">
                      <h2 className="font-serif text-xl font-semibold text-navy-deep">
                        {treatmentCategories[navState.categorySlug as TreatmentCategory]?.name}
                      </h2>
                    </div>
                    <nav className="py-2">
                      <Link
                        href={`/treatments/category/${navState.categorySlug}`}
                        onClick={handleLinkClick}
                        className="block px-5 py-3 text-gold font-medium hover:bg-cream/30 transition-colors border-b border-cream/50"
                      >
                        View All in Category →
                      </Link>
                      {getTreatmentsForCategory(navState.categorySlug).map((treatment) => (
                        <Link
                          key={treatment.slug}
                          href={`/treatments/${treatment.slug}`}
                          onClick={handleLinkClick}
                          className="block px-5 py-4 border-b border-cream/50 hover:bg-cream/30 transition-colors"
                        >
                          <span className="font-medium text-navy-deep block">
                            {treatment.name}
                          </span>
                          <span className="text-xs text-taupe">
                            {treatment.tagline}
                          </span>
                        </Link>
                      ))}
                    </nav>
                  </motion.div>
                )}

                {/* Concerns Menu */}
                {navState.level === "concerns" && (
                  <motion.div
                    key="concerns"
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 50 }}
                    transition={{ duration: 0.15 }}
                    className="absolute inset-0 overflow-y-auto"
                  >
                    <button
                      onClick={handleBack}
                      className="flex items-center gap-2 w-full px-5 py-3 text-sm font-medium text-gold bg-cream/50 border-b border-cream-dark"
                    >
                      <ChevronLeft className="h-4 w-4" />
                      Back to Menu
                    </button>
                    <div className="px-5 py-3 border-b border-cream-dark bg-cream/30">
                      <h2 className="font-serif text-xl font-semibold text-navy-deep">
                        Your Concerns
                      </h2>
                      <p className="text-xs text-taupe mt-1">
                        What would you like to address?
                      </p>
                    </div>
                    <nav className="py-2">
                      <Link
                        href="/concerns"
                        onClick={handleLinkClick}
                        className="block px-5 py-3 text-gold font-medium hover:bg-cream/30 transition-colors border-b border-cream/50"
                      >
                        View All Concerns →
                      </Link>
                      {concerns.map((concern) => (
                        <Link
                          key={concern.slug}
                          href={`/concerns/${concern.slug}`}
                          onClick={handleLinkClick}
                          className="block px-5 py-4 border-b border-cream/50 hover:bg-cream/30 transition-colors"
                        >
                          <span className="font-medium text-navy-deep block">
                            {concern.name}
                          </span>
                          <span className="text-xs text-taupe line-clamp-1">
                            {concern.tagline}
                          </span>
                        </Link>
                      ))}
                    </nav>
                  </motion.div>
                )}

                {/* About Menu */}
                {navState.level === "about" && (
                  <motion.div
                    key="about"
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 50 }}
                    transition={{ duration: 0.15 }}
                    className="absolute inset-0 overflow-y-auto"
                  >
                    <button
                      onClick={handleBack}
                      className="flex items-center gap-2 w-full px-5 py-3 text-sm font-medium text-gold bg-cream/50 border-b border-cream-dark"
                    >
                      <ChevronLeft className="h-4 w-4" />
                      Back to Menu
                    </button>
                    <div className="px-5 py-3 border-b border-cream-dark bg-cream/30">
                      <h2 className="font-serif text-xl font-semibold text-navy-deep">
                        About Healinque
                      </h2>
                    </div>
                    <nav className="py-2">
                      {aboutItems.map((item) => (
                        <Link
                          key={item.href}
                          href={item.href}
                          onClick={handleLinkClick}
                          className="block px-5 py-4 font-medium text-navy-deep border-b border-cream/50 hover:bg-cream/30 transition-colors"
                        >
                          {item.name}
                        </Link>
                      ))}
                    </nav>
                  </motion.div>
                )}

                {/* Shop Menu */}
                {navState.level === "shop" && (
                  <motion.div
                    key="shop"
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 50 }}
                    transition={{ duration: 0.15 }}
                    className="absolute inset-0 overflow-y-auto"
                  >
                    <button
                      onClick={handleBack}
                      className="flex items-center gap-2 w-full px-5 py-3 text-sm font-medium text-gold bg-cream/50 border-b border-cream-dark"
                    >
                      <ChevronLeft className="h-4 w-4" />
                      Back to Menu
                    </button>
                    <div className="px-5 py-3 border-b border-cream-dark bg-cream/30">
                      <h2 className="font-serif text-xl font-semibold text-navy-deep">
                        Shop
                      </h2>
                      <p className="text-xs text-taupe mt-1">
                        Members save up to 20% on products
                      </p>
                    </div>
                    <nav className="py-2">
                      {shopItems.map((item) => (
                        <Link
                          key={item.href}
                          href={item.href}
                          onClick={handleLinkClick}
                          className="block px-5 py-4 font-medium text-navy-deep border-b border-cream/50 hover:bg-cream/30 transition-colors"
                        >
                          {item.name}
                        </Link>
                      ))}
                      <Link
                        href="/shop/cart"
                        onClick={handleLinkClick}
                        className="flex items-center gap-2 px-5 py-4 font-medium text-navy-deep border-b border-cream/50 hover:bg-cream/30 transition-colors"
                      >
                        <ShoppingBag className="h-4 w-4" />
                        View Cart
                      </Link>
                    </nav>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Bottom CTA */}
            <div className="px-5 py-4 bg-cream/50 border-t border-cream-dark safe-bottom space-y-3">
              <a
                href={getPhoneLink()}
                className="flex items-center justify-center gap-2 w-full py-3 text-navy-deep font-medium bg-white rounded-lg border border-cream-dark"
              >
                <Phone className="h-4 w-4" />
                {siteConfig.phone}
              </a>
              <Link
                href="/book"
                onClick={handleLinkClick}
                className="flex items-center justify-center gap-2 w-full py-3.5 text-white font-semibold bg-gold rounded-lg transition-colors hover:bg-gold-dark"
              >
                <Calendar className="h-4 w-4" />
                Book Your Consultation
              </Link>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

