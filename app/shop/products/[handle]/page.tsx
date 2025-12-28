"use client";

import { useEffect, useState } from "react";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  getProductByHandle, 
  type ShopifyProduct,
  mockProducts
} from "@/lib/shopify/client";
import { formatPrice } from "@/lib/utils";
import { 
  Minus, 
  Plus, 
  ShoppingBag, 
  Heart, 
  Truck, 
  Shield, 
  RotateCcw,
  Check
} from "lucide-react";

interface ProductPageProps {
  params: { handle: string };
}

export default function ProductPage({ params }: ProductPageProps) {
  const [product, setProduct] = useState<ShopifyProduct | null>(null);
  const [selectedVariant, setSelectedVariant] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [addedToCart, setAddedToCart] = useState(false);

  useEffect(() => {
    async function loadProduct() {
      // For development, use mock data
      const found = mockProducts.find((p) => p.handle === params.handle);
      if (found) {
        setProduct(found);
      } else {
        const fetched = await getProductByHandle(params.handle);
        setProduct(fetched);
      }
      setIsLoading(false);
    }
    loadProduct();
  }, [params.handle]);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-pulse text-taupe">Loading...</div>
      </div>
    );
  }

  if (!product) {
    notFound();
  }

  const currentVariant = product.variants.edges[selectedVariant]?.node;
  const images = product.images.edges.map((e) => e.node);

  const handleAddToCart = () => {
    // In production, this would call the cart API
    setAddedToCart(true);
    setTimeout(() => setAddedToCart(false), 2000);
  };

  return (
    <div className="min-h-screen pt-24 pb-16 bg-white">
      <div className="container-healinque">
        {/* Breadcrumb */}
        <nav className="text-sm mb-8">
          <ol className="flex items-center gap-2 text-taupe">
            <li>
              <Link href="/shop" className="hover:text-gold">Shop</Link>
            </li>
            <li>/</li>
            <li>
              <Link href={`/shop/collections/${product.productType.toLowerCase()}`} className="hover:text-gold">
                {product.productType}
              </Link>
            </li>
            <li>/</li>
            <li className="text-navy-deep">{product.title}</li>
          </ol>
        </nav>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Images */}
          <div>
            <div className="relative aspect-square rounded-2xl overflow-hidden mb-4 bg-cream">
              {images[selectedImage] && (
                <Image
                  src={images[selectedImage].url}
                  alt={images[selectedImage].altText || product.title}
                  fill
                  className="object-cover"
                />
              )}
            </div>
            {images.length > 1 && (
              <div className="flex gap-3">
                {images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`relative w-20 h-20 rounded-lg overflow-hidden border-2 transition-colors ${
                      selectedImage === index ? "border-gold" : "border-transparent"
                    }`}
                  >
                    <Image
                      src={image.url}
                      alt={image.altText || `${product.title} ${index + 1}`}
                      fill
                      className="object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Product Info */}
          <div>
            <p className="text-gold font-medium uppercase text-sm mb-2">
              {product.vendor}
            </p>
            <h1 className="text-display-sm font-serif text-navy-deep mb-4">
              {product.title}
            </h1>

            <div className="flex items-center gap-4 mb-6">
              <span className="text-2xl font-semibold text-navy-deep">
                {formatPrice(parseFloat(currentVariant?.price.amount || "0"))}
              </span>
              {product.tags.includes("Best Seller") && (
                <Badge>Best Seller</Badge>
              )}
            </div>

            <div 
              className="text-taupe mb-8"
              dangerouslySetInnerHTML={{ __html: product.descriptionHtml }}
            />

            {/* Variants */}
            {product.variants.edges.length > 1 && (
              <div className="mb-6">
                <p className="font-medium text-navy-deep mb-3">Size</p>
                <div className="flex flex-wrap gap-2">
                  {product.variants.edges.map((edge, index) => (
                    <button
                      key={edge.node.id}
                      onClick={() => setSelectedVariant(index)}
                      disabled={!edge.node.availableForSale}
                      className={`px-4 py-2 rounded-lg border transition-colors ${
                        selectedVariant === index
                          ? "border-gold bg-gold/10 text-navy-deep"
                          : "border-cream-dark hover:border-gold"
                      } ${!edge.node.availableForSale ? "opacity-50 cursor-not-allowed" : ""}`}
                    >
                      {edge.node.title}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Quantity */}
            <div className="mb-6">
              <p className="font-medium text-navy-deep mb-3">Quantity</p>
              <div className="flex items-center gap-3">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-10 h-10 rounded-lg border border-cream-dark flex items-center justify-center hover:border-gold transition-colors"
                >
                  <Minus className="h-4 w-4" />
                </button>
                <span className="w-12 text-center font-medium">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-10 h-10 rounded-lg border border-cream-dark flex items-center justify-center hover:border-gold transition-colors"
                >
                  <Plus className="h-4 w-4" />
                </button>
              </div>
            </div>

            {/* Add to Cart */}
            <div className="flex gap-4 mb-8">
              <Button 
                size="xl" 
                className="flex-1"
                onClick={handleAddToCart}
                disabled={!currentVariant?.availableForSale}
              >
                {addedToCart ? (
                  <>
                    <Check className="mr-2 h-5 w-5" />
                    Added to Cart
                  </>
                ) : (
                  <>
                    <ShoppingBag className="mr-2 h-5 w-5" />
                    Add to Cart
                  </>
                )}
              </Button>
              <Button size="xl" variant="outline" className="px-4">
                <Heart className="h-5 w-5" />
              </Button>
            </div>

            {/* Benefits */}
            <div className="space-y-3 py-6 border-t border-b border-cream-dark">
              <div className="flex items-center gap-3 text-sm text-taupe">
                <Truck className="h-5 w-5 text-gold" />
                <span>Free shipping on orders over $75</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-taupe">
                <Shield className="h-5 w-5 text-gold" />
                <span>Physician-curated, medical-grade products</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-taupe">
                <RotateCcw className="h-5 w-5 text-gold" />
                <span>30-day returns for unopened products</span>
              </div>
            </div>

            {/* Product Details */}
            <div className="mt-8">
              <h3 className="font-serif text-lg text-navy-deep mb-3">
                Product Details
              </h3>
              <dl className="space-y-2 text-sm">
                <div className="flex">
                  <dt className="w-32 text-taupe">Brand</dt>
                  <dd className="text-navy-deep">{product.vendor}</dd>
                </div>
                <div className="flex">
                  <dt className="w-32 text-taupe">Category</dt>
                  <dd className="text-navy-deep">{product.productType}</dd>
                </div>
                {product.tags.length > 0 && (
                  <div className="flex">
                    <dt className="w-32 text-taupe">Tags</dt>
                    <dd className="text-navy-deep">{product.tags.join(", ")}</dd>
                  </div>
                )}
              </dl>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

