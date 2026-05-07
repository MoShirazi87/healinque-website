import { siteConfig } from "@/lib/config/site";

export function LocalBusinessSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${siteConfig.urls.baseUrl}/#business`,
    name: `${siteConfig.name} - ${siteConfig.tagline}`,
    alternateName: siteConfig.name,
    description: siteConfig.seo.description,
    url: siteConfig.urls.baseUrl,
    telephone: "+1" + siteConfig.phoneRaw,
    email: siteConfig.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: `${siteConfig.address.street}, ${siteConfig.address.suite}`,
      addressLocality: siteConfig.address.city,
      addressRegion: siteConfig.address.state,
      postalCode: siteConfig.address.zip,
      addressCountry: "US",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 32.9628,
      longitude: -117.0359,
    },
    // Session 21: removed refs to /images/treatment-room.jpg and /images/logo.svg
    // (both deleted during the asset cleanup). Clinic exterior + physician portrait
    // remain. Logo now points at the header/footer PNG that actually ships.
    image: [
      `${siteConfig.urls.baseUrl}/images/clinic-exterior.jpg`,
      `${siteConfig.urls.baseUrl}${siteConfig.doctor.image}`,
    ],
    logo: `${siteConfig.urls.baseUrl}/images/healinque-logo-header-clean.png`,
    priceRange: "$$",
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Monday",
        opens: "10:00",
        closes: "12:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Monday",
        opens: "13:00",
        closes: "18:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Wednesday",
        opens: "10:00",
        closes: "12:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Wednesday",
        opens: "13:00",
        closes: "18:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Friday",
        opens: "10:00",
        closes: "12:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Friday",
        opens: "13:00",
        closes: "18:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Saturday",
        opens: "10:00",
        closes: "13:00",
      },
    ],
    sameAs: [
      siteConfig.social.instagram,
      siteConfig.social.facebook,
    ].filter(Boolean),
    // aggregateRating: Removed — will be re-added when backed by real Google Reviews data.
    // Fabricating ratings is a structured data policy violation Google can penalize.
    areaServed: siteConfig.serviceAreas.map(city => ({ "@type": "City", name: city })),
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Aesthetic & Wellness Services",
      itemListElement: [
        {
          "@type": "OfferCatalog",
          name: "Aesthetic Medicine",
          itemListElement: [
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "Botox & Neuromodulators" } },
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "Dermal Fillers" } },
          ],
        },
        {
          "@type": "OfferCatalog",
          name: "Skin Rejuvenation",
          itemListElement: [
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "Chemical Peels" } },
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "Microneedling with Advanced Skin Boosters" } },
          ],
        },
        {
          "@type": "OfferCatalog",
          name: "Hair Restoration",
          itemListElement: [
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "Scalp Microneedling with Advanced Growth Factor Boost" } },
          ],
        },
      ],
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function PhysicianSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Physician",
    "@id": `${siteConfig.urls.baseUrl}/about/dr-azi-shirazi#physician`,
    name: siteConfig.doctor.name,
    alternateName: siteConfig.doctor.shortName,
    description: `${siteConfig.doctor.credentials} with ${siteConfig.doctor.experienceYears} years in medicine, specializing in aesthetic medicine and longevity.`,
    url: `${siteConfig.urls.baseUrl}/about/dr-azi-shirazi`,
    image: `${siteConfig.urls.baseUrl}${siteConfig.doctor.image}`,
    telephone: "+1" + siteConfig.phoneRaw,
    email: siteConfig.email,
    worksFor: {
      "@type": "LocalBusiness",
      "@id": `${siteConfig.urls.baseUrl}/#business`,
    },
    medicalSpecialty: [
      "Internal Medicine",
      "Aesthetic Medicine",
      "Longevity Medicine",
    ],
    award: ["Top 100 Physicians San Diego 2023", "Guardian Angel Award"],
    knowsLanguage: ["en", "fa"],
    alumniOf: [
      { "@type": "EducationalOrganization", name: "University of California, San Diego (UCSD)" },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function MedicalBusinessSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    "@id": `${siteConfig.urls.baseUrl}/#medicalbusiness`,
    name: `${siteConfig.name} - ${siteConfig.tagline}`,
    description: siteConfig.seo.description,
    url: siteConfig.urls.baseUrl,
    telephone: "+1" + siteConfig.phoneRaw,
    address: {
      "@type": "PostalAddress",
      streetAddress: `${siteConfig.address.street}, ${siteConfig.address.suite}`,
      addressLocality: siteConfig.address.city,
      addressRegion: siteConfig.address.state,
      postalCode: siteConfig.address.zip,
      addressCountry: "US",
    },
    medicalSpecialty: [
      "Internal Medicine",
      "Aesthetic Medicine",
      "Longevity Medicine",
      "Regenerative Medicine",
    ],
    // Session 18: availableService expanded from 5 to 15 procedures —
    // covers the full treatment menu crawlers will want to associate with
    // this clinic. Kept in sync with `lib/data/treatments.ts` names.
    availableService: [
      { "@type": "MedicalProcedure", name: "Botox & Neuromodulators", procedureType: "NoninvasiveProcedure" },
      { "@type": "MedicalProcedure", name: "Dysport Injections", procedureType: "NoninvasiveProcedure" },
      { "@type": "MedicalProcedure", name: "Daxxify Injections", procedureType: "NoninvasiveProcedure" },
      { "@type": "MedicalProcedure", name: "Dermal Filler Injections", procedureType: "NoninvasiveProcedure" },
      { "@type": "MedicalProcedure", name: "Lip Filler", procedureType: "NoninvasiveProcedure" },
      { "@type": "MedicalProcedure", name: "Medical-Grade Chemical Peels", procedureType: "NoninvasiveProcedure" },
      { "@type": "MedicalProcedure", name: "Microneedling with Advanced Skin Boosters", procedureType: "NoninvasiveProcedure" },
      { "@type": "MedicalProcedure", name: "PRP Facial", procedureType: "NoninvasiveProcedure" },
      { "@type": "MedicalProcedure", name: "PRF Therapy", procedureType: "NoninvasiveProcedure" },
      { "@type": "MedicalProcedure", name: "Laser Resurfacing", procedureType: "NoninvasiveProcedure" },
      { "@type": "MedicalProcedure", name: "Morpheus8 Radiofrequency Microneedling", procedureType: "NoninvasiveProcedure" },
      { "@type": "MedicalProcedure", name: "PDO Thread Lift", procedureType: "NoninvasiveProcedure" },
      { "@type": "MedicalProcedure", name: "Scalp Microneedling with Advanced Growth Factor Boost", procedureType: "NoninvasiveProcedure" },
      { "@type": "MedicalProcedure", name: "PRP Hair Restoration", procedureType: "NoninvasiveProcedure" },
      { "@type": "MedicalProcedure", name: "GLP-1 Weight Loss Medication", procedureType: "TherapeuticProcedure" },
      { "@type": "MedicalProcedure", name: "Testosterone Optimization", procedureType: "TherapeuticProcedure" },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function FAQSchema({ faqs }: { faqs: { question: string; answer: string }[] }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function BreadcrumbSchema({
  items,
}: {
  items: { name: string; url: string }[];
}) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

/**
 * MedicalProcedureSchema — Session 18
 *
 * Emits schema.org MedicalProcedure JSON-LD for a single aesthetic or
 * regenerative treatment. More semantically specific than the generic
 * `Service` type — Google and AI crawlers surface these for procedure-
 * specific queries ("what is Botox", "how does microneedling work").
 *
 * Intentionally conservative: no `preparation`, `followup`, or
 * `typicalAgeRange` because we don't want to over-commit in schema what
 * the treatment page doesn't already say in plain copy.
 */
export function MedicalProcedureSchema({
  name,
  description,
  url,
  image,
  bodyLocation,
  procedureType = "NoninvasiveProcedure",
  category,
}: {
  name: string;
  description: string;
  url: string;
  image?: string;
  /** Optional anatomical area (e.g., "Face", "Scalp", "Neck"). */
  bodyLocation?: string;
  /** Schema.org MedicalProcedureType. Default is NoninvasiveProcedure. */
  procedureType?: "NoninvasiveProcedure" | "SurgicalProcedure" | "PercutaneousProcedure" | "TherapeuticProcedure" | "DiagnosticProcedure";
  /** Our internal category, mapped to schema.org category string. */
  category?: string;
}) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "MedicalProcedure",
    "@id": `${url}#procedure`,
    name,
    description,
    url,
    ...(image ? { image } : {}),
    procedureType,
    ...(bodyLocation ? { bodyLocation } : {}),
    ...(category ? { category } : {}),
    performer: {
      "@type": "Physician",
      "@id": `${siteConfig.urls.baseUrl}/about/dr-azi-shirazi#physician`,
      name: siteConfig.doctor.name,
    },
    location: {
      "@type": "LocalBusiness",
      "@id": `${siteConfig.urls.baseUrl}/#business`,
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

/**
 * MedicalConditionSchema — Session 18
 *
 * Emits schema.org MedicalCondition JSON-LD for a patient concern (fine
 * lines, hair thinning, melasma, etc.). Helps AI assistants and Google
 * rich results surface our concern pages for "what causes X" queries.
 *
 * Intentionally avoids listing specific `signOrSymptom` medical codes —
 * we're an aesthetics clinic, not a diagnostic service. Cause + possible
 * treatments are enough and honest.
 */
export function MedicalConditionSchema({
  name,
  description,
  url,
  causes,
  possibleTreatments,
}: {
  name: string;
  description: string;
  url: string;
  causes?: string[];
  possibleTreatments?: { name: string; url: string }[];
}) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "MedicalCondition",
    "@id": `${url}#condition`,
    name,
    description,
    url,
    ...(causes && causes.length > 0
      ? {
          cause: causes.map((c) => ({
            "@type": "MedicalCause",
            name: c,
          })),
        }
      : {}),
    ...(possibleTreatments && possibleTreatments.length > 0
      ? {
          possibleTreatment: possibleTreatments.map((t) => ({
            "@type": "MedicalProcedure",
            name: t.name,
            url: t.url,
          })),
        }
      : {}),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function ServiceSchema({
  name,
  description,
  url,
  image,
  provider,
}: {
  name: string;
  description: string;
  url: string;
  image?: string;
  provider?: string;
}) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    url,
    image,
    provider: {
      "@type": "LocalBusiness",
      "@id": `${siteConfig.urls.baseUrl}/#business`,
      name: provider || siteConfig.name,
    },
    areaServed: {
      "@type": "State",
      name: "California",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
