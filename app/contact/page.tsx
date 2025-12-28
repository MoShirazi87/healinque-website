import { Metadata } from "next";
import Image from "next/image";
import { MapPin, Phone, Mail, Clock, Instagram, Facebook } from "lucide-react";
import { siteConfig, getPhoneLink, getEmailLink } from "@/lib/config/site";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Get in touch with Healinque Wellness Clinic in Poway, CA. Schedule your appointment or ask us any questions about our treatments.",
};

export default function ContactPage() {
  return (
    <div className="min-h-screen pt-24">
      {/* Header */}
      <section className="py-16 bg-cream">
        <div className="container-healinque text-center">
          <h1 className="text-display font-serif text-navy-deep mb-4">
            Contact Us
          </h1>
          <p className="text-lg text-taupe max-w-2xl mx-auto">
            We&apos;re here to answer your questions and help you begin your wellness journey.
          </p>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-healinque">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Information */}
            <div>
              <h2 className="text-display-sm font-serif text-navy-deep mb-8">
                Get in Touch
              </h2>

              <div className="space-y-6 mb-12">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-cream flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-5 w-5 text-gold" />
                  </div>
                  <div>
                    <h3 className="font-medium text-navy-deep mb-1">Location</h3>
                    <p className="text-taupe">
                      {siteConfig.address.street}, {siteConfig.address.suite}<br />
                      {siteConfig.address.city}, {siteConfig.address.state} {siteConfig.address.zip}
                    </p>
                    <a
                      href={siteConfig.address.googleMapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gold hover:text-gold-dark text-sm mt-1 inline-block"
                    >
                      Get Directions →
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-cream flex items-center justify-center flex-shrink-0">
                    <Phone className="h-5 w-5 text-gold" />
                  </div>
                  <div>
                    <h3 className="font-medium text-navy-deep mb-1">Phone</h3>
                    <a
                      href={getPhoneLink()}
                      className="text-taupe hover:text-gold transition-colors"
                    >
                      {siteConfig.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-cream flex items-center justify-center flex-shrink-0">
                    <Mail className="h-5 w-5 text-gold" />
                  </div>
                  <div>
                    <h3 className="font-medium text-navy-deep mb-1">Email</h3>
                    <a
                      href={getEmailLink()}
                      className="text-taupe hover:text-gold transition-colors"
                    >
                      {siteConfig.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-cream flex items-center justify-center flex-shrink-0">
                    <Clock className="h-5 w-5 text-gold" />
                  </div>
                  <div>
                    <h3 className="font-medium text-navy-deep mb-1">Hours</h3>
                    <p className="text-taupe">
                      {siteConfig.hours.display.map((line, i) => (
                        <span key={i}>{line}{i < siteConfig.hours.display.length - 1 && <br />}</span>
                      ))}
                    </p>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div>
                <h3 className="font-medium text-navy-deep mb-3">Follow Us</h3>
                <div className="flex gap-4">
                  {siteConfig.social.instagram && (
                    <a
                      href={siteConfig.social.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full bg-cream flex items-center justify-center text-taupe hover:text-gold hover:bg-cream-dark transition-colors"
                    >
                      <Instagram className="h-5 w-5" />
                    </a>
                  )}
                  {siteConfig.social.facebook && (
                    <a
                      href={siteConfig.social.facebook}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full bg-cream flex items-center justify-center text-taupe hover:text-gold hover:bg-cream-dark transition-colors"
                    >
                      <Facebook className="h-5 w-5" />
                    </a>
                  )}
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <div className="bg-cream rounded-2xl p-8">
                <h2 className="text-display-sm font-serif text-navy-deep mb-6">
                  Send a Message
                </h2>
                <form className="space-y-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="firstName"
                        className="block text-sm font-medium text-navy-deep mb-2"
                      >
                        First Name
                      </label>
                      <input
                        type="text"
                        id="firstName"
                        className="w-full px-4 py-3 rounded-lg border border-cream-dark focus:border-gold focus:ring-1 focus:ring-gold outline-none transition-colors"
                        required
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="lastName"
                        className="block text-sm font-medium text-navy-deep mb-2"
                      >
                        Last Name
                      </label>
                      <input
                        type="text"
                        id="lastName"
                        className="w-full px-4 py-3 rounded-lg border border-cream-dark focus:border-gold focus:ring-1 focus:ring-gold outline-none transition-colors"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-navy-deep mb-2"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-4 py-3 rounded-lg border border-cream-dark focus:border-gold focus:ring-1 focus:ring-gold outline-none transition-colors"
                      required
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium text-navy-deep mb-2"
                    >
                      Phone
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      className="w-full px-4 py-3 rounded-lg border border-cream-dark focus:border-gold focus:ring-1 focus:ring-gold outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="subject"
                      className="block text-sm font-medium text-navy-deep mb-2"
                    >
                      Subject
                    </label>
                    <select
                      id="subject"
                      className="w-full px-4 py-3 rounded-lg border border-cream-dark focus:border-gold focus:ring-1 focus:ring-gold outline-none transition-colors"
                    >
                      <option value="">Select a topic</option>
                      <option value="appointment">Schedule an Appointment</option>
                      <option value="treatment">Treatment Question</option>
                      <option value="pricing">Pricing Inquiry</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-navy-deep mb-2"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      rows={5}
                      className="w-full px-4 py-3 rounded-lg border border-cream-dark focus:border-gold focus:ring-1 focus:ring-gold outline-none transition-colors resize-none"
                      required
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full px-6 py-3 bg-gold text-white font-medium rounded-lg hover:bg-gold-dark transition-colors"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="h-96 bg-cream relative">
        <div className="absolute inset-0 flex items-center justify-center">
          <p className="text-taupe">
            [Google Maps Embed - Add your API key in production]
          </p>
        </div>
      </section>
    </div>
  );
}

