import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Award, Shield, Heart, Sparkles, Users, Brain } from "lucide-react";
import { Hero } from "@/components/sections/hero";
import { Differentiators } from "@/components/sections/differentiators";
import { Testimonials } from "@/components/sections/testimonials";
import { ConsultationForm } from "@/components/sections/consultation-form";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "About Healinque | Aesthetic Medicine & Longevity Center in Poway",
  description:
    "Discover Healinque, where natural beauty meets evidence-based longevity medicine. Led by Dr. Azi Shirazi with 20+ years of emergency medicine expertise.",
  openGraph: {
    title: "About Healinque | Aesthetic Medicine & Longevity Center",
    description:
      "Where natural beauty meets evidence-based longevity medicine. Physician-performed treatments in Poway, CA.",
    images: ["/images/og-about.jpg"],
  },
};

const values = [
  {
    icon: Shield,
    title: "Safety First",
    description:
      "Dr. Shirazi's 20 years in emergency medicine means she knows how to prevent complications—and how to handle them if they arise. Your safety is never compromised.",
  },
  {
    icon: Heart,
    title: "Inside-Out Philosophy",
    description:
      "True beauty radiates from within. We address root causes—hormones, nutrition, inflammation—not just surface symptoms, for results that are natural and lasting.",
  },
  {
    icon: Sparkles,
    title: "Natural Results",
    description:
      "We believe in enhancement, not transformation. Our conservative approach ensures you look refreshed and like the best version of yourself—never overdone.",
  },
  {
    icon: Users,
    title: "Physician-Performed",
    description:
      "Unlike many medical spas, Dr. Shirazi personally performs all injectable treatments. Your face is in physician hands, not delegated to staff.",
  },
  {
    icon: Brain,
    title: "Evidence-Based",
    description:
      "Every treatment we offer is backed by research and clinical evidence. We stay current with the latest advances while avoiding unproven fads.",
  },
  {
    icon: Award,
    title: "Personalized Care",
    description:
      "No cookie-cutter treatments here. Every patient receives a customized plan based on their unique anatomy, goals, and health profile.",
  },
];

export default function AboutPage() {
  return (
    <main>
      <Hero
        variant="page"
        subtitle="Our Story"
        title="Where Natural Beauty Meets Longevity Medicine"
        description="Healinque was founded on a simple belief: that looking and feeling your best go hand in hand. We combine cutting-edge aesthetic treatments with evidence-based longevity medicine for comprehensive results."
        image="https://images.pexels.com/photos/3735747/pexels-photo-3735747.jpeg?auto=compress&cs=tinysrgb&w=1920"
      />

      {/* Mission Section */}
      <section className="section-padding bg-white">
        <div className="container-healinque">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="section-subtitle">Our Mission</p>
              <h2 className="section-title mb-6">
                Helping You Look as Young as You Feel—And Feel Even Younger
              </h2>
              <div className="space-y-4 text-taupe leading-relaxed">
                <p>
                  At Healinque, we believe that true beauty is health made visible. When we optimize 
                  what&apos;s happening inside the body—balancing hormones, reducing inflammation, 
                  supporting cellular function—it radiates outward in the form of vibrant skin, 
                  natural energy, and lasting vitality.
                </p>
                <p>
                  That&apos;s why we take a different approach than traditional medical spas. Instead 
                  of just treating symptoms on the surface, we dig deeper. We ask: Why is your skin 
                  aging faster than it should? Why do you have less energy than you used to? What 
                  can we address at the root level to create lasting change?
                </p>
                <p>
                  This philosophy is what makes Healinque unique. Dr. Shirazi brings together 
                  aesthetic medicine and internal medicine under one roof, treating you as a whole 
                  person rather than a collection of concerns to check off a list.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="relative aspect-square rounded-2xl overflow-hidden">
                <Image
                  src="https://images.pexels.com/photos/5069432/pexels-photo-5069432.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Healinque treatment room"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Healinque Method */}
      <section className="section-padding bg-cream">
        <div className="container-healinque">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <p className="section-subtitle">The Healinque Method</p>
            <h2 className="section-title mb-6">
              A Comprehensive Approach to Beauty & Wellness
            </h2>
            <p className="text-taupe leading-relaxed">
              Every patient journey begins with understanding. Before we recommend a single 
              treatment, we take the time to learn about your health history, lifestyle, goals, 
              and concerns. This comprehensive approach allows us to create a truly personalized 
              plan that addresses both aesthetic desires and underlying health factors.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-8 text-center">
              <div className="w-16 h-16 rounded-full bg-gold/10 flex items-center justify-center mx-auto mb-4">
                <span className="font-serif text-2xl font-bold text-gold">1</span>
              </div>
              <h3 className="font-serif text-xl text-navy-deep mb-3">Assess</h3>
              <p className="text-taupe text-sm">
                Comprehensive evaluation of your aesthetic concerns, health history, and wellness 
                goals. We look at the whole picture, not just what&apos;s on the surface.
              </p>
            </div>
            <div className="bg-white rounded-xl p-8 text-center">
              <div className="w-16 h-16 rounded-full bg-gold/10 flex items-center justify-center mx-auto mb-4">
                <span className="font-serif text-2xl font-bold text-gold">2</span>
              </div>
              <h3 className="font-serif text-xl text-navy-deep mb-3">Customize</h3>
              <p className="text-taupe text-sm">
                Based on your unique profile, we design a personalized treatment plan that 
                combines the right aesthetic and wellness interventions for optimal results.
              </p>
            </div>
            <div className="bg-white rounded-xl p-8 text-center">
              <div className="w-16 h-16 rounded-full bg-gold/10 flex items-center justify-center mx-auto mb-4">
                <span className="font-serif text-2xl font-bold text-gold">3</span>
              </div>
              <h3 className="font-serif text-xl text-navy-deep mb-3">Transform</h3>
              <p className="text-taupe text-sm">
                Experience lasting transformation as we address both surface concerns and 
                underlying factors, helping you look and feel your absolute best.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-white">
        <div className="container-healinque">
          <div className="text-center mb-12">
            <p className="section-subtitle">Our Values</p>
            <h2 className="section-title">What Sets Us Apart</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value) => (
              <div key={value.title} className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-cream flex items-center justify-center flex-shrink-0">
                  <value.icon className="h-6 w-6 text-gold" />
                </div>
                <div>
                  <h3 className="font-serif text-lg font-semibold text-navy-deep mb-2">
                    {value.title}
                  </h3>
                  <p className="text-sm text-taupe leading-relaxed">{value.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Dr. Azi Intro */}
      <section className="section-padding bg-navy-deep text-white">
        <div className="container-healinque">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative aspect-[3/4] max-w-md mx-auto lg:mx-0 rounded-2xl overflow-hidden">
              <Image
                src="/images/dr-azi-shirazi.jpg"
                alt="Dr. Azi Shirazi"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <p className="text-gold font-medium tracking-wide uppercase text-sm mb-3">
                Our Founder
              </p>
              <h2 className="font-serif text-display text-white mb-6">
                Meet Dr. Azadeh &ldquo;Azi&rdquo; Shirazi
              </h2>
              <p className="text-cream/80 leading-relaxed mb-6">
                Board Certified in Internal Medicine with over 20 years of experience in urgent 
                and emergency medicine, Dr. Shirazi brings a unique perspective to aesthetic 
                medicine. She founded Healinque to offer the comprehensive, physician-led care 
                that she believes every patient deserves.
              </p>
              <blockquote className="border-l-4 border-gold pl-6 my-6">
                <p className="font-serif text-lg text-cream italic">
                  &ldquo;After two decades of treating medical emergencies—including complications 
                  from cosmetic procedures gone wrong—I knew I could do things differently. 
                  Healinque represents my vision for what aesthetic medicine should be: safe, 
                  personalized, and focused on the whole person.&rdquo;
                </p>
              </blockquote>
              <Link href="/about/dr-azi-shirazi">
                <Button className="bg-gold hover:bg-gold-dark text-navy-deep">
                  Read Dr. Azi&apos;s Full Story <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <Testimonials variant="grid" limit={3} />

      {/* Consultation CTA */}
      <ConsultationForm
        variant="split"
        title="Start Your Journey"
        subtitle="Schedule a Consultation"
      />
    </main>
  );
}
