/**
 * Environment variable validation
 *
 * This module validates required environment variables at build time
 * to catch configuration errors early and provide clear error messages.
 */

function getEnvVar(key: string, required = false): string {
  const value = process.env[key];
  if (required && !value) {
    throw new Error(`Missing required environment variable: ${key}`);
  }
  return value || "";
}

export const env = {
  // Shopify configuration
  shopifyStoreDomain: getEnvVar("SHOPIFY_STORE_DOMAIN") || "healinque.myshopify.com",
  shopifyStorefrontToken: getEnvVar("SHOPIFY_STOREFRONT_ACCESS_TOKEN"),

  // Healthie configuration
  healthieApiUrl: getEnvVar("HEALTHIE_API_URL") || "https://api.gethealthie.com/graphql",
  healthieApiKey: getEnvVar("HEALTHIE_API_KEY"),

  // Google verification
  googleVerification: getEnvVar("NEXT_PUBLIC_GOOGLE_VERIFICATION"),

  // Site URL for canonical links and metadata
  siteUrl: getEnvVar("NEXT_PUBLIC_SITE_URL") || "https://www.healinque.com",

  // Node environment
  isDevelopment: process.env.NODE_ENV === "development",
  isProduction: process.env.NODE_ENV === "production",
};

// Validate that essential API credentials are present in production
if (env.isProduction) {
  const requiredInProd = [
    { key: "SHOPIFY_STORE_DOMAIN", value: env.shopifyStoreDomain },
    { key: "HEALTHIE_API_URL", value: env.healthieApiUrl },
  ];

  for (const { key, value } of requiredInProd) {
    if (!value) {
      console.warn(
        `Warning: ${key} is not configured. Some features may not work properly in production.`
      );
    }
  }
}
