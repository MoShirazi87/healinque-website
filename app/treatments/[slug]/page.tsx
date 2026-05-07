import { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import {
  Clock,
  Sparkles,
  Shield,
  ArrowRight,
  Check,
  Phone,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { getTreatmentBySlug, treatments } from "@/lib/data/treatments";
import { pickImage } from "@/lib/data/images";
import { Disclaimer } from "@/components/ui/disclaimer";
import { ServiceSchema, BreadcrumbSchema, MedicalProcedureSchema } from "@/components/seo/schema";
import { siteConfig, getPhoneLink } from "@/lib/config/site";

/* ─── Static generation for the 5 core treatment slugs ─── */
const CORE_SLUGS = [
  "botox-dysport",
  "dermal-fillers",
  "chemical-peels",
  "microneedling",
  "scalp-microneedling",
];

interface TreatmentPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return CORE_SLUGS.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: TreatmentPageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const treatment = getTreatmentBySlug(resolvedParams.slug);

  if (!treatment) {
    return { title: "Treatment Not Found" };
  }

  return {
    title: `${treatment.name} | Healinque Poway`,
    description: `${treatment.tagline} Learn more about ${treatment.name.toLowerCase()} at Healinque in Poway, CA.`,
    alternates: {
      canonical: `https://www.healinque.com/treatments/${resolvedParams.slug}`,
    },
    openGraph: {
      title: `${treatment.name} | Healinque`,
      description: treatment.tagline,
      images: [treatment.image],
    },
  };
}

export default async function TreatmentPage({
  params,
}: TreatmentPageProps) {
  const resolvedParams = await params;
  const treatment = getTreatmentBySlug(resolvedParams.slug);

  if (!treatment) {
    notFound();
  }

  const breadcrumbItems = [
    { name: "Home", url: "https://www.healinque.com" },
    { name: "Treatments", url: "https://www.healinque.com/treatments" },
    {
      name: treatment.name,
      url: `https://www.healinque.com/treatments/${resolvedParams.slug}`,
    },
  ];

  const heroImage = pickImage(treatment.image, treatment.imageAlts);

  return (
    <main>
      <ServiceSchema
        name={treatment.name}
        description={treatment.tagline}
        url={`https://www.healinque.com/treatments/${resolvedParams.slug}`}
        image={heroImage}
      />
      {/* Session 18: MedicalProcedure schema pairs with ServiceSchema above.
          Google treats them as complementary entities (one business service,
          one clinical procedure) rather than duplicates. */}
      <MedicalProcedureSchema
        name={treatment.name}
        description={treatment.description}
        url={`https://www.healinque.com/treatments/${resolvedParams.slug}`}
        image={heroImage}
        category={treatment.category}
      />
      <BreadcrumbSchema items={breadcrumbItems} />

      {/* ═══ HERO — Dark, full-bleed image ═══ */}
      <section className="relative min-h-[60vh] lg:min-h-[70vh] flex items-end overflow-hidden bg-navy-deep pt-[160px]">
        <div className="absolute inset-0 z-0">
          <Image
            src={heroImage}
            alt={treatment.name}
            fill
            className="object-cover"
            priority
            sizes="100vw"
            quality={85}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy-deep via-navy-deep/50 to-navy-deep/40" />
        </div>

        <div className="relative z-10 container-healinque pb-12 lg:pb-16">
          {/* Breadcrumb */}
          <nav className="mb-6 flex items-center flex-wrap gap-2 text-xs md:text-sm text-white/50">
            <Link href="/" className="hover:text-gold transition-colors">
              Home
            </Link>
            <span>/</span>
            <Link
              href="/treatments"
              className="hover:text-gold transition-colors"
            >
              Treatments
            </Link>
            <span>/</span>
            <span className="text-gold">{treatment.name}</span>
          </nav>

          <span className="inline-block px-3 py-1 mb-4 rounded-full border border-gold/30 text-gold text-xs uppercase tracking-wider">
            {treatment.category.replace(/-/g, " ")}
          </span>

          <h1
            className="font-serif font-bold text-white leading-[1.05] mb-4"
            style={{ fontSize: "clamp(2.5rem, 5vw, 4.5rem)" }}
          >
            {treatment.name}
          </h1>

          <p className="text-lg lg:text-xl text-white/70 max-w-2xl leading-relaxed">
            {treatment.tagline}
          </p>
        </div>
      </section>

      {/* ═══ QUICK FACTS — Light strip ═══ */}
      <section className="bg-cream border-y border-taupe/10">
        <div className="container-healinque py-6 lg:py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 text-center">
            <div>
              <Clock className="h-5 w-5 mx-auto mb-2 text-gold" />
              <p className="text-[10px] text-navy-deep/40 uppercase tracking-wider mb-1">
                Duration
              </p>
              <p className="text-sm font-semibold text-navy-deep">
                {treatment.procedure.duration}
              </p>
            </div>
            <div>
              <Sparkles className="h-5 w-5 mx-auto mb-2 text-gold" />
              <p className="text-[10px] text-navy-deep/40 uppercase tracking-wider mb-1">
                Results
              </p>
              <p className="text-sm font-semibold text-navy-deep">
                {treatment.procedure.results}
              </p>
            </div>
            <div>
              <Shield className="h-5 w-5 mx-auto mb-2 text-gold" />
              <p className="text-[10px] text-navy-deep/40 uppercase tracking-wider mb-1">
                Downtime
              </p>
              <p className="text-sm font-semibold text-navy-deep">
                {treatment.procedure.downtime}
              </p>
            </div>
            <div>
              <span className="inline-block text-gold font-bold text-lg mb-2">
                $
              </span>
              <p className="text-[10px] text-navy-deep/40 uppercase tracking-wider mb-1">
                Price
              </p>
              <p className="text-sm font-semibold text-navy-deep">
                {treatment.pricing.range ||
                  `From $${treatment.pricing.starting}`}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ OVERVIEW — Light (cream) ═══ */}
      <section className="bg-cream py-16 lg:py-24">
        <div className="container-healinque">
          <div className="max-w-3xl">
            <p className="text-xs font-sans uppercase tracking-[0.25em] text-gold mb-3">
              About This Treatment
            </p>
            <h2
              className="font-serif font-bold text-navy-deep leading-tight mb-6"
              style={{ fontSize: "clamp(1.5rem, 3vw, 2.5rem)" }}
            >
              What Is{" "}
              <span className="text-gold italic">{treatment.name}</span>?
            </h2>
            <p className="text-base lg:text-lg text-navy-deep/70 leading-relaxed">
              {treatment.description}
            </p>
          </div>
        </div>
      </section>

      {/* ═══ BENEFITS — Dark ═══ */}
      <section className="bg-navy-deep py-16 lg:py-24">
        <div className="container-healinque">
          <div className="mb-10">
            <p className="text-xs font-sans uppercase tracking-[0.25em] text-gold/80 mb-3">
              Benefits
            </p>
            <h2
              className="font-serif font-bold text-white leading-tight"
              style={{ fontSize: "clamp(1.5rem, 3vw, 2.5rem)" }}
            >
              Key <span className="text-gold italic">Benefits</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            {treatment.benefits.map((benefit, idx) => (
              <div
                key={idx}
                className="flex gap-3 p-4 rounded-lg bg-white/[0.03] border border-white/5 hover:border-gold/20 transition-colors"
              >
                <Check className="h-5 w-5 text-gold flex-shrink-0 mt-0.5" />
                <p className="text-white/75 text-sm leading-relaxed">
                  {benefit}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ IDEAL FOR — Light ═══ */}
      <section className="bg-cream py-16 lg:py-24">
        <div className="container-healinque">
          <div className="grid gap-6 lg:grid-cols-[1fr_1.5fr] lg:gap-10 items-start">
            <div>
              <p className="text-xs font-sans uppercase tracking-[0.25em] text-gold mb-3">
                Is This Right For You?
              </p>
              <h2
                className="font-serif font-bold text-navy-deep leading-tight mb-4"
                style={{ fontSize: "clamp(1.5rem, 3vw, 2.5rem)" }}
              >
                Who <span className="text-gold italic">Benefits</span> Most
              </h2>
              <p className="text-navy-deep/50 text-sm">
                {treatment.name} may be ideal if any of the following describe
                you.
              </p>
            </div>

            <div className="space-y-3">
              {treatment.idealFor.map((item, idx) => (
                <div
                  key={idx}
                  className="flex gap-3 p-4 bg-white rounded-lg border border-taupe/10 hover:border-gold/30 transition-colors"
                >
                  <span className="text-gold font-serif text-lg">
                    &bull;
                  </span>
                  <p className="text-navy-deep/70 text-sm leading-relaxed">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══ PROCEDURE DETAILS — Dark ═══ */}
      <section className="bg-navy-deep py-16 lg:py-24">
        <div className="container-healinque">
          <div className="mb-10">
            <p className="text-xs font-sans uppercase tracking-[0.25em] text-gold/80 mb-3">
              What to Expect
            </p>
            <h2
              className="font-serif font-bold text-white leading-tight"
              style={{ fontSize: "clamp(1.5rem, 3vw, 2.5rem)" }}
            >
              Procedure <span className="text-gold italic">Details</span>
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white/[0.03] border border-white/5 rounded-xl p-6">
              <Clock className="h-6 w-6 text-gold mb-3" />
              <p className="text-white/40 text-xs uppercase tracking-wider mb-1">
                Duration
              </p>
              <p className="text-white font-semibold">
                {treatment.procedure.duration}
              </p>
            </div>
            <div className="bg-white/[0.03] border border-white/5 rounded-xl p-6">
              <Shield className="h-6 w-6 text-gold mb-3" />
              <p className="text-white/40 text-xs uppercase tracking-wider mb-1">
                Downtime
              </p>
              <p className="text-white font-semibold">
                {treatment.procedure.downtime}
              </p>
            </div>
            <div className="bg-white/[0.03] border border-white/5 rounded-xl p-6">
              <Sparkles className="h-6 w-6 text-gold mb-3" />
              <p className="text-white/40 text-xs uppercase tracking-wider mb-1">
                Results
              </p>
              <p className="text-white font-semibold">
                {treatment.procedure.results}
              </p>
            </div>
            {treatment.procedure.sessions && (
              <div className="bg-white/[0.03] border border-white/5 rounded-xl p-6">
                <span className="inline-block text-gold font-bold text-xl mb-3">
                  #
                </span>
                <p className="text-white/40 text-xs uppercase tracking-wider mb-1">
                  Sessions
                </p>
                <p className="text-white font-semibold">
                  {treatment.procedure.sessions}
                </p>
              </div>
            )}
          </div>

          <div className="mt-8 p-5 rounded-lg bg-gold/5 border border-gold/10">
            <p className="text-white/60 text-sm leading-relaxed">
              All treatments are performed by me or by a nurse practitioner
              or physician assistant I&apos;ve personally trained. I tailor
              every session to your goals and comfort level.
            </p>
          </div>
        </div>
      </section>

      {/* ═══ PRICING — Light ═══ */}
      <section className="bg-cream py-16 lg:py-24">
        <div className="container-healinque">
          <div className="max-w-2xl mx-auto text-center">
            <p className="text-xs font-sans uppercase tracking-[0.25em] text-gold mb-3">
              Investment
            </p>
            <h2
              className="font-serif font-bold text-navy-deep leading-tight mb-6"
              style={{ fontSize: "clamp(1.5rem, 3vw, 2.5rem)" }}
            >
              Pricing for{" "}
              <span className="text-gold italic">{treatment.name}</span>
            </h2>

            <div className="bg-white rounded-xl border border-taupe/10 p-8">
              <p className="text-3xl font-serif font-bold text-navy-deep mb-2">
                {treatment.pricing.range ||
                  `From $${treatment.pricing.starting}`}
              </p>
              {treatment.pricing.note && (
                <p className="text-navy-deep/50 text-sm mb-4">
                  {treatment.pricing.note}
                </p>
              )}
              <p className="text-navy-deep/40 text-xs">
                Pricing discussed during your consultation. I offer membership
                savings and package pricing.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ FAQ — Dark ═══ */}
      {treatment.faqs.length > 0 && (
        <section className="bg-navy-deep py-16 lg:py-24">
          <div className="container-healinque">
            <div className="grid gap-6 lg:grid-cols-[1fr_2fr] lg:gap-10">
              <div>
                <p className="text-xs font-sans uppercase tracking-[0.25em] text-gold/80 mb-3">
                  Questions
                </p>
                <h2
                  className="font-serif font-bold text-white leading-tight mb-4"
                  style={{ fontSize: "clamp(1.5rem, 3vw, 2.5rem)" }}
                >
                  Frequently{" "}
                  <span className="text-gold italic">Asked</span>
                </h2>
                <p className="text-white/40 text-sm">
                  Can&apos;t find your answer? Call or text{" "}
                  <a
                    href={getPhoneLink()}
                    className="text-gold hover:underline"
                  >
                    {siteConfig.phone}
                  </a>
                </p>
              </div>

              <div className="bg-cream rounded-xl p-6 lg:p-8">
                <Accordion type="single" collapsible className="w-full">
                  {treatment.faqs.map((faq, idx) => (
                    <AccordionItem
                      key={idx}
                      value={`faq-${idx}`}
                      className="border-b border-navy-deep/10 last:border-0"
                    >
                      <AccordionTrigger className="text-left text-navy-deep hover:text-gold py-5">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-navy-deep/60 leading-relaxed">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ═══ GALLERY PLACEHOLDER — Light ═══ */}
      <section className="bg-cream py-16 lg:py-24">
        <div className="container-healinque">
          <div className="max-w-2xl mx-auto text-center">
            <p className="text-xs font-sans uppercase tracking-[0.25em] text-gold mb-3">
              Results
            </p>
            <h2
              className="font-serif font-bold text-navy-deep leading-tight mb-4"
              style={{ fontSize: "clamp(1.5rem, 3vw, 2.5rem)" }}
            >
              Before &amp; <span className="text-gold italic">After</span>
            </h2>
            <div className="bg-white rounded-xl border border-taupe/10 p-12">
              <p className="text-navy-deep/40 text-sm">
                Gallery coming soon. I&apos;m collecting patient photos with
                consent to showcase real results.
              </p>
              <Link href="/gallery" className="inline-block mt-4">
                <Button
                  variant="outline"
                  className="border-gold/30 text-gold hover:bg-gold/5"
                >
                  Visit Gallery
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ CTA — Dark with gold accent ═══ */}
      <section className="relative bg-navy-deep py-16 lg:py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-gold/5 via-transparent to-gold/5" />
        <div className="container-healinque relative z-10 text-center">
          <h2
            className="font-serif font-bold text-white leading-tight mb-4"
            style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.75rem)" }}
          >
            Ready to Get{" "}
            <span className="text-gold italic">Started</span>?
          </h2>
          <p className="text-white/50 max-w-xl mx-auto mb-8">
            Schedule a consultation with me to discuss how{" "}
            {treatment.name.toLowerCase()} can help you reach your goals. I&apos;ll
            create a plan tailored to your needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/book">
              <Button className="bg-gold hover:bg-gold/90 text-navy-deep px-8 py-3 rounded-lg font-semibold">
                Book Consultation <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <a href={getPhoneLink()}>
              <Button
                variant="outline"
                className="border-2 border-white/20 text-white hover:bg-white/5 px-8 py-3 rounded-lg font-semibold"
              >
                <Phone className="mr-2 h-4 w-4" /> Call or Text
              </Button>
            </a>
          </div>
          <p className="mt-6 text-white/30 text-xs">
            {siteConfig.address.full}
          </p>
          <div className="mt-10 max-w-2xl mx-auto">
            <Disclaimer className="text-white/40 text-center" />
          </div>
        </div>
      </section>
    </main>
  );
}
