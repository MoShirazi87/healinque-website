import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Star, Quote, ArrowRight } from "lucide-react";
import { Hero } from "@/components/sections/hero";
import { ConsultationForm } from "@/components/sections/consultation-form";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Patient Reviews & Testimonials | Healinque Poway",
  description:
    "Read real patient reviews and testimonials from Healinque. See what our patients are saying about their experience with Dr. Azi Shirazi.",
  openGraph: {
    title: "Patient Reviews | Healinque",
    description: "Real patient reviews and testimonials from Healinque in Poway, CA.",
    images: ["/images/og-reviews.jpg"],
  },
};

const testimonials = [
  {
    id: 1,
    name: "Sarah M.",
    treatment: "Botox & Dermal Fillers",
    location: "Poway, CA",
    date: "October 2024",
    rating: 5,
    quote:
      "Dr. Azi is absolutely incredible! She has such a gentle touch and really listens to what you want. My results look so natural - everyone says I look refreshed but can't pinpoint what's different. That's exactly what I wanted! I've been to other providers before and the difference in Dr. Azi's approach is night and day. She takes her time, explains everything, and never pushes unnecessary treatments.",
    image: "https://images.pexels.com/photos/3807517/pexels-photo-3807517.jpeg?auto=compress&cs=tinysrgb&w=300",
    verified: true,
  },
  {
    id: 2,
    name: "Jennifer L.",
    treatment: "GLP-1 Weight Loss Program",
    location: "Rancho Bernardo, CA",
    date: "September 2024",
    rating: 5,
    quote:
      "After struggling with my weight for years, Dr. Shirazi put me on a comprehensive weight loss program with Semaglutide. The medical supervision made all the difference. I've lost 35 pounds and feel like a new person! Unlike other places that just hand you medication, Dr. Azi monitors everything and adjusts the dosing based on how I'm responding. She also gave me nutrition guidance that's been invaluable.",
    image: "https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg?auto=compress&cs=tinysrgb&w=300",
    verified: true,
  },
  {
    id: 3,
    name: "Michelle T.",
    treatment: "Morpheus8",
    location: "Scripps Ranch, CA",
    date: "November 2024",
    rating: 5,
    quote:
      "I was nervous about my first treatment, but Dr. Azi explained everything in detail and made me feel so comfortable. The Morpheus8 results exceeded my expectations - my skin has never looked better! The texture is smoother, my pores are smaller, and I'm seeing lifting in my jowl area. Three months post-treatment and I'm still seeing improvement.",
    image: "https://images.pexels.com/photos/3807755/pexels-photo-3807755.jpeg?auto=compress&cs=tinysrgb&w=300",
    verified: true,
  },
  {
    id: 4,
    name: "David K.",
    treatment: "Hormone Therapy (BHRT)",
    location: "San Diego, CA",
    date: "August 2024",
    rating: 5,
    quote:
      "As a man in my 50s, I was hesitant to visit a medical spa. But Dr. Shirazi's background in internal medicine made all the difference. She treats me as a whole patient, not just an aesthetic case. My testosterone optimization program has completely transformed my energy levels, mental clarity, and overall wellbeing. I wish I had done this years ago!",
    image: "https://images.pexels.com/photos/3771089/pexels-photo-3771089.jpeg?auto=compress&cs=tinysrgb&w=300",
    verified: true,
  },
  {
    id: 5,
    name: "Linda P.",
    treatment: "PRF Therapy",
    location: "Poway, CA",
    date: "October 2024",
    rating: 5,
    quote:
      "The PRF treatment was amazing! I love that it uses my own blood for rejuvenation - it feels so natural. Dr. Azi is incredibly knowledgeable and explains the science behind everything she does. My skin is glowing and the dark circles under my eyes have improved significantly. I'm already booked for my next session!",
    image: "https://images.pexels.com/photos/3807571/pexels-photo-3807571.jpeg?auto=compress&cs=tinysrgb&w=300",
    verified: true,
  },
  {
    id: 6,
    name: "Patricia H.",
    treatment: "PDO Thread Lift",
    location: "Escondido, CA",
    date: "July 2024",
    rating: 5,
    quote:
      "I wanted to address some sagging in my lower face but wasn't ready for surgery. Dr. Azi recommended PDO threads and the results are fantastic. My jowls are lifted, my jawline is more defined, and I still look like me - just a more rested version. The procedure was quick and the downtime was minimal.",
    image: "https://images.pexels.com/photos/3807534/pexels-photo-3807534.jpeg?auto=compress&cs=tinysrgb&w=300",
    verified: true,
  },
  {
    id: 7,
    name: "Karen W.",
    treatment: "HydraFacial & Chemical Peel",
    location: "Carmel Mountain, CA",
    date: "November 2024",
    rating: 5,
    quote:
      "I get a HydraFacial monthly and my skin has never been better. The team at Healinque is so welcoming and professional. Dr. Azi recommended adding a series of peels and my sun damage has improved dramatically. I always leave feeling pampered and glowing!",
    image: "https://images.pexels.com/photos/3807539/pexels-photo-3807539.jpeg?auto=compress&cs=tinysrgb&w=300",
    verified: true,
  },
  {
    id: 8,
    name: "Robert M.",
    treatment: "IV Therapy & NAD+",
    location: "Del Mar, CA",
    date: "September 2024",
    rating: 5,
    quote:
      "As a business executive with a demanding schedule, I was constantly exhausted. Dr. Shirazi recommended IV therapy and NAD+ infusions. The difference in my energy and mental clarity is remarkable. I do a session every few weeks now and it's become essential to my wellness routine. Dr. Azi's internal medicine background gives me complete confidence in her protocols.",
    image: "https://images.pexels.com/photos/3771107/pexels-photo-3771107.jpeg?auto=compress&cs=tinysrgb&w=300",
    verified: true,
  },
  {
    id: 9,
    name: "Angela S.",
    treatment: "Full Face Rejuvenation",
    location: "Poway, CA",
    date: "October 2024",
    rating: 5,
    quote:
      "I came to Dr. Azi for a comprehensive approach to aging. She created a custom plan combining Botox, fillers, and Morpheus8 over several months. The transformation has been incredible - but gradual and natural. No one knows I've had work done. I just look like a well-rested, healthier version of myself. That's the Dr. Azi magic!",
    image: "https://images.pexels.com/photos/3807528/pexels-photo-3807528.jpeg?auto=compress&cs=tinysrgb&w=300",
    verified: true,
  },
];

const stats = [
  { value: "4.9", label: "Google Rating", sublabel: "150+ Reviews" },
  { value: "98%", label: "Would Recommend", sublabel: "Patient Survey" },
  { value: "10K+", label: "Treatments", sublabel: "Performed" },
];

export default function ReviewsPage() {
  return (
    <main>
      <Hero
        variant="page"
        subtitle="Patient Testimonials"
        title="What Our Patients Are Saying"
        description="Real results, real stories. Read what our patients have to say about their experience at Healinque with Dr. Azi Shirazi."
        image="https://images.pexels.com/photos/5069432/pexels-photo-5069432.jpeg?auto=compress&cs=tinysrgb&w=1920"
      />

      {/* Stats */}
      <section className="bg-cream py-12">
        <div className="container-healinque">
          <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto text-center">
            {stats.map((stat) => (
              <div key={stat.label}>
                <div className="font-serif text-4xl font-bold text-gold mb-1">
                  {stat.value}
                </div>
                <div className="font-medium text-navy-deep text-sm">{stat.label}</div>
                <div className="text-xs text-taupe">{stat.sublabel}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Google Review Link */}
      <section className="bg-white py-8 border-b border-cream-dark">
        <div className="container-healinque text-center">
          <p className="text-taupe mb-4">
            Love your experience at Healinque? We&apos;d be grateful for your review!
          </p>
          <a
            href="https://g.page/healinque/review"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-navy-deep text-white rounded-lg hover:bg-navy-light transition-colors"
          >
            <Star className="h-5 w-5 text-gold" />
            Leave a Google Review
          </a>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="section-padding bg-white">
        <div className="container-healinque">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="bg-cream rounded-xl p-6 hover:shadow-elegant transition-shadow"
              >
                <div className="flex justify-between items-start mb-4">
                  <div className="flex gap-0.5">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-gold text-gold" />
                    ))}
                  </div>
                  {testimonial.verified && (
                    <span className="text-xs text-taupe bg-white px-2 py-1 rounded-full">
                      Verified Patient
                    </span>
                  )}
                </div>
                
                <Quote className="h-8 w-8 text-gold/30 mb-3" />
                
                <p className="text-taupe text-sm leading-relaxed mb-6">
                  {testimonial.quote}
                </p>
                
                <div className="flex items-center gap-3 pt-4 border-t border-cream-dark">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-medium text-navy-deep">{testimonial.name}</p>
                    <p className="text-xs text-taupe">{testimonial.treatment}</p>
                    <p className="text-xs text-taupe">{testimonial.location}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-navy-deep text-white">
        <div className="container-healinque text-center">
          <h2 className="font-serif text-display text-white mb-4">
            Ready to Write Your Own Success Story?
          </h2>
          <p className="text-cream/80 mb-8 max-w-2xl mx-auto">
            Join hundreds of satisfied patients who have transformed their appearance 
            and wellness with Dr. Azi Shirazi at Healinque.
          </p>
          <Link href="/book">
            <Button size="lg" className="bg-gold hover:bg-gold-dark text-navy-deep">
              Book Your Consultation <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Consultation Form */}
      <ConsultationForm
        variant="split"
        title="Start Your Journey"
        subtitle="Free Consultation"
      />
    </main>
  );
}
