"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Award, GraduationCap, Heart } from "lucide-react";

interface DoctorIntroProps {
  variant?: "home" | "full";
}

const credentials = [
  { icon: GraduationCap, text: "Board-Certified Internal Medicine" },
  { icon: Award, text: "Aesthetics Medicine Specialist" },
  { icon: Heart, text: "Integrative Wellness Expert" },
];

export function DoctorIntro({ variant = "home" }: DoctorIntroProps) {
  return (
    <section className="section-padding bg-white overflow-hidden">
      <div className="container-healinque">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden">
              <Image
                src="/images/dr-azi-shirazi.jpg"
                alt="Dr. Azi Shirazi, MD"
                fill
                className="object-cover"
              />
            </div>
            {/* Decorative frame */}
            <div className="absolute -bottom-6 -right-6 w-full h-full border-2 border-gold rounded-2xl -z-10" />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-gold font-medium tracking-wide uppercase text-sm mb-3">
              Your Physician
            </p>
            <h2 className="text-display font-serif text-navy-deep mb-6">
              Meet Dr. Azi Shirazi
            </h2>
            <p className="text-lg text-taupe mb-6">
              Dr. Azadeh Shirazi brings over 15 years of medical expertise to Healinque 
              Wellness Clinic. Board-certified in Internal Medicine with advanced training 
              in aesthetic medicine, she combines scientific precision with an artistic eye 
              to deliver naturally beautiful results.
            </p>
            <p className="text-taupe mb-8">
              Her philosophy is simple: true beauty comes from optimal health. That&apos;s why 
              every treatment plan at Healinque addresses both your aesthetic goals and 
              overall wellness. Dr. Azi personally performs or supervises all procedures, 
              ensuring the highest standard of care.
            </p>

            {/* Credentials */}
            <div className="space-y-4 mb-8">
              {credentials.map((credential) => (
                <div key={credential.text} className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-cream flex items-center justify-center">
                    <credential.icon className="h-5 w-5 text-gold" />
                  </div>
                  <span className="text-navy-deep font-medium">{credential.text}</span>
                </div>
              ))}
            </div>

            <Link href="/about/dr-azi-shirazi">
              <Button size="lg">
                Learn More About Dr. Azi
              </Button>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

