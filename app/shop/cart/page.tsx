"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { redirect } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { formatPrice } from "@/lib/utils";
import { Minus, Plus, Trash2, ArrowLeft, Lock } from "lucide-react";

// Mock cart data for development
const mockCartItems = [
  {
    id: "1",
    variantId: "gid://shopify/ProductVariant/1",
    title: "Hydrating Hyaluronic Serum",
    variant: "1 oz",
    price: 89.0,
    quantity: 1,
    image: "/images/products/serum.jpg",
    handle: "hydrating-serum",
  },
  {
    id: "2",
    variantId: "gid://shopify/ProductVariant/4",
    title: "SPF 50 Daily Sunscreen",
    variant: "3 oz",
    price: 42.0,
    quantity: 2,
    image: "/images/products/sunscreen.jpg",
    handle: "spf-50-sunscreen",
  },
];

export default function CartPage() {
  const [cartItems, setCartItems] = useState(mockCartItems);
  const [promoCode, setPromoCode] = useState("");

  const updateQuantity = (id: string, delta: number) => {
    setCartItems((items) =>
      items
        .map((item) =>
          item.id === id
            ? { ...item, quantity: Math.max(0, item.quantity + delta) }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const removeItem = (id: string) => {
    setCartItems((items) => items.filter((item) => item.id !== id));
  };

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const shipping = subtotal >= 75 ? 0 : 7.99;
  const total = subtotal + shipping;

  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen pt-24 pb-16 bg-cream">
        <div className="container-healinque">
          <div className="max-w-md mx-auto text-center py-16">
            <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center mx-auto mb-6">
              <svg
                className="w-12 h-12 text-cream-dark"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                />
              </svg>
            </div>
            <h1 className="text-display-sm font-serif text-navy-deep mb-4">
              Your Cart is Empty
            </h1>
            <p className="text-taupe mb-8">
              Discover our physician-curated skincare and wellness products.
            </p>
            <Link href="/shop">
              <Button size="lg">Continue Shopping</Button>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-24 pb-16 bg-cream">
      <div className="container-healinque">
        <Link
          href="/shop"
          className="inline-flex items-center text-taupe hover:text-gold mb-8"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Continue Shopping
        </Link>

        <h1 className="text-display-sm font-serif text-navy-deep mb-8">
          Shopping Cart ({cartItems.length})
        </h1>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-xl p-4 flex gap-4"
              >
                <Link href={`/shop/products/${item.handle}`}>
                  <div className="relative w-24 h-24 rounded-lg overflow-hidden bg-cream flex-shrink-0">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                </Link>

                <div className="flex-1">
                  <div className="flex justify-between">
                    <div>
                      <Link href={`/shop/products/${item.handle}`}>
                        <h3 className="font-medium text-navy-deep hover:text-gold transition-colors">
                          {item.title}
                        </h3>
                      </Link>
                      <p className="text-sm text-taupe">{item.variant}</p>
                    </div>
                    <p className="font-medium text-navy-deep">
                      {formatPrice(item.price * item.quantity)}
                    </p>
                  </div>

                  <div className="flex items-center justify-between mt-4">
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => updateQuantity(item.id, -1)}
                        className="w-8 h-8 rounded border border-cream-dark flex items-center justify-center hover:border-gold transition-colors"
                      >
                        <Minus className="h-3 w-3" />
                      </button>
                      <span className="w-8 text-center">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.id, 1)}
                        className="w-8 h-8 rounded border border-cream-dark flex items-center justify-center hover:border-gold transition-colors"
                      >
                        <Plus className="h-3 w-3" />
                      </button>
                    </div>
                    <button
                      onClick={() => removeItem(item.id)}
                      className="text-taupe hover:text-red-500 transition-colors"
                    >
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl p-6 sticky top-24">
              <h2 className="font-serif text-xl text-navy-deep mb-6">
                Order Summary
              </h2>

              <div className="space-y-3 pb-4 border-b border-cream-dark">
                <div className="flex justify-between text-sm">
                  <span className="text-taupe">Subtotal</span>
                  <span className="text-navy-deep">{formatPrice(subtotal)}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-taupe">Shipping</span>
                  <span className="text-navy-deep">
                    {shipping === 0 ? "FREE" : formatPrice(shipping)}
                  </span>
                </div>
                {subtotal < 75 && (
                  <p className="text-xs text-gold">
                    Add {formatPrice(75 - subtotal)} more for free shipping!
                  </p>
                )}
              </div>

              {/* Promo Code */}
              <div className="py-4 border-b border-cream-dark">
                <div className="flex gap-2">
                  <Input
                    placeholder="Promo code"
                    value={promoCode}
                    onChange={(e) => setPromoCode(e.target.value)}
                  />
                  <Button variant="outline">Apply</Button>
                </div>
              </div>

              <div className="flex justify-between py-4 border-b border-cream-dark">
                <span className="font-medium text-navy-deep">Total</span>
                <span className="font-bold text-xl text-navy-deep">
                  {formatPrice(total)}
                </span>
              </div>

              <Button className="w-full mt-6" size="lg">
                <Lock className="mr-2 h-4 w-4" />
                Proceed to Checkout
              </Button>

              <p className="text-xs text-center text-taupe mt-4">
                Secure checkout powered by Shopify
              </p>

              {/* Trust Badges */}
              <div className="flex justify-center gap-4 mt-6 pt-4 border-t border-cream-dark">
                <Image
                  src="/images/payment/visa.svg"
                  alt="Visa"
                  width={32}
                  height={20}
                />
                <Image
                  src="/images/payment/mastercard.svg"
                  alt="Mastercard"
                  width={32}
                  height={20}
                />
                <Image
                  src="/images/payment/amex.svg"
                  alt="American Express"
                  width={32}
                  height={20}
                />
                <Image
                  src="/images/payment/apple-pay.svg"
                  alt="Apple Pay"
                  width={32}
                  height={20}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

