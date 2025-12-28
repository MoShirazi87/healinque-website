/**
 * Shopify Storefront API Client
 * 
 * This module handles all Shopify Storefront API interactions.
 * In production, you'll need:
 * 1. SHOPIFY_STOREFRONT_ACCESS_TOKEN in environment variables
 * 2. SHOPIFY_STORE_DOMAIN (your-store.myshopify.com)
 */

const SHOPIFY_DOMAIN = process.env.SHOPIFY_STORE_DOMAIN || "healinque.myshopify.com";
const SHOPIFY_ACCESS_TOKEN = process.env.SHOPIFY_STOREFRONT_ACCESS_TOKEN || "";
const IS_DEV = !SHOPIFY_ACCESS_TOKEN || process.env.NODE_ENV === "development";

const STOREFRONT_API_URL = `https://${SHOPIFY_DOMAIN}/api/2024-01/graphql.json`;

interface ShopifyRequestOptions {
  query: string;
  variables?: Record<string, unknown>;
}

export async function shopifyFetch<T>({
  query,
  variables,
}: ShopifyRequestOptions): Promise<T> {
  // Return mock data when no Shopify access token is configured
  if (IS_DEV) {
    // This will be handled by the calling functions using mock data
    throw new Error("MOCK_DATA_MODE");
  }

  const response = await fetch(STOREFRONT_API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-Shopify-Storefront-Access-Token": SHOPIFY_ACCESS_TOKEN,
    },
    body: JSON.stringify({ query, variables }),
  });

  if (!response.ok) {
    throw new Error(`Shopify API error: ${response.status}`);
  }

  const data = await response.json();

  if (data.errors) {
    throw new Error(data.errors[0]?.message || "Shopify API error");
  }

  return data.data;
}

// Types
export interface ShopifyProduct {
  id: string;
  handle: string;
  title: string;
  description: string;
  descriptionHtml: string;
  vendor: string;
  productType: string;
  tags: string[];
  priceRange: {
    minVariantPrice: {
      amount: string;
      currencyCode: string;
    };
    maxVariantPrice: {
      amount: string;
      currencyCode: string;
    };
  };
  featuredImage: {
    url: string;
    altText: string | null;
  } | null;
  images: {
    edges: Array<{
      node: {
        url: string;
        altText: string | null;
      };
    }>;
  };
  variants: {
    edges: Array<{
      node: {
        id: string;
        title: string;
        availableForSale: boolean;
        price: {
          amount: string;
          currencyCode: string;
        };
        selectedOptions: Array<{
          name: string;
          value: string;
        }>;
      };
    }>;
  };
}

export interface ShopifyCollection {
  id: string;
  handle: string;
  title: string;
  description: string;
  image: {
    url: string;
    altText: string | null;
  } | null;
  products: {
    edges: Array<{
      node: ShopifyProduct;
    }>;
  };
}

export interface ShopifyCart {
  id: string;
  checkoutUrl: string;
  totalQuantity: number;
  cost: {
    subtotalAmount: {
      amount: string;
      currencyCode: string;
    };
    totalAmount: {
      amount: string;
      currencyCode: string;
    };
    totalTaxAmount: {
      amount: string;
      currencyCode: string;
    } | null;
  };
  lines: {
    edges: Array<{
      node: {
        id: string;
        quantity: number;
        merchandise: {
          id: string;
          title: string;
          product: {
            title: string;
            handle: string;
            featuredImage: {
              url: string;
              altText: string | null;
            } | null;
          };
          price: {
            amount: string;
            currencyCode: string;
          };
        };
      };
    }>;
  };
}

// Mock data for development
// Products are organized by vendor:
// - "Healinque" = Blanka Beauty private-label skincare (fulfilled by Blanka)
// - "Fullscript" = Professional-grade supplements (fulfilled by Fullscript)
// - "Healinque Clinic" = In-house products/services (fulfilled by Healinque)

export const mockProducts: ShopifyProduct[] = [
  // ========================================
  // BLANKA BEAUTY - Private Label Skincare
  // ========================================
  {
    id: "gid://shopify/Product/1",
    handle: "healinque-vitamin-c-serum",
    title: "Healinque Vitamin C Brightening Serum",
    description: "Our signature 20% Vitamin C serum with Hyaluronic Acid and Vitamin E. Brightens, firms, and protects against environmental damage. Made with clean, vegan ingredients.",
    descriptionHtml: "<p>Our signature 20% Vitamin C serum with Hyaluronic Acid and Vitamin E. Brightens, firms, and protects against environmental damage.</p><ul><li>20% L-Ascorbic Acid</li><li>Hyaluronic Acid for hydration</li><li>Vitamin E for antioxidant boost</li><li>Vegan & Cruelty-Free</li></ul>",
    vendor: "Healinque",
    productType: "Skincare",
    tags: ["Vitamin C", "Brightening", "Serum", "Anti-Aging", "Blanka"],
    priceRange: {
      minVariantPrice: { amount: "68.00", currencyCode: "USD" },
      maxVariantPrice: { amount: "68.00", currencyCode: "USD" },
    },
    featuredImage: {
      url: "/images/products/skincare-serum-1.jpg",
      altText: "Healinque Vitamin C Brightening Serum",
    },
    images: {
      edges: [
        { node: { url: "/images/products/skincare-serum-1.jpg", altText: "Vitamin C Serum" } },
      ],
    },
    variants: {
      edges: [
        {
          node: {
            id: "gid://shopify/ProductVariant/1",
            title: "1 fl oz / 30ml",
            availableForSale: true,
            price: { amount: "68.00", currencyCode: "USD" },
            selectedOptions: [{ name: "Size", value: "1 fl oz" }],
          },
        },
      ],
    },
  },
  {
    id: "gid://shopify/Product/2",
    handle: "healinque-retinol-treatment",
    title: "Healinque Retinol Renewal Night Cream",
    description: "Advanced 1% retinol formula with bakuchiol for gentle yet effective anti-aging. Reduces fine lines, improves texture, and promotes cell turnover while you sleep.",
    descriptionHtml: "<p>Advanced 1% retinol formula with bakuchiol for gentle yet effective anti-aging.</p><ul><li>1% Encapsulated Retinol</li><li>Bakuchiol for enhanced results</li><li>Squalane for moisture</li><li>Suitable for most skin types</li></ul>",
    vendor: "Healinque",
    productType: "Skincare",
    tags: ["Retinol", "Anti-Aging", "Night Cream", "Blanka"],
    priceRange: {
      minVariantPrice: { amount: "78.00", currencyCode: "USD" },
      maxVariantPrice: { amount: "78.00", currencyCode: "USD" },
    },
    featuredImage: {
      url: "/images/products/skincare-cream-1.jpg",
      altText: "Healinque Retinol Night Cream",
    },
    images: {
      edges: [
        { node: { url: "/images/products/skincare-cream-1.jpg", altText: "Retinol Night Cream" } },
      ],
    },
    variants: {
      edges: [
        {
          node: {
            id: "gid://shopify/ProductVariant/2",
            title: "1.7 fl oz / 50ml",
            availableForSale: true,
            price: { amount: "78.00", currencyCode: "USD" },
            selectedOptions: [{ name: "Size", value: "1.7 fl oz" }],
          },
        },
      ],
    },
  },
  {
    id: "gid://shopify/Product/3",
    handle: "healinque-hyaluronic-serum",
    title: "Healinque Multi-Weight Hyaluronic Serum",
    description: "Triple-weight hyaluronic acid complex that hydrates at every layer of the skin. Plumps, smooths, and creates a dewy, glass-skin effect.",
    descriptionHtml: "<p>Triple-weight hyaluronic acid complex that hydrates at every layer of the skin.</p><ul><li>Low, Medium & High molecular weight HA</li><li>Sodium Hyaluronate</li><li>Panthenol (Pro-Vitamin B5)</li><li>Lightweight, fast-absorbing</li></ul>",
    vendor: "Healinque",
    productType: "Skincare",
    tags: ["Hyaluronic Acid", "Hydrating", "Serum", "Blanka"],
    priceRange: {
      minVariantPrice: { amount: "58.00", currencyCode: "USD" },
      maxVariantPrice: { amount: "58.00", currencyCode: "USD" },
    },
    featuredImage: {
      url: "/images/products/skincare-serum-2.jpg",
      altText: "Healinque Hyaluronic Serum",
    },
    images: {
      edges: [
        { node: { url: "/images/products/skincare-serum-2.jpg", altText: "Hyaluronic Serum" } },
      ],
    },
    variants: {
      edges: [
        {
          node: {
            id: "gid://shopify/ProductVariant/3",
            title: "1 fl oz / 30ml",
            availableForSale: true,
            price: { amount: "58.00", currencyCode: "USD" },
            selectedOptions: [{ name: "Size", value: "1 fl oz" }],
          },
        },
      ],
    },
  },
  {
    id: "gid://shopify/Product/4",
    handle: "healinque-spf-moisturizer",
    title: "Healinque Daily Defense SPF 50 Moisturizer",
    description: "Lightweight mineral sunscreen moisturizer with zinc oxide. Provides broad-spectrum protection without white cast. Perfect under makeup.",
    descriptionHtml: "<p>Lightweight mineral sunscreen moisturizer with zinc oxide.</p><ul><li>SPF 50 Broad Spectrum</li><li>Non-nano Zinc Oxide</li><li>No white cast formula</li><li>Reef-safe & Vegan</li></ul>",
    vendor: "Healinque",
    productType: "Skincare",
    tags: ["SPF", "Moisturizer", "Sunscreen", "Daily Use", "Blanka"],
    priceRange: {
      minVariantPrice: { amount: "52.00", currencyCode: "USD" },
      maxVariantPrice: { amount: "52.00", currencyCode: "USD" },
    },
    featuredImage: {
      url: "/images/products/sunscreen.jpg",
      altText: "Healinque SPF 50 Moisturizer",
    },
    images: {
      edges: [
        { node: { url: "/images/products/sunscreen.jpg", altText: "SPF Moisturizer" } },
      ],
    },
    variants: {
      edges: [
        {
          node: {
            id: "gid://shopify/ProductVariant/4",
            title: "2 fl oz / 60ml",
            availableForSale: true,
            price: { amount: "52.00", currencyCode: "USD" },
            selectedOptions: [{ name: "Size", value: "2 fl oz" }],
          },
        },
      ],
    },
  },
  {
    id: "gid://shopify/Product/5",
    handle: "healinque-gentle-cleanser",
    title: "Healinque Gentle Cream Cleanser",
    description: "pH-balanced cream cleanser that removes makeup and impurities without stripping. Infused with chamomile and aloe for soothing clean skin.",
    descriptionHtml: "<p>pH-balanced cream cleanser that removes makeup and impurities without stripping.</p><ul><li>pH 5.5 balanced</li><li>Chamomile & Aloe</li><li>No sulfates or parabens</li><li>Great for sensitive skin</li></ul>",
    vendor: "Healinque",
    productType: "Skincare",
    tags: ["Cleanser", "Gentle", "Sensitive Skin", "Blanka"],
    priceRange: {
      minVariantPrice: { amount: "38.00", currencyCode: "USD" },
      maxVariantPrice: { amount: "38.00", currencyCode: "USD" },
    },
    featuredImage: {
      url: "/images/products/skincare-serum-1.jpg",
      altText: "Healinque Gentle Cleanser",
    },
    images: {
      edges: [
        { node: { url: "/images/products/skincare-serum-1.jpg", altText: "Gentle Cleanser" } },
      ],
    },
    variants: {
      edges: [
        {
          node: {
            id: "gid://shopify/ProductVariant/5",
            title: "4 fl oz / 120ml",
            availableForSale: true,
            price: { amount: "38.00", currencyCode: "USD" },
            selectedOptions: [{ name: "Size", value: "4 fl oz" }],
          },
        },
      ],
    },
  },
  {
    id: "gid://shopify/Product/6",
    handle: "healinque-niacinamide-serum",
    title: "Healinque Niacinamide + Zinc Serum",
    description: "10% Niacinamide with 1% Zinc PCA to minimize pores, control oil, and reduce blemishes. Improves skin texture and tone.",
    descriptionHtml: "<p>10% Niacinamide with 1% Zinc PCA for refined, balanced skin.</p><ul><li>10% Niacinamide (Vitamin B3)</li><li>1% Zinc PCA</li><li>Minimizes pores</li><li>Oil-free formula</li></ul>",
    vendor: "Healinque",
    productType: "Skincare",
    tags: ["Niacinamide", "Pore Minimizing", "Serum", "Blanka"],
    priceRange: {
      minVariantPrice: { amount: "48.00", currencyCode: "USD" },
      maxVariantPrice: { amount: "48.00", currencyCode: "USD" },
    },
    featuredImage: {
      url: "/images/products/skincare-serum-2.jpg",
      altText: "Niacinamide Serum",
    },
    images: {
      edges: [
        { node: { url: "/images/products/skincare-serum-2.jpg", altText: "Niacinamide Serum" } },
      ],
    },
    variants: {
      edges: [
        {
          node: {
            id: "gid://shopify/ProductVariant/6",
            title: "1 fl oz / 30ml",
            availableForSale: true,
            price: { amount: "48.00", currencyCode: "USD" },
            selectedOptions: [{ name: "Size", value: "1 fl oz" }],
          },
        },
      ],
    },
  },

  // ========================================
  // FULLSCRIPT - Professional Supplements
  // ========================================
  {
    id: "gid://shopify/Product/10",
    handle: "collagen-peptides-powder",
    title: "Collagen Peptides Powder",
    description: "Hydrolyzed collagen peptides (Types I & III) for skin elasticity, hair strength, nail health, and joint support. Unflavored powder mixes easily.",
    descriptionHtml: "<p>Hydrolyzed collagen peptides for comprehensive beauty and joint support.</p><ul><li>Types I & III Collagen</li><li>11g protein per serving</li><li>Grass-fed, pasture-raised</li><li>Unflavored, mixes easily</li></ul>",
    vendor: "Fullscript",
    productType: "Supplement",
    tags: ["Collagen", "Beauty", "Joint Support", "Fullscript"],
    priceRange: {
      minVariantPrice: { amount: "45.00", currencyCode: "USD" },
      maxVariantPrice: { amount: "45.00", currencyCode: "USD" },
    },
    featuredImage: {
      url: "/images/products/supplements-1.jpg",
      altText: "Collagen Peptides Powder",
    },
    images: {
      edges: [
        { node: { url: "/images/products/supplements-1.jpg", altText: "Collagen Peptides" } },
      ],
    },
    variants: {
      edges: [
        {
          node: {
            id: "gid://shopify/ProductVariant/10",
            title: "30 servings",
            availableForSale: true,
            price: { amount: "45.00", currencyCode: "USD" },
            selectedOptions: [{ name: "Size", value: "30 servings" }],
          },
        },
      ],
    },
  },
  {
    id: "gid://shopify/Product/11",
    handle: "vitamin-d3-k2",
    title: "Vitamin D3 + K2 Complex",
    description: "Synergistic vitamin D3 (5000 IU) and K2 (MK-7) formula for bone health, immune function, and cardiovascular support. Essential for most patients.",
    descriptionHtml: "<p>Optimal vitamin D3 and K2 combination for comprehensive health.</p><ul><li>5000 IU Vitamin D3</li><li>100mcg Vitamin K2 (MK-7)</li><li>Supports bone density</li><li>Immune & heart health</li></ul>",
    vendor: "Fullscript",
    productType: "Supplement",
    tags: ["Vitamin D", "Vitamin K", "Immune Support", "Bone Health", "Fullscript"],
    priceRange: {
      minVariantPrice: { amount: "32.00", currencyCode: "USD" },
      maxVariantPrice: { amount: "32.00", currencyCode: "USD" },
    },
    featuredImage: {
      url: "/images/products/supplements-2.jpg",
      altText: "Vitamin D3 K2",
    },
    images: {
      edges: [
        { node: { url: "/images/products/supplements-2.jpg", altText: "Vitamin D3 K2" } },
      ],
    },
    variants: {
      edges: [
        {
          node: {
            id: "gid://shopify/ProductVariant/11",
            title: "60 softgels",
            availableForSale: true,
            price: { amount: "32.00", currencyCode: "USD" },
            selectedOptions: [{ name: "Size", value: "60 softgels" }],
          },
        },
      ],
    },
  },
  {
    id: "gid://shopify/Product/12",
    handle: "omega-3-fish-oil",
    title: "Omega-3 Fish Oil (EPA/DHA)",
    description: "Pharmaceutical-grade fish oil with high-potency EPA and DHA. Supports brain function, heart health, and reduces inflammation. Molecularly distilled for purity.",
    descriptionHtml: "<p>High-potency omega-3 fatty acids for whole-body health.</p><ul><li>1200mg EPA / 600mg DHA</li><li>Molecularly distilled</li><li>No fishy aftertaste</li><li>Third-party tested</li></ul>",
    vendor: "Fullscript",
    productType: "Supplement",
    tags: ["Omega-3", "Fish Oil", "Heart Health", "Brain Health", "Fullscript"],
    priceRange: {
      minVariantPrice: { amount: "48.00", currencyCode: "USD" },
      maxVariantPrice: { amount: "48.00", currencyCode: "USD" },
    },
    featuredImage: {
      url: "/images/products/supplements-2.jpg",
      altText: "Omega-3 Fish Oil",
    },
    images: {
      edges: [
        { node: { url: "/images/products/supplements-2.jpg", altText: "Omega-3 Fish Oil" } },
      ],
    },
    variants: {
      edges: [
        {
          node: {
            id: "gid://shopify/ProductVariant/12",
            title: "120 softgels",
            availableForSale: true,
            price: { amount: "48.00", currencyCode: "USD" },
            selectedOptions: [{ name: "Size", value: "120 softgels" }],
          },
        },
      ],
    },
  },
  {
    id: "gid://shopify/Product/13",
    handle: "probiotic-50-billion",
    title: "Probiotic 50 Billion CFU",
    description: "Multi-strain probiotic with 50 billion CFU for gut health, immune support, and skin clarity. Acid-resistant capsules ensure delivery to intestines.",
    descriptionHtml: "<p>Comprehensive probiotic for digestive and immune health.</p><ul><li>50 Billion CFU</li><li>12 researched strains</li><li>Delayed-release capsules</li><li>Shelf-stable formula</li></ul>",
    vendor: "Fullscript",
    productType: "Supplement",
    tags: ["Probiotic", "Gut Health", "Immune Support", "Fullscript"],
    priceRange: {
      minVariantPrice: { amount: "52.00", currencyCode: "USD" },
      maxVariantPrice: { amount: "52.00", currencyCode: "USD" },
    },
    featuredImage: {
      url: "/images/products/supplements-2.jpg",
      altText: "Probiotic Supplement",
    },
    images: {
      edges: [
        { node: { url: "/images/products/supplements-2.jpg", altText: "Probiotic" } },
      ],
    },
    variants: {
      edges: [
        {
          node: {
            id: "gid://shopify/ProductVariant/13",
            title: "30 capsules",
            availableForSale: true,
            price: { amount: "52.00", currencyCode: "USD" },
            selectedOptions: [{ name: "Size", value: "30 capsules" }],
          },
        },
      ],
    },
  },
  {
    id: "gid://shopify/Product/14",
    handle: "magnesium-glycinate",
    title: "Magnesium Glycinate 400mg",
    description: "Highly absorbable magnesium glycinate for relaxation, sleep quality, muscle recovery, and stress support. Gentle on the stomach.",
    descriptionHtml: "<p>Premium chelated magnesium for optimal absorption and relaxation.</p><ul><li>400mg Magnesium Glycinate</li><li>Highly bioavailable</li><li>Supports sleep & stress</li><li>Gentle on digestion</li></ul>",
    vendor: "Fullscript",
    productType: "Supplement",
    tags: ["Magnesium", "Sleep", "Stress", "Muscle Recovery", "Fullscript"],
    priceRange: {
      minVariantPrice: { amount: "36.00", currencyCode: "USD" },
      maxVariantPrice: { amount: "36.00", currencyCode: "USD" },
    },
    featuredImage: {
      url: "/images/products/supplements-2.jpg",
      altText: "Magnesium Glycinate",
    },
    images: {
      edges: [
        { node: { url: "/images/products/supplements-2.jpg", altText: "Magnesium" } },
      ],
    },
    variants: {
      edges: [
        {
          node: {
            id: "gid://shopify/ProductVariant/14",
            title: "120 capsules",
            availableForSale: true,
            price: { amount: "36.00", currencyCode: "USD" },
            selectedOptions: [{ name: "Size", value: "120 capsules" }],
          },
        },
      ],
    },
  },
  {
    id: "gid://shopify/Product/15",
    handle: "nad-longevity-complex",
    title: "NAD+ Longevity Complex",
    description: "Cutting-edge NAD+ precursor formula with NMN and resveratrol. Supports cellular energy, healthy aging, and metabolic function.",
    descriptionHtml: "<p>Advanced longevity formula for cellular health and anti-aging.</p><ul><li>NMN (Nicotinamide Mononucleotide)</li><li>Trans-Resveratrol</li><li>Pterostilbene</li><li>Supports sirtuins & mitochondria</li></ul>",
    vendor: "Fullscript",
    productType: "Supplement",
    tags: ["NAD+", "Longevity", "Anti-Aging", "Energy", "Fullscript"],
    priceRange: {
      minVariantPrice: { amount: "89.00", currencyCode: "USD" },
      maxVariantPrice: { amount: "89.00", currencyCode: "USD" },
    },
    featuredImage: {
      url: "/images/products/supplements-2.jpg",
      altText: "NAD+ Longevity Complex",
    },
    images: {
      edges: [
        { node: { url: "/images/products/supplements-2.jpg", altText: "NAD+ Complex" } },
      ],
    },
    variants: {
      edges: [
        {
          node: {
            id: "gid://shopify/ProductVariant/15",
            title: "60 capsules",
            availableForSale: true,
            price: { amount: "89.00", currencyCode: "USD" },
            selectedOptions: [{ name: "Size", value: "60 capsules" }],
          },
        },
      ],
    },
  },

  // ========================================
  // HEALINQUE CLINIC - In-house Products
  // ========================================
  {
    id: "gid://shopify/Product/20",
    handle: "healinque-gift-card",
    title: "Healinque Gift Card",
    description: "Give the gift of beauty and wellness. Valid for all treatments and products at Healinque.",
    descriptionHtml: "<p>The perfect gift for anyone on their wellness journey.</p><ul><li>Valid for treatments & products</li><li>Never expires</li><li>Delivered via email</li></ul>",
    vendor: "Healinque Clinic",
    productType: "Gift Card",
    tags: ["Gift Card", "Gift"],
    priceRange: {
      minVariantPrice: { amount: "50.00", currencyCode: "USD" },
      maxVariantPrice: { amount: "500.00", currencyCode: "USD" },
    },
    featuredImage: {
      url: "/images/products/gift-card.jpg",
      altText: "Healinque Gift Card",
    },
    images: {
      edges: [
        { node: { url: "/images/products/gift-card.jpg", altText: "Gift Card" } },
      ],
    },
    variants: {
      edges: [
        {
          node: {
            id: "gid://shopify/ProductVariant/20a",
            title: "$50",
            availableForSale: true,
            price: { amount: "50.00", currencyCode: "USD" },
            selectedOptions: [{ name: "Value", value: "$50" }],
          },
        },
        {
          node: {
            id: "gid://shopify/ProductVariant/20b",
            title: "$100",
            availableForSale: true,
            price: { amount: "100.00", currencyCode: "USD" },
            selectedOptions: [{ name: "Value", value: "$100" }],
          },
        },
        {
          node: {
            id: "gid://shopify/ProductVariant/20c",
            title: "$250",
            availableForSale: true,
            price: { amount: "250.00", currencyCode: "USD" },
            selectedOptions: [{ name: "Value", value: "$250" }],
          },
        },
        {
          node: {
            id: "gid://shopify/ProductVariant/20d",
            title: "$500",
            availableForSale: true,
            price: { amount: "500.00", currencyCode: "USD" },
            selectedOptions: [{ name: "Value", value: "$500" }],
          },
        },
      ],
    },
  },

  // ========================================
  // MEMBERSHIPS - Monthly subscriptions
  // ========================================
  {
    id: "gid://shopify/Product/30",
    handle: "glow-membership",
    title: "Glow Membership",
    description: "Our essential monthly membership for skincare enthusiasts. Includes 10% off all products and services, plus one complimentary HydraFacial per quarter.",
    descriptionHtml: "<p>The perfect entry to the Healinque family.</p><ul><li>10% off all products</li><li>10% off all services</li><li>1 HydraFacial per quarter ($175 value)</li><li>Priority booking</li><li>Birthday month special</li></ul>",
    vendor: "Healinque Clinic",
    productType: "Membership",
    tags: ["Membership", "Subscription", "Glow"],
    priceRange: {
      minVariantPrice: { amount: "99.00", currencyCode: "USD" },
      maxVariantPrice: { amount: "99.00", currencyCode: "USD" },
    },
    featuredImage: {
      url: "/images/memberships/glow.jpg",
      altText: "Glow Membership",
    },
    images: {
      edges: [
        { node: { url: "/images/memberships/glow.jpg", altText: "Glow Membership" } },
      ],
    },
    variants: {
      edges: [
        {
          node: {
            id: "gid://shopify/ProductVariant/30",
            title: "Monthly",
            availableForSale: true,
            price: { amount: "99.00", currencyCode: "USD" },
            selectedOptions: [{ name: "Billing", value: "Monthly" }],
          },
        },
      ],
    },
  },
  {
    id: "gid://shopify/Product/31",
    handle: "radiance-membership",
    title: "Radiance Membership",
    description: "Our most popular membership for serious skincare lovers. Includes 15% off everything, monthly B12 shot, and quarterly Botox touch-ups.",
    descriptionHtml: "<p>For those committed to looking and feeling their best.</p><ul><li>15% off all products</li><li>15% off all services</li><li>Monthly B12 injection ($35 value)</li><li>Quarterly Botox touch-up (20 units)</li><li>Priority booking</li><li>Exclusive member events</li></ul>",
    vendor: "Healinque Clinic",
    productType: "Membership",
    tags: ["Membership", "Subscription", "Radiance", "Popular"],
    priceRange: {
      minVariantPrice: { amount: "249.00", currencyCode: "USD" },
      maxVariantPrice: { amount: "249.00", currencyCode: "USD" },
    },
    featuredImage: {
      url: "/images/memberships/radiance.jpg",
      altText: "Radiance Membership",
    },
    images: {
      edges: [
        { node: { url: "/images/memberships/radiance.jpg", altText: "Radiance Membership" } },
      ],
    },
    variants: {
      edges: [
        {
          node: {
            id: "gid://shopify/ProductVariant/31",
            title: "Monthly",
            availableForSale: true,
            price: { amount: "249.00", currencyCode: "USD" },
            selectedOptions: [{ name: "Billing", value: "Monthly" }],
          },
        },
      ],
    },
  },
  {
    id: "gid://shopify/Product/32",
    handle: "luminous-membership",
    title: "Luminous VIP Membership",
    description: "The ultimate VIP experience. Includes 20% off everything, monthly treatments, premium perks, and direct access to Dr. Azi.",
    descriptionHtml: "<p>The pinnacle of personalized aesthetic care.</p><ul><li>20% off all products</li><li>20% off all services</li><li>Monthly signature facial OR B12/NAD+</li><li>Quarterly Botox (40 units) OR 1 syringe filler</li><li>Annual treatment planning with Dr. Azi</li><li>Same-day booking</li><li>Complimentary product samples</li></ul>",
    vendor: "Healinque Clinic",
    productType: "Membership",
    tags: ["Membership", "Subscription", "Luminous", "VIP"],
    priceRange: {
      minVariantPrice: { amount: "449.00", currencyCode: "USD" },
      maxVariantPrice: { amount: "449.00", currencyCode: "USD" },
    },
    featuredImage: {
      url: "/images/memberships/luminous.jpg",
      altText: "Luminous VIP Membership",
    },
    images: {
      edges: [
        { node: { url: "/images/memberships/luminous.jpg", altText: "Luminous VIP Membership" } },
      ],
    },
    variants: {
      edges: [
        {
          node: {
            id: "gid://shopify/ProductVariant/32",
            title: "Monthly",
            availableForSale: true,
            price: { amount: "449.00", currencyCode: "USD" },
            selectedOptions: [{ name: "Billing", value: "Monthly" }],
          },
        },
      ],
    },
  },

  // ========================================
  // TREATMENT PACKAGES - Prepaid bundles
  // ========================================
  {
    id: "gid://shopify/Product/40",
    handle: "botox-package-3",
    title: "Botox Package - 3 Sessions",
    description: "Save on your anti-aging routine with a 3-session Botox package. Includes up to 30 units per session. Valid for 12 months.",
    descriptionHtml: "<p>Perfect for maintaining your results year-round.</p><ul><li>3 Botox sessions</li><li>Up to 30 units per session</li><li>Save $150 vs individual sessions</li><li>Valid 12 months from purchase</li><li>Transferable to friends/family</li></ul>",
    vendor: "Healinque Clinic",
    productType: "Package",
    tags: ["Package", "Botox", "Injectable"],
    priceRange: {
      minVariantPrice: { amount: "849.00", currencyCode: "USD" },
      maxVariantPrice: { amount: "849.00", currencyCode: "USD" },
    },
    featuredImage: {
      url: "/images/treatments/botox.jpg",
      altText: "Botox Package",
    },
    images: {
      edges: [
        { node: { url: "/images/treatments/botox.jpg", altText: "Botox Package" } },
      ],
    },
    variants: {
      edges: [
        {
          node: {
            id: "gid://shopify/ProductVariant/40",
            title: "3 Sessions",
            availableForSale: true,
            price: { amount: "849.00", currencyCode: "USD" },
            selectedOptions: [{ name: "Sessions", value: "3" }],
          },
        },
      ],
    },
  },
  {
    id: "gid://shopify/Product/41",
    handle: "hydrafacial-package-4",
    title: "HydraFacial Package - 4 Sessions",
    description: "Maintain that glow with a 4-pack of Signature HydraFacials. Perfect for monthly skin maintenance.",
    descriptionHtml: "<p>Keep your skin glowing all year.</p><ul><li>4 Signature HydraFacial sessions</li><li>Save $100 vs individual sessions</li><li>Valid 12 months from purchase</li><li>Includes LED add-on each visit</li></ul>",
    vendor: "Healinque Clinic",
    productType: "Package",
    tags: ["Package", "HydraFacial", "Facial"],
    priceRange: {
      minVariantPrice: { amount: "599.00", currencyCode: "USD" },
      maxVariantPrice: { amount: "599.00", currencyCode: "USD" },
    },
    featuredImage: {
      url: "/images/treatments/hydrafacial.jpg",
      altText: "HydraFacial Package",
    },
    images: {
      edges: [
        { node: { url: "/images/treatments/hydrafacial.jpg", altText: "HydraFacial Package" } },
      ],
    },
    variants: {
      edges: [
        {
          node: {
            id: "gid://shopify/ProductVariant/41",
            title: "4 Sessions",
            availableForSale: true,
            price: { amount: "599.00", currencyCode: "USD" },
            selectedOptions: [{ name: "Sessions", value: "4" }],
          },
        },
      ],
    },
  },
  {
    id: "gid://shopify/Product/42",
    handle: "morpheus8-package-3",
    title: "Morpheus8 Package - 3 Sessions",
    description: "Complete skin transformation with 3 Morpheus8 RF microneedling sessions. Recommended protocol for optimal collagen remodeling.",
    descriptionHtml: "<p>The gold standard for skin tightening and rejuvenation.</p><ul><li>3 Morpheus8 sessions</li><li>Full face treatment area</li><li>Save $400 vs individual sessions</li><li>Includes post-treatment skincare kit</li><li>Recommended 4-6 weeks apart</li></ul>",
    vendor: "Healinque Clinic",
    productType: "Package",
    tags: ["Package", "Morpheus8", "RF Microneedling", "Anti-Aging"],
    priceRange: {
      minVariantPrice: { amount: "2499.00", currencyCode: "USD" },
      maxVariantPrice: { amount: "2499.00", currencyCode: "USD" },
    },
    featuredImage: {
      url: "/images/treatments/morpheus8.jpg",
      altText: "Morpheus8 Package",
    },
    images: {
      edges: [
        { node: { url: "/images/treatments/morpheus8.jpg", altText: "Morpheus8 Package" } },
      ],
    },
    variants: {
      edges: [
        {
          node: {
            id: "gid://shopify/ProductVariant/42",
            title: "3 Sessions",
            availableForSale: true,
            price: { amount: "2499.00", currencyCode: "USD" },
            selectedOptions: [{ name: "Sessions", value: "3" }],
          },
        },
      ],
    },
  },
  {
    id: "gid://shopify/Product/43",
    handle: "glp1-starter-package",
    title: "GLP-1 Weight Loss Starter Package",
    description: "Begin your weight loss journey with a 3-month GLP-1 program including medication, consultations, and body composition tracking.",
    descriptionHtml: "<p>Comprehensive medical weight loss under physician supervision.</p><ul><li>3-month supply of Semaglutide OR Tirzepatide</li><li>Initial consultation with Dr. Azi</li><li>Monthly check-ins</li><li>Body composition analysis</li><li>Nutrition guidance</li><li>Text/email support</li></ul>",
    vendor: "Healinque Clinic",
    productType: "Package",
    tags: ["Package", "GLP-1", "Weight Loss", "Wellness"],
    priceRange: {
      minVariantPrice: { amount: "1299.00", currencyCode: "USD" },
      maxVariantPrice: { amount: "1799.00", currencyCode: "USD" },
    },
    featuredImage: {
      url: "/images/treatments/weight-loss.jpg",
      altText: "GLP-1 Weight Loss Package",
    },
    images: {
      edges: [
        { node: { url: "/images/treatments/weight-loss.jpg", altText: "GLP-1 Weight Loss Package" } },
      ],
    },
    variants: {
      edges: [
        {
          node: {
            id: "gid://shopify/ProductVariant/43a",
            title: "Semaglutide 3-Month",
            availableForSale: true,
            price: { amount: "1299.00", currencyCode: "USD" },
            selectedOptions: [{ name: "Medication", value: "Semaglutide" }],
          },
        },
        {
          node: {
            id: "gid://shopify/ProductVariant/43b",
            title: "Tirzepatide 3-Month",
            availableForSale: true,
            price: { amount: "1799.00", currencyCode: "USD" },
            selectedOptions: [{ name: "Medication", value: "Tirzepatide" }],
          },
        },
      ],
    },
  },
];

export const mockCollections: ShopifyCollection[] = [
  {
    id: "gid://shopify/Collection/1",
    handle: "skincare",
    title: "Skincare",
    description: "Healinque private-label skincare featuring clean, vegan formulas. Created by Dr. Azi with Blanka Beauty.",
    image: { url: "/images/collections/skincare.jpg", altText: "Skincare Collection" },
    products: { edges: mockProducts.filter(p => p.productType === "Skincare").map(p => ({ node: p })) },
  },
  {
    id: "gid://shopify/Collection/2",
    handle: "supplements",
    title: "Supplements",
    description: "Professional-grade supplements from Fullscript. Physician-curated for longevity and wellness.",
    image: { url: "/images/collections/supplements.jpg", altText: "Supplements Collection" },
    products: { edges: mockProducts.filter(p => p.productType === "Supplement").map(p => ({ node: p })) },
  },
  {
    id: "gid://shopify/Collection/3",
    handle: "dr-azi-picks",
    title: "Dr. Azi's Picks",
    description: "Dr. Azi's essential products for every skincare routine. The foundation of healthy, glowing skin.",
    image: { url: "/images/collections/skincare.jpg", altText: "Dr. Azi's Picks" },
    products: { 
      edges: mockProducts
        .filter(p => ["healinque-vitamin-c-serum", "healinque-retinol-treatment", "healinque-spf-moisturizer", "collagen-peptides-powder"].includes(p.handle))
        .map(p => ({ node: p })) 
    },
  },
  {
    id: "gid://shopify/Collection/4",
    handle: "memberships",
    title: "Memberships",
    description: "Join the Healinque family with exclusive membership benefits. Save on products and services while enjoying VIP perks.",
    image: { url: "/images/memberships/radiance.jpg", altText: "Healinque Memberships" },
    products: { edges: mockProducts.filter(p => p.productType === "Membership").map(p => ({ node: p })) },
  },
  {
    id: "gid://shopify/Collection/5",
    handle: "packages",
    title: "Treatment Packages",
    description: "Save with prepaid treatment packages. Perfect for maintaining your results with bundled savings.",
    image: { url: "/images/treatments/morpheus8.jpg", altText: "Treatment Packages" },
    products: { edges: mockProducts.filter(p => p.productType === "Package").map(p => ({ node: p })) },
  },
  {
    id: "gid://shopify/Collection/6",
    handle: "gift-cards",
    title: "Gift Cards",
    description: "Give the gift of beauty and wellness. Perfect for any occasion.",
    image: { url: "/images/products/gift-card.jpg", altText: "Gift Cards" },
    products: { edges: mockProducts.filter(p => p.productType === "Gift Card").map(p => ({ node: p })) },
  },
];

// GraphQL Queries
const PRODUCTS_QUERY = `
  query Products($first: Int!) {
    products(first: $first) {
      edges {
        node {
          id
          handle
          title
          description
          descriptionHtml
          vendor
          productType
          tags
          priceRange {
            minVariantPrice {
              amount
              currencyCode
            }
            maxVariantPrice {
              amount
              currencyCode
            }
          }
          featuredImage {
            url
            altText
          }
          variants(first: 10) {
            edges {
              node {
                id
                title
                availableForSale
                price {
                  amount
                  currencyCode
                }
                selectedOptions {
                  name
                  value
                }
              }
            }
          }
        }
      }
    }
  }
`;

const PRODUCT_BY_HANDLE_QUERY = `
  query ProductByHandle($handle: String!) {
    productByHandle(handle: $handle) {
      id
      handle
      title
      description
      descriptionHtml
      vendor
      productType
      tags
      priceRange {
        minVariantPrice {
          amount
          currencyCode
        }
        maxVariantPrice {
          amount
          currencyCode
        }
      }
      featuredImage {
        url
        altText
      }
      images(first: 10) {
        edges {
          node {
            url
            altText
          }
        }
      }
      variants(first: 20) {
        edges {
          node {
            id
            title
            availableForSale
            price {
              amount
              currencyCode
            }
            selectedOptions {
              name
              value
            }
          }
        }
      }
    }
  }
`;

const CREATE_CART_MUTATION = `
  mutation CartCreate($input: CartInput!) {
    cartCreate(input: $input) {
      cart {
        id
        checkoutUrl
        totalQuantity
        cost {
          subtotalAmount {
            amount
            currencyCode
          }
          totalAmount {
            amount
            currencyCode
          }
        }
        lines(first: 100) {
          edges {
            node {
              id
              quantity
              merchandise {
                ... on ProductVariant {
                  id
                  title
                  product {
                    title
                    handle
                    featuredImage {
                      url
                      altText
                    }
                  }
                  price {
                    amount
                    currencyCode
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`;

const ADD_TO_CART_MUTATION = `
  mutation CartLinesAdd($cartId: ID!, $lines: [CartLineInput!]!) {
    cartLinesAdd(cartId: $cartId, lines: $lines) {
      cart {
        id
        checkoutUrl
        totalQuantity
        cost {
          subtotalAmount {
            amount
            currencyCode
          }
          totalAmount {
            amount
            currencyCode
          }
        }
        lines(first: 100) {
          edges {
            node {
              id
              quantity
              merchandise {
                ... on ProductVariant {
                  id
                  title
                  product {
                    title
                    handle
                    featuredImage {
                      url
                      altText
                    }
                  }
                  price {
                    amount
                    currencyCode
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`;

// API Functions
// Note: IS_DEV is defined at the top of the file

export async function getProducts(first: number = 20): Promise<ShopifyProduct[]> {
  if (IS_DEV) {
    return mockProducts;
  }

  const data = await shopifyFetch<{
    products: { edges: Array<{ node: ShopifyProduct }> };
  }>({
    query: PRODUCTS_QUERY,
    variables: { first },
  });

  return data.products.edges.map((edge) => edge.node);
}

export async function getProductByHandle(handle: string): Promise<ShopifyProduct | null> {
  if (IS_DEV) {
    return mockProducts.find((p) => p.handle === handle) || null;
  }

  const data = await shopifyFetch<{ productByHandle: ShopifyProduct | null }>({
    query: PRODUCT_BY_HANDLE_QUERY,
    variables: { handle },
  });

  return data.productByHandle;
}

export async function createCart(
  lines: Array<{ merchandiseId: string; quantity: number }>
): Promise<ShopifyCart> {
  if (IS_DEV) {
    // Return mock cart
    return {
      id: "mock-cart-id",
      checkoutUrl: "/shop/checkout",
      totalQuantity: lines.reduce((sum, l) => sum + l.quantity, 0),
      cost: {
        subtotalAmount: { amount: "100.00", currencyCode: "USD" },
        totalAmount: { amount: "100.00", currencyCode: "USD" },
        totalTaxAmount: null,
      },
      lines: { edges: [] },
    };
  }

  const data = await shopifyFetch<{ cartCreate: { cart: ShopifyCart } }>({
    query: CREATE_CART_MUTATION,
    variables: { input: { lines } },
  });

  return data.cartCreate.cart;
}

export async function addToCart(
  cartId: string,
  lines: Array<{ merchandiseId: string; quantity: number }>
): Promise<ShopifyCart> {
  if (IS_DEV) {
    return {
      id: cartId,
      checkoutUrl: "/shop/checkout",
      totalQuantity: lines.reduce((sum, l) => sum + l.quantity, 0),
      cost: {
        subtotalAmount: { amount: "100.00", currencyCode: "USD" },
        totalAmount: { amount: "100.00", currencyCode: "USD" },
        totalTaxAmount: null,
      },
      lines: { edges: [] },
    };
  }

  const data = await shopifyFetch<{ cartLinesAdd: { cart: ShopifyCart } }>({
    query: ADD_TO_CART_MUTATION,
    variables: { cartId, lines },
  });

  return data.cartLinesAdd.cart;
}

// =============================================================================
// Customer-Associated Cart Functions
// =============================================================================

const CREATE_CART_WITH_BUYER_MUTATION = `
  mutation CartCreateWithBuyer($input: CartInput!, $buyerIdentity: CartBuyerIdentityInput) {
    cartCreate(input: $input) {
      cart {
        id
        checkoutUrl
        totalQuantity
        buyerIdentity {
          email
          customer {
            id
            email
            firstName
            lastName
          }
        }
        cost {
          subtotalAmount {
            amount
            currencyCode
          }
          totalAmount {
            amount
            currencyCode
          }
        }
        lines(first: 100) {
          edges {
            node {
              id
              quantity
              merchandise {
                ... on ProductVariant {
                  id
                  title
                  product {
                    title
                    handle
                    featuredImage {
                      url
                      altText
                    }
                  }
                  price {
                    amount
                    currencyCode
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`;

const CART_BUYER_IDENTITY_UPDATE = `
  mutation CartBuyerIdentityUpdate($cartId: ID!, $buyerIdentity: CartBuyerIdentityInput!) {
    cartBuyerIdentityUpdate(cartId: $cartId, buyerIdentity: $buyerIdentity) {
      cart {
        id
        checkoutUrl
        buyerIdentity {
          email
          customer {
            id
          }
        }
      }
    }
  }
`;

const GET_CART_QUERY = `
  query GetCart($cartId: ID!) {
    cart(id: $cartId) {
      id
      checkoutUrl
      totalQuantity
      buyerIdentity {
        email
        customer {
          id
          email
          firstName
          lastName
        }
      }
      cost {
        subtotalAmount {
          amount
          currencyCode
        }
        totalAmount {
          amount
          currencyCode
        }
        totalTaxAmount {
          amount
          currencyCode
        }
      }
      lines(first: 100) {
        edges {
          node {
            id
            quantity
            merchandise {
              ... on ProductVariant {
                id
                title
                product {
                  title
                  handle
                  featuredImage {
                    url
                    altText
                  }
                }
                price {
                  amount
                  currencyCode
                }
              }
            }
          }
        }
      }
    }
  }
`;

/**
 * Create a cart with customer association (for logged-in users)
 */
export async function createCartWithCustomer(
  lines: Array<{ merchandiseId: string; quantity: number }>,
  customerAccessToken: string
): Promise<ShopifyCart> {
  if (IS_DEV) {
    return {
      id: "mock-cart-id",
      checkoutUrl: "/shop/checkout",
      totalQuantity: lines.reduce((sum, l) => sum + l.quantity, 0),
      cost: {
        subtotalAmount: { amount: "100.00", currencyCode: "USD" },
        totalAmount: { amount: "100.00", currencyCode: "USD" },
        totalTaxAmount: null,
      },
      lines: { edges: [] },
    };
  }

  const data = await shopifyFetch<{ cartCreate: { cart: ShopifyCart } }>({
    query: CREATE_CART_WITH_BUYER_MUTATION,
    variables: { 
      input: { 
        lines,
        buyerIdentity: {
          customerAccessToken,
        },
      },
    },
  });

  return data.cartCreate.cart;
}

/**
 * Associate an existing cart with a customer
 */
export async function associateCartWithCustomer(
  cartId: string,
  customerAccessToken: string
): Promise<ShopifyCart | null> {
  if (IS_DEV) {
    return null;
  }

  try {
    const data = await shopifyFetch<{ 
      cartBuyerIdentityUpdate: { cart: ShopifyCart } 
    }>({
      query: CART_BUYER_IDENTITY_UPDATE,
      variables: { 
        cartId,
        buyerIdentity: {
          customerAccessToken,
        },
      },
    });

    return data.cartBuyerIdentityUpdate.cart;
  } catch {
    return null;
  }
}

/**
 * Get an existing cart by ID
 */
export async function getCart(cartId: string): Promise<ShopifyCart | null> {
  if (IS_DEV) {
    return {
      id: cartId,
      checkoutUrl: "/shop/checkout",
      totalQuantity: 0,
      cost: {
        subtotalAmount: { amount: "0.00", currencyCode: "USD" },
        totalAmount: { amount: "0.00", currencyCode: "USD" },
        totalTaxAmount: null,
      },
      lines: { edges: [] },
    };
  }

  try {
    const data = await shopifyFetch<{ cart: ShopifyCart | null }>({
      query: GET_CART_QUERY,
      variables: { cartId },
    });

    return data.cart;
  } catch {
    return null;
  }
}

/**
 * Get or create a cart, with optional customer association
 */
export async function getOrCreateCart(
  existingCartId?: string,
  customerAccessToken?: string
): Promise<ShopifyCart> {
  // Try to get existing cart
  if (existingCartId) {
    const existingCart = await getCart(existingCartId);
    if (existingCart) {
      // Associate with customer if logged in and not already associated
      if (customerAccessToken) {
        await associateCartWithCustomer(existingCartId, customerAccessToken);
      }
      return existingCart;
    }
  }

  // Create new cart
  if (customerAccessToken) {
    return createCartWithCustomer([], customerAccessToken);
  }

  return createCart([]);
}

