import { Metadata } from "next";
import Link from "next/link";
import { PageHero as Hero } from "@/components/sections/hero";
import { Button } from "@/components/ui/button";
import { BreadcrumbSchema } from "@/components/seo/schema";
import { ArrowRight } from "lucide-react";
import { pexelsUrl, pageImages } from "@/lib/data/images";
import { getAllPosts } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Blog | Healinque Wellness & Longevity Center",
  description:
    "Expert insights on aesthetic medicine, regenerative treatments, longevity, and wellness from Dr. Azadeh Shirazi and the Healinque team.",
  alternates: {
    canonical: "https://www.healinque.com/blog",
  },
  openGraph: {
    title: "Blog | Healinque Wellness & Longevity Center",
    description:
      "Wellness insights and expert advice on aesthetics, regenerative medicine, and longevity from the Healinque team.",
    // Session 18 scaffold: swap to `/images/og-blog.jpg` once a section-specific
    // 1200x630 share card is designed. Until then, use the generic brand OG.
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Healinque Blog — Aesthetic medicine and longevity insights from Dr. Azi Shirazi",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Healinque Blog — Aesthetic medicine & longevity",
    description:
      "Doctor-voice notes on what to recommend, what to skip, and how to age well.",
    images: ["/images/og-image.jpg"],
  },
};

export default function BlogPage() {
  const posts = getAllPosts();

  const breadcrumbItems = [
    { name: "Home", url: "https://www.healinque.com" },
    { name: "Blog", url: "https://www.healinque.com/blog" },
  ];

  return (
    <main className="bg-[#0a1628]">
      <BreadcrumbSchema items={breadcrumbItems} />

      <Hero
        variant="page"
        subtitle="The Journal"
        title="Wellness Insights & Expert Advice"
        description="Honest conversations about aesthetic medicine, skin health, and how I think about treatment — notes from Dr. Azi Shirazi."
        image={pexelsUrl(pageImages.blogHero.primary, 1920)}
      />

      {/* Posts Grid — CREAM */}
      <section className="py-16 lg:py-24 bg-cream">
        <div className="container-healinque">
          {posts.length > 0 ? (
            <>
              {/* Featured Post */}
              <Link
                href={`/blog/${posts[0].slug}`}
                className="group block mb-16"
              >
                <div className="grid lg:grid-cols-2 gap-8 bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={pexelsUrl(posts[0].image, 800)}
                    alt={posts[0].title}
                    className="w-full h-64 lg:h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="p-8 lg:p-12 flex flex-col justify-center">
                    <span className="text-xs text-[#C9A227] font-medium uppercase tracking-wider mb-3">
                      {posts[0].category} &middot; {posts[0].readTime}
                    </span>
                    <h2 className="font-serif text-2xl lg:text-4xl text-navy-deep mb-4 leading-tight group-hover:text-[#C9A227] transition-colors">
                      {posts[0].title}
                    </h2>
                    <p className="text-navy-deep/60 text-lg leading-relaxed mb-6">
                      {posts[0].description}
                    </p>
                    <div className="flex items-center gap-2 text-[#C9A227] font-medium text-sm group-hover:gap-3 transition-all">
                      Read Article <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              </Link>

              {/* Remaining Posts Grid */}
              {posts.length > 1 && (
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {posts.slice(1).map((post) => (
                    <Link
                      key={post.slug}
                      href={`/blog/${post.slug}`}
                      className="group block bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
                    >
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={pexelsUrl(post.image, 600)}
                        alt={post.title}
                        className="w-full h-52 object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="p-6">
                        <div className="flex items-center justify-between mb-3">
                          <span className="text-xs text-[#C9A227] font-medium uppercase tracking-wider">
                            {post.category}
                          </span>
                          <span className="text-xs text-navy-deep/40">
                            {post.readTime}
                          </span>
                        </div>
                        <h3 className="font-serif text-xl text-navy-deep mb-3 leading-snug group-hover:text-[#C9A227] transition-colors">
                          {post.title}
                        </h3>
                        <p className="text-sm text-navy-deep/60 line-clamp-2 leading-relaxed">
                          {post.description}
                        </p>
                        {/* Session 22: Outcome verb — commits reader to finishing the piece. */}
                        <div className="mt-4 flex items-center gap-2 text-[#C9A227] text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                          Read the Post <ArrowRight className="w-3.5 h-3.5" />
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              )}
            </>
          ) : (
            /* Fallback if no posts */
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="font-serif text-4xl lg:text-5xl text-navy-deep mb-6 leading-tight">
                Expert Insights,{" "}
                <span className="text-[#C9A227] italic">Launching Soon</span>
              </h2>
              <p className="text-navy-deep/70 text-lg leading-relaxed mb-10">
                Honest conversations about aesthetic medicine, longevity, and how
                I think about treatment — coming soon.
              </p>
              <Link href="/book">
                <Button
                  size="lg"
                  className="bg-[#C9A227] hover:bg-[#b8921f] text-[#0a1628] px-8 py-6 font-sans font-semibold rounded-lg"
                >
                  Book a Consultation
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          )}
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
              Subscribe for wellness tips, treatment insights, and exclusive
              offers from Healinque. Delivered thoughtfully&mdash;never spam.
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
              I respect your privacy. Unsubscribe at any time.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
