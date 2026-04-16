"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Clock, Home } from "lucide-react";
import { siteConfig } from "@/lib/config/site";
import { pexelsUrl, pageImages } from "@/lib/data/images";

export function LocationShowcase() {
  const contentVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  };

  const amenities = [
    { icon: <Home className="w-5 h-5" />, text: "Modern, private treatment rooms" },
    {
      icon: <Clock className="w-5 h-5" />,
      text: "Comfortable consultation areas",
    },
    { icon: <MapPin className="w-5 h-5" />, text: "On-site parking" },
    {
      icon: <Phone className="w-5 h-5" />,
      text: "Welcoming, calming environment",
    },
  ];

  return (
    <section className="relative py-24 md:py-40 bg-[#0d1b2e] overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-[#C9A227]/8 to-transparent rounded-full filter blur-3xl opacity-20 -z-10" />
      <div className="absolute top-20 right-0 w-80 h-80 bg-gradient-to-l from-blue-500/8 to-transparent rounded-full filter blur-3xl opacity-15 -z-10" />

      <div className="container-healinque relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Column - Content */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={contentVariants}
            className="flex flex-col justify-center"
          >
            {/* Subtitle */}
            <motion.p
              variants={itemVariants}
              className="text-[#C9A227] font-medium tracking-[0.2em] uppercase text-xs mb-4 font-sans"
            >
              VISIT US
            </motion.p>

            {/* Main Title */}
            <motion.h2
              variants={itemVariants}
              className="text-5xl md:text-6xl font-serif font-bold text-white mb-2 leading-tight"
            >
              Our Poway{" "}
              <span className="text-[#C9A227] italic">Location</span>
            </motion.h2>

            {/* Gold Decorative Line */}
            <motion.div
              variants={itemVariants}
              className="w-20 h-1 bg-gradient-to-r from-[#C9A227] to-[#C9A227]/40 mb-10"
            />

            {/* Description */}
            <motion.p
              variants={itemVariants}
              className="text-lg text-white/75 leading-relaxed mb-8"
            >
              Located in Poway, our modern clinic provides a serene, welcoming environment for your aesthetic and wellness care. Conveniently serving Rancho Bernardo, Scripps Ranch, Escondido, San Marcos, and Del Mar.
            </motion.p>

            {/* Address Card */}
            <motion.div
              variants={itemVariants}
              className="p-8 rounded-xl bg-white/[0.03] border border-white/5 mb-8 hover:border-[#C9A227]/30 transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                <MapPin className="w-6 h-6 text-[#C9A227] flex-shrink-0 mt-1" />
                <div>
                  <p className="text-white/70 text-sm font-medium mb-2 uppercase tracking-wide">
                    Address
                  </p>
                  <p className="text-white text-lg font-medium leading-relaxed">
                    {siteConfig.address.street}
                    <br />
                    {siteConfig.address.suite}
                    <br />
                    {siteConfig.address.city}, {siteConfig.address.state}{" "}
                    {siteConfig.address.zip}
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Amenities Grid */}
            <motion.div
              variants={itemVariants}
              className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10"
            >
              {amenities.map((amenity, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 p-4 rounded-lg bg-white/[0.02] border border-white/5 hover:border-[#C9A227]/20 transition-all duration-300"
                >
                  <div className="flex-shrink-0 text-[#C9A227] mt-0.5">
                    {amenity.icon}
                  </div>
                  <p className="text-sm text-white/80 font-medium">
                    {amenity.text}
                  </p>
                </div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4"
            >
              <a
                href={siteConfig.address.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 sm:flex-none"
              >
                <Button
                  size="lg"
                  className="w-full rounded-xl bg-[#C9A227] text-[#0a1628] hover:bg-[#C9A227]/90 font-semibold h-auto px-8 py-4 transition-all duration-500 hover:shadow-[0_10px_30px_rgba(201,162,39,0.3)]"
                >
                  Get Directions
                </Button>
              </a>
              <Link href="/contact" className="flex-1 sm:flex-none">
                <Button
                  size="lg"
                  className="w-full rounded-xl border-2 border-[#C9A227]/40 text-[#C9A227] hover:bg-[#C9A227]/10 hover:border-[#C9A227]/70 font-semibold h-auto px-8 py-4 bg-transparent transition-all duration-500 backdrop-blur-sm"
                >
                  Contact Us
                </Button>
              </Link>
            </motion.div>
          </motion.div>

          {/* Right Column - Hours & Map Placeholder */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9 }}
            viewport={{ once: true }}
            className="relative rounded-2xl overflow-hidden border border-white/5 bg-white/[0.02] backdrop-blur-sm h-96 md:h-[500px] flex flex-col items-center justify-center p-8"
          >
            {/* Map Placeholder */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#0a1628] via-[#0d1b2e] to-[#0a1628]" />

            {/* Hours Section */}
            <div className="relative z-10 text-center space-y-6">
              <div>
                <p className="text-[#C9A227] font-medium tracking-[0.2em] uppercase text-xs mb-4">
                  Hours of Operation
                </p>
                <div className="space-y-2 text-sm text-white/80">
                  {siteConfig.hours.short.map((h, idx) => (
                    <div key={idx} className="flex justify-center gap-4">
                      <span className="font-medium w-12 text-left">{h.day}</span>
                      <span>{h.hours}</span>
                      {h.note && (
                        <span className="text-[#C9A227] text-xs font-medium">
                          {h.note}
                        </span>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-6 border-t border-white/10">
                <p className="text-lg text-[#C9A227] font-medium mb-2">
                  {siteConfig.phone}
                </p>
                <p className="text-sm text-white/60">
                  Ready to schedule your consultation?
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
