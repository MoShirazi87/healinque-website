import { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, AlertCircle, Lightbulb } from "lucide-react";
import { getConcernBySlug, concerns } from "@/lib/data/concerns";
import { PageHero as Hero } from "@/components/sections/hero";
import { ConsultationForm } from "@/components/sections/consultation-form";
import { Button } from "@/components/ui/button";
import { BreadcrumbSchema } from "@/components/seo/schema";
import { pickImage } from "@/lib/data/images";

interface ConcernPageProps {
  params: Promise<{ slug: string }>;
}

// List of treatments that have pages
const VALID_TREATMENT_SLUGS = [
  "botox-dysport",
  "dysport",
  "dermal-fillers",
  "lip-filler",
  "microneedling",
  "prp-facial",
  "chemical-peels",
  "laser-resurfacing",
  "prp-therapy",
  "o-shot",
  "hair-restoration",
  "p-shot",
  "iv-therapy",
  "hormone-optimization",
  "glp1-weight-loss",
  "regenerative-consultation",
  "prf-therapy",
  "peptide-therapy",
  "pdo-thread-lift",
  "kybella",
  "testosterone-optimization",
  "daxxify",
  "morpheus8",
];

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
    alternates: {
      canonical: `https://www.healinque.com/concerns/${resolvedParams.slug}`,
    },
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

  const recommendedTreatments = concern.treatments.filter(
    (t) => t.recommended && VALID_TREATMENT_SLUGS.includes(t.slug)
  );
  const otherValidTreatments = concern.treatments.filter(
    (t) => !t.recommended && VALID_TREATMENT_SLUGS.includes(t.slug)
  );

  const breadcrumbItems = [
    { name: "Home", url: "https://www.healinque.com" },
    { name: "Concerns", url: "https://www.healinque.com/concerns" },
    { name: concern.name, url: `https://www.healinque.com/concerns/${resolvedParams.slug}` },
  ];

  return (
    <main>
      <BreadcrumbSchema items={breadcrumbItems} />
      <Hero
        variant="page"
        subtitle="Your Concern"
        title={concern.name}
        description={concern.tagline}
        image={pickImage(concern.image, concern.imageAlts)}
      />

      {/* Description Section — LIGHT (cream) */}
      <section className="py-16 lg:py-24 bg-cream">
        <div className="container-healinque">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <p className="text-xs font-sans uppercase tracking-[0.25em] text-gold mb-3">
                Understanding Your Concern
              </p>
              <h2 className="font-serif text-3xl font-bold text-navy-deep mb-6">
                About <span className="text-gold italic">{concern.name}</span>
              </h2>
              <p className="text-navy-deep/70 leading-relaxed text-lg mb-8">
                {concern.description}
              </p>

              {/* Causes */}
              <div className="bg-white border border-taupe/10 rounded-xl p-6 mb-8">
                <div className="flex items-center gap-3 mb-4">
                  <AlertCircle className="h-5 w-5 text-gold" />
                  <h3 className="font-serif text-xl font-semibold text-navy-deep">Common Causes</h3>
                </div>
                <ul className="grid md:grid-cols-2 gap-3">
                  {concern.causes.map((cause, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="w-2 h-2 bg-gold rounded-full mt-2 flex-shrink-0" />
                      <span className="text-navy-deep/60 text-sm">{cause}</span>
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
                  <p className="text-white/70 text-sm mb-6">
                    Schedule a consultation to discuss your {concern.name.toLowerCase()} concerns with Dr. Shirazi.
                  </p>
                  <Link href="/book">
                    <Button className="w-full bg-gold hover:bg-gold-dark text-navy-deep">
                      Book Consultation <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>

                <div className="bg-white border border-taupe/10 rounded-xl p-6">
                  <p className="text-sm text-navy-deep/50 mb-2">Questions?</p>
                  <a
                    href="tel:+18583377999"
                    className="font-medium text-gold hover:text-gold/80 transition-colors"
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
      {(recommendedTreatments.length > 0 || otherValidTreatments.length > 0) && (
        <section className="section-padding bg-navy-deep border-t border-white/5">
          <div className="container-healinque">
            <h2 className="font-serif text-3xl text-white mb-8">
              Recommended Treatments
            </h2>

            {recommendedTreatments.length > 0 && (
              <div className="grid md:grid-cols-2 gap-6 mb-12">
                {recommendedTreatments.map((treatment) => (
                  <Link
                    key={treatment.slug}
                    href={`/treatments/${treatment.slug}`}
                    className="group"
                  >
                    <div className="bg-surface-card rounded-xl p-6 h-full border border-gold/30 hover:border-gold/60 transition-colors">
                      <span className="inline-block mb-3 px-3 py-1 bg-gold/20 rounded-full text-gold text-xs font-medium">
                        Top Recommendation
                      </span>
                      <h3 className="font-serif text-xl text-white group-hover:text-gold transition-colors mb-2">
                        {treatment.name}
                      </h3>
                      <p className="text-white/70 text-sm mb-4">{treatment.description}</p>
                      <span className="inline-flex items-center text-sm font-medium text-gold group-hover:gap-2 transition-all">
                        Learn More <ArrowRight className="ml-1 h-4 w-4" />
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            )}

            {otherValidTreatments.length > 0 && (
              <>
                <h3 className="font-serif text-lg text-white mb-4">
                  Additional Options
                </h3>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {otherValidTreatments.map((treatment) => (
                    <Link
                      key={treatment.slug}
                      href={`/treatments/${treatment.slug}`}
                      className="group"
                    >
                      <div className="bg-surface-card border border-white/5 rounded-lg p-4 hover:border-white/20 transition-colors">
                        <h4 className="font-medium text-white group-hover:text-gold transition-colors mb-1">
                          {treatment.name}
                        </h4>
                        <p className="text-xs text-white/60 line-clamp-2">
                          {treatment.description}
                        </p>
                      </div>
                    </Link>
                  ))}
                </div>
              </>
            )}
          </div>
        </section>
      )}

      {/* Tips Section — LIGHT (cream) */}
      <section className="py-16 lg:py-24 bg-cream">
        <div className="container-healinque">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <Lightbulb className="h-6 w-6 text-gold" />
              <h2 className="font-serif text-3xl text-navy-deep">Tips from Dr. Azi</h2>
            </div>
            <ul className="space-y-4">
              {concern.tips.map((tip, index) => (
                <li
                  key={index}
                  className="flex items-start gap-4 p-4 bg-white border border-taupe/10 rounded-lg"
                >
                  <span className="w-8 h-8 rounded-full bg-gold/20 flex items-center justify-center flex-shrink-0 text-gold font-semibold text-sm">
                    {index + 1}
                  </span>
                  <p className="text-navy-deep/70">{tip}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Related Concerns — DARK */}
      <section className="py-16 lg:py-24 bg-navy-deep">
        <div className="container-healinque">
          <p className="text-xs font-sans uppercase tracking-[0.25em] text-gold/80 mb-3">
            Explore More
          </p>
          <h2 className="font-serif text-3xl text-white mb-8">
            You May Also Be <span className="text-gold italic">Interested In</span>
          </h2>
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
                  <div className="bg-surface-card border border-white/5 rounded-xl overflow-hidden hover:border-white/20 transition-colors">
                    <div className="relative aspect-video">
                      <Image
                        src={relatedConcern.image}
                        alt={relatedConcern.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="font-serif text-lg text-white group-hover:text-gold transition-colors">
                        {relatedConcern.name}
                      </h3>
                      <p className="text-sm text-white/60">{relatedConcern.tagline}</p>
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
