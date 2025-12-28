import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Award, GraduationCap, Heart, Shield, Globe, Stethoscope } from "lucide-react";
import { Hero } from "@/components/sections/hero";
import { Testimonials } from "@/components/sections/testimonials";
import { ConsultationForm } from "@/components/sections/consultation-form";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Dr. Azi Shirazi | Board Certified Physician | Healinque",
  description:
    "Meet Dr. Azadeh 'Azi' Shirazi, Board Certified in Internal Medicine with 20+ years of emergency medicine experience. Physician-performed aesthetic treatments in Poway, CA.",
  openGraph: {
    title: "Dr. Azi Shirazi | Board Certified Physician",
    description:
      "Board Certified Internal Medicine with 20+ years experience. Natural aesthetic results with medical precision.",
    images: ["/images/dr-azi-shirazi.jpg"],
  },
};

const credentials = [
  {
    icon: GraduationCap,
    title: "Education",
    items: [
      "Doctor of Medicine (MD)",
      "Internal Medicine Residency",
      "Advanced Aesthetic Training",
    ],
  },
  {
    icon: Shield,
    title: "Board Certifications",
    items: [
      "American Board of Internal Medicine",
      "Advanced Cardiac Life Support (ACLS)",
      "Pediatric Advanced Life Support (PALS)",
    ],
  },
  {
    icon: Award,
    title: "Awards & Recognition",
    items: [
      "Top 100 Physicians San Diego 2023",
      "Guardian Angel Award Recipient",
      "Patient Choice Award",
    ],
  },
  {
    icon: Globe,
    title: "Languages",
    items: ["English (Native)", "Farsi/Persian (Native)"],
  },
];

const philosophy = [
  {
    title: "The Inside-Out Approach",
    description:
      "True beauty radiates from within. Before addressing external concerns, I look at what's happening inside—hormones, nutrition, inflammation, cellular health. When we optimize the internal environment, external results are more natural and lasting.",
  },
  {
    title: "Safety as a Foundation",
    description:
      "My 20 years in emergency medicine taught me something invaluable: how things can go wrong. I've treated countless complications from aesthetic procedures performed by inexperienced providers. That experience informs every treatment decision I make.",
  },
  {
    title: "Conservative Enhancement",
    description:
      "I believe in enhancement, not transformation. My goal is for people to notice that you look refreshed and vibrant—not that you've had work done. I'm not afraid to say 'less is more' or 'you don't need that yet.'",
  },
  {
    title: "Physician-Performed Care",
    description:
      "Unlike many medical spas that delegate to nurses or aestheticians, I personally perform all injectable treatments. Your face deserves physician-level expertise and the attention that comes with true continuity of care.",
  },
];

export default function DrAziShiraziPage() {
  return (
    <main>
      <Hero
        variant="page"
        subtitle="Meet Your Physician"
        title="Dr. Azadeh 'Azi' Shirazi, MD"
        description="Board Certified Internal Medicine • 20+ Years Emergency Medicine • Aesthetic Medicine Specialist"
        image="https://images.pexels.com/photos/5407206/pexels-photo-5407206.jpeg?auto=compress&cs=tinysrgb&w=1920"
      />

      {/* Main Bio Section */}
      <section className="section-padding bg-white">
        <div className="container-healinque">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Image Column */}
            <div className="space-y-6">
              <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-elegant">
                <Image
                  src="/images/dr-azi-shirazi.jpg"
                  alt="Dr. Azi Shirazi, Board Certified Physician"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              <div className="bg-cream rounded-xl p-6">
                <h3 className="font-serif text-lg font-semibold text-navy-deep mb-3">
                  Book with Dr. Azi
                </h3>
                <p className="text-sm text-taupe mb-4">
                  Ready to experience physician-performed aesthetic care? Schedule your 
                  complimentary consultation today.
                </p>
                <Link href="/book">
                  <Button className="w-full">
                    Book Consultation <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>

            {/* Content Column */}
            <div>
              <p className="section-subtitle">About Dr. Azi</p>
              <h2 className="section-title mb-6">
                Where Emergency Medicine Expertise Meets Aesthetic Artistry
              </h2>
              
              <div className="prose prose-taupe max-w-none space-y-4 text-taupe leading-relaxed">
                <p>
                  Dr. Azadeh &ldquo;Azi&rdquo; Shirazi is a Board Certified Internal Medicine physician 
                  with over two decades of experience in urgent and emergency medicine. Her journey 
                  to aesthetic medicine was shaped by an unexpected perspective: treating the 
                  complications that occur when cosmetic procedures go wrong.
                </p>
                
                <p>
                  &ldquo;During my years in the emergency room, I saw what happens when aesthetics 
                  are performed without proper medical oversight,&rdquo; Dr. Shirazi explains. 
                  &ldquo;Vascular occlusions, infections, necrosis—I treated them all. That experience 
                  gave me a profound respect for facial anatomy and the importance of proper 
                  technique. It also showed me how much patients deserve: physician-level expertise, 
                  safety protocols, and personalized care.&rdquo;
                </p>

                <p>
                  Motivated by the desire to provide aesthetic care the way it should be done, 
                  Dr. Shirazi founded Healinque with a unique philosophy: combining her emergency 
                  medicine expertise with aesthetic artistry to deliver results that are beautiful, 
                  safe, and natural.
                </p>

                <h3 className="font-serif text-xl font-semibold text-navy-deep pt-4">
                  A Different Kind of Aesthetic Provider
                </h3>
                
                <p>
                  What sets Dr. Shirazi apart is her comprehensive approach to patient care. Unlike 
                  many aesthetic providers who focus only on the surface, she looks at the whole 
                  picture. As a Board Certified Internal Medicine physician, she can identify 
                  underlying factors that affect how you look and feel—from hormone imbalances to 
                  nutritional deficiencies to chronic inflammation.
                </p>

                <p>
                  &ldquo;Beauty is health made visible,&rdquo; she says. &ldquo;When we optimize 
                  what&apos;s happening inside the body, it radiates outward. That&apos;s why I offer 
                  both aesthetic treatments and longevity medicine—they work together for results 
                  that are truly transformative.&rdquo;
                </p>

                <h3 className="font-serif text-xl font-semibold text-navy-deep pt-4">
                  The Guardian Angel of Urgent Care
                </h3>
                
                <p>
                  Dr. Shirazi&apos;s dedication to patient care has been recognized with the 
                  prestigious Guardian Angel Award, given to healthcare providers who go above 
                  and beyond for their patients. She has also been named one of the Top 100 
                  Physicians in San Diego.
                </p>

                <p>
                  Fluent in both English and Farsi, Dr. Shirazi serves a diverse patient community 
                  and takes pride in making every patient feel comfortable and understood.
                </p>
              </div>

              {/* Philosophy Quote */}
              <blockquote className="border-l-4 border-gold pl-6 my-8">
                <p className="font-serif text-xl text-navy-deep italic mb-2">
                  &ldquo;I don&apos;t believe in changing who you are. I believe in helping you 
                  look like the most rested, refreshed, vibrant version of yourself. That&apos;s 
                  the art—enhancement that enhances without erasing.&rdquo;
                </p>
                <cite className="text-gold text-sm not-italic">— Dr. Azi Shirazi</cite>
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      {/* Credentials */}
      <section className="section-padding bg-cream">
        <div className="container-healinque">
          <div className="text-center mb-12">
            <p className="section-subtitle">Qualifications</p>
            <h2 className="section-title">Credentials & Training</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {credentials.map((cred) => (
              <div key={cred.title} className="bg-white rounded-xl p-6">
                <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center mb-4">
                  <cred.icon className="h-6 w-6 text-gold" />
                </div>
                <h3 className="font-serif text-lg font-semibold text-navy-deep mb-3">
                  {cred.title}
                </h3>
                <ul className="space-y-2">
                  {cred.items.map((item) => (
                    <li key={item} className="text-sm text-taupe flex items-start gap-2">
                      <span className="w-1.5 h-1.5 bg-gold rounded-full mt-2 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="section-padding bg-navy-deep text-white">
        <div className="container-healinque">
          <div className="text-center mb-12">
            <p className="text-gold font-medium tracking-wide uppercase text-sm mb-3">
              Treatment Philosophy
            </p>
            <h2 className="font-serif text-display text-white">
              The Healinque Approach
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {philosophy.map((item, index) => (
              <div key={item.title} className="bg-white/5 backdrop-blur rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <span className="w-8 h-8 rounded-full bg-gold/20 flex items-center justify-center text-gold font-semibold text-sm">
                    {index + 1}
                  </span>
                  <h3 className="font-serif text-lg font-semibold text-gold">
                    {item.title}
                  </h3>
                </div>
                <p className="text-cream/80 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Specialties */}
      <section className="section-padding bg-white">
        <div className="container-healinque">
          <div className="text-center mb-12">
            <p className="section-subtitle">Expertise</p>
            <h2 className="section-title">Dr. Azi&apos;s Specialties</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Neuromodulators", desc: "Botox, Dysport, Xeomin, Daxxify" },
              { title: "Dermal Fillers", desc: "Juvederm, Restylane, RHA Collection" },
              { title: "PDO Threads", desc: "Non-surgical face & neck lifting" },
              { title: "Regenerative Medicine", desc: "PRF, PRP, Exosomes, PDRN" },
              { title: "Morpheus8", desc: "RF microneedling for skin tightening" },
              { title: "Hormone Optimization", desc: "BHRT for men and women" },
              { title: "Medical Weight Loss", desc: "Semaglutide, Tirzepatide protocols" },
              { title: "IV Therapy", desc: "NAD+, vitamins, and wellness drips" },
              { title: "Peptide Therapy", desc: "Advanced longevity protocols" },
            ].map((specialty) => (
              <div
                key={specialty.title}
                className="flex items-start gap-3 p-4 rounded-lg border border-cream-dark hover:border-gold transition-colors"
              >
                <Stethoscope className="h-5 w-5 text-gold flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-medium text-navy-deep">{specialty.title}</h3>
                  <p className="text-sm text-taupe">{specialty.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <Testimonials variant="featured" />

      {/* CTA */}
      <ConsultationForm
        variant="split"
        title="Schedule with Dr. Azi"
        subtitle="Book Your Consultation"
      />
    </main>
  );
}
