import { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle, AlertCircle, Lightbulb } from "lucide-react";
import { getConcernBySlug, concerns } from "@/lib/data/concerns";
import { Hero } from "@/components/sections/hero";
import { ConsultationForm } from "@/components/sections/consultation-form";
import { Button } from "@/components/ui/button";

interface ConcernPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return concerns.map((concern) => ({
    slug: concern.slug,
  }));
}

export async function generateMetadata({ params }: ConcernPageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const concern = getConcernBySlug(resolvedParams.slug);

  if (!concern) {
    return { title: "Concern Not Found" };
  }

  return {
    title: `${concern.name} Treatment | Healinque Poway`,
    description: `${concern.tagline}. Learn about the causes and discover effective treatments for ${concern.name.toLowerCase()} at Healinque.`,
    openGraph: {
      title: `${concern.name} Treatment | Healinque`,
      description: concern.tagline,
      images: [concern.image],
    },
  };
}

export default async function ConcernPage({ params }: ConcernPageProps) {
  const resolvedParams = await params;
  const concern = getConcernBySlug(resolvedParams.slug);

  if (!concern) {
    notFound();
  }

  const recommendedTreatments = concern.treatments.filter((t) => t.recommended);
  const otherTreatments = concern.treatments.filter((t) => !t.recommended);

  return (
    <main>
      <Hero
        variant="page"
        subtitle="Your Concern"
        title={concern.name}
        description={concern.tagline}
        image={concern.image}
      />

      {/* Description Section */}
      <section className="section-padding bg-white">
        <div className="container-healinque">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <h2 className="section-title mb-6">Understanding {concern.name}</h2>
              <p className="text-taupe leading-relaxed text-lg mb-8">
                {concern.description}
              </p>

              {/* Causes */}
              <div className="bg-cream rounded-xl p-6 mb-8">
                <div className="flex items-center gap-3 mb-4">
                  <AlertCircle className="h-6 w-6 text-gold" />
                  <h3 className="font-serif text-xl text-navy-deep">Common Causes</h3>
                </div>
                <ul className="grid md:grid-cols-2 gap-3">
                  {concern.causes.map((cause, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="w-2 h-2 bg-gold rounded-full mt-2 flex-shrink-0" />
                      <span className="text-taupe text-sm">{cause}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Sidebar */}
            <div>
              <div className="sticky top-24 space-y-6">
                <div className="bg-navy-deep text-white rounded-xl p-6">
                  <h3 className="font-serif text-xl mb-3">Ready to Address This?</h3>
                  <p className="text-cream/80 text-sm mb-6">
                    Schedule a consultation to discuss your {concern.name.toLowerCase()} concerns with Dr. Shirazi.
                  </p>
                  <Link href="/book">
                    <Button className="w-full bg-gold hover:bg-gold-dark text-navy-deep">
                      Book Consultation <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>

                <div className="bg-cream rounded-xl p-6">
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

      {/* Recommended Treatments */}
      <section className="section-padding bg-cream">
        <div className="container-healinque">
          <h2 className="section-title mb-8">Recommended Treatments</h2>
          
          {recommendedTreatments.length > 0 && (
            <div className="grid md:grid-cols-2 gap-6 mb-12">
              {recommendedTreatments.map((treatment) => (
                <Link
                  key={treatment.slug}
                  href={`/treatments/${treatment.slug}`}
                  className="group"
                >
                  <div className="bg-white rounded-xl p-6 h-full border-2 border-gold/30 hover:border-gold transition-colors">
                    <div className="flex items-center gap-3 mb-3">
                      <CheckCircle className="h-5 w-5 text-gold" />
                      <span className="badge-gold">Top Recommendation</span>
                    </div>
                    <h3 className="font-serif text-xl text-navy-deep group-hover:text-gold transition-colors mb-2">
                      {treatment.name}
                    </h3>
                    <p className="text-taupe text-sm mb-4">{treatment.description}</p>
                    <span className="inline-flex items-center text-sm font-medium text-gold">
                      Learn More <ArrowRight className="ml-1 h-4 w-4" />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          )}

          {otherTreatments.length > 0 && (
            <>
              <h3 className="font-serif text-lg text-navy-deep mb-4">Additional Options</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {otherTreatments.map((treatment) => (
                  <Link
                    key={treatment.slug}
                    href={`/treatments/${treatment.slug}`}
                    className="group"
                  >
                    <div className="bg-white rounded-lg p-4 hover:shadow-elegant transition-shadow">
                      <h4 className="font-medium text-navy-deep group-hover:text-gold transition-colors mb-1">
                        {treatment.name}
                      </h4>
                      <p className="text-xs text-taupe line-clamp-2">{treatment.description}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </>
          )}
        </div>
      </section>

      {/* Tips Section */}
      <section className="section-padding bg-white">
        <div className="container-healinque">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <Lightbulb className="h-6 w-6 text-gold" />
              <h2 className="section-title">Tips from Dr. Azi</h2>
            </div>
            <ul className="space-y-4">
              {concern.tips.map((tip, index) => (
                <li
                  key={index}
                  className="flex items-start gap-4 p-4 bg-cream rounded-lg"
                >
                  <span className="w-8 h-8 rounded-full bg-gold/10 flex items-center justify-center flex-shrink-0 text-gold font-semibold text-sm">
                    {index + 1}
                  </span>
                  <p className="text-taupe">{tip}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Related Concerns */}
      <section className="section-padding bg-cream">
        <div className="container-healinque">
          <h2 className="section-title mb-8">You May Also Be Interested In</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {concerns
              .filter((c) => c.slug !== concern.slug)
              .slice(0, 3)
              .map((relatedConcern) => (
                <Link
                  key={relatedConcern.slug}
                  href={`/concerns/${relatedConcern.slug}`}
                  className="group"
                >
                  <div className="bg-white rounded-xl overflow-hidden hover:shadow-elegant transition-shadow">
                    <div className="relative aspect-video">
                      <Image
                        src={relatedConcern.image}
                        alt={relatedConcern.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="font-serif text-lg text-navy-deep group-hover:text-gold transition-colors">
                        {relatedConcern.name}
                      </h3>
                      <p className="text-sm text-taupe">{relatedConcern.tagline}</p>
                    </div>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <ConsultationForm
        variant="split"
        title={`Discuss Your ${concern.name} Concerns`}
        subtitle="Book Now"
      />
    </main>
  );
}
