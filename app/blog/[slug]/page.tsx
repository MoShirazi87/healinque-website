import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Calendar, Clock, Tag } from "lucide-react";
import { MDXRemote } from "next-mdx-remote/rsc";
import { getAllPostSlugs, getPostBySlug, getAllPosts } from "@/lib/blog";
import { BreadcrumbSchema } from "@/components/seo/schema";
import { Button } from "@/components/ui/button";
import { pexelsUrl } from "@/lib/data/images";

export async function generateStaticParams() {
  return getAllPostSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return { title: "Post Not Found" };

  return {
    title: `${post.title} | Healinque Blog`,
    description: post.description,
    alternates: {
      canonical: `https://www.healinque.com/blog/${slug}`,
    },
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      publishedTime: post.date,
      authors: [post.author],
      images: [pexelsUrl(post.image, 1200)],
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const allPosts = getAllPosts();
  const relatedPosts = allPosts
    .filter((p) => p.slug !== slug)
    .slice(0, 3);

  const breadcrumbItems = [
    { name: "Home", url: "https://www.healinque.com" },
    { name: "Blog", url: "https://www.healinque.com/blog" },
    { name: post.title, url: `https://www.healinque.com/blog/${slug}` },
  ];

  const formattedDate = new Date(post.date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <main className="bg-[#0a1628]">
      <BreadcrumbSchema items={breadcrumbItems} />

      {/* Article JSON-LD — Session 18 enhanced for Google rich-result eligibility */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline: post.title,
            description: post.description,
            image: [pexelsUrl(post.image, 1200)],
            datePublished: post.date,
            // No separate updated-date tracking yet; fall back to publish date.
            // When per-post dateModified is introduced, swap this for post.dateModified.
            dateModified: post.date,
            mainEntityOfPage: {
              "@type": "WebPage",
              "@id": `https://www.healinque.com/blog/${slug}`,
            },
            articleSection: post.category,
            keywords: post.tags?.join(", "),
            author: {
              "@type": "Person",
              name: post.author,
              url: "https://www.healinque.com/about/dr-azi-shirazi",
            },
            publisher: {
              "@type": "Organization",
              name: "Healinque Wellness & Longevity Center",
              url: "https://www.healinque.com",
              logo: {
                "@type": "ImageObject",
                url: "https://www.healinque.com/images/healinque-logo-medium.png",
              },
            },
            inLanguage: "en-US",
          }),
        }}
      />

      {/* Hero image */}
      <section className="relative h-[50vh] min-h-[320px] max-h-[480px] overflow-hidden">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={pexelsUrl(post.image, 1920)}
          alt={post.title}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a1628] via-[#0a1628]/60 to-transparent" />

        <div className="absolute bottom-0 left-0 right-0 pb-12 px-4">
          <div className="max-w-3xl mx-auto">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-white/60 hover:text-[#C9A227] text-sm mb-4 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Blog
            </Link>

            <div className="flex items-center gap-3 mb-4">
              <span className="px-3 py-1 rounded-full bg-[#C9A227]/20 text-[#C9A227] text-xs font-medium uppercase tracking-wider">
                {post.category}
              </span>
            </div>

            <h1 className="font-serif text-3xl lg:text-5xl text-white leading-tight">
              {post.title}
            </h1>
          </div>
        </div>
      </section>

      {/* Article metadata */}
      <section className="bg-[#0a1628] border-b border-white/10">
        <div className="max-w-3xl mx-auto px-4 py-5">
          <div className="flex flex-wrap items-center gap-6 text-sm text-white/50">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <time dateTime={post.date}>{formattedDate}</time>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span>{post.readTime}</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-white/70">By {post.author}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Article body — CREAM */}
      <article className="bg-cream py-16 lg:py-24">
        <div className="max-w-3xl mx-auto px-4">
          <div className="prose prose-lg prose-navy max-w-none
            prose-headings:font-serif prose-headings:text-navy-deep prose-headings:leading-tight
            prose-h2:text-2xl prose-h2:lg:text-3xl prose-h2:mt-12 prose-h2:mb-6
            prose-h3:text-xl prose-h3:lg:text-2xl prose-h3:mt-8 prose-h3:mb-4
            prose-p:text-navy-deep/80 prose-p:leading-relaxed prose-p:mb-6
            prose-li:text-navy-deep/80 prose-li:leading-relaxed
            prose-strong:text-navy-deep prose-strong:font-semibold
            prose-a:text-[#C9A227] prose-a:no-underline hover:prose-a:underline
          ">
            <MDXRemote source={post.content} />
          </div>

          {/* Tags */}
          {post.tags.length > 0 && (
            <div className="mt-12 pt-8 border-t border-navy-deep/10">
              <div className="flex items-center gap-2 mb-3 text-navy-deep/50 text-sm">
                <Tag className="w-4 h-4" />
                <span>Topics</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1.5 rounded-full bg-navy-deep/5 text-navy-deep/60 text-xs font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      </article>

      {/* CTA — DARK */}
      <section className="py-16 lg:py-24 bg-[#0a1628] border-t border-white/5">
        <div className="max-w-3xl mx-auto px-4 text-center">
          {/* Session 22: Booking-oriented heading + first-person CTA copy. */}
          <h2 className="font-serif text-3xl lg:text-4xl text-white mb-4">
            Ready to <span className="text-[#C9A227] italic">Talk?</span>
          </h2>
          <p className="text-white/60 text-lg mb-8">
            Let&apos;s discuss whether this treatment makes sense for you.
          </p>
          <Link href="/book">
            <Button
              size="lg"
              className="bg-[#C9A227] hover:bg-[#b8921f] text-[#0a1628] px-8 py-6 font-sans font-semibold rounded-lg"
            >
              Book a Consultation
            </Button>
          </Link>
        </div>
      </section>

      {/* Related posts — CREAM */}
      {relatedPosts.length > 0 && (
        <section className="py-16 lg:py-24 bg-cream">
          <div className="max-w-5xl mx-auto px-4">
            <h2 className="font-serif text-3xl text-navy-deep mb-10 text-center">
              More From <span className="text-[#C9A227] italic">The Journal</span>
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {relatedPosts.map((rp) => (
                <Link
                  key={rp.slug}
                  href={`/blog/${rp.slug}`}
                  className="group block bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={pexelsUrl(rp.image, 600)}
                    alt={rp.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="p-5">
                    <span className="text-xs text-[#C9A227] font-medium uppercase tracking-wider">
                      {rp.category}
                    </span>
                    <h3 className="font-serif text-lg text-navy-deep mt-2 mb-2 leading-snug group-hover:text-[#C9A227] transition-colors">
                      {rp.title}
                    </h3>
                    <p className="text-sm text-navy-deep/60 line-clamp-2">
                      {rp.description}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </main>
  );
}
