import { Metadata } from "next";
import Image from "next/image";
import { Clock } from "lucide-react";
import { PageHero as Hero } from "@/components/sections/hero";
import { Button } from "@/components/ui/button";
import { BreadcrumbSchema } from "@/components/seo/schema";
import { pexelsUrl, pageImages } from "@/lib/data/images";

export const metadata: Metadata = {
  title: "Blog | Healinque Wellness & Longevity Center",
  description:
    "Expert insights on aesthetic medicine, regenerative treatments, longevity, and wellness from Dr. Azadeh Shirazi. Stay informed about the latest in medical aesthetics.",
  alternates: {
    canonical: "https://www.healinque.com/blog",
  },
  openGraph: {
    title: "Blog | Healinque Wellness & Longevity Center",
    description:
      "Wellness insights and expert advice on aesthetics, regenerative medicine, and longevity from Dr. Azi Shirazi.",
    images: ["/images/og-image.jpg"],
  },
};

const featuredPost = {
  title: "Welcome to the Healinque Blog",
  description:
    "Stay tuned for expert insights on aesthetics, regenerative medicine, and longevity from Dr. Azadeh Shirazi.",
  category: "Wellness",
  readTime: "3 min",
  isComingSoon: true,
};

const blogPosts = [
  {
    title: "Botox: What I Recommend (and What I Don't)",
    excerpt:
      "Clear guidance on when Botox makes sense for natural results—and when it doesn't. How I approach enhancing expression, not erasing it.",
    category: "Aesthetics",
    readTime: "5 min",
    isComingSoon: true,
    image: pexelsUrl(pageImages.blogThumb1.primary, 800),
  },
  {
    title: "When Filler Is a Mistake",
    excerpt:
      "Honest talk about overfilled faces, wrong products for the job, and how I assess whether filler actually serves your goals.",
    category: "Regenerative",
    readTime: "7 min",
    isComingSoon: true,
    image: pexelsUrl(pageImages.blogThumb2.primary, 800),
  },
  {
    title: "How I Think About Natural Results",
    excerpt:
      `Why "natural" is not one-size-fits-all. My philosophy on enhancement, honesty, and why your aesthetic goals matter more than trends.`,
    category: "Philosophy",
    readTime: "6 min",
    isComingSoon: true,
    image: pexelsUrl(pageImages.blogThumb3.primary, 800),
  },
];

export default function BlogPage() {
  const breadcrumbItems = [
    { name: "Home", url: "https://www.healinque.com" },
    { name: "Blog", url: "https://www.healinque.com/blog" },
  ];

  return (
    <main className="bg-[#0a1628]">
      <BreadcrumbSchema items={breadcrumbItems} />

      <Hero
        variant="page"
        subtitle="Our Journal"
        title="Wellness Insights & Expert Advice"
        description="Stay informed about aesthetic medicine, regenerative treatments, and longevity from Dr. Azadeh Shirazi."
        image={pexelsUrl(pageImages.blogHero.primary, 1920)}
      />

      {/* Intro — CREAM */}
      <section className="relative py-20 bg-cream">
        <div className="container-healinque">
          <div className="max-w-3xl mx-auto text-center">
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="h-px w-12 bg-[#C9A227]" />
              <p className="font-sans text-xs uppercase tracking-[0.2em] text-navy-deep/50">
                Notes from Dr. Shirazi
              </p>
              <div className="h-px w-12 bg-[#C9A227]" />
            </div>
            <h2 className="font-serif text-4xl lg:text-5xl text-navy-deep mb-6 leading-tight">
              Practical, Plain-English{" "}
              <span className="text-[#C9A227] italic">Guidance</span>
            </h2>
            <p className="text-navy-deep/70 text-lg leading-relaxed">
              Honest conversations about aesthetic medicine, longevity, and how I think about treatment. No marketing, just straight advice from someone who&apos;s personally tested everything we offer.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Post — DARK */}
      <section className="relative py-24 bg-[#0a1628] border-b border-white/5">
        <div className="container-healinque">
          <div className="max-w-5xl mx-auto mb-12">
            <div className="flex items-center gap-4 mb-5">
              <div className="h-px w-12 bg-[#C9A227]" />
              <p className="font-sans text-xs uppercase tracking-[0.2em] text-white/50">
                Featured
              </p>
            </div>
            <h2 className="font-serif text-3xl lg:text-5xl text-white leading-tight">
              The <span className="text-[#C9A227] italic">Latest</span> from Dr. Azi
            </h2>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="group bg-white/[0.03] backdrop-blur-sm rounded-xl border border-white/10 hover:border-[#C9A227]/30 transition-all duration-500 overflow-hidden">
              <div className="relative h-64 md:h-96 overflow-hidden">
                <Image
                  src={pexelsUrl(pageImages.blogHero.primary, 1200)}
                  alt={featuredPost.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 1024px"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a1628] via-[#0a1628]/40 to-transparent" />
                {featuredPost.isComingSoon && (
                  <div className="absolute inset-0 flex items-center justify-center bg-black/40 backdrop-blur-sm">
                    <span className="px-5 py-2.5 rounded-full bg-[#C9A227] text-[#0a1628] font-semibold text-xs uppercase tracking-[0.2em]">
                      Coming Soon
                    </span>
                  </div>
                )}
              </div>

              <div className="p-8 md:p-12">
                <div className="flex flex-wrap items-center gap-4 mb-6">
                  <span className="inline-block px-3 py-1 rounded-full bg-[#C9A227]/10 border border-[#C9A227]/30 text-[#C9A227] text-[11px] font-semibold uppercase tracking-[0.15em]">
                    {featuredPost.category}
                  </span>
                  <div className="flex items-center gap-2 text-white/50 text-sm">
                    <Clock className="h-4 w-4" />
                    {featuredPost.readTime} read
                  </div>
                </div>

                <h3 className="font-serif text-3xl md:text-4xl text-white mb-5 leading-tight">
                  {featuredPost.title}
                </h3>
                <p className="text-white/70 text-lg leading-relaxed">
                  {featuredPost.description}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Articles Grid — CREAM */}
      <section className="relative py-24 bg-cream">
        <div className="container-healinque">
          <div className="max-w-5xl mx-auto mb-12">
            <div className="flex items-center gap-4 mb-5">
              <div className="h-px w-12 bg-[#C9A227]" />
              <p className="font-sans text-xs uppercase tracking-[0.2em] text-navy-deep/50">
                Upcoming Articles
              </p>
            </div>
            <h2 className="font-serif text-3xl lg:text-5xl text-navy-deep leading-tight">
              What&apos;s <span className="text-[#C9A227] italic">Coming</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <div
                key={index}
                className="group h-full bg-white rounded-xl border border-taupe/10 hover:border-[#C9A227]/40 transition-all duration-500 overflow-hidden flex flex-col shadow-sm hover:shadow-xl"
              >
                <div className="relative h-52 overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover"
                  />
                  {post.isComingSoon && (
                    <div className="absolute inset-0 flex items-center justify-center bg-black/40 backdrop-blur-sm">
                      <span className="px-3 py-1.5 rounded-full bg-[#C9A227] text-[#0a1628] font-semibold text-[10px] uppercase tracking-[0.2em]">
                        Coming Soon
                      </span>
                    </div>
                  )}
                </div>

                <div className="p-7 flex flex-col flex-grow">
                  <div className="flex flex-wrap items-center gap-3 mb-4">
                    <span className="inline-block px-3 py-1 rounded-full bg-[#C9A227]/10 border border-[#C9A227]/30 text-[#C9A227] text-[10px] font-semibold uppercase tracking-[0.15em]">
                      {post.category}
                    </span>
                  </div>

                  <h3 className="font-serif text-xl text-navy-deep mb-3 leading-snug">
                    {post.title}
                  </h3>
                  <p className="text-navy-deep/60 text-sm leading-relaxed mb-6 flex-grow">
                    {post.excerpt}
                  </p>

                  <div className="flex items-center justify-between pt-4 border-t border-taupe/10">
                    <div className="flex items-center gap-2 text-navy-deep/50 text-xs">
                      <Clock className="h-3.5 w-3.5" />
                      {post.readTime} read
                    </div>
                    <span className="text-xs font-semibold uppercase tracking-wider text-navy-deep/40">
                      Coming Soon
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter — DARK */}
      <section className="relative py-24 bg-[#0a1628]">
        <div className="container-healinque">
          <div className="max-w-2xl mx-auto text-center">
            <p className="font-sans text-xs uppercase tracking-[0.2em] text-white/50 mb-4">
              The Journal
            </p>
            <h2 className="font-serif text-4xl lg:text-5xl text-white mb-6 leading-tight">
              Stay <span className="text-[#C9A227] italic">Informed</span>
            </h2>
            <p className="text-white/70 text-lg leading-relaxed mb-10">
              Subscribe for wellness tips, treatment insights, and exclusive offers from Healinque.
              Delivered thoughtfully—never spam.
            </p>

            <form className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                required
                className="flex-1 px-6 py-4 rounded-lg bg-white/[0.05] border border-white/15 text-white placeholder-white/40 focus:outline-none focus:border-[#C9A227]/50 transition-colors duration-300"
              />
              <Button className="bg-[#C9A227] hover:bg-[#b8921f] text-[#0a1628] font-sans font-semibold px-8 py-6 rounded-lg whitespace-nowrap shadow-xl">
                Subscribe
              </Button>
            </form>

            <p className="text-xs text-white/40 mt-4">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
