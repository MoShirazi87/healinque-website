import { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Clock, Sparkles, Calendar, DollarSign, ChevronDown } from "lucide-react";
import { getTreatmentBySlug, treatments, treatmentCategories } from "@/lib/data/treatments";
import { Hero } from "@/components/sections/hero";
import { ConsultationForm } from "@/components/sections/consultation-form";
import { Testimonials } from "@/components/sections/testimonials";
import { Button } from "@/components/ui/button";

interface TreatmentPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return treatments.map((treatment) => ({
    slug: treatment.slug,
  }));
}

export async function generateMetadata({ params }: TreatmentPageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const treatment = getTreatmentBySlug(resolvedParams.slug);

  if (!treatment) {
    return { title: "Treatment Not Found" };
  }

  return {
    title: `${treatment.name} | Healinque Poway`,
    description: treatment.description.slice(0, 160),
    openGraph: {
      title: `${treatment.name} | Healinque`,
      description: treatment.tagline,
      images: [treatment.image],
    },
  };
}

export default async function TreatmentPage({ params }: TreatmentPageProps) {
  const resolvedParams = await params;
  const treatment = getTreatmentBySlug(resolvedParams.slug);

  if (!treatment) {
    notFound();
  }

  const category = treatmentCategories[treatment.category];
  const relatedTreatments = treatments
    .filter((t) => t.category === treatment.category && t.id !== treatment.id)
    .slice(0, 3);

  return (
    <main>
      <Hero
        variant="page"
        subtitle={category.name}
        title={treatment.name}
        description={treatment.tagline}
        image={treatment.image}
      />

      {/* Quick Info Bar */}
      <section className="bg-cream py-6">
        <div className="container-healinque">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <Clock className="h-5 w-5 mx-auto mb-2 text-gold" />
              <p className="text-xs text-taupe uppercase tracking-wider mb-1">Duration</p>
              <p className="font-medium text-navy-deep text-sm">{treatment.procedure.duration}</p>
            </div>
            <div>
              <Sparkles className="h-5 w-5 mx-auto mb-2 text-gold" />
              <p className="text-xs text-taupe uppercase tracking-wider mb-1">Results</p>
              <p className="font-medium text-navy-deep text-sm">{treatment.procedure.results}</p>
            </div>
            <div>
              <Calendar className="h-5 w-5 mx-auto mb-2 text-gold" />
              <p className="text-xs text-taupe uppercase tracking-wider mb-1">Downtime</p>
              <p className="font-medium text-navy-deep text-sm">{treatment.procedure.downtime}</p>
            </div>
            <div>
              <DollarSign className="h-5 w-5 mx-auto mb-2 text-gold" />
              <p className="text-xs text-taupe uppercase tracking-wider mb-1">Pricing</p>
              <p className="font-medium text-navy-deep text-sm">
                {treatment.pricing.starting
                  ? `From $${treatment.pricing.starting.toLocaleString()}`
                  : treatment.pricing.range}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="section-padding bg-white">
        <div className="container-healinque">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Content Column */}
            <div className="lg:col-span-2">
              {/* Description */}
              <div className="mb-12">
                <h2 className="section-title mb-6">About {treatment.name}</h2>
                <p className="text-taupe leading-relaxed text-lg">
                  {treatment.description}
                </p>
              </div>

              {/* Benefits */}
              <div className="mb-12">
                <h3 className="font-serif text-xl text-navy-deep mb-6">Benefits</h3>
                <ul className="grid md:grid-cols-2 gap-4">
                  {treatment.benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="w-2 h-2 bg-gold rounded-full mt-2 flex-shrink-0" />
                      <span className="text-taupe">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Ideal For */}
              <div className="mb-12">
                <h3 className="font-serif text-xl text-navy-deep mb-6">Ideal For</h3>
                <ul className="space-y-3">
                  {treatment.idealFor.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="w-2 h-2 bg-gold rounded-full mt-2 flex-shrink-0" />
                      <span className="text-taupe">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* FAQs */}
              <div>
                <h3 className="font-serif text-xl text-navy-deep mb-6">
                  Frequently Asked Questions
                </h3>
                <div className="space-y-4">
                  {treatment.faqs.map((faq, index) => (
                    <details
                      key={index}
                      className="group bg-cream rounded-lg p-5 cursor-pointer"
                    >
                      <summary className="flex justify-between items-center font-medium text-navy-deep list-none">
                        {faq.question}
                        <ChevronDown className="h-5 w-5 text-gold group-open:rotate-180 transition-transform" />
                      </summary>
                      <p className="mt-4 text-taupe leading-relaxed">{faq.answer}</p>
                    </details>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-6">
                {/* Booking Card */}
                <div className="bg-navy-deep text-white rounded-xl p-6">
                  <h3 className="font-serif text-xl mb-3">Ready to Get Started?</h3>
                  <p className="text-cream/80 text-sm mb-6">
                    Schedule a consultation with Dr. Shirazi to see if {treatment.name} is right for you.
                  </p>
                  <Link href="/book">
                    <Button className="w-full bg-gold hover:bg-gold-dark text-navy-deep">
                      Book Consultation <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                  <p className="text-center text-xs text-cream/60 mt-4">
                    Free consultation • No obligation
                  </p>
                </div>

                {/* Treatment Details */}
                <div className="bg-cream rounded-xl p-6">
                  <h4 className="font-serif text-lg text-navy-deep mb-4">Treatment Details</h4>
                  <dl className="space-y-4 text-sm">
                    <div>
                      <dt className="text-taupe">Duration</dt>
                      <dd className="font-medium text-navy-deep">{treatment.procedure.duration}</dd>
                    </div>
                    <div>
                      <dt className="text-taupe">Downtime</dt>
                      <dd className="font-medium text-navy-deep">{treatment.procedure.downtime}</dd>
                    </div>
                    <div>
                      <dt className="text-taupe">Results</dt>
                      <dd className="font-medium text-navy-deep">{treatment.procedure.results}</dd>
                    </div>
                    {treatment.procedure.sessions && (
                      <div>
                        <dt className="text-taupe">Recommended Sessions</dt>
                        <dd className="font-medium text-navy-deep">{treatment.procedure.sessions}</dd>
                      </div>
                    )}
                    <div className="pt-4 border-t border-cream-dark">
                      <dt className="text-taupe">Pricing</dt>
                      <dd className="font-serif text-xl text-gold">
                        {treatment.pricing.starting
                          ? `$${treatment.pricing.starting.toLocaleString()}`
                          : treatment.pricing.range}
                      </dd>
                      {treatment.pricing.note && (
                        <dd className="text-xs text-taupe mt-1">{treatment.pricing.note}</dd>
                      )}
                    </div>
                  </dl>
                </div>

                {/* Contact */}
                <div className="bg-cream rounded-xl p-6 text-center">
                  <p className="text-sm text-taupe mb-2">Questions?</p>
                  <a
                    href="tel:+18583377999"
                    className="font-medium text-navy-deep hover:text-gold transition-colors"
                  >
                    (858) 337-7999
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Treatments */}
      {relatedTreatments.length > 0 && (
        <section className="section-padding bg-cream">
          <div className="container-healinque">
            <h2 className="section-title mb-8">Related Treatments</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {relatedTreatments.map((related) => (
                <Link
                  key={related.id}
                  href={`/treatments/${related.slug}`}
                  className="group"
                >
                  <div className="card-treatment">
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <Image
                        src={related.image}
                        alt={related.name}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                    <div className="p-5">
                      <h3 className="font-serif text-lg text-navy-deep group-hover:text-gold transition-colors mb-2">
                        {related.name}
                      </h3>
                      <p className="text-sm text-taupe">{related.tagline}</p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Testimonials */}
      <Testimonials variant="featured" />

      {/* CTA */}
      <ConsultationForm
        variant="split"
        title={`Schedule Your ${treatment.name} Consultation`}
        subtitle="Book Now"
      />
    </main>
  );
}
