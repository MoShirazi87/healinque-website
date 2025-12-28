import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface DrAziIntroProps {
  variant?: "full" | "compact";
}

export function DrAziIntro({ variant = "full" }: DrAziIntroProps) {
  if (variant === "compact") {
    return (
      <section className="section-padding-sm bg-cream">
        <div className="container-healinque">
          <div className="flex flex-col md:flex-row items-center gap-8 max-w-4xl mx-auto">
            <div className="relative w-48 h-48 rounded-full overflow-hidden flex-shrink-0 border-4 border-gold/20">
              <Image
                src="/images/dr-azi-shirazi.jpg"
                alt="Dr. Azi Shirazi"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h3 className="font-serif text-2xl text-navy-deep mb-3">
                Meet Dr. Azadeh Shirazi
              </h3>
              <p className="text-taupe mb-4">
                Board Certified Internal Medicine physician with 20+ years of emergency medicine 
                experience. Dr. Azi combines aesthetic artistry with medical precision for 
                results that are beautiful, safe, and natural.
              </p>
              <Link href="/about/dr-azi-shirazi">
                <Button variant="outline" size="sm">
                  Learn More About Dr. Azi <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="section-padding bg-navy-deep text-white overflow-hidden">
      <div className="container-healinque">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <p className="text-gold font-medium tracking-wide uppercase text-sm mb-3">
              Your Physician
            </p>
            <h2 className="font-serif text-display text-white mb-6">
              Dr. Azadeh &ldquo;Azi&rdquo; Shirazi, MD
            </h2>
            <p className="text-cream/80 leading-relaxed mb-6">
              Board Certified in Internal Medicine with over 20 years of experience in urgent 
              and emergency medicine, Dr. Shirazi brings a unique perspective to aesthetic 
              medicine. Having treated countless complications from cosmetic procedures gone 
              wrong, she understands the importance of proper technique, safety protocols, 
              and knowing when to say no.
            </p>
            <blockquote className="border-l-4 border-gold pl-6 my-8">
              <p className="font-serif text-xl text-cream italic mb-2">
                &ldquo;Beauty is health made visible. When we optimize what&apos;s happening inside 
                the body, it radiates outward.&rdquo;
              </p>
              <cite className="text-gold text-sm not-italic">— Dr. Azi Shirazi</cite>
            </blockquote>
            <ul className="space-y-3 mb-8">
              {[
                "Board Certified Internal Medicine",
                "20+ Years Emergency Medicine Experience",
                "Top 100 Physicians San Diego 2023",
                "Guardian Angel Award Recipient",
                "Fluent in English & Farsi",
              ].map((item) => (
                <li key={item} className="flex items-center gap-3 text-sm text-cream/80">
                  <span className="w-1.5 h-1.5 bg-gold rounded-full" />
                  {item}
                </li>
              ))}
            </ul>
            <Link href="/about/dr-azi-shirazi">
              <Button className="bg-gold hover:bg-gold-dark text-navy-deep">
                Read Full Bio <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
          <div className="order-1 lg:order-2 relative">
            <div className="relative aspect-[3/4] rounded-2xl overflow-hidden max-w-md mx-auto">
              <Image
                src="/images/dr-azi-shirazi.jpg"
                alt="Dr. Azi Shirazi, Board Certified Physician"
                fill
                className="object-cover"
              />
            </div>
            {/* Decorative elements */}
            <div className="absolute -bottom-4 -right-4 w-48 h-48 border-2 border-gold/30 rounded-2xl -z-10 hidden lg:block" />
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-gold/10 rounded-full -z-10 hidden lg:block" />
          </div>
        </div>
      </div>
    </section>
  );
}

