import { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, MapPin, Phone, Clock, CheckCircle } from "lucide-react";
import { Hero } from "@/components/sections/hero";
import { FeaturedTreatments } from "@/components/sections/featured-treatments";
import { Testimonials } from "@/components/sections/testimonials";
import { ConsultationForm } from "@/components/sections/consultation-form";
import { Button } from "@/components/ui/button";
import { siteConfig, getPhoneLink } from "@/lib/config/site";

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
      "Located in the heart of Poway, Healinque is your neighborhood destination for physician-performed aesthetic treatments and longevity medicine. Dr. Azi Shirazi brings 20+ years of medical expertise to every treatment.",
    distance: "In Poway",
    driveTime: "Local",
    neighborhoods: ["Poway", "Rancho Arbolitos", "Lake Poway", "Old Poway", "Garden Road"],
    seoTitle: "Medical Spa in Poway, CA | Botox, Fillers, Weight Loss",
    seoDescription:
      "Healinque is Poway's premier medical spa. Physician-performed Botox, fillers, Morpheus8, GLP-1 weight loss & hormone therapy. Dr. Azi Shirazi, 20+ years experience.",
  },
  {
    slug: "rancho-bernardo",
    name: "Rancho Bernardo",
    region: "San Diego County",
    description:
      "Serving the Rancho Bernardo community, Healinque is just a short drive away in nearby Poway. Our physician-performed aesthetic treatments and longevity medicine services are conveniently accessible to RB residents.",
    distance: "6 miles from Healinque",
    driveTime: "10-15 minutes",
    neighborhoods: ["Rancho Bernardo", "Bernardo Heights", "Westwood", "High Country West", "San Pasqual Valley"],
    seoTitle: "Medical Spa Near Rancho Bernardo | Botox, Fillers, Weight Loss",
    seoDescription:
      "Healinque serves Rancho Bernardo patients with physician-performed Botox, fillers, Morpheus8, weight loss & more. Just 10 min from RB in Poway.",
  },
  {
    slug: "scripps-ranch",
    name: "Scripps Ranch",
    region: "San Diego County",
    description:
      "Scripps Ranch residents choose Healinque for its exceptional physician-performed aesthetic treatments. Our Poway location offers easy access via Pomerado Road or the 15 freeway.",
    distance: "8 miles from Healinque",
    driveTime: "12-18 minutes",
    neighborhoods: ["Scripps Ranch", "Scripps Miramar", "Miramar Ranch North", "Spring Canyon"],
    seoTitle: "Medical Spa Near Scripps Ranch | Botox, Fillers, Weight Loss",
    seoDescription:
      "Scripps Ranch's choice for aesthetic medicine. Physician-performed Botox, fillers, Morpheus8, weight loss at Healinque in nearby Poway. Dr. Azi Shirazi.",
  },
  {
    slug: "san-diego",
    name: "San Diego",
    region: "San Diego County",
    description:
      "San Diego patients seeking physician-performed aesthetic treatments choose Healinque in Poway. Dr. Azi Shirazi's 20+ years of medical experience and personalized approach make the short drive worthwhile.",
    distance: "20 miles from downtown",
    driveTime: "25-35 minutes",
    neighborhoods: ["Downtown", "La Jolla", "Del Mar", "Carmel Valley", "University City", "Kearny Mesa"],
    seoTitle: "Medical Spa in San Diego County | Botox, Fillers, Weight Loss",
    seoDescription:
      "San Diego's destination for physician-performed aesthetic medicine. Botox, fillers, Morpheus8, GLP-1 weight loss, hormone therapy at Healinque in Poway.",
  },
  {
    slug: "escondido",
    name: "Escondido",
    region: "San Diego County",
    description:
      "Escondido patients choose Healinque for premium aesthetic treatments just a short drive south in Poway. Our physician-performed approach ensures safe, natural results.",
    distance: "10 miles from Healinque",
    driveTime: "15-20 minutes",
    neighborhoods: ["Escondido", "San Marcos", "Valley Center", "Hidden Meadows", "Rancho San Pasqual"],
    seoTitle: "Medical Spa Near Escondido | Botox, Fillers, Weight Loss",
    seoDescription:
      "Escondido's choice for aesthetic medicine at Healinque in Poway. Physician-performed Botox, fillers, Morpheus8, weight loss. Dr. Azi Shirazi, MD.",
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
      <Hero
        variant="page"
        subtitle={`Serving ${location.name}`}
        title={`Medical Spa & Aesthetic Medicine Near ${location.name}`}
        description={`Physician-performed aesthetic treatments and longevity medicine serving the ${location.name} community. ${location.driveTime !== "Local" ? `Just ${location.driveTime} from ${location.name}.` : ""}`}
        image="https://images.pexels.com/photos/3735747/pexels-photo-3735747.jpeg?auto=compress&cs=tinysrgb&w=1920"
      />

      {/* Location Info */}
      <section className="bg-cream py-8">
        <div className="container-healinque">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-6 flex-wrap justify-center md:justify-start">
              <div className="flex items-center gap-2">
                <MapPin className="h-5 w-5 text-gold" />
                <span className="text-navy-deep font-medium">{location.distance}</span>
              </div>
              {location.driveTime !== "Local" && (
                <div className="flex items-center gap-2">
                  <Clock className="h-5 w-5 text-gold" />
                  <span className="text-taupe">{location.driveTime} drive</span>
                </div>
              )}
              <div className="flex items-center gap-2">
                <Phone className="h-5 w-5 text-gold" />
                <a href={getPhoneLink()} className="text-navy-deep hover:text-gold transition-colors">
                  {siteConfig.phone}
                </a>
              </div>
            </div>
            <Link href="/book">
              <Button>
                Book Consultation <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="section-padding bg-white">
        <div className="container-healinque">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="section-subtitle">Serving {location.name}</p>
              <h2 className="section-title mb-6">
                Premium Aesthetic Medicine for {location.name} Residents
              </h2>
              <p className="text-taupe leading-relaxed mb-6">{location.description}</p>
              <p className="text-taupe leading-relaxed mb-6">
                Unlike typical medical spas that delegate treatments to nurses or aestheticians, 
                every injectable treatment at Healinque is performed by Dr. Azi Shirazi herself. 
                With over 20 years of emergency medicine experience, she brings a level of expertise 
                and safety that sets us apart.
              </p>

              <h3 className="font-serif text-lg text-navy-deep mb-4">
                Neighborhoods We Serve
              </h3>
              <div className="flex flex-wrap gap-2 mb-6">
                {location.neighborhoods.map((neighborhood) => (
                  <span key={neighborhood} className="badge-gold">
                    {neighborhood}
                  </span>
                ))}
              </div>

              <Link href="/about/dr-azi-shirazi">
                <Button variant="outline">
                  Meet Dr. Azi Shirazi <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
              <Image
                src="https://images.pexels.com/photos/3735782/pexels-photo-3735782.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt={`Medical spa serving ${location.name}`}
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="section-padding bg-cream">
        <div className="container-healinque">
          <div className="text-center mb-12">
            <p className="section-subtitle">Our Services</p>
            <h2 className="section-title">
              Treatments Available to {location.name} Patients
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {services.map((service) => (
              <div key={service} className="flex items-center gap-3 bg-white rounded-lg p-4">
                <CheckCircle className="h-5 w-5 text-gold flex-shrink-0" />
                <span className="text-navy-deep">{service}</span>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link href="/treatments">
              <Button variant="outline">
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

      {/* Why Choose Us */}
      <section className="section-padding bg-navy-deep text-white">
        <div className="container-healinque">
          <div className="text-center mb-12">
            <p className="text-gold font-medium tracking-wide uppercase text-sm mb-3">
              The Healinque Difference
            </p>
            <h2 className="font-serif text-display text-white">
              Why {location.name} Patients Choose Us
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-gold/20 flex items-center justify-center mx-auto mb-4">
                <span className="text-gold font-serif text-2xl">1</span>
              </div>
              <h3 className="font-serif text-lg text-gold mb-2">Physician-Performed</h3>
              <p className="text-cream/70 text-sm">
                All injectable treatments performed by Dr. Shirazi, not delegated to staff.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-gold/20 flex items-center justify-center mx-auto mb-4">
                <span className="text-gold font-serif text-2xl">2</span>
              </div>
              <h3 className="font-serif text-lg text-gold mb-2">20+ Years Experience</h3>
              <p className="text-cream/70 text-sm">
                Emergency medicine background means expertise in safety and complications.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-gold/20 flex items-center justify-center mx-auto mb-4">
                <span className="text-gold font-serif text-2xl">3</span>
              </div>
              <h3 className="font-serif text-lg text-gold mb-2">Natural Results</h3>
              <p className="text-cream/70 text-sm">
                Conservative approach that enhances your natural beauty, never overdone.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <Testimonials variant="grid" limit={3} />

      {/* Location Details */}
      <section className="section-padding bg-white">
        <div className="container-healinque">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="section-subtitle">Visit Us</p>
              <h2 className="section-title mb-6">
                Easy Access from {location.name}
              </h2>
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-4">
                  <MapPin className="h-5 w-5 text-gold mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-navy-deep">Address</p>
                    <p className="text-taupe">12345 Poway Road, Suite 100<br />Poway, CA 92064</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Phone className="h-5 w-5 text-gold mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-navy-deep">Phone</p>
                    <a href="tel:+18583377999" className="text-taupe hover:text-gold transition-colors">
                      (858) 337-7999
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Clock className="h-5 w-5 text-gold mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-navy-deep">Hours</p>
                    <p className="text-taupe">
                      Mon – Fri: 9:00 AM – 6:00 PM<br />
                      Saturday: 9:00 AM – 2:00 PM<br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex flex-wrap gap-4">
                <Link href="/book">
                  <Button size="lg">
                    Book Appointment <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button variant="outline" size="lg">
                    Get Directions
                  </Button>
                </Link>
              </div>
            </div>
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-cream">
              {/* Placeholder for map */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="h-12 w-12 text-gold mx-auto mb-4" />
                  <p className="text-taupe">Interactive map</p>
                  <p className="text-sm text-taupe">12345 Poway Road, Poway, CA</p>
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
