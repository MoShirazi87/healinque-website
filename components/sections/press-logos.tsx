interface PressLogosProps {
  variant?: "marquee" | "static";
}

const pressLogos = [
  { name: "San Diego Magazine", text: "San Diego Magazine" },
  { name: "Forbes", text: "Forbes" },
  { name: "Real Simple", text: "Real Simple" },
  { name: "InTouch", text: "InTouch" },
  { name: "Millennium", text: "Millennium" },
  { name: "Medium", text: "Medium" },
];

export function PressLogos({ variant = "static" }: PressLogosProps) {
  if (variant === "marquee") {
    return (
      <section className="bg-sage/30 py-12 overflow-hidden">
        <div className="container-healinque mb-6">
          <p className="text-center text-sm text-taupe uppercase tracking-wider">
            As Featured In
          </p>
        </div>
        <div className="marquee-container">
          <div className="marquee-content">
            {[...pressLogos, ...pressLogos].map((logo, index) => (
              <div
                key={`${logo.name}-${index}`}
                className="mx-12 text-2xl font-serif font-semibold text-taupe/60 whitespace-nowrap"
              >
                {logo.text}
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="bg-sage/30 py-12">
      <div className="container-healinque">
        <p className="text-center text-sm text-taupe uppercase tracking-wider mb-8">
          As Featured In
        </p>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
          {pressLogos.map((logo) => (
            <div
              key={logo.name}
              className="text-xl md:text-2xl font-serif font-semibold text-taupe/50 hover:text-taupe/80 transition-colors"
            >
              {logo.text}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

