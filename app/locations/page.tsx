import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, MapPin, Phone, Clock } from "lucide-react";
import { Hero } from "@/components/sections/hero";
import { ConsultationForm } from "@/components/sections/consultation-form";
import { Button } from "@/components/ui/button";
import { siteConfig, getPhoneLink } from "@/lib/config/site";

export const metadata: Metadata = {
  title: "Locations | Medical Spa Serving Poway & San Diego | Healinque",
  description:
    "Healinque serves patients from Poway, Rancho Bernardo, Scripps Ranch, San Diego, Escondido and surrounding areas. Physician-performed aesthetic treatments.",
  openGraph: {
    title: "Locations | Healinque",
    description: "Medical spa serving Poway and greater San Diego area.",
  },
};

const serviceAreas = [
  {
    name: "Poway",
    slug: "poway",
    distance: "Our Home",
    description: "Our clinic is located in the heart of Poway.",
  },
  {
    name: "Rancho Bernardo",
    slug: "rancho-bernardo",
    distance: "10-15 min",
    description: "Easy access via Poway Road or Pomerado Road.",
  },
  {
    name: "Scripps Ranch",
    slug: "scripps-ranch",
    distance: "12-18 min",
    description: "Quick drive via the 15 freeway or Pomerado Road.",
  },
  {
    name: "San Diego",
    slug: "san-diego",
    distance: "25-35 min",
    description: "Worth the drive for physician-performed care.",
  },
  {
    name: "Escondido",
    slug: "escondido",
    distance: "15-20 min",
    description: "Just south on the 15 freeway.",
  },
];

export default function LocationsPage() {
  return (
    <main>
      <Hero
        variant="page"
        subtitle="Find Us"
        title="Serving Greater San Diego"
        description="Healinque is conveniently located in Poway, serving patients from throughout San Diego County. Our physician-performed treatments are worth the drive."
        image="https://images.pexels.com/photos/3735747/pexels-photo-3735747.jpeg?auto=compress&cs=tinysrgb&w=1920"
      />

      {/* Main Location */}
      <section className="section-padding bg-white">
        <div className="container-healinque">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
              <Image
                src="https://images.pexels.com/photos/3735782/pexels-photo-3735782.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Healinque Poway Location"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <p className="section-subtitle">Our Location</p>
              <h2 className="section-title mb-6">Healinque Poway</h2>
              <p className="text-taupe leading-relaxed mb-6">
                Our modern clinic in Poway offers a serene, private environment for your 
                aesthetic and wellness treatments. With easy parking and a welcoming 
                atmosphere, we&apos;ve created a space where you can relax and focus on yourself.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-4">
                  <MapPin className="h-5 w-5 text-gold mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-navy-deep">Address</p>
                    <p className="text-taupe">{siteConfig.address.street}, {siteConfig.address.suite}<br />{siteConfig.address.city}, {siteConfig.address.state} {siteConfig.address.zip}</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Phone className="h-5 w-5 text-gold mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-navy-deep">Phone</p>
                    <a href={getPhoneLink()} className="text-taupe hover:text-gold transition-colors">
                      {siteConfig.phone}
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Clock className="h-5 w-5 text-gold mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-navy-deep">Hours</p>
                    <p className="text-taupe">
                      {siteConfig.hours.display.map((line, i) => (
                        <span key={i}>{line}{i < siteConfig.hours.display.length - 1 && <br />}</span>
                      ))}
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
                <a
                  href={siteConfig.address.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button variant="outline" size="lg">
                    Get Directions
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="section-padding bg-cream">
        <div className="container-healinque">
          <div className="text-center mb-12">
            <p className="section-subtitle">Areas We Serve</p>
            <h2 className="section-title">Convenient for San Diego County</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {serviceAreas.map((area) => (
              <Link
                key={area.slug}
                href={`/locations/${area.slug}`}
                className="group bg-white rounded-xl p-6 hover:shadow-elegant transition-shadow"
              >
                <div className="flex justify-between items-start mb-3">
                  <h3 className="font-serif text-xl text-navy-deep group-hover:text-gold transition-colors">
                    {area.name}
                  </h3>
                  <span className="badge-gold">{area.distance}</span>
                </div>
                <p className="text-sm text-taupe mb-4">{area.description}</p>
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

