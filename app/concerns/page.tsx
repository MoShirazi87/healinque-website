import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Hero } from "@/components/sections/hero";
import { ConsultationForm } from "@/components/sections/consultation-form";
import { concerns } from "@/lib/data/concerns";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Your Concerns | Find the Right Treatment | Healinque Poway",
  description:
    "Explore common aesthetic and wellness concerns and discover the treatments that can help. Fine lines, volume loss, weight management, hormone imbalance & more.",
  openGraph: {
    title: "Your Concerns | Healinque",
    description:
      "Find the right treatment for your specific concerns at Healinque in Poway, CA.",
    images: ["/images/og-concerns.jpg"],
  },
};

export default function ConcernsPage() {
  return (
    <main>
      <Hero
        variant="page"
        subtitle="Find Your Solution"
        title="What's Your Primary Concern?"
        description="Every patient is unique. Tell us what's bothering you, and we'll help you find the treatments that can make a difference. Click on any concern below to learn more."
        image="https://images.pexels.com/photos/5069432/pexels-photo-5069432.jpeg?auto=compress&cs=tinysrgb&w=1920"
      />

      {/* Concerns Grid */}
      <section className="section-padding bg-white">
        <div className="container-healinque">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {concerns.map((concern) => (
              <Link
                key={concern.id}
                href={`/concerns/${concern.slug}`}
                className="group"
              >
                <div className="card-treatment h-full flex flex-col">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={concern.image}
                      alt={concern.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6 flex-1 flex flex-col">
                    <h2 className="font-serif text-xl text-navy-deep group-hover:text-gold transition-colors mb-2">
                      {concern.name}
                    </h2>
                    <p className="text-sm text-taupe mb-4 flex-1">
                      {concern.tagline}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {concern.treatments.slice(0, 3).map((treatment) => (
                        <span
                          key={treatment.slug}
                          className="text-xs px-2 py-1 bg-cream rounded-full text-taupe"
                        >
                          {treatment.name}
                        </span>
                      ))}
                      {concern.treatments.length > 3 && (
                        <span className="text-xs px-2 py-1 bg-cream rounded-full text-taupe">
                          +{concern.treatments.length - 3} more
                        </span>
                      )}
                    </div>
                    <span className="inline-flex items-center text-sm font-medium text-gold group-hover:gap-2 transition-all">
                      Learn More <ArrowRight className="ml-1 h-4 w-4" />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-navy-deep text-white">
        <div className="container-healinque text-center">
          <h2 className="font-serif text-display text-white mb-4">
            Not Sure Where to Start?
          </h2>
          <p className="text-cream/80 mb-8 max-w-2xl mx-auto">
            Book a complimentary consultation with Dr. Shirazi. She&apos;ll listen to your 
            concerns, assess your unique needs, and create a personalized treatment plan.
          </p>
          <Link href="/book">
            <Button size="lg" className="bg-gold hover:bg-gold-dark text-navy-deep">
              Book Free Consultation <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Consultation Form */}
      <ConsultationForm
        variant="split"
        title="Tell Us About Your Concerns"
        subtitle="Get Started"
      />
    </main>
  );
}
