import { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, MapPin, Phone, Clock, CheckCircle } from "lucide-react";
import { PageHero as Hero } from "@/components/sections/hero";
import { FeaturedTreatments } from "@/components/sections/featured-treatments";
import { Testimonials } from "@/components/sections/testimonials";
import { ConsultationForm } from "@/components/sections/consultation-form";
import { Button } from "@/components/ui/button";
import { siteConfig, getPhoneLink } from "@/lib/config/site";
import { BreadcrumbSchema } from "@/components/seo/schema";
import { pexelsUrl, pageImages } from "@/lib/data/images";

interface LocationPageProps {
  params: Promise<{ slug: string }>;
}

interface Location {
  slug: string;
  name: string;
  region: string;
  description: string;
  distance: string;
  driveTime: string;
  neighborhoods: string[];
  seoTitle: string;
  seoDescription: string;
}

const locations: Location[] = [
  {
    slug: "poway",
    name: "Poway",
    region: "San Diego County",
    description:
      "Healinque is located at 15644 Pomerado Road, Suite 103 in Poway (92064). Dr. Azi Shirazi, MD brings 20+ years of medical expertise and 10+ years in aesthetic medicine to every patient. All treatments performed or directly supervised by Dr. Shirazi.",
    distance: "In Poway",
    driveTime: "Local",
    neighborhoods: ["Poway", "Rancho Bernardo", "Scripps Ranch", "Sabre Springs", "Carmel Mountain Ranch"],
    seoTitle: "Medical Spa in Poway, CA | Botox, Fillers, Longevity | Healinque",
    seoDescription:
      "Healinque in Poway (92064) — physician-led Botox, fillers, microneedling, PRP, and longevity care. Dr. Azi Shirazi, MD. All treatments physician-performed.",
  },
  {
    slug: "rancho-bernardo",
    name: "Rancho Bernardo",
    region: "San Diego County",
    description:
      "Rancho Bernardo residents can reach Healinque in about 10 minutes. My physician-led practice offers personalized aesthetic medicine and wellness treatments in a refined setting. Every treatment performed or supervised by me.",
    distance: "10 minutes from Rancho Bernardo",
    driveTime: "10 minutes",
    neighborhoods: ["Rancho Bernardo", "4S Ranch", "Bernardo Heights", "Scripps Miramar", "Carmel Mountain"],
    seoTitle: "Medical Spa Near Rancho Bernardo | Aesthetic Medicine | Healinque",
    seoDescription:
      "Healinque in Poway serves Rancho Bernardo with physician-led Botox, fillers, microneedling, and PRP. Dr. Azi Shirazi, MD. Just 10 minutes away.",
  },
  {
    slug: "scripps-ranch",
    name: "Scripps Ranch",
    region: "San Diego County",
    description:
      "Scripps Ranch residents can reach Healinque in about 12 minutes via Scripps Poway Parkway. My boutique clinic offers refined, physician-led aesthetic care with personalized treatment plans designed for natural results.",
    distance: "12 minutes from Scripps Ranch",
    driveTime: "12 minutes",
    neighborhoods: ["Scripps Ranch", "Miramar", "Miramar Ranch North", "Scripps Miramar", "Spring Canyon"],
    seoTitle: "Medical Spa Near Scripps Ranch | Aesthetic Medicine | Healinque",
    seoDescription:
      "Healinque in Poway serves Scripps Ranch with physician-led aesthetic treatments. Botox, fillers, microneedling, PRP. Dr. Azi Shirazi, MD.",
  },
  {
    slug: "escondido",
    name: "Escondido",
    region: "San Diego County",
    description:
      "Escondido residents drive 15-20 minutes to reach Healinque in Poway. Dr. Shirazi's approach to natural, medically sound aesthetic medicine makes the short commute worthwhile for patients seeking authentic results.",
    distance: "15-20 minutes from Escondido",
    driveTime: "15-20 minutes",
    neighborhoods: ["Escondido", "San Marcos", "Valley Center", "Hidden Meadows", "Rancho San Pasqual"],
    seoTitle: "Medical Spa Near Escondido | Aesthetic Medicine | Healinque",
    seoDescription:
      "Healinque in Poway serves Escondido with physician-led aesthetic medicine. Botox, fillers, microneedling, PRP. Dr. Azi Shirazi, MD.",
  },
  {
    slug: "san-marcos",
    name: "San Marcos",
    region: "San Diego County",
    description:
      "San Marcos residents can reach Healinque in approximately 20 minutes. My focus on natural results and medically sound treatments makes me a trusted choice for North County patients.",
    distance: "20 minutes from San Marcos",
    driveTime: "20 minutes",
    neighborhoods: ["San Marcos", "Escondido", "Vista", "Woodland Park", "Rancho Santa Fe"],
    seoTitle: "Medical Spa Serving San Marcos | Aesthetic Medicine | Healinque",
    seoDescription:
      "Healinque in Poway serves San Marcos with physician-led aesthetic medicine. Botox, fillers, microneedling, PRP. Dr. Azi Shirazi, MD.",
  },
  {
    slug: "del-mar",
    name: "Del Mar",
    region: "San Diego County",
    description:
      "Del Mar residents appreciate Healinque for refined, physician-led aesthetic care. Located 20-25 minutes away in Poway, the practice offers personalized treatment plans with a focus on natural, sophisticated results.",
    distance: "20-25 minutes from Del Mar",
    driveTime: "20-25 minutes",
    neighborhoods: ["Del Mar", "Solana Beach", "Carmel Valley", "Torrey Pines", "La Jolla"],
    seoTitle: "Medical Spa Serving Del Mar | Aesthetic Medicine | Healinque",
    seoDescription:
      "Healinque in Poway serves Del Mar with physician-led aesthetic medicine and longevity care. Dr. Azi Shirazi, MD.",
  },
];

export async function generateStaticParams() {
  return locations.map((location) => ({
    slug: location.slug,
  }));
}

export async function generateMetadata({ params }: LocationPageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const location = locations.find((l) => l.slug === resolvedParams.slug);

  if (!location) {
    return { title: "Location Not Found" };
  }

  return {
    title: location.seoTitle,
    description: location.seoDescription,
    openGraph: {
      title: location.seoTitle,
      description: location.seoDescription,
    },
    alternates: {
      canonical: `${siteConfig.urls.baseUrl}/locations/${location.slug}`,
    },
  };
}

export default async function LocationPage({ params }: LocationPageProps) {
  const resolvedParams = await params;
  const location = locations.find((l) => l.slug === resolvedParams.slug);

  if (!location) {
    notFound();
  }

  const breadcrumbItems = [
    { name: "Home", url: "https://www.healinque.com" },
    { name: "Locations", url: "https://www.healinque.com/locations" },
    { name: location.name, url: `https://www.healinque.com/locations/${resolvedParams.slug}` },
  ];

  const services = [
    "Botox & Dysport",
    "Dermal Fillers",
    "Morpheus8",
    "PDO Thread Lift",
    "PRF/PRP Therapy",
    "Chemical Peels",
    "HydraFacial",
    "GLP-1 Weight Loss",
    "Hormone Therapy (BHRT)",
    "IV Therapy & NAD+",
    "Peptide Therapy",
  ];

  return (
    <main>
      <BreadcrumbSchema items={breadcrumbItems} />
      <Hero
        variant="page"
        subtitle={`Serving ${location.name}`}
        title={`Medical Spa & Aesthetic Medicine Near ${location.name}`}
        description={`Physician-performed aesthetic treatments and longevity medicine serving the ${location.name} community. ${location.driveTime !== "Local" ? `Just ${location.driveTime} from ${location.name}.` : ""}`}
        image={pexelsUrl(pageImages.locationsHero.primary, 1920)}
      />

      {/* Location Info */}
      <section className="bg-surface-card py-8 border-b border-white/5">
        <div className="container-healinque">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-6 flex-wrap justify-center md:justify-start">
              <div className="flex items-center gap-2">
                <MapPin className="h-5 w-5 text-gold" />
                <span className="text-white font-medium">{location.distance}</span>
              </div>
              {location.driveTime !== "Local" && (
                <div className="flex items-center gap-2">
                  <Clock className="h-5 w-5 text-gold" />
                  <span className="text-white/80">{location.driveTime} drive</span>
                </div>
              )}
              <div className="flex items-center gap-2">
                <Phone className="h-5 w-5 text-gold" />
                <a href={getPhoneLink()} className="text-white hover:text-gold transition-colors">
                  {siteConfig.phone}
                </a>
              </div>
            </div>
            <Link href="/book">
              <Button className="bg-gold hover:bg-gold/90 text-white">
                Book Consultation <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="section-padding bg-navy-deep">
        <div className="container-healinque">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="section-subtitle text-gold">Serving {location.name}</p>
              <h2 className="section-title font-serif text-white mb-6">
                Premium Aesthetic Medicine for {location.name} Residents
              </h2>
              <p className="text-white/80 leading-relaxed mb-6">{location.description}</p>
              <p className="text-white/80 leading-relaxed mb-6">
                With over 20 years of clinical experience in internal medicine and a decade in aesthetic medicine, Dr. Azi Shirazi delivers physician-led care to every patient. Unlike typical medical spas that delegate treatments to nurses or aestheticians, every treatment at Healinque is performed or directly supervised by Dr. Shirazi herself.
              </p>

              <h3 className="font-serif text-lg text-white mb-4">
                Neighborhoods I Serve
              </h3>
              <div className="flex flex-wrap gap-2 mb-6">
                {location.neighborhoods.map((neighborhood) => (
                  <span key={neighborhood} className="text-xs bg-gold/20 text-gold px-3 py-1 rounded-full">
                    {neighborhood}
                  </span>
                ))}
              </div>

              <Link href="/about/dr-azi-shirazi">
                <Button variant="outline" className="border-white/5 text-white hover:bg-white/10">
                  Meet Dr. Azi Shirazi <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
            <div className="relative aspect-[4/3] rounded-xl overflow-hidden">
              <Image
                src={pexelsUrl(pageImages.aboutPhilosophy.primary, 800)}
                alt={`Medical spa serving ${location.name}`}
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="section-padding bg-surface-card">
        <div className="container-healinque">
          <div className="text-center mb-12">
            <p className="section-subtitle text-gold">My Services</p>
            <h2 className="section-title font-serif text-white">
              Treatments Available to {location.name} Patients
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {services.map((service) => (
              <div key={service} className="flex items-center gap-3 bg-navy-deep rounded-lg p-4 border border-white/5">
                <CheckCircle className="h-5 w-5 text-gold flex-shrink-0" />
                <span className="text-white">{service}</span>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link href="/treatments">
              <Button variant="outline" className="border-white/5 text-white hover:bg-white/10">
                View All Treatments <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Treatments */}
      <FeaturedTreatments
        subtitle="Popular with Local Patients"
        title="Most Requested Treatments"
        limit={3}
      />

      {/* Why Choose Me */}
      <section className="section-padding bg-navy-deep text-white">
        <div className="container-healinque">
          <div className="text-center mb-12">
            <p className="text-gold font-medium tracking-wide uppercase text-sm mb-3">
              The Healinque Difference
            </p>
            <h2 className="font-serif text-display text-white">
              Why {location.name} Patients Choose Me
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-gold/20 flex items-center justify-center mx-auto mb-4">
                <span className="text-gold font-serif text-2xl">1</span>
              </div>
              <h3 className="font-serif text-lg text-gold mb-2">Physician-Performed</h3>
              <p className="text-white/70 text-sm">
                All injectable treatments performed by Dr. Shirazi, not delegated to staff.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-gold/20 flex items-center justify-center mx-auto mb-4">
                <span className="text-gold font-serif text-2xl">2</span>
              </div>
              <h3 className="font-serif text-lg text-gold mb-2">20+ Years Experience</h3>
              <p className="text-white/70 text-sm">
                Emergency medicine background means expertise in safety and complications.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-gold/20 flex items-center justify-center mx-auto mb-4">
                <span className="text-gold font-serif text-2xl">3</span>
              </div>
              <h3 className="font-serif text-lg text-gold mb-2">Natural Results</h3>
              <p className="text-white/70 text-sm">
                Conservative approach that enhances your natural beauty, never overdone.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <Testimonials variant="dark" limit={3} />

      {/* Location Details */}
      <section className="section-padding bg-navy-deep">
        <div className="container-healinque">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="section-subtitle text-gold">Visit Me</p>
              <h2 className="section-title font-serif text-white mb-6">
                Easy Access from {location.name}
              </h2>
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-4">
                  <MapPin className="h-5 w-5 text-gold mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-white">Address</p>
                    <p className="text-white/80">{siteConfig.address.full}</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Phone className="h-5 w-5 text-gold mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-white">Phone</p>
                    <a href={getPhoneLink()} className="text-white/80 hover:text-gold transition-colors">
                      {siteConfig.phone}
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Clock className="h-5 w-5 text-gold mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-white">Hours</p>
                    <p className="text-white/80">
                      {siteConfig.hours.display.map((line, i) => (
                        <span key={i}>{line}{i < siteConfig.hours.display.length - 1 && <br />}</span>
                      ))}
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex flex-wrap gap-4">
                <Link href="/book">
                  <Button size="lg" className="bg-gold hover:bg-gold/90 text-white">
                    Book Appointment <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <a href={siteConfig.address.googleMapsUrl} target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" size="lg" className="border-white/5 text-white hover:bg-white/10">
                    Get Directions
                  </Button>
                </a>
              </div>
            </div>
            <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-surface-card border border-white/5">
              {/* Placeholder for map */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="h-12 w-12 text-gold mx-auto mb-4" />
                  <p className="text-white/80">Interactive map</p>
                  <p className="text-sm text-white/60">{siteConfig.address.full}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <ConsultationForm
        variant="split"
        title={`Schedule Your ${location.name} Consultation`}
        subtitle="Book Now"
      />
    </main>
  );
}
