import Image from "next/image";
import Link from "next/link";
import { MapPin, Phone, Clock, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { siteConfig, getPhoneLink } from "@/lib/config/site";

export function LocationShowcase() {
  return (
    <section className="section-padding bg-white">
      <div className="container-healinque">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Images Grid */}
          <div className="grid grid-cols-2 gap-4">
            <div className="relative aspect-[3/4] rounded-xl overflow-hidden">
              <Image
                src="https://images.pexels.com/photos/3735747/pexels-photo-3735747.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Healinque Clinic Interior"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative aspect-[3/4] rounded-xl overflow-hidden mt-8">
              <Image
                src="https://images.pexels.com/photos/3735782/pexels-photo-3735782.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Healinque Treatment Room"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Content */}
          <div>
            <p className="section-subtitle">Visit Us</p>
            <h2 className="section-title mb-6">Our Poway Location</h2>
            <p className="text-taupe mb-8 leading-relaxed">
              Located in the heart of Poway, our modern clinic provides a serene, 
              private environment for your aesthetic and wellness treatments. 
              Easy parking and a welcoming atmosphere await you.
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-cream flex items-center justify-center flex-shrink-0">
                  <MapPin className="h-5 w-5 text-gold" />
                </div>
                <div>
                  <p className="font-medium text-navy-deep">Address</p>
                  <a 
                    href={siteConfig.address.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-taupe hover:text-gold transition-colors block"
                  >
                    {siteConfig.address.street}, {siteConfig.address.suite}<br />
                    {siteConfig.address.city}, {siteConfig.address.state} {siteConfig.address.zip}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-cream flex items-center justify-center flex-shrink-0">
                  <Phone className="h-5 w-5 text-gold" />
                </div>
                <div>
                  <p className="font-medium text-navy-deep">Phone</p>
                  <a href={getPhoneLink()} className="text-taupe hover:text-gold transition-colors">
                    {siteConfig.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-cream flex items-center justify-center flex-shrink-0">
                  <Clock className="h-5 w-5 text-gold" />
                </div>
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
              <Link href="/contact">
                <Button variant="outline" size="lg">
                  Get Directions
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

