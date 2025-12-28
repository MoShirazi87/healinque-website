import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Hero } from "@/components/sections/hero";
import { ConsultationForm } from "@/components/sections/consultation-form";
import { treatments, treatmentCategories, TreatmentCategory } from "@/lib/data/treatments";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Treatments | Aesthetic Medicine & Longevity | Healinque Poway",
  description:
    "Explore our comprehensive range of physician-performed aesthetic treatments and longevity medicine services. Botox, fillers, Morpheus8, weight loss, hormone therapy & more.",
  openGraph: {
    title: "Our Treatments | Healinque",
    description:
      "Physician-performed aesthetic treatments and longevity medicine in Poway, CA.",
    images: ["/images/og-treatments.jpg"],
  },
};

export default function TreatmentsPage() {
  const categories = Object.entries(treatmentCategories) as [TreatmentCategory, typeof treatmentCategories[TreatmentCategory]][];

  return (
    <main>
      <Hero
        variant="page"
        subtitle="Our Services"
        title="Treatments & Services"
        description="From precision injectables to advanced regenerative medicine and longevity protocols, every treatment is personally performed or supervised by Dr. Azi Shirazi."
        image="https://images.pexels.com/photos/3985331/pexels-photo-3985331.jpeg?auto=compress&cs=tinysrgb&w=1920"
      />

      {/* All Treatments Note */}
      <section className="bg-cream py-8">
        <div className="container-healinque">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
            <div>
              <p className="text-navy-deep font-medium">
                All injectable treatments performed by Dr. Shirazi, MD
              </p>
              <p className="text-sm text-taupe">
                Board Certified Internal Medicine • 20+ Years Experience
              </p>
            </div>
            <Link href="/book">
              <Button>
                Book Consultation <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Treatment Categories */}
      {categories.map(([categoryKey, category]) => {
        const categoryTreatments = treatments.filter(t => t.category === categoryKey);
        
        return (
          <section key={categoryKey} className="section-padding border-b border-cream-dark last:border-b-0">
            <div className="container-healinque">
              {/* Category Header */}
              <div className="grid lg:grid-cols-3 gap-8 mb-12">
                <div className="lg:col-span-2">
                  <p className="section-subtitle">{categoryKey.replace('-', ' ')}</p>
                  <h2 className="section-title mb-4">{category.name}</h2>
                  <p className="text-taupe leading-relaxed max-w-2xl">
                    {category.description}
                  </p>
                </div>
                <div className="relative aspect-video lg:aspect-auto rounded-xl overflow-hidden hidden lg:block">
                  <Image
                    src={category.image}
                    alt={category.name}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              {/* Treatments Grid */}
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {categoryTreatments.map((treatment) => (
                  <Link
                    key={treatment.id}
                    href={`/treatments/${treatment.slug}`}
                    className="group"
                  >
                    <div className="card-treatment h-full">
                      <div className="relative aspect-[4/3] overflow-hidden">
                        <Image
                          src={treatment.image}
                          alt={treatment.name}
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        <div className="absolute top-3 left-3 flex gap-2">
                          {treatment.popular && (
                            <span className="badge-gold">Popular</span>
                          )}
                          {treatment.isNew && (
                            <span className="badge-navy">New</span>
                          )}
                        </div>
                      </div>
                      <div className="p-5">
                        <h3 className="font-serif text-lg text-navy-deep group-hover:text-gold transition-colors mb-2">
                          {treatment.name}
                        </h3>
                        <p className="text-sm text-taupe line-clamp-2 mb-3">
                          {treatment.tagline}
                        </p>
                        {treatment.pricing.starting && (
                          <p className="text-sm text-gold font-medium">
                            Starting at ${treatment.pricing.starting.toLocaleString()}
                            {treatment.pricing.note && (
                              <span className="text-taupe font-normal"> {treatment.pricing.note}</span>
                            )}
                          </p>
                        )}
                        {treatment.pricing.range && (
                          <p className="text-sm text-gold font-medium">
                            {treatment.pricing.range}
                          </p>
                        )}
                        <span className="inline-flex items-center text-sm font-medium text-gold mt-3 group-hover:gap-2 transition-all">
                          Learn More <ArrowRight className="ml-1 h-4 w-4" />
                        </span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        );
      })}

      {/* CTA */}
      <section className="section-padding bg-navy-deep text-white">
        <div className="container-healinque text-center">
          <h2 className="font-serif text-display text-white mb-4">
            Not Sure Which Treatment Is Right for You?
          </h2>
          <p className="text-cream/80 mb-8 max-w-2xl mx-auto">
            Schedule a complimentary consultation with Dr. Shirazi. She&apos;ll assess your 
            concerns, discuss your goals, and create a personalized treatment plan.
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
        title="Request Your Consultation"
        subtitle="Get Started"
      />
    </main>
  );
}
