/**
 * Unified Authentication Service
 * 
 * Coordinates authentication across Healthie (booking/patient portal) and
 * Shopify (shopping/orders). Ensures both systems use the same email.
 */

import { cookies } from "next/headers";
import { login as healthieLogin, signup as healthieSignup, logout as healthieLogout, getSession as getHealthieSession, type AuthSession as HealthieAuthSession, type LoginInput, type SignupInput } from "@/lib/healthie/auth";
import { createCustomer, authenticateCustomer, getCustomerByToken, type ShopifyCustomer, type CustomerAccessToken } from "@/lib/shopify/admin";
import { type HealthiePatient } from "@/lib/healthie/client";

// Cookie names
const SHOPIFY_CUSTOMER_COOKIE = "shopify_customer_token";
const UNIFIED_EMAIL_COOKIE = "healinque_email";

// =============================================================================
// Types
// =============================================================================

export interface UnifiedSession {
  isAuthenticated: boolean;
  email: string | null;
  healthie: {
    isAuthenticated: boolean;
    patient: HealthiePatient | null;
    token: string | null;
  };
  shopify: {
    isAuthenticated: boolean;
    customer: ShopifyCustomer | null;
    accessToken: string | null;
  };
}

export interface UnifiedSignupInput {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  phone?: string;
}

export interface UnifiedLoginInput {
  email: string;
  password: string;
}

export interface AuthResult {
  success: boolean;
  session: UnifiedSession;
  errors: {
    healthie?: string;
    shopify?: string;
  };
}

// =============================================================================
// Session Management
// =============================================================================

/**
 * Get the current unified session across both systems
 */
export async function getUnifiedSession(): Promise<UnifiedSession> {
  const cookieStore = await cookies();
  
  // Get Healthie session
  const healthieSession = await getHealthieSession();
  
  // Get Shopify session
  const shopifyToken = cookieStore.get(SHOPIFY_CUSTOMER_COOKIE)?.value;
  let shopifyCustomer: ShopifyCustomer | null = null;
  
  if (shopifyToken) {
    try {
      shopifyCustomer = await getCustomerByToken(shopifyToken);
    } catch {
      // Token invalid, clear it
      shopifyCustomer = null;
    }
  }
  
  // Get unified email
  const email = cookieStore.get(UNIFIED_EMAIL_COOKIE)?.value || 
                healthieSession.patient?.email || 
                shopifyCustomer?.email || 
                null;
  
  const isAuthenticated = healthieSession.isAuthenticated || !!shopifyCustomer;
  
  return {
    isAuthenticated,
    email,
    healthie: {
      isAuthenticated: healthieSession.isAuthenticated,
      patient: healthieSession.patient,
      token: healthieSession.token,
    },
    shopify: {
      isAuthenticated: !!shopifyCustomer,
      customer: shopifyCustomer,
      accessToken: shopifyToken || null,
    },
  };
}

// =============================================================================
// Signup
// =============================================================================

/**
 * Create accounts in both Healthie and Shopify with the same email
 */
export async function unifiedSignup(input: UnifiedSignupInput): Promise<AuthResult> {
  const errors: { healthie?: string; shopify?: string } = {};
  let healthieSession: HealthieAuthSession | null = null;
  let shopifyToken: CustomerAccessToken | null = null;
  let shopifyCustomer: ShopifyCustomer | null = null;
  
  // 1. Create Healthie patient
  try {
    healthieSession = await healthieSignup({
      email: input.email,
      password: input.password,
      firstName: input.firstName,
      lastName: input.lastName,
      phone: input.phone,
    });
  } catch (error) {
    errors.healthie = error instanceof Error ? error.message : "Failed to create patient account";
  }
  
  // 2. Create Shopify customer
  try {
    shopifyCustomer = await createCustomer({
      email: input.email,
      password: input.password,
      firstName: input.firstName,
      lastName: input.lastName,
      phone: input.phone,
    });
    
    // Get access token for the new customer
    shopifyToken = await authenticateCustomer(input.email, input.password);
  } catch (error) {
    errors.shopify = error instanceof Error ? error.message : "Failed to create shop account";
  }
  
  // 3. Store Shopify token in cookie
  if (shopifyToken) {
    const cookieStore = await cookies();
    cookieStore.set(SHOPIFY_CUSTOMER_COOKIE, shopifyToken.accessToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      expires: new Date(shopifyToken.expiresAt),
    });
    
    // Store unified email
    cookieStore.set(UNIFIED_EMAIL_COOKIE, input.email, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      maxAge: 60 * 60 * 24 * 30, // 30 days
    });
  }
  
  // Determine if signup was successful (at least one system worked)
  const healthieAuthenticated = !!healthieSession?.isAuthenticated;
  const shopifyAuthenticated = !!shopifyToken;
  const success = healthieAuthenticated || shopifyAuthenticated;
  
  return {
    success,
    session: {
      isAuthenticated: success,
      email: input.email,
      healthie: {
        isAuthenticated: healthieAuthenticated,
        patient: healthieSession?.patient || null,
        token: healthieSession?.token || null,
      },
      shopify: {
        isAuthenticated: shopifyAuthenticated,
        customer: shopifyCustomer,
        accessToken: shopifyToken?.accessToken || null,
      },
    },
    errors,
  };
}

// =============================================================================
// Login
// =============================================================================

/**
 * Authenticate with both Healthie and Shopify
 */
export async function unifiedLogin(input: UnifiedLoginInput): Promise<AuthResult> {
  const errors: { healthie?: string; shopify?: string } = {};
  let healthieSession: HealthieAuthSession | null = null;
  let shopifyToken: CustomerAccessToken | null = null;
  let shopifyCustomer: ShopifyCustomer | null = null;
  
  // 1. Authenticate with Healthie
  try {
    healthieSession = await healthieLogin({
      email: input.email,
      password: input.password,
    });
  } catch (error) {
    errors.healthie = error instanceof Error ? error.message : "Invalid credentials for patient portal";
  }
  
  // 2. Authenticate with Shopify
  try {
    shopifyToken = await authenticateCustomer(input.email, input.password);
    if (shopifyToken) {
      shopifyCustomer = await getCustomerByToken(shopifyToken.accessToken);
    }
  } catch (error) {
    errors.shopify = error instanceof Error ? error.message : "Invalid credentials for shop";
  }
  
  // 3. Store Shopify token in cookie
  if (shopifyToken) {
    const cookieStore = await cookies();
    cookieStore.set(SHOPIFY_CUSTOMER_COOKIE, shopifyToken.accessToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      expires: new Date(shopifyToken.expiresAt),
    });
    
    // Store unified email
    cookieStore.set(UNIFIED_EMAIL_COOKIE, input.email, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      maxAge: 60 * 60 * 24 * 30, // 30 days
    });
  }
  
  // Determine if login was successful (at least one system worked)
  const healthieAuthenticated = !!healthieSession?.isAuthenticated;
  const shopifyAuthenticated = !!shopifyToken;
  const success = healthieAuthenticated || shopifyAuthenticated;
  
  return {
    success,
    session: {
      isAuthenticated: success,
      email: input.email,
      healthie: {
        isAuthenticated: healthieAuthenticated,
        patient: healthieSession?.patient || null,
        token: healthieSession?.token || null,
      },
      shopify: {
        isAuthenticated: shopifyAuthenticated,
        customer: shopifyCustomer,
        accessToken: shopifyToken?.accessToken || null,
      },
    },
    errors,
  };
}

// =============================================================================
// Logout
// =============================================================================

/**
 * Log out from both systems
 */
export async function unifiedLogout(): Promise<void> {
  // Logout from Healthie
  await healthieLogout();
  
  // Clear Shopify cookies
  const cookieStore = await cookies();
  cookieStore.delete(SHOPIFY_CUSTOMER_COOKIE);
  cookieStore.delete(UNIFIED_EMAIL_COOKIE);
}

// =============================================================================
// Email Sync Utilities
// =============================================================================

/**
 * Check if a patient exists in Healthie by email
 */
export async function patientExistsInHealthie(email: string): Promise<boolean> {
  // This would call Healthie API to check
  // For now, we'll implement this when the API is fully integrated
  return false;
}

/**
 * Create a patient in Healthie from Shopify customer data
 * Used by webhooks when an order is placed by a new customer
 */
export async function createHealthiePatientFromShopify(
  customerData: {
    email: string;
    firstName: string;
    lastName: string;
    phone?: string;
  }
): Promise<void> {
  // This will be implemented when full Healthie API integration is complete
  // For now, this is a placeholder for the webhook to call
  console.log("Creating Healthie patient from Shopify:", customerData.email);
}

/**
 * Get Shopify customer token from cookies (for client-side use)
 */
export async function getShopifyCustomerToken(): Promise<string | null> {
  const cookieStore = await cookies();
  return cookieStore.get(SHOPIFY_CUSTOMER_COOKIE)?.value || null;
}

