import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, MapPin, Phone, Clock } from "lucide-react";
import { PageHero as Hero } from "@/components/sections/hero";
import { ConsultationForm } from "@/components/sections/consultation-form";
import { Button } from "@/components/ui/button";
import { siteConfig, getPhoneLink } from "@/lib/config/site";
import { pexelsUrl, pageImages } from "@/lib/data/images";

export const metadata: Metadata = {
  title: "Locations | Medical Spa in Poway | Healinque",
  description:
    "Healinque is located in Poway and serves patients from Rancho Bernardo, Scripps Ranch, Escondido, San Marcos, and Del Mar. Physician-led aesthetic and wellness treatments.",
  openGraph: {
    title: "Locations | Healinque",
    description: "Medical spa in Poway serving greater San Diego County.",
  },
};

const serviceAreas = [
  {
    name: "Poway",
    slug: "poway",
    distance: "Our Location",
    description: "Our clinic is located in Poway.",
  },
  {
    name: "Rancho Bernardo",
    slug: "rancho-bernardo",
    distance: "10 min",
    description: "Easy access to our Poway location.",
  },
  {
    name: "Scripps Ranch",
    slug: "scripps-ranch",
    distance: "12 min",
    description: "Short drive via Pomerado Road.",
  },
  {
    name: "Escondido",
    slug: "escondido",
    distance: "15-20 min",
    description: "Worth the drive for physician-led care.",
  },
  {
    name: "San Marcos",
    slug: "san-marcos",
    distance: "20 min",
    description: "Serving North County residents.",
  },
  {
    name: "Del Mar",
    slug: "del-mar",
    distance: "20-25 min",
    description: "Refined care for coastal San Diego.",
  },
];

export default function LocationsPage() {
  return (
    <main>
      <Hero
        variant="page"
        subtitle="Find Us"
        title="Located in Poway, Serving San Diego County"
        description="Healinque is located in Poway and serves patients from Rancho Bernardo, Scripps Ranch, Escondido, San Marcos, and Del Mar. All treatments performed by Dr. Azi Shirazi, MD."
        image={pexelsUrl(pageImages.locationsHero.primary, 1920)}
      />

      {/* Main Location */}
      <section className="section-padding bg-navy-deep">
        <div className="container-healinque">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative aspect-[4/3] rounded-xl overflow-hidden">
              <Image
                src={pexelsUrl(pageImages.locationsImage.primary, 800)}
                alt="Healinque Poway Location"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <p className="section-subtitle text-gold">Our Location</p>
              <h2 className="section-title font-serif text-white mb-6">Healinque Poway</h2>
              <p className="text-white/80 leading-relaxed mb-6">
                Our modern clinic in Poway offers a serene, private environment for your
                aesthetic and wellness treatments. With easy parking and a welcoming
                atmosphere, we have created a space where you can relax and focus on yourself.
              </p>

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
                <a
                  href={siteConfig.address.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button variant="outline" size="lg" className="border-white/5 text-white hover:bg-white/10">
                    Get Directions
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="section-padding bg-surface-card">
        <div className="container-healinque">
          <div className="text-center mb-12">
            <p className="section-subtitle text-gold">Service Areas</p>
            <h2 className="section-title font-serif text-white">Easy Access from Throughout San Diego County</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {serviceAreas.map((area) => (
              <Link
                key={area.slug}
                href={`/locations/${area.slug}`}
                className="group bg-navy-deep rounded-xl p-6 border border-white/5 hover:border-gold/30 hover:shadow-lg transition-all"
              >
                <div className="flex justify-between items-start mb-3">
                  <h3 className="font-serif text-xl text-white group-hover:text-gold transition-colors">
                    {area.name}
                  </h3>
                  <span className="badge-gold text-xs bg-gold/20 text-gold px-3 py-1 rounded-full">{area.distance}</span>
                </div>
                <p className="text-sm text-white/70 mb-4">{area.description}</p>
                <span className="inline-flex items-center text-sm font-medium text-gold">
                  Learn More <ArrowRight className="ml-1 h-4 w-4" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <ConsultationForm
        variant="split"
        title="Schedule Your Visit"
        subtitle="Book Now"
      />
    </main>
  );
}
