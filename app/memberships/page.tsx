import { Metadata } from "next";
import Link from "next/link";
import { Hero } from "@/components/sections/hero";
import { FAQSection } from "@/components/sections/faq";
import { CTASection } from "@/components/sections/cta";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check, Star, Sparkles, Crown } from "lucide-react";

export const metadata: Metadata = {
  title: "Memberships | Exclusive Benefits & Savings",
  description: "Join the Healinque Membership for exclusive benefits, savings on treatments, and VIP perks. Choose from Essential, Glow, or Luxe tiers.",
};

const membershipTiers = [
  {
    name: "Essential",
    price: 99,
    description: "Perfect for maintaining your results with regular treatments",
    icon: Star,
    color: "bg-cream",
    features: [
      "10% off all treatments",
      "10% off retail products",
      "1 complimentary B12 injection/month",
      "Priority booking access",
      "Birthday month special",
      "Member-only promotions",
    ],
    popular: false,
  },
  {
    name: "Glow",
    price: 199,
    description: "Our most popular tier for dedicated skincare enthusiasts",
    icon: Sparkles,
    color: "bg-gold/10",
    features: [
      "15% off all treatments",
      "15% off retail products",
      "1 complimentary HydraFacial/month",
      "1 complimentary B12 injection/month",
      "Priority booking access",
      "Complimentary skincare consultation",
      "Birthday month treatment credit ($100)",
      "Exclusive member events",
      "Free shipping on orders",
    ],
    popular: true,
  },
  {
    name: "Luxe",
    price: 399,
    description: "The ultimate VIP experience for our most dedicated members",
    icon: Crown,
    color: "bg-navy-deep text-white",
    textColor: "text-white",
    features: [
      "20% off all treatments",
      "20% off retail products",
      "$200 monthly treatment credit",
      "1 complimentary HydraFacial/month",
      "1 complimentary IV therapy/month",
      "Dedicated VIP concierge",
      "Same-day booking guarantee",
      "Annual skin analysis with Dr. Azi",
      "Birthday month treatment credit ($200)",
      "Exclusive VIP events & previews",
      "Complimentary gift wrapping",
      "Free expedited shipping",
    ],
    popular: false,
  },
];

const faqs = [
  {
    question: "How does the membership work?",
    answer: "Your membership is billed monthly and includes all listed benefits immediately. You can use your discounts on any treatment or product purchase. Monthly perks like complimentary treatments refresh on your billing date.",
  },
  {
    question: "Can I cancel my membership?",
    answer: "Yes, you can cancel anytime with 30 days notice. There are no long-term contracts or cancellation fees. Your benefits remain active through the end of your paid period.",
  },
  {
    question: "Can I upgrade my membership tier?",
    answer: "Absolutely! You can upgrade at any time and your new benefits take effect immediately. We'll prorate the difference for the current billing period.",
  },
  {
    question: "Do membership discounts stack with promotions?",
    answer: "Membership discounts apply to regular pricing. They may be combined with certain promotions—ask our team about current offers that stack with membership benefits.",
  },
  {
    question: "Can I share my membership with family?",
    answer: "Memberships are individual, but we offer household membership options with shared benefits. Ask about our Family Membership add-on.",
  },
];

export default function MembershipsPage() {
  return (
    <>
      <Hero
        title="Healinque Membership"
        subtitle="Join the Family"
        description="Unlock exclusive benefits, VIP perks, and significant savings on the treatments and products you love."
        backgroundImage="/images/membership-hero.jpg"
        height="medium"
        alignment="center"
        overlay="dark"
      />

      {/* Membership Tiers */}
      <section className="section-padding bg-white">
        <div className="container-healinque">
          <div className="text-center mb-12">
            <p className="text-gold font-medium tracking-wide uppercase text-sm mb-3">
              Choose Your Tier
            </p>
            <h2 className="text-display font-serif text-navy-deep">
              Membership Options
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {membershipTiers.map((tier) => (
              <div
                key={tier.name}
                className={`relative rounded-2xl p-8 ${tier.color} ${
                  tier.popular ? "ring-2 ring-gold shadow-xl scale-105" : ""
                }`}
              >
                {tier.popular && (
                  <Badge className="absolute -top-3 left-1/2 -translate-x-1/2">
                    Most Popular
                  </Badge>
                )}

                <div className="flex items-center gap-3 mb-4">
                  <div className={`w-12 h-12 rounded-full ${
                    tier.name === "Luxe" ? "bg-gold/20" : "bg-white"
                  } flex items-center justify-center`}>
                    <tier.icon className={`h-6 w-6 ${
                      tier.name === "Luxe" ? "text-gold" : "text-gold"
                    }`} />
                  </div>
                  <h3 className={`text-2xl font-serif font-semibold ${
                    tier.textColor || "text-navy-deep"
                  }`}>
                    {tier.name}
                  </h3>
                </div>

                <div className="mb-4">
                  <span className={`text-4xl font-bold ${
                    tier.textColor || "text-navy-deep"
                  }`}>
                    ${tier.price}
                  </span>
                  <span className={tier.textColor || "text-taupe"}>/month</span>
                </div>

                <p className={`text-sm mb-6 ${
                  tier.textColor ? "text-cream/80" : "text-taupe"
                }`}>
                  {tier.description}
                </p>

                <ul className="space-y-3 mb-8">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2">
                      <Check className={`h-5 w-5 flex-shrink-0 ${
                        tier.name === "Luxe" ? "text-gold" : "text-gold"
                      }`} />
                      <span className={`text-sm ${
                        tier.textColor || "text-navy-deep"
                      }`}>
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                <Link href={`/account/membership/join?tier=${tier.name.toLowerCase()}`}>
                  <Button
                    className={`w-full ${
                      tier.name === "Luxe"
                        ? "bg-gold hover:bg-gold-dark"
                        : tier.popular
                        ? ""
                        : "bg-navy-deep hover:bg-navy-deep/90"
                    }`}
                    size="lg"
                  >
                    Join {tier.name}
                  </Button>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Breakdown */}
      <section className="section-padding bg-cream">
        <div className="container-healinque">
          <div className="text-center mb-12">
            <h2 className="text-display font-serif text-navy-deep">
              Why Join?
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">💰</span>
              </div>
              <h3 className="font-serif text-lg text-navy-deep mb-2">
                Save Up to 20%
              </h3>
              <p className="text-sm text-taupe">
                Significant discounts on all treatments and products
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🎁</span>
              </div>
              <h3 className="font-serif text-lg text-navy-deep mb-2">
                Monthly Perks
              </h3>
              <p className="text-sm text-taupe">
                Complimentary treatments included every month
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">⭐</span>
              </div>
              <h3 className="font-serif text-lg text-navy-deep mb-2">
                VIP Access
              </h3>
              <p className="text-sm text-taupe">
                Priority booking and exclusive member events
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🎂</span>
              </div>
              <h3 className="font-serif text-lg text-navy-deep mb-2">
                Birthday Rewards
              </h3>
              <p className="text-sm text-taupe">
                Special treatment credits on your birthday month
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="section-padding bg-white">
        <div className="container-healinque">
          <div className="text-center mb-12">
            <h2 className="text-display font-serif text-navy-deep">
              Compare Tiers
            </h2>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full max-w-4xl mx-auto">
              <thead>
                <tr className="border-b border-cream-dark">
                  <th className="text-left py-4 px-4"></th>
                  <th className="text-center py-4 px-4 font-serif text-lg">Essential</th>
                  <th className="text-center py-4 px-4 font-serif text-lg text-gold">Glow</th>
                  <th className="text-center py-4 px-4 font-serif text-lg">Luxe</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-cream-dark">
                  <td className="py-4 px-4 text-taupe">Monthly Price</td>
                  <td className="text-center py-4 px-4 font-medium">$99</td>
                  <td className="text-center py-4 px-4 font-medium text-gold">$199</td>
                  <td className="text-center py-4 px-4 font-medium">$399</td>
                </tr>
                <tr className="border-b border-cream-dark">
                  <td className="py-4 px-4 text-taupe">Treatment Discount</td>
                  <td className="text-center py-4 px-4">10%</td>
                  <td className="text-center py-4 px-4 text-gold">15%</td>
                  <td className="text-center py-4 px-4">20%</td>
                </tr>
                <tr className="border-b border-cream-dark">
                  <td className="py-4 px-4 text-taupe">Product Discount</td>
                  <td className="text-center py-4 px-4">10%</td>
                  <td className="text-center py-4 px-4 text-gold">15%</td>
                  <td className="text-center py-4 px-4">20%</td>
                </tr>
                <tr className="border-b border-cream-dark">
                  <td className="py-4 px-4 text-taupe">Monthly Treatment Credit</td>
                  <td className="text-center py-4 px-4">—</td>
                  <td className="text-center py-4 px-4 text-gold">—</td>
                  <td className="text-center py-4 px-4">$200</td>
                </tr>
                <tr className="border-b border-cream-dark">
                  <td className="py-4 px-4 text-taupe">Free HydraFacial/month</td>
                  <td className="text-center py-4 px-4">—</td>
                  <td className="text-center py-4 px-4 text-gold">✓</td>
                  <td className="text-center py-4 px-4">✓</td>
                </tr>
                <tr className="border-b border-cream-dark">
                  <td className="py-4 px-4 text-taupe">Free IV Therapy/month</td>
                  <td className="text-center py-4 px-4">—</td>
                  <td className="text-center py-4 px-4">—</td>
                  <td className="text-center py-4 px-4">✓</td>
                </tr>
                <tr className="border-b border-cream-dark">
                  <td className="py-4 px-4 text-taupe">VIP Concierge</td>
                  <td className="text-center py-4 px-4">—</td>
                  <td className="text-center py-4 px-4">—</td>
                  <td className="text-center py-4 px-4">✓</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <FAQSection
        title="Membership FAQ"
        subtitle="Common Questions"
        faqs={faqs}
      />

      <CTASection
        title="Ready to Become a Member?"
        description="Join today and start enjoying exclusive benefits on your very first visit."
        primaryCta={{ text: "Join Now", href: "/account/membership/join" }}
        variant="default"
      />
    </>
  );
}

