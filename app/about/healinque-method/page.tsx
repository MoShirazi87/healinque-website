import { Metadata } from "next";
import Image from "next/image";
import { Hero } from "@/components/sections/hero";
import { CTASection } from "@/components/sections/cta";
import { FAQSection } from "@/components/sections/faq";
import { CheckCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "The Healinque Method | Our Approach",
  description: "Discover our unique 4-step approach to aesthetic treatment: Discover, Design, Deliver, Delight. Personalized care for natural, lasting results.",
};

const steps = [
  {
    number: "01",
    title: "Discover",
    subtitle: "Comprehensive Consultation",
    description: "Your journey begins with an in-depth consultation where we truly get to know you. This isn't a quick assessment—it's a thorough exploration of your goals, concerns, and health history.",
    details: [
      "Complete health and medical history review",
      "Facial anatomy and skin analysis",
      "Discussion of your aesthetic goals and expectations",
      "Depression and anxiety screening (unique to Healinque)",
      "Lifestyle factors assessment",
    ],
    image: "/images/method/discover.jpg",
  },
  {
    number: "02",
    title: "Design",
    subtitle: "Personalized Treatment Plan",
    description: "Based on our discovery session, Dr. Azi creates a customized treatment plan tailored specifically to your unique anatomy, goals, and lifestyle.",
    details: [
      "Prioritized treatment recommendations",
      "Timeline and staging for optimal results",
      "Detailed explanation of each procedure",
      "Transparent pricing and financing options",
      "Alternative approaches when applicable",
    ],
    image: "/images/method/design.jpg",
  },
  {
    number: "03",
    title: "Deliver",
    subtitle: "Expert Treatment",
    description: "Experience the difference of physician-performed procedures using premium products and the latest techniques in our state-of-the-art facility.",
    details: [
      "Comfortable, private treatment rooms",
      "Premium products from top manufacturers",
      "Advanced techniques for natural results",
      "Continuous comfort monitoring",
      "Detailed aftercare instructions",
    ],
    image: "/images/method/deliver.jpg",
  },
  {
    number: "04",
    title: "Delight",
    subtitle: "Ongoing Care & Refinement",
    description: "Your results don't end when you leave our clinic. We're committed to your long-term satisfaction with follow-up care and maintenance planning.",
    details: [
      "Complimentary follow-up appointments",
      "Touch-up treatments as needed",
      "Long-term maintenance planning",
      "Loyalty rewards and special offers",
      "24/7 support for any concerns",
    ],
    image: "/images/method/delight.jpg",
  },
];

const faqs = [
  {
    question: "How long is the initial consultation?",
    answer: "Plan for 45-60 minutes for your first visit. This gives us ample time to understand your goals, review your health history, and develop a personalized treatment plan. We never rush this important step.",
  },
  {
    question: "Is the consultation fee applied to treatment?",
    answer: "Yes! Your consultation fee is fully credited toward any treatment you choose to proceed with. If you decide to move forward the same day, the consultation is essentially complimentary.",
  },
  {
    question: "Why do you screen for depression and anxiety?",
    answer: "Research shows that mental health significantly impacts how patients feel about their aesthetic results. By screening for depression and anxiety, we can ensure you're in the right mindset to appreciate your results and refer you to appropriate resources if needed.",
  },
  {
    question: "How are treatment plans customized?",
    answer: "Every face is unique, and so is every treatment plan. Dr. Azi considers your facial anatomy, skin type, age, lifestyle, budget, and aesthetic goals to create a plan that's specifically tailored to you—not a one-size-fits-all approach.",
  },
];

export default function HealinqueMethodPage() {
  return (
    <>
      <Hero
        variant="page"
        title="The Healinque Method"
        subtitle="Our Approach"
        description="A thoughtful, physician-led approach to aesthetic treatment that puts your wellbeing at the center of everything we do."
        image="/images/method-hero.jpg"
        overlay="dark"
      />

      {/* Introduction */}
      <section className="section-padding bg-white">
        <div className="container-healinque">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-gold font-medium tracking-wide uppercase text-sm mb-3">
              Our Philosophy
            </p>
            <h2 className="text-display font-serif text-navy-deep mb-8">
              More Than a Treatment—A Transformation
            </h2>
            <p className="text-lg text-taupe">
              The Healinque Method is our proprietary 4-step framework that ensures every patient 
              receives thoughtful, personalized care from consultation through long-term maintenance. 
              Unlike quick-service clinics, we take the time to truly understand you and create 
              results that last.
            </p>
          </div>
        </div>
      </section>

      {/* Steps */}
      {steps.map((step, index) => (
        <section
          key={step.number}
          className={`section-padding ${index % 2 === 0 ? "bg-cream" : "bg-white"}`}
        >
          <div className="container-healinque">
            <div className={`grid lg:grid-cols-2 gap-12 lg:gap-20 items-center ${
              index % 2 === 1 ? "lg:flex-row-reverse" : ""
            }`}>
              {/* Content */}
              <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                <span className="text-6xl font-serif font-bold text-gold/20">
                  {step.number}
                </span>
                <h2 className="text-display font-serif text-navy-deep -mt-8 mb-2">
                  {step.title}
                </h2>
                <p className="text-gold font-medium mb-6">{step.subtitle}</p>
                <p className="text-taupe mb-8">{step.description}</p>
                <ul className="space-y-3">
                  {step.details.map((detail) => (
                    <li key={detail} className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-gold flex-shrink-0 mt-0.5" />
                      <span className="text-navy-deep">{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Image */}
              <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
                  <Image
                    src={step.image}
                    alt={step.title}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* Why This Matters */}
      <section className="section-padding bg-navy-deep">
        <div className="container-healinque">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-gold font-medium tracking-wide uppercase text-sm mb-3">
              Why It Matters
            </p>
            <h2 className="text-display font-serif text-white mb-8">
              The Difference Is in the Details
            </h2>
            <div className="grid md:grid-cols-3 gap-8 text-left mt-12">
              <div className="bg-white/10 rounded-xl p-6">
                <h3 className="font-serif text-xl text-gold mb-3">Higher Satisfaction</h3>
                <p className="text-cream/80">
                  Patients who go through our comprehensive consultation process report 
                  significantly higher satisfaction with their results.
                </p>
              </div>
              <div className="bg-white/10 rounded-xl p-6">
                <h3 className="font-serif text-xl text-gold mb-3">Fewer Complications</h3>
                <p className="text-cream/80">
                  By thoroughly reviewing health history and expectations, we minimize 
                  risks and avoid unsuitable treatments.
                </p>
              </div>
              <div className="bg-white/10 rounded-xl p-6">
                <h3 className="font-serif text-xl text-gold mb-3">Lasting Results</h3>
                <p className="text-cream/80">
                  Our long-term approach means we plan for maintenance from day one, 
                  ensuring your investment pays off for years.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <FAQSection
        title="About the Healinque Method"
        subtitle="Common Questions"
        faqs={faqs}
      />

      <CTASection
        title="Experience the Healinque Method"
        description="Ready to discover what thoughtful, personalized aesthetic care feels like? Schedule your consultation today."
        primaryCta={{ text: "Begin Your Journey", href: "/book" }}
        variant="default"
      />
    </>
  );
}

