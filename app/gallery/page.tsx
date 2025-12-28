import { Metadata } from "next";
import { Hero } from "@/components/sections/hero";
import { BeforeAfterGallery } from "@/components/sections/before-after";
import { CTASection } from "@/components/sections/cta";

export const metadata: Metadata = {
  title: "Before & After Gallery",
  description: "View real patient results from our aesthetic treatments. See before and after photos of Botox, fillers, lasers, and more at Healinque.",
};

// Note: In production, replace with actual before/after photos from the clinic
// For now, using placeholder gallery images
const galleryItems = [
  {
    id: "1",
    beforeImage: "/images/gallery/gallery-1.jpg",
    afterImage: "/images/gallery/gallery-2.jpg",
    treatment: "Full Face Rejuvenation",
    description: "Botox + Cheek & Lip Filler",
  },
  {
    id: "2",
    beforeImage: "/images/gallery/gallery-3.jpg",
    afterImage: "/images/gallery/gallery-4.jpg",
    treatment: "Lip Enhancement",
    description: "Natural volume with Juvederm",
  },
  {
    id: "3",
    beforeImage: "/images/gallery/gallery-5.jpg",
    afterImage: "/images/gallery/gallery-6.jpg",
    treatment: "Botox Forehead & Glabella",
    description: "Smoothed forehead lines and frown lines",
  },
];

export default function GalleryPage() {
  return (
    <>
      <Hero
        title="Before & After Gallery"
        subtitle="Real Results"
        description="See the natural, beautiful results our patients have achieved with Dr. Azi's expert care."
        backgroundImage="/images/gallery-hero.jpg"
        height="medium"
        alignment="center"
        overlay="dark"
      />

      {/* Disclaimer */}
      <section className="py-6 bg-cream">
        <div className="container-healinque">
          <p className="text-sm text-taupe text-center max-w-3xl mx-auto">
            Individual results may vary. All photos are of actual patients who have given 
            consent for their images to be used. Photos are unretouched except for lighting 
            adjustments. Results depend on individual factors including age, skin type, and 
            treatment adherence.
          </p>
        </div>
      </section>

      <BeforeAfterGallery
        title="Patient Transformations"
        subtitle="Drag to Compare"
        items={galleryItems}
      />

      {/* Additional Results */}
      <section className="section-padding bg-cream">
        <div className="container-healinque">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-display-sm font-serif text-navy-deep mb-6">
              Want to See More Results?
            </h2>
            <p className="text-taupe mb-8">
              Follow us on Instagram for daily before and afters, treatment tips, 
              and behind-the-scenes at Healinque. Dr. Azi shares her expertise and 
              showcases real patient transformations.
            </p>
            <a
              href="https://instagram.com/healinque"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 text-white rounded-lg font-medium hover:opacity-90 transition-opacity"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
              Follow @healinque
            </a>
          </div>
        </div>
      </section>

      <CTASection
        title="Ready for Your Transformation?"
        description="Schedule a consultation to discuss how we can help you achieve similar results."
        primaryCta={{ text: "Book Consultation", href: "/book" }}
      />
    </>
  );
}

