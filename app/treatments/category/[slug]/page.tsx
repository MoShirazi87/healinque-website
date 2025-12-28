import { Metadata } from "next";
import { notFound } from "next/navigation";
import { Hero } from "@/components/sections/hero";
import { TreatmentGrid } from "@/components/sections/treatment-card";
import { CTASection } from "@/components/sections/cta";
import { FAQSection } from "@/components/sections/faq";
import { 
  getCategoryBySlug, 
  getTreatmentsByCategory,
  getAllCategorySlugs
} from "@/lib/data/treatments";

interface CategoryPageProps {
  params: { slug: string };
}

export async function generateStaticParams() {
  const slugs = getAllCategorySlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: CategoryPageProps): Promise<Metadata> {
  const category = getCategoryBySlug(params.slug);
  
  if (!category) {
    return { title: "Category Not Found" };
  }

  return {
    title: `${category.name} Treatments in Poway, CA`,
    description: category.description,
  };
}

const categoryFaqs: Record<string, Array<{ question: string; answer: string }>> = {
  aesthetics: [
    {
      question: "How long do injectable results last?",
      answer: "Botox typically lasts 3-4 months, while dermal fillers can last 6-18 months depending on the product and area treated. Results vary by individual.",
    },
    {
      question: "Is there any downtime after injections?",
      answer: "Most injectable treatments have minimal to no downtime. You may experience minor swelling or bruising that resolves within a few days.",
    },
  ],
  "skin-rejuvenation": [
    {
      question: "How many treatments will I need?",
      answer: "Most skin rejuvenation treatments work best as a series. Typically, 3-6 sessions spaced 4-6 weeks apart are recommended for optimal results.",
    },
    {
      question: "Can these treatments be combined?",
      answer: "Yes! Dr. Azi often creates customized protocols combining multiple treatments for enhanced results. She'll recommend the best approach during your consultation.",
    },
  ],
  wellness: [
    {
      question: "Do you accept insurance for wellness treatments?",
      answer: "Coverage varies by treatment and plan. We can provide documentation for insurance submission. Many patients choose self-pay for convenience and privacy.",
    },
    {
      question: "How quickly will I see results?",
      answer: "Results vary by treatment. IV therapy often provides same-day benefits, while hormone optimization and weight loss programs show gradual improvement over weeks to months.",
    },
  ],
};

export default function CategoryPage({ params }: CategoryPageProps) {
  const category = getCategoryBySlug(params.slug);

  if (!category) {
    notFound();
  }

  const categoryTreatments = getTreatmentsByCategory(params.slug as any).map((t) => ({
    title: t.name,
    description: t.tagline,
    image: t.image,
    href: `/treatments/${t.slug}`,
    price: t.pricing.starting ? `$${t.pricing.starting}` : t.pricing.range,
  }));

  const faqs = categoryFaqs[params.slug] || [];

  return (
    <>
      <Hero
        variant="page"
        title={category.name}
        subtitle="Treatment Category"
        description={category.description}
        image={category.image}
        overlay="gradient"
      />

      <TreatmentGrid
        title={`${category.name} Treatments`}
        subtitle="Our Offerings"
        treatments={categoryTreatments}
        columns={3}
      />

      {faqs.length > 0 && (
        <FAQSection
          title={`${category.name} FAQ`}
          subtitle="Common Questions"
          faqs={faqs}
        />
      )}

      <CTASection
        title="Find Your Perfect Treatment"
        description="Schedule a consultation to discuss which treatment is best for your goals."
        primaryCta={{ text: "Book Consultation", href: "/book" }}
      />
    </>
  );
}

