import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Hero } from "@/components/sections/hero";
import { mockCollections, mockProducts } from "@/lib/shopify/client";
import { formatPrice } from "@/lib/utils";
import { ArrowRight, ArrowLeft, Star, Check } from "lucide-react";
import { Button } from "@/components/ui/button";

interface PageProps {
  params: { handle: string };
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const collection = mockCollections.find(c => c.handle === params.handle);
  
  if (!collection) {
    return {
      title: "Collection Not Found",
    };
  }

  return {
    title: `${collection.title} | Shop Healinque`,
    description: collection.description,
  };
}

export async function generateStaticParams() {
  return mockCollections.map((collection) => ({
    handle: collection.handle,
  }));
}

export default function CollectionPage({ params }: PageProps) {
  const collection = mockCollections.find(c => c.handle === params.handle);

  if (!collection) {
    notFound();
  }

  // Get products for this collection
  const products = collection.products.edges.map(edge => edge.node);
  const isMembership = collection.handle === "memberships";
  const isPackages = collection.handle === "packages";

  return (
    <>
      <Hero
        title={collection.title}
        subtitle="Shop Healinque"
        description={collection.description}
        backgroundImage={collection.image?.url || "/images/shop-hero.jpg"}
        height="medium"
        alignment="center"
        overlay="dark"
      />

      {/* Breadcrumb */}
      <section className="py-4 bg-cream border-b border-cream-dark">
        <div className="container-healinque">
          <nav className="flex items-center gap-2 text-sm">
            <Link href="/shop" className="text-taupe hover:text-gold transition-colors">
              Shop
            </Link>
            <span className="text-taupe">/</span>
            <span className="text-navy-deep font-medium">{collection.title}</span>
          </nav>
        </div>
      </section>

      {/* Membership Grid - Special Layout */}
      {isMembership && (
        <section className="section-padding bg-white">
          <div className="container-healinque">
            <div className="text-center mb-12">
              <p className="text-gold font-medium tracking-wide uppercase text-sm mb-3">
                Join the Healinque Family
              </p>
              <h2 className="text-display font-serif text-navy-deep mb-4">
                Choose Your Membership
              </h2>
              <p className="text-taupe max-w-2xl mx-auto">
                Unlock exclusive savings on all products and treatments. Members save on every visit
                and enjoy VIP perks throughout the year.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {products.map((product, index) => {
                const isPopular = product.tags.includes("Popular");
                return (
                  <div
                    key={product.id}
                    className={`relative rounded-2xl border-2 p-6 ${
                      isPopular
                        ? "border-gold bg-gold/5 shadow-lg"
                        : "border-cream-dark bg-white"
                    }`}
                  >
                    {isPopular && (
                      <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                        <span className="bg-gold text-white text-xs font-medium px-4 py-1 rounded-full">
                          Most Popular
                        </span>
                      </div>
                    )}
                    <div className="text-center mb-6">
                      <h3 className="text-xl font-serif font-semibold text-navy-deep mb-2">
                        {product.title.replace(" Membership", "")}
                      </h3>
                      <div className="flex items-baseline justify-center gap-1">
                        <span className="text-3xl font-bold text-gold">
                          {formatPrice(parseFloat(product.priceRange.minVariantPrice.amount))}
                        </span>
                        <span className="text-taupe">/month</span>
                      </div>
                    </div>
                    <div
                      className="text-sm text-taupe mb-6 prose prose-sm prose-li:marker:text-gold"
                      dangerouslySetInnerHTML={{ __html: product.descriptionHtml }}
                    />
                    <Link href={`/shop/products/${product.handle}`}>
                      <Button 
                        className={`w-full ${isPopular ? "" : "variant-outline"}`}
                        variant={isPopular ? "default" : "outline"}
                      >
                        Select {product.title.replace(" Membership", "")}
                      </Button>
                    </Link>
                  </div>
                );
              })}
            </div>

            <div className="mt-12 text-center">
              <p className="text-taupe text-sm mb-4">
                All memberships include a 30-day satisfaction guarantee. Cancel anytime.
              </p>
              <Link href="/memberships" className="text-gold hover:text-gold-dark transition-colors">
                Learn more about membership benefits →
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* Packages Grid - Special Layout */}
      {isPackages && (
        <section className="section-padding bg-white">
          <div className="container-healinque">
            <div className="text-center mb-12">
              <p className="text-gold font-medium tracking-wide uppercase text-sm mb-3">
                Save with Bundles
              </p>
              <h2 className="text-display font-serif text-navy-deep mb-4">
                Treatment Packages
              </h2>
              <p className="text-taupe max-w-2xl mx-auto">
                Prepay for your favorite treatments and save. Perfect for maintaining your results
                with bundled savings that never expire.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {products.map((product) => (
                <Link
                  key={product.id}
                  href={`/shop/products/${product.handle}`}
                  className="group block bg-cream rounded-2xl overflow-hidden hover:shadow-lg transition-shadow"
                >
                  <div className="relative aspect-video">
                    {product.featuredImage && (
                      <Image
                        src={product.featuredImage.url}
                        alt={product.featuredImage.altText || product.title}
                        fill
                        className="object-cover"
                      />
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/60 to-transparent" />
                    <div className="absolute bottom-4 left-4">
                      <span className="bg-gold text-white text-xs font-medium px-3 py-1 rounded-full">
                        Save {product.title.includes("Morpheus8") ? "$400" : 
                              product.title.includes("Botox") ? "$150" :
                              product.title.includes("HydraFacial") ? "$100" : "Big"}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-serif font-semibold text-navy-deep mb-2 group-hover:text-gold transition-colors">
                      {product.title}
                    </h3>
                    <p className="text-sm text-taupe mb-4 line-clamp-2">
                      {product.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-xl font-bold text-gold">
                        {formatPrice(parseFloat(product.priceRange.minVariantPrice.amount))}
                        {product.priceRange.minVariantPrice.amount !== product.priceRange.maxVariantPrice.amount && 
                          ` - ${formatPrice(parseFloat(product.priceRange.maxVariantPrice.amount))}`
                        }
                      </span>
                      <span className="text-sm text-gold group-hover:translate-x-1 transition-transform inline-flex items-center">
                        View Details <ArrowRight className="ml-1 h-4 w-4" />
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Regular Products Grid */}
      {!isMembership && !isPackages && (
        <section className="section-padding bg-white">
          <div className="container-healinque">
            {products.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-taupe">No products found in this collection.</p>
                <Link href="/shop" className="text-gold hover:text-gold-dark mt-4 inline-block">
                  ← Back to Shop
                </Link>
              </div>
            ) : (
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {products.map((product) => (
                  <Link
                    key={product.id}
                    href={`/shop/products/${product.handle}`}
                    className="group block"
                  >
                    <div className="relative aspect-square rounded-xl overflow-hidden mb-3 bg-cream">
                      {product.featuredImage && (
                        <Image
                          src={product.featuredImage.url}
                          alt={product.featuredImage.altText || product.title}
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                      )}
                    </div>
                    <p className="text-xs text-taupe uppercase mb-1">{product.vendor}</p>
                    <h3 className="font-medium text-navy-deep group-hover:text-gold transition-colors line-clamp-2">
                      {product.title}
                    </h3>
                    <p className="text-gold font-medium mt-1">
                      {formatPrice(parseFloat(product.priceRange.minVariantPrice.amount))}
                    </p>
                  </Link>
                ))}
              </div>
            )}
          </div>
        </section>
      )}

      {/* Back to Shop */}
      <section className="py-8 bg-cream">
        <div className="container-healinque">
          <Link
            href="/shop"
            className="inline-flex items-center text-gold hover:text-gold-dark transition-colors"
          >
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to All Products
          </Link>
        </div>
      </section>

      {/* Member Savings Banner */}
      {!isMembership && (
        <section className="py-12 bg-gold">
          <div className="container-healinque">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="text-white text-center md:text-left">
                <h2 className="text-xl font-serif mb-2">
                  Members Save 15-20% on This Collection
                </h2>
                <p className="text-white/80">
                  Join today and start saving on all your favorite products.
                </p>
              </div>
              <Link href="/shop/collections/memberships">
                <Button variant="secondary" className="bg-white text-gold hover:bg-cream">
                  View Memberships
                </Button>
              </Link>
            </div>
          </div>
        </section>
      )}
    </>
  );
}

