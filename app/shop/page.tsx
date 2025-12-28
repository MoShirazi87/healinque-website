import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Hero } from "@/components/sections/hero";
import { getProducts, mockCollections } from "@/lib/shopify/client";
import { formatPrice } from "@/lib/utils";
import { ArrowRight, Shield, Truck, Award } from "lucide-react";

export const metadata: Metadata = {
  title: "Shop | Medical-Grade Skincare & Supplements",
  description: "Shop physician-curated skincare, supplements, and wellness products. Medical-grade formulas recommended by Dr. Azi Shirazi.",
};

const benefits = [
  {
    icon: Shield,
    title: "Physician-Curated",
    description: "Every product hand-selected by Dr. Azi",
  },
  {
    icon: Award,
    title: "Medical-Grade",
    description: "Professional formulas for real results",
  },
  {
    icon: Truck,
    title: "Free Shipping",
    description: "On orders over $75",
  },
];

export default async function ShopPage() {
  const products = await getProducts(12);
  const collections = mockCollections;

  return (
    <>
      <Hero
        variant="page"
        title="Shop Healinque"
        subtitle="Medical-Grade Products"
        description="Physician-curated skincare, supplements, and wellness products to enhance your treatment results at home."
        image="/images/shop-hero.jpg"
        overlay="dark"
      />

      {/* Benefits Bar */}
      <section className="py-8 bg-gold">
        <div className="container-healinque">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {benefits.map((benefit) => (
              <div key={benefit.title} className="flex items-center justify-center gap-3 text-white">
                <benefit.icon className="h-6 w-6" />
                <div>
                  <p className="font-medium">{benefit.title}</p>
                  <p className="text-sm text-white/80">{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Shop by Category */}
      <section className="section-padding bg-white">
        <div className="container-healinque">
          <div className="text-center mb-12">
            <p className="text-gold font-medium tracking-wide uppercase text-sm mb-3">
              Browse
            </p>
            <h2 className="text-display font-serif text-navy-deep">
              Shop by Category
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {collections.map((collection) => (
              <Link
                key={collection.id}
                href={`/shop/collections/${collection.handle}`}
                className="group block"
              >
                <div className="relative aspect-[4/3] rounded-xl overflow-hidden mb-4">
                  {collection.image && (
                    <Image
                      src={collection.image.url}
                      alt={collection.image.altText || collection.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-xl font-serif font-semibold text-white group-hover:text-gold transition-colors">
                      {collection.title}
                    </h3>
                  </div>
                </div>
                <p className="text-taupe text-sm mb-2">{collection.description}</p>
                <span className="inline-flex items-center text-sm text-gold group-hover:translate-x-1 transition-transform">
                  Shop {collection.title} <ArrowRight className="ml-1 h-4 w-4" />
                </span>
              </Link>
            ))}

            {/* Gift Cards */}
            <Link href="/shop/gift-cards" className="group block">
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden mb-4 bg-gradient-to-br from-gold to-gold-dark flex items-center justify-center">
                <div className="text-center text-white">
                  <p className="text-5xl mb-2">🎁</p>
                  <h3 className="text-xl font-serif font-semibold">Gift Cards</h3>
                </div>
              </div>
              <p className="text-taupe text-sm mb-2">
                Give the gift of beauty and wellness
              </p>
              <span className="inline-flex items-center text-sm text-gold group-hover:translate-x-1 transition-transform">
                Shop Gift Cards <ArrowRight className="ml-1 h-4 w-4" />
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="section-padding bg-cream">
        <div className="container-healinque">
          <div className="flex items-center justify-between mb-8">
            <div>
              <p className="text-gold font-medium tracking-wide uppercase text-sm mb-2">
                Best Sellers
              </p>
              <h2 className="text-display-sm font-serif text-navy-deep">
                Featured Products
              </h2>
            </div>
            <Link
              href="/shop/products"
              className="hidden md:inline-flex items-center text-gold hover:text-gold-dark transition-colors"
            >
              View All <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {products.slice(0, 8).map((product) => (
              <Link
                key={product.id}
                href={`/shop/products/${product.handle}`}
                className="group block"
              >
                <div className="relative aspect-square rounded-xl overflow-hidden mb-3 bg-white">
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

          <div className="text-center mt-8 md:hidden">
            <Link
              href="/shop/products"
              className="inline-flex items-center text-gold hover:text-gold-dark transition-colors"
            >
              View All Products <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Dr. Azi's Picks */}
      <section className="section-padding bg-navy-deep">
        <div className="container-healinque">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <p className="text-gold font-medium tracking-wide uppercase text-sm mb-3">
                Expert Recommendations
              </p>
              <h2 className="text-display font-serif mb-6">
                Dr. Azi&apos;s Skincare Essentials
              </h2>
              <p className="text-cream/80 mb-6">
                &ldquo;These are the products I recommend to every patient. They form the 
                foundation of any good skincare routine and will enhance your treatment 
                results at home.&rdquo;
              </p>
              <ul className="space-y-3 text-cream/90 mb-8">
                <li className="flex items-center gap-2">
                  <span className="text-gold">1.</span> A good cleanser
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-gold">2.</span> Vitamin C in the morning
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-gold">3.</span> Retinol at night
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-gold">4.</span> SPF 30+ every single day
                </li>
              </ul>
              <Link
                href="/shop/collections/dr-azi-picks"
                className="inline-flex items-center text-gold hover:text-gold-light transition-colors font-medium"
              >
                Shop Dr. Azi&apos;s Picks <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
            <div className="relative">
              <div className="relative aspect-[4/5] rounded-2xl overflow-hidden">
                <Image
                  src="/images/dr-azi-products.jpg"
                  alt="Dr. Azi with skincare products"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Membership Promo */}
      <section className="py-16 bg-gold">
        <div className="container-healinque">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-white text-center md:text-left">
              <h2 className="text-2xl font-serif mb-2">
                Members Save 15% on All Products
              </h2>
              <p className="text-white/80">
                Plus exclusive access to new products and member-only sales.
              </p>
            </div>
            <Link
              href="/memberships"
              className="inline-flex items-center px-6 py-3 bg-navy-deep text-white rounded-lg hover:bg-navy-deep/90 transition-colors font-medium"
            >
              Learn About Memberships
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

