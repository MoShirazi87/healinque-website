"use client";

import { createContext, useContext, useState, useEffect, useCallback, type ReactNode } from "react";

// =============================================================================
// Types
// =============================================================================

export interface HealthiePatientInfo {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  phone?: string;
}

export interface ShopifyCustomerInfo {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  phone?: string;
}

export interface UnifiedSessionClient {
  isAuthenticated: boolean;
  isLoading: boolean;
  email: string | null;
  healthie: {
    isAuthenticated: boolean;
    patient: HealthiePatientInfo | null;
  };
  shopify: {
    isAuthenticated: boolean;
    customer: ShopifyCustomerInfo | null;
  };
}

export interface AuthContextType extends UnifiedSessionClient {
  login: (email: string, password: string) => Promise<{ success: boolean; errors?: { healthie?: string; shopify?: string } }>;
  signup: (data: SignupData) => Promise<{ success: boolean; errors?: { healthie?: string; shopify?: string } }>;
  logout: () => Promise<void>;
  refresh: () => Promise<void>;
}

export interface SignupData {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  phone?: string;
}

// =============================================================================
// Context
// =============================================================================

const AuthContext = createContext<AuthContextType | undefined>(undefined);

// =============================================================================
// Provider
// =============================================================================

export function AuthProvider({ children }: { children: ReactNode }) {
  const [session, setSession] = useState<UnifiedSessionClient>({
    isAuthenticated: false,
    isLoading: true,
    email: null,
    healthie: {
      isAuthenticated: false,
      patient: null,
    },
    shopify: {
      isAuthenticated: false,
      customer: null,
    },
  });

  // Fetch current session on mount
  const fetchSession = useCallback(async () => {
    try {
      const response = await fetch("/api/auth/session");
      if (response.ok) {
        const data = await response.json();
        setSession({
          isAuthenticated: data.isAuthenticated,
          isLoading: false,
          email: data.email,
          healthie: {
            isAuthenticated: data.healthie?.isAuthenticated || false,
            patient: data.healthie?.patient || null,
          },
          shopify: {
            isAuthenticated: data.shopify?.isAuthenticated || false,
            customer: data.shopify?.customer || null,
          },
        });
      } else {
        setSession((prev) => ({ ...prev, isLoading: false }));
      }
    } catch {
      setSession((prev) => ({ ...prev, isLoading: false }));
    }
  }, []);

  useEffect(() => {
    fetchSession();
  }, [fetchSession]);

  // Login
  const login = useCallback(async (email: string, password: string) => {
    try {
      const response = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setSession({
          isAuthenticated: true,
          isLoading: false,
          email: data.session.email,
          healthie: {
            isAuthenticated: data.session.healthie?.isAuthenticated || false,
            patient: data.session.healthie?.patient || null,
          },
          shopify: {
            isAuthenticated: data.session.shopify?.isAuthenticated || false,
            customer: data.session.shopify?.customer || null,
          },
        });
        return { success: true };
      }

      return { success: false, errors: data.errors };
    } catch {
      return { success: false, errors: { healthie: "Login failed" } };
    }
  }, []);

  // Signup
  const signup = useCallback(async (data: SignupData) => {
    try {
      const response = await fetch("/api/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (response.ok && result.success) {
        setSession({
          isAuthenticated: true,
          isLoading: false,
          email: result.session.email,
          healthie: {
            isAuthenticated: result.session.healthie?.isAuthenticated || false,
            patient: result.session.healthie?.patient || null,
          },
          shopify: {
            isAuthenticated: result.session.shopify?.isAuthenticated || false,
            customer: result.session.shopify?.customer || null,
          },
        });
        return { success: true };
      }

      return { success: false, errors: result.errors };
    } catch {
      return { success: false, errors: { healthie: "Signup failed" } };
    }
  }, []);

  // Logout
  const logout = useCallback(async () => {
    try {
      await fetch("/api/auth/logout", { method: "POST" });
    } finally {
      setSession({
        isAuthenticated: false,
        isLoading: false,
        email: null,
        healthie: {
          isAuthenticated: false,
          patient: null,
        },
        shopify: {
          isAuthenticated: false,
          customer: null,
        },
      });
    }
  }, []);

  // Refresh session
  const refresh = useCallback(async () => {
    setSession((prev) => ({ ...prev, isLoading: true }));
    await fetchSession();
  }, [fetchSession]);

  return (
    <AuthContext.Provider
      value={{
        ...session,
        login,
        signup,
        logout,
        refresh,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

// =============================================================================
// Hook
// =============================================================================

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}

// =============================================================================
// Utility Hooks
// =============================================================================

/**
 * Check if user is authenticated to Healthie (patient portal)
 */
export function useHealthieAuth() {
  const { healthie, isLoading } = useAuth();
  return {
    isAuthenticated: healthie.isAuthenticated,
    patient: healthie.patient,
    isLoading,
  };
}

/**
 * Check if user is authenticated to Shopify (shop)
 */
export function useShopifyAuth() {
  const { shopify, isLoading } = useAuth();
  return {
    isAuthenticated: shopify.isAuthenticated,
    customer: shopify.customer,
    isLoading,
  };
}

/**
 * Get user's display name
 */
export function useUserName() {
  const { healthie, shopify } = useAuth();
  const patient = healthie.patient;
  const customer = shopify.customer;
  
  if (patient) {
    return `${patient.firstName} ${patient.lastName}`;
  }
  if (customer) {
    return `${customer.firstName} ${customer.lastName}`;
  }
  return null;
}

