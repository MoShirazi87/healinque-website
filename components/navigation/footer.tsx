"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { MapPin, Phone, Mail, Clock, Instagram, Facebook, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { siteConfig, getPhoneLink, getEmailLink } from "@/lib/config/site";

const footerLinks = {
  treatments: [
    { name: "Botox & Dysport", href: "/treatments/botox-dysport" },
    { name: "Dermal Fillers", href: "/treatments/dermal-fillers" },
    { name: "Morpheus8", href: "/treatments/morpheus8" },
    { name: "GLP-1 Weight Loss", href: "/treatments/glp1-weight-loss" },
    { name: "PRF/PRP Therapy", href: "/treatments/prp-therapy" },
    { name: "View All Treatments", href: "/treatments" },
  ],
  concerns: [
    { name: "Fine Lines & Wrinkles", href: "/concerns/wrinkles-fine-lines" },
    { name: "Volume Loss", href: "/concerns/volume-loss" },
    { name: "Weight Management", href: "/concerns/weight-management" },
    { name: "Hormone Imbalance", href: "/concerns/hormone-imbalance" },
    { name: "Low Energy", href: "/concerns/low-energy" },
  ],
  about: [
    { name: "About Healinque", href: "/about" },
    { name: "Dr. Azi Shirazi", href: "/about/dr-azi-shirazi" },
    { name: "The Healinque Method", href: "/about/healinque-method" },
    { name: "Patient Reviews", href: "/reviews" },
    { name: "Before & After", href: "/gallery" },
    { name: "Contact Us", href: "/contact" },
  ],
  resources: [
    { name: "FAQs", href: "/faq" },
    { name: "Financing Options", href: "/financing" },
    { name: "Memberships", href: "/memberships" },
    { name: "Patient Portal", href: "/account" },
    { name: "Medical Forms", href: "/forms" },
  ],
};

export function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter subscription
    setSubscribed(true);
    setEmail("");
  };

  return (
    <footer className="bg-navy-deep text-white relative overflow-hidden">
      {/* Curved Top */}
      <div className="absolute top-0 left-0 right-0 h-20 bg-cream footer-curve -translate-y-1/2" />

      {/* Newsletter Section */}
      <div className="container-healinque pt-24 pb-12">
        <div className="max-w-xl mx-auto text-center mb-16">
          <h3 className="font-serif text-2xl text-white mb-3">
            Stay Connected
          </h3>
          <p className="text-cream/70 mb-6 text-sm">
            Get exclusive offers, treatment tips, and wellness insights delivered to your inbox.
          </p>
          {subscribed ? (
            <p className="text-gold font-medium">Thank you for subscribing!</p>
          ) : (
            <form onSubmit={handleSubscribe} className="flex gap-3 max-w-md mx-auto">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                className="flex-1 px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder:text-cream/50 focus:outline-none focus:border-gold transition-colors"
              />
              <Button type="submit" className="bg-gold hover:bg-gold-dark">
                <ArrowRight className="h-5 w-5" />
              </Button>
            </form>
          )}
        </div>

        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12 mb-16">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Image
              src="/images/logo-white.svg"
              alt="Healinque - Aesthetic Medicine & Longevity Center"
              width={200}
              height={55}
              className="h-14 w-auto mb-6"
            />
            <p className="text-cream/70 mb-6 max-w-sm text-sm leading-relaxed">
              Where natural beauty meets evidence-based longevity medicine. 
              Physician-performed aesthetic treatments in Poway, California.
            </p>
            <div className="space-y-3 text-sm text-cream/70">
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-gold flex-shrink-0 mt-0.5" />
                <a 
                  href={siteConfig.address.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gold transition-colors"
                >
                  {siteConfig.address.street}, {siteConfig.address.suite}<br />
                  {siteConfig.address.city}, {siteConfig.address.state} {siteConfig.address.zip}
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-gold flex-shrink-0" />
                <a href={getPhoneLink()} className="hover:text-gold transition-colors">
                  {siteConfig.phone}
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-gold flex-shrink-0" />
                <a href={getEmailLink()} className="hover:text-gold transition-colors">
                  {siteConfig.email}
                </a>
              </div>
              <div className="flex items-start gap-3">
                <Clock className="h-5 w-5 text-gold flex-shrink-0 mt-0.5" />
                <span>
                  {siteConfig.hours.display.map((line, i) => (
                    <span key={i}>{line}{i < siteConfig.hours.display.length - 1 && <br />}</span>
                  ))}
                </span>
              </div>
            </div>
          </div>

          {/* Treatments */}
          <div>
            <h4 className="font-serif text-lg font-semibold text-gold mb-4">Treatments</h4>
            <ul className="space-y-2.5">
              {footerLinks.treatments.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-cream/70 hover:text-gold transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Concerns */}
          <div>
            <h4 className="font-serif text-lg font-semibold text-gold mb-4">Concerns</h4>
            <ul className="space-y-2.5">
              {footerLinks.concerns.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-cream/70 hover:text-gold transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* About */}
          <div>
            <h4 className="font-serif text-lg font-semibold text-gold mb-4">About</h4>
            <ul className="space-y-2.5">
              {footerLinks.about.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-cream/70 hover:text-gold transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-serif text-lg font-semibold text-gold mb-4">Resources</h4>
            <ul className="space-y-2.5 mb-6">
              {footerLinks.resources.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-cream/70 hover:text-gold transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
            
            {/* Social Links */}
            <h4 className="font-serif text-sm font-semibold text-gold mb-3">Follow Dr. Azi</h4>
            <div className="flex gap-4">
              {siteConfig.social.instagram && (
                <a
                  href={siteConfig.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cream/70 hover:text-gold transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram className="h-5 w-5" />
                </a>
              )}
              {siteConfig.social.facebook && (
                <a
                  href={siteConfig.social.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cream/70 hover:text-gold transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook className="h-5 w-5" />
                </a>
              )}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-sm text-cream/50 text-center md:text-left">
              <p>© {new Date().getFullYear()} Healinque Wellness Clinic. All rights reserved.</p>
              <p className="mt-1">
                Dr. Azadeh Shirazi, MD • Board Certified Internal Medicine
              </p>
            </div>
            <div className="flex flex-wrap justify-center gap-6 text-sm text-cream/50">
              <Link href="/privacy" className="hover:text-gold transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:text-gold transition-colors">
                Terms of Service
              </Link>
              <Link href="/hipaa" className="hover:text-gold transition-colors">
                HIPAA Notice
              </Link>
              <Link href="/accessibility" className="hover:text-gold transition-colors">
                Accessibility
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
