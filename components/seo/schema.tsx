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
    telephone: siteConfig.phoneRaw,
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
    image: [
      `${siteConfig.urls.baseUrl}/images/clinic-exterior.jpg`,
      `${siteConfig.urls.baseUrl}/images/treatment-room.jpg`,
      `${siteConfig.urls.baseUrl}${siteConfig.doctor.image}`,
    ],
    logo: `${siteConfig.urls.baseUrl}/images/logo.svg`,
    priceRange: "$$",
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "09:00",
        closes: "18:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Saturday",
        opens: "09:00",
        closes: "14:00",
      },
    ],
    sameAs: [
      siteConfig.social.instagram,
      siteConfig.social.facebook,
    ].filter(Boolean),
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "150",
      bestRating: "5",
      worstRating: "1",
    },
    areaServed: siteConfig.serviceAreas.map(city => ({ "@type": "City", name: city })),
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Aesthetic & Wellness Services",
      itemListElement: [
        {
          "@type": "OfferCatalog",
          name: "Aesthetic Medicine",
          itemListElement: [
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "Botox & Dysport" } },
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "Dermal Fillers" } },
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "PDO Thread Lift" } },
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "Kybella" } },
          ],
        },
        {
          "@type": "OfferCatalog",
          name: "Regenerative Medicine",
          itemListElement: [
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "PRF/PRP Therapy" } },
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "Exosome Therapy" } },
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "Microneedling" } },
          ],
        },
        {
          "@type": "OfferCatalog",
          name: "Skin Rejuvenation",
          itemListElement: [
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "Morpheus8" } },
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "Chemical Peels" } },
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "HydraFacial" } },
          ],
        },
        {
          "@type": "OfferCatalog",
          name: "Wellness & Longevity",
          itemListElement: [
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "GLP-1 Weight Loss" } },
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "Hormone Therapy" } },
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "IV Therapy & NAD+" } },
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "Peptide Therapy" } },
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
    description: `${siteConfig.doctor.credentials} with ${siteConfig.doctor.experience}, specializing in aesthetic medicine and longevity.`,
    url: `${siteConfig.urls.baseUrl}/about/dr-azi-shirazi`,
    image: `${siteConfig.urls.baseUrl}${siteConfig.doctor.image}`,
    telephone: siteConfig.phoneRaw,
    email: siteConfig.email,
    worksFor: {
      "@type": "LocalBusiness",
      "@id": `${siteConfig.urls.baseUrl}/#business`,
    },
    medicalSpecialty: [
      "Internal Medicine",
      "Aesthetic Medicine",
      "Anti-Aging Medicine",
    ],
    memberOf: [
      {
        "@type": "MedicalOrganization",
        name: "American Board of Internal Medicine",
      },
    ],
    award: ["Top 100 Physicians San Diego 2023", "Guardian Angel Award"],
    knowsLanguage: ["en", "fa"],
    alumniOf: {
      "@type": "EducationalOrganization",
      name: "Medical School",
    },
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
    telephone: siteConfig.phoneRaw,
    address: {
      "@type": "PostalAddress",
      streetAddress: `${siteConfig.address.street}, ${siteConfig.address.suite}`,
      addressLocality: siteConfig.address.city,
      addressRegion: siteConfig.address.state,
      postalCode: siteConfig.address.zip,
      addressCountry: "US",
    },
    medicalSpecialty: [
      "Aesthetic Medicine",
      "Anti-Aging Medicine",
      "Regenerative Medicine",
      "Internal Medicine",
    ],
    availableService: [
      {
        "@type": "MedicalProcedure",
        name: "Botulinum Toxin Injections",
        procedureType: "NoninvasiveProcedure",
      },
      {
        "@type": "MedicalProcedure",
        name: "Dermal Filler Injections",
        procedureType: "NoninvasiveProcedure",
      },
      {
        "@type": "MedicalProcedure",
        name: "Morpheus8 RF Microneedling",
        procedureType: "NoninvasiveProcedure",
      },
      {
        "@type": "MedicalProcedure",
        name: "PRP/PRF Therapy",
        procedureType: "NoninvasiveProcedure",
      },
      {
        "@type": "MedicalProcedure",
        name: "PDO Thread Lift",
        procedureType: "PercutaneousProcedure",
      },
      {
        "@type": "MedicalTherapy",
        name: "Bioidentical Hormone Therapy",
      },
      {
        "@type": "MedicalTherapy",
        name: "GLP-1 Weight Loss Program",
      },
      {
        "@type": "MedicalTherapy",
        name: "IV Nutrient Therapy",
      },
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
