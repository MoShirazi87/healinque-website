/**
 * Shopify Admin API Client
 * 
 * This module handles customer management via Shopify's Admin API.
 * Used for creating customer accounts and authenticating users.
 * 
 * Required Environment Variables:
 * - SHOPIFY_STORE_DOMAIN: Your Shopify store domain (e.g., healinque.myshopify.com)
 * - SHOPIFY_ADMIN_ACCESS_TOKEN: Admin API access token with customer scopes
 */

const SHOPIFY_DOMAIN = process.env.SHOPIFY_STORE_DOMAIN || "healinque.myshopify.com";
const SHOPIFY_ADMIN_TOKEN = process.env.SHOPIFY_ADMIN_ACCESS_TOKEN || "";
const IS_DEV = !SHOPIFY_ADMIN_TOKEN || process.env.NODE_ENV === "development";

const ADMIN_API_URL = `https://${SHOPIFY_DOMAIN}/admin/api/2024-01/graphql.json`;

interface AdminRequestOptions {
  query: string;
  variables?: Record<string, unknown>;
}

async function shopifyAdminFetch<T>({
  query,
  variables,
}: AdminRequestOptions): Promise<T> {
  if (IS_DEV) {
    throw new Error("MOCK_DATA_MODE");
  }

  const response = await fetch(ADMIN_API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-Shopify-Access-Token": SHOPIFY_ADMIN_TOKEN,
    },
    body: JSON.stringify({ query, variables }),
  });

  if (!response.ok) {
    const text = await response.text();
    throw new Error(`Shopify Admin API error: ${response.status} - ${text}`);
  }

  const data = await response.json();

  if (data.errors) {
    throw new Error(data.errors[0]?.message || "Shopify Admin API error");
  }

  return data.data;
}

// =============================================================================
// Types
// =============================================================================

export interface ShopifyCustomer {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  phone?: string;
  createdAt: string;
  state: "DISABLED" | "INVITED" | "ENABLED" | "DECLINED";
}

export interface CustomerAccessToken {
  accessToken: string;
  expiresAt: string;
}

export interface CreateCustomerInput {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  phone?: string;
}

// =============================================================================
// Mock Data for Development
// =============================================================================

export const mockShopifyCustomer: ShopifyCustomer = {
  id: "gid://shopify/Customer/mock-1",
  email: "patient@example.com",
  firstName: "Jane",
  lastName: "Doe",
  phone: "(858) 555-0100",
  createdAt: new Date().toISOString(),
  state: "ENABLED",
};

// =============================================================================
// GraphQL Mutations & Queries
// =============================================================================

const CREATE_CUSTOMER_MUTATION = `
  mutation customerCreate($input: CustomerInput!) {
    customerCreate(input: $input) {
      customer {
        id
        email
        firstName
        lastName
        phone
        createdAt
        state
      }
      userErrors {
        field
        message
      }
    }
  }
`;

const FIND_CUSTOMER_QUERY = `
  query findCustomer($email: String!) {
    customers(first: 1, query: $email) {
      edges {
        node {
          id
          email
          firstName
          lastName
          phone
          createdAt
          state
        }
      }
    }
  }
`;

// Storefront API mutation for customer access token (login)
const CUSTOMER_ACCESS_TOKEN_CREATE = `
  mutation customerAccessTokenCreate($input: CustomerAccessTokenCreateInput!) {
    customerAccessTokenCreate(input: $input) {
      customerAccessToken {
        accessToken
        expiresAt
      }
      customerUserErrors {
        code
        field
        message
      }
    }
  }
`;

const CUSTOMER_CREATE_STOREFRONT = `
  mutation customerCreate($input: CustomerCreateInput!) {
    customerCreate(input: $input) {
      customer {
        id
        email
        firstName
        lastName
        phone
      }
      customerUserErrors {
        code
        field
        message
      }
    }
  }
`;

// =============================================================================
// Storefront API for Customer Auth
// =============================================================================

const STOREFRONT_ACCESS_TOKEN = process.env.SHOPIFY_STOREFRONT_ACCESS_TOKEN || "";
const STOREFRONT_API_URL = `https://${SHOPIFY_DOMAIN}/api/2024-01/graphql.json`;

async function shopifyStorefrontFetch<T>({
  query,
  variables,
}: AdminRequestOptions): Promise<T> {
  if (!STOREFRONT_ACCESS_TOKEN) {
    throw new Error("MOCK_DATA_MODE");
  }

  const response = await fetch(STOREFRONT_API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-Shopify-Storefront-Access-Token": STOREFRONT_ACCESS_TOKEN,
    },
    body: JSON.stringify({ query, variables }),
  });

  if (!response.ok) {
    throw new Error(`Shopify Storefront API error: ${response.status}`);
  }

  const data = await response.json();

  if (data.errors) {
    throw new Error(data.errors[0]?.message || "Shopify Storefront API error");
  }

  return data.data;
}

// =============================================================================
// API Functions
// =============================================================================

/**
 * Create a new customer in Shopify
 */
export async function createCustomer(
  input: CreateCustomerInput
): Promise<ShopifyCustomer> {
  if (IS_DEV || !STOREFRONT_ACCESS_TOKEN) {
    // Return mock customer in development
    return {
      ...mockShopifyCustomer,
      email: input.email,
      firstName: input.firstName,
      lastName: input.lastName,
      phone: input.phone,
    };
  }

  try {
    const data = await shopifyStorefrontFetch<{
      customerCreate: {
        customer: {
          id: string;
          email: string;
          firstName: string;
          lastName: string;
          phone?: string;
        } | null;
        customerUserErrors: Array<{
          code: string;
          field: string[];
          message: string;
        }>;
      };
    }>({
      query: CUSTOMER_CREATE_STOREFRONT,
      variables: {
        input: {
          email: input.email,
          password: input.password,
          firstName: input.firstName,
          lastName: input.lastName,
          phone: input.phone,
          acceptsMarketing: true,
        },
      },
    });

    if (data.customerCreate.customerUserErrors.length > 0) {
      const error = data.customerCreate.customerUserErrors[0];
      throw new Error(error.message);
    }

    if (!data.customerCreate.customer) {
      throw new Error("Failed to create customer");
    }

    const customer = data.customerCreate.customer;
    return {
      id: customer.id,
      email: customer.email,
      firstName: customer.firstName,
      lastName: customer.lastName,
      phone: customer.phone,
      createdAt: new Date().toISOString(),
      state: "ENABLED",
    };
  } catch (error) {
    if (error instanceof Error && error.message === "MOCK_DATA_MODE") {
      return {
        ...mockShopifyCustomer,
        email: input.email,
        firstName: input.firstName,
        lastName: input.lastName,
      };
    }
    throw error;
  }
}

/**
 * Find a customer by email address
 */
export async function findCustomerByEmail(
  email: string
): Promise<ShopifyCustomer | null> {
  if (IS_DEV) {
    // In development, pretend customer exists if email matches mock
    if (email === mockShopifyCustomer.email) {
      return mockShopifyCustomer;
    }
    return null;
  }

  try {
    const data = await shopifyAdminFetch<{
      customers: {
        edges: Array<{
          node: ShopifyCustomer;
        }>;
      };
    }>({
      query: FIND_CUSTOMER_QUERY,
      variables: { email: `email:${email}` },
    });

    if (data.customers.edges.length === 0) {
      return null;
    }

    return data.customers.edges[0].node;
  } catch (error) {
    if (error instanceof Error && error.message === "MOCK_DATA_MODE") {
      return null;
    }
    throw error;
  }
}

/**
 * Authenticate customer and get access token
 */
export async function authenticateCustomer(
  email: string,
  password: string
): Promise<CustomerAccessToken> {
  if (IS_DEV || !STOREFRONT_ACCESS_TOKEN) {
    // Return mock token in development
    return {
      accessToken: "mock-shopify-customer-token",
      expiresAt: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString(),
    };
  }

  try {
    const data = await shopifyStorefrontFetch<{
      customerAccessTokenCreate: {
        customerAccessToken: CustomerAccessToken | null;
        customerUserErrors: Array<{
          code: string;
          field: string[];
          message: string;
        }>;
      };
    }>({
      query: CUSTOMER_ACCESS_TOKEN_CREATE,
      variables: {
        input: {
          email,
          password,
        },
      },
    });

    if (data.customerAccessTokenCreate.customerUserErrors.length > 0) {
      const error = data.customerAccessTokenCreate.customerUserErrors[0];
      throw new Error(error.message);
    }

    if (!data.customerAccessTokenCreate.customerAccessToken) {
      throw new Error("Invalid email or password");
    }

    return data.customerAccessTokenCreate.customerAccessToken;
  } catch (error) {
    if (error instanceof Error && error.message === "MOCK_DATA_MODE") {
      return {
        accessToken: "mock-shopify-customer-token",
        expiresAt: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString(),
      };
    }
    throw error;
  }
}

/**
 * Get customer info using access token
 */
export async function getCustomerByToken(
  accessToken: string
): Promise<ShopifyCustomer | null> {
  if (IS_DEV || !STOREFRONT_ACCESS_TOKEN) {
    return mockShopifyCustomer;
  }

  const CUSTOMER_QUERY = `
    query customer($customerAccessToken: String!) {
      customer(customerAccessToken: $customerAccessToken) {
        id
        email
        firstName
        lastName
        phone
        createdAt
      }
    }
  `;

  try {
    const data = await shopifyStorefrontFetch<{
      customer: {
        id: string;
        email: string;
        firstName: string;
        lastName: string;
        phone?: string;
        createdAt: string;
      } | null;
    }>({
      query: CUSTOMER_QUERY,
      variables: { customerAccessToken: accessToken },
    });

    if (!data.customer) {
      return null;
    }

    return {
      id: data.customer.id,
      email: data.customer.email,
      firstName: data.customer.firstName,
      lastName: data.customer.lastName,
      phone: data.customer.phone,
      createdAt: data.customer.createdAt,
      state: "ENABLED",
    };
  } catch {
    return null;
  }
}

/**
 * Get customer orders
 */
export async function getCustomerOrders(
  accessToken: string
): Promise<Array<{
  id: string;
  orderNumber: number;
  totalPrice: string;
  processedAt: string;
  fulfillmentStatus: string;
  lineItems: Array<{
    title: string;
    quantity: number;
  }>;
}>> {
  if (IS_DEV || !STOREFRONT_ACCESS_TOKEN) {
    // Return mock orders
    return [
      {
        id: "gid://shopify/Order/mock-1",
        orderNumber: 1001,
        totalPrice: "89.00",
        processedAt: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString(),
        fulfillmentStatus: "FULFILLED",
        lineItems: [
          { title: "Hydrating Hyaluronic Serum", quantity: 1 },
        ],
      },
      {
        id: "gid://shopify/Order/mock-2",
        orderNumber: 1002,
        totalPrice: "125.00",
        processedAt: new Date(Date.now() - 14 * 24 * 60 * 60 * 1000).toISOString(),
        fulfillmentStatus: "FULFILLED",
        lineItems: [
          { title: "Vitamin C Brightening Cream", quantity: 1 },
        ],
      },
    ];
  }

  const ORDERS_QUERY = `
    query customerOrders($customerAccessToken: String!, $first: Int!) {
      customer(customerAccessToken: $customerAccessToken) {
        orders(first: $first, sortKey: PROCESSED_AT, reverse: true) {
          edges {
            node {
              id
              orderNumber
              totalPrice {
                amount
              }
              processedAt
              fulfillmentStatus
              lineItems(first: 10) {
                edges {
                  node {
                    title
                    quantity
                  }
                }
              }
            }
          }
        }
      }
    }
  `;

  try {
    const data = await shopifyStorefrontFetch<{
      customer: {
        orders: {
          edges: Array<{
            node: {
              id: string;
              orderNumber: number;
              totalPrice: { amount: string };
              processedAt: string;
              fulfillmentStatus: string;
              lineItems: {
                edges: Array<{
                  node: {
                    title: string;
                    quantity: number;
                  };
                }>;
              };
            };
          }>;
        };
      } | null;
    }>({
      query: ORDERS_QUERY,
      variables: { customerAccessToken: accessToken, first: 10 },
    });

    if (!data.customer) {
      return [];
    }

    return data.customer.orders.edges.map((edge) => ({
      id: edge.node.id,
      orderNumber: edge.node.orderNumber,
      totalPrice: edge.node.totalPrice.amount,
      processedAt: edge.node.processedAt,
      fulfillmentStatus: edge.node.fulfillmentStatus,
      lineItems: edge.node.lineItems.edges.map((item) => ({
        title: item.node.title,
        quantity: item.node.quantity,
      })),
    }));
  } catch {
    return [];
  }
}

