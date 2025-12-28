"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Sarah M.",
    treatment: "Botox & Filler",
    quote:
      "Dr. Azi is absolutely incredible! She has such a gentle touch and really listens to what you want. My results look so natural - everyone says I look refreshed but can't pinpoint what's different. That's exactly what I wanted!",
    rating: 5,
    image: "/images/testimonials/client-1.jpg",
  },
  {
    id: 2,
    name: "Jennifer L.",
    treatment: "GLP-1 Weight Loss",
    quote:
      "After struggling with my weight for years, Dr. Shirazi put me on a comprehensive program. The medical supervision made all the difference. I've lost 35 pounds and feel like a new person!",
    rating: 5,
    image: "/images/testimonials/client-2.jpg",
  },
  {
    id: 3,
    name: "Michelle T.",
    treatment: "Morpheus8",
    quote:
      "I was nervous about my first treatment, but Dr. Azi explained everything in detail and made me feel so comfortable. The results exceeded my expectations. My skin has never looked better!",
    rating: 5,
    image: "/images/testimonials/client-3.jpg",
  },
  {
    id: 4,
    name: "David K.",
    treatment: "Hormone Therapy",
    quote:
      "As a man, I was hesitant to visit a medical spa. But Dr. Shirazi's background in internal medicine made the difference. She treats me as a whole patient, not just an aesthetic case. My energy levels are through the roof!",
    rating: 5,
    image: "/images/testimonials/client-4.jpg",
  },
  {
    id: 5,
    name: "Linda P.",
    treatment: "PRF Therapy",
    quote:
      "The PRF treatment was amazing! Using my own blood for rejuvenation felt so natural. Dr. Azi is incredibly knowledgeable and explains the science behind everything. I'm already booked for my next session!",
    rating: 5,
    image: "/images/testimonials/client-5.jpg",
  },
];

interface TestimonialsProps {
  variant?: "carousel" | "grid" | "featured";
  limit?: number;
}

export function Testimonials({ variant = "carousel", limit }: TestimonialsProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const displayTestimonials = limit ? testimonials.slice(0, limit) : testimonials;

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % displayTestimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + displayTestimonials.length) % displayTestimonials.length);
  };

  if (variant === "grid") {
    return (
      <section className="section-padding bg-white">
        <div className="container-healinque">
          <div className="text-center mb-12">
            <p className="section-subtitle">Patient Reviews</p>
            <h2 className="section-title">What Our Patients Say</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {displayTestimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="bg-cream rounded-xl p-6 hover:shadow-elegant transition-shadow"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-gold text-gold" />
                  ))}
                </div>
                <p className="text-taupe text-sm leading-relaxed mb-4">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>
                <div className="flex items-center gap-3">
                  <div className="relative w-10 h-10 rounded-full overflow-hidden">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-medium text-navy-deep text-sm">{testimonial.name}</p>
                    <p className="text-xs text-taupe">{testimonial.treatment}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link
              href="/reviews"
              className="text-sm font-medium text-gold hover:text-gold-dark transition-colors"
            >
              Read More Reviews →
            </Link>
          </div>
        </div>
      </section>
    );
  }

  if (variant === "featured") {
    const featured = displayTestimonials[0];
    return (
      <section className="section-padding bg-navy-deep text-white">
        <div className="container-healinque">
          <div className="max-w-3xl mx-auto text-center">
            <Quote className="h-12 w-12 text-gold/50 mx-auto mb-6" />
            <blockquote className="font-serif text-2xl md:text-3xl leading-relaxed mb-8">
              &ldquo;{featured.quote}&rdquo;
            </blockquote>
            <div className="flex items-center justify-center gap-4">
              <div className="relative w-14 h-14 rounded-full overflow-hidden border-2 border-gold">
                <Image
                  src={featured.image}
                  alt={featured.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="text-left">
                <p className="font-medium text-gold">{featured.name}</p>
                <p className="text-sm text-cream/70">{featured.treatment}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  // Carousel variant (default)
  return (
    <section className="section-padding bg-cream overflow-hidden">
      <div className="container-healinque">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12">
          <div>
            <p className="section-subtitle">Patient Reviews</p>
            <h2 className="section-title">Real Results, Real Stories</h2>
          </div>
          <div className="flex gap-2 mt-4 md:mt-0">
            <button
              onClick={prevTestimonial}
              className="p-3 rounded-full bg-white border border-cream-dark hover:border-gold transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="h-5 w-5 text-navy-deep" />
            </button>
            <button
              onClick={nextTestimonial}
              className="p-3 rounded-full bg-white border border-cream-dark hover:border-gold transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight className="h-5 w-5 text-navy-deep" />
            </button>
          </div>
        </div>

        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.3 }}
              className="grid md:grid-cols-2 gap-8 items-center"
            >
              <div className="relative aspect-square rounded-2xl overflow-hidden">
                <Image
                  src={displayTestimonials[currentIndex].image}
                  alt={displayTestimonials[currentIndex].name}
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <div className="flex gap-1 mb-4">
                  {[...Array(displayTestimonials[currentIndex].rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-gold text-gold" />
                  ))}
                </div>
                <blockquote className="font-serif text-2xl text-navy-deep leading-relaxed mb-6">
                  &ldquo;{displayTestimonials[currentIndex].quote}&rdquo;
                </blockquote>
                <div>
                  <p className="font-semibold text-navy-deep">
                    {displayTestimonials[currentIndex].name}
                  </p>
                  <p className="text-taupe">
                    {displayTestimonials[currentIndex].treatment}
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-8">
          {displayTestimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full transition-colors ${
                index === currentIndex ? "bg-gold" : "bg-taupe/30"
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
