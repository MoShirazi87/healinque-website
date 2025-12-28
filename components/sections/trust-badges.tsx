import { Star, Shield, Award, CheckCircle } from "lucide-react";

interface TrustBadgesProps {
  variant?: "horizontal" | "compact";
}

export function TrustBadges({ variant = "horizontal" }: TrustBadgesProps) {
  const badges = [
    {
      icon: Star,
      value: "4.9",
      label: "Google Rating",
      sublabel: "150+ Reviews",
    },
    {
      icon: Shield,
      value: "20+",
      label: "Years Experience",
      sublabel: "Board Certified",
    },
    {
      icon: Award,
      value: "Top 100",
      label: "Physicians",
      sublabel: "San Diego 2023",
    },
    {
      icon: CheckCircle,
      value: "10,000+",
      label: "Treatments",
      sublabel: "Performed",
    },
  ];

  if (variant === "compact") {
    return (
      <div className="flex flex-wrap justify-center gap-6 py-4">
        {badges.map((badge) => (
          <div key={badge.label} className="flex items-center gap-2">
            <badge.icon className="h-5 w-5 text-gold" />
            <div>
              <span className="font-semibold text-navy-deep">{badge.value}</span>
              <span className="text-sm text-taupe ml-1">{badge.label}</span>
            </div>
          </div>
        ))}
      </div>
    );
  }

  return (
    <section className="bg-white border-y border-cream-dark py-8">
      <div className="container-healinque">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {badges.map((badge) => (
            <div key={badge.label} className="text-center">
              <div className="w-12 h-12 mx-auto mb-3 bg-cream rounded-full flex items-center justify-center">
                <badge.icon className="h-6 w-6 text-gold" />
              </div>
              <div className="font-serif text-2xl font-bold text-navy-deep mb-1">
                {badge.value}
              </div>
              <div className="text-sm font-medium text-navy-deep">{badge.label}</div>
              <div className="text-xs text-taupe">{badge.sublabel}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

