"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown, Phone, ShoppingBag, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { siteConfig, getPhoneLink } from "@/lib/config/site";
import { MobileMenu } from "./mobile-menu";

const navigation = {
  treatments: {
    label: "Our Treatments",
    categories: [
      {
        name: "Aesthetic Medicine",
        href: "/treatments/category/aesthetics",
        items: [
          { name: "Botox & Dysport", href: "/treatments/botox-dysport" },
          { name: "Dermal Fillers", href: "/treatments/dermal-fillers" },
          { name: "PDO Threads", href: "/treatments/pdo-threads" },
          { name: "Kybella", href: "/treatments/kybella" },
        ],
      },
      {
        name: "Regenerative",
        href: "/treatments/category/regenerative",
        items: [
          { name: "PRF/PRP Therapy", href: "/treatments/prp-therapy" },
          { name: "Exosome Therapy", href: "/treatments/exosome-therapy" },
          { name: "PDRN Salmon DNA", href: "/treatments/pdrn-therapy" },
          { name: "Microneedling + PRF", href: "/treatments/microneedling" },
        ],
      },
      {
        name: "Skin Rejuvenation",
        href: "/treatments/category/skin-rejuvenation",
        items: [
          { name: "Morpheus8", href: "/treatments/morpheus8" },
          { name: "Chemical Peels", href: "/treatments/chemical-peels" },
          { name: "HydraFacial", href: "/treatments/hydrafacial" },
        ],
      },
      {
        name: "Wellness & Longevity",
        href: "/treatments/category/wellness",
        items: [
          { name: "GLP-1 Weight Loss", href: "/treatments/glp1-weight-loss" },
          { name: "Hormone Therapy (BHRT)", href: "/treatments/hormone-therapy" },
          { name: "IV Therapy & NAD+", href: "/treatments/iv-therapy" },
          { name: "Peptide Protocols", href: "/treatments/peptides" },
        ],
      },
    ],
  },
  concerns: {
    label: "Your Concerns",
    items: [
      { name: "Fine Lines & Wrinkles", href: "/concerns/wrinkles-fine-lines" },
      { name: "Volume Loss", href: "/concerns/volume-loss" },
      { name: "Double Chin", href: "/concerns/double-chin" },
      { name: "Dull Skin", href: "/concerns/dull-skin" },
      { name: "Hyperpigmentation", href: "/concerns/hyperpigmentation" },
      { name: "Weight Management", href: "/concerns/weight-management" },
      { name: "Low Energy & Fatigue", href: "/concerns/low-energy" },
      { name: "Hormone Imbalance", href: "/concerns/hormone-imbalance" },
    ],
  },
  about: {
    label: "About",
    items: [
      { name: "About Healinque", href: "/about" },
      { name: "Dr. Azi Shirazi", href: "/about/dr-azi-shirazi" },
      { name: "The Healinque Method", href: "/about/healinque-method" },
      { name: "Before & After", href: "/gallery" },
      { name: "Patient Reviews", href: "/reviews" },
      { name: "FAQ", href: "/faq" },
    ],
  },
  shop: {
    label: "Shop",
    categories: [
      {
        name: "Healinque Products",
        items: [
          { name: "All Products", href: "/shop" },
          { name: "Skincare by Healinque", href: "/shop/collections/skincare" },
          { name: "Supplements", href: "/shop/collections/supplements" },
          { name: "Dr. Azi's Picks", href: "/shop/collections/dr-azi-picks" },
        ],
      },
      {
        name: "Services & Packages",
        items: [
          { name: "Memberships", href: "/memberships" },
          { name: "Treatment Packages", href: "/shop/collections/packages" },
          { name: "Gift Cards", href: "/shop/collections/gift-cards" },
        ],
      },
    ],
  },
};

export function Header() {
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  const [activeDropdown, setActiveDropdown] = React.useState<string | null>(null);
  const [showAnnouncement, setShowAnnouncement] = React.useState(true);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Announcement Bar */}
      <AnimatePresence>
        {showAnnouncement && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="bg-navy-deep text-white relative z-50"
          >
            <div className="container-healinque py-2.5 flex items-center justify-center gap-4 text-sm">
              <span className="hidden sm:inline">✨</span>
              <span>
                <strong>New Patients:</strong> Get $50 off your first injectable treatment.{" "}
                <Link href="/book" className="underline hover:text-gold transition-colors">
                  Book Now
                </Link>
              </span>
              <button
                onClick={() => setShowAnnouncement(false)}
                className="absolute right-4 top-1/2 -translate-y-1/2 p-1 hover:text-gold transition-colors"
                aria-label="Close announcement"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <header
        className={cn(
          "sticky top-0 left-0 right-0 z-50 transition-all duration-300",
          isScrolled
            ? "bg-white/95 backdrop-blur-md shadow-sm"
            : "bg-white"
        )}
      >
        <nav className="container-healinque">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/" className="flex-shrink-0">
              <Image
                src="/images/logo.svg"
                alt="Healinque - Aesthetic Medicine & Longevity Center"
                width={200}
                height={50}
                className="h-12 w-auto"
                priority
              />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-6">
              {/* Treatments Mega Menu */}
              <div
                className="relative"
                onMouseEnter={() => setActiveDropdown("treatments")}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button
                  className="flex items-center space-x-1 text-sm font-medium text-navy-deep hover:text-gold transition-colors py-2"
                >
                  <span>Our Treatments</span>
                  <ChevronDown className="h-4 w-4" />
                </button>
                <AnimatePresence>
                  {activeDropdown === "treatments" && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute left-1/2 -translate-x-1/2 mt-2 w-[800px] bg-white rounded-xl shadow-elegant border border-cream-dark overflow-hidden"
                    >
                      <div className="flex">
                        {/* Menu image */}
                        <div className="w-56 bg-cream p-4 hidden xl:block">
                          <div className="relative aspect-[4/5] rounded-lg overflow-hidden mb-3">
                            <Image
                              src="https://images.pexels.com/photos/3985331/pexels-photo-3985331.jpeg?auto=compress&cs=tinysrgb&w=400"
                              alt="Treatment"
                              fill
                              className="object-cover"
                            />
                          </div>
                          <p className="text-xs text-taupe">
                            Physician-performed treatments with natural results
                          </p>
                        </div>
                        {/* Menu content */}
                        <div className="flex-1 p-6">
                          <div className="grid grid-cols-4 gap-6">
                            {navigation.treatments.categories.map((category) => (
                              <div key={category.name}>
                                <Link
                                  href={category.href}
                                  className="font-serif text-base font-semibold text-navy-deep hover:text-gold transition-colors block mb-3"
                                >
                                  {category.name}
                                </Link>
                                <ul className="space-y-2">
                                  {category.items.map((item) => (
                                    <li key={item.name}>
                                      <Link
                                        href={item.href}
                                        className="text-sm text-taupe hover:text-gold transition-colors block"
                                      >
                                        {item.name}
                                      </Link>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            ))}
                          </div>
                          <div className="mt-6 pt-4 border-t border-cream-dark flex items-center justify-between">
                            <Link
                              href="/treatments"
                              className="text-sm font-medium text-gold hover:text-gold-dark transition-colors"
                            >
                              View All Treatments →
                            </Link>
                            <span className="text-xs text-taupe">
                              All treatments performed or supervised by Dr. Azi Shirazi
                            </span>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Concerns Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setActiveDropdown("concerns")}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button
                  className="flex items-center space-x-1 text-sm font-medium text-navy-deep hover:text-gold transition-colors py-2"
                >
                  <span>Your Concerns</span>
                  <ChevronDown className="h-4 w-4" />
                </button>
                <AnimatePresence>
                  {activeDropdown === "concerns" && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute left-1/2 -translate-x-1/2 mt-2 w-72 bg-white rounded-xl shadow-elegant border border-cream-dark p-4"
                    >
                      <p className="text-xs text-taupe uppercase tracking-wider mb-3">
                        What would you like to address?
                      </p>
                      <ul className="space-y-1">
                        {navigation.concerns.items.map((item) => (
                          <li key={item.name}>
                            <Link
                              href={item.href}
                              className="block px-3 py-2 text-sm text-navy-deep hover:bg-cream hover:text-gold rounded-md transition-colors"
                            >
                              {item.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* About Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setActiveDropdown("about")}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button
                  className="flex items-center space-x-1 text-sm font-medium text-navy-deep hover:text-gold transition-colors py-2"
                >
                  <span>About</span>
                  <ChevronDown className="h-4 w-4" />
                </button>
                <AnimatePresence>
                  {activeDropdown === "about" && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute left-1/2 -translate-x-1/2 mt-2 w-64 bg-white rounded-xl shadow-elegant border border-cream-dark p-4"
                    >
                      <ul className="space-y-1">
                        {navigation.about.items.map((item) => (
                          <li key={item.name}>
                            <Link
                              href={item.href}
                              className="block px-3 py-2 text-sm text-navy-deep hover:bg-cream hover:text-gold rounded-md transition-colors"
                            >
                              {item.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Shop Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setActiveDropdown("shop")}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button
                  className="flex items-center space-x-1 text-sm font-medium text-navy-deep hover:text-gold transition-colors py-2"
                >
                  <ShoppingBag className="h-4 w-4" />
                  <span>Shop</span>
                  <ChevronDown className="h-4 w-4" />
                </button>
                <AnimatePresence>
                  {activeDropdown === "shop" && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute left-1/2 -translate-x-1/2 mt-2 w-[420px] bg-white rounded-xl shadow-elegant border border-cream-dark overflow-hidden"
                    >
                      <div className="flex">
                        {/* Shop promo image */}
                        <div className="w-40 bg-gradient-to-br from-gold/20 to-cream p-4 hidden md:flex flex-col justify-center items-center text-center">
                          <ShoppingBag className="h-8 w-8 text-gold mb-2" />
                          <p className="text-xs text-navy-deep font-medium">
                            Member Savings
                          </p>
                          <p className="text-xs text-taupe mt-1">
                            Up to 20% off products
                          </p>
                        </div>
                        {/* Shop menu content */}
                        <div className="flex-1 p-5">
                          <div className="grid grid-cols-2 gap-6">
                            {navigation.shop.categories.map((category) => (
                              <div key={category.name}>
                                <p className="font-serif text-sm font-semibold text-navy-deep mb-2">
                                  {category.name}
                                </p>
                                <ul className="space-y-1.5">
                                  {category.items.map((item) => (
                                    <li key={item.name}>
                                      <Link
                                        href={item.href}
                                        className="text-sm text-taupe hover:text-gold transition-colors block"
                                      >
                                        {item.name}
                                      </Link>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            ))}
                          </div>
                          <div className="mt-4 pt-3 border-t border-cream-dark">
                            <Link
                              href="/shop"
                              className="text-sm font-medium text-gold hover:text-gold-dark transition-colors"
                            >
                              Browse All Products →
                            </Link>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <Link
                href="/memberships"
                className="text-sm font-medium text-navy-deep hover:text-gold transition-colors"
              >
                Memberships
              </Link>

              <Link
                href="/contact"
                className="text-sm font-medium text-navy-deep hover:text-gold transition-colors"
              >
                Contact
              </Link>
            </div>

            {/* Right Side Actions */}
            <div className="flex items-center space-x-4">
              <a
                href={getPhoneLink()}
                className="hidden md:flex items-center gap-2 text-sm text-navy-deep hover:text-gold transition-colors"
              >
                <Phone className="h-4 w-4" />
                <span className="font-medium">{siteConfig.phone}</span>
              </a>
              
              {/* Account Link */}
              <Link
                href="/account"
                className="hidden sm:flex items-center gap-1 text-sm text-navy-deep hover:text-gold transition-colors"
                title="My Account"
              >
                <User className="h-5 w-5" />
              </Link>
              
              <Link href="/book">
                <Button size="sm" className="hidden sm:inline-flex">
                  Book Now
                </Button>
              </Link>

              {/* Mobile Menu Button */}
              <button
                className="lg:hidden p-2"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>
        </nav>

        {/* Mobile Menu - Full-screen with drill-down navigation */}
        <MobileMenu 
          isOpen={mobileMenuOpen} 
          onClose={() => setMobileMenuOpen(false)} 
        />
      </header>
    </>
  );
}
