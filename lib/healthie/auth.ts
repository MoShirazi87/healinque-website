/**
 * Healthie Authentication
 * 
 * This module handles patient authentication via Healthie's OAuth flow.
 * In production, implement:
 * 1. Login via Healthie patient portal
 * 2. Token storage (httpOnly cookies)
 * 3. Token refresh
 * 4. Logout
 */

import { cookies } from "next/headers";
import { healthieRequest, type HealthiePatient, mockPatient } from "./client";

const AUTH_COOKIE_NAME = "healinque_auth";
const IS_DEV = process.env.NODE_ENV === "development";

// GraphQL queries
const CURRENT_USER_QUERY = `
  query CurrentUser {
    currentUser {
      id
      email
      first_name
      last_name
      phone_number
      dob
    }
  }
`;

const LOGIN_MUTATION = `
  mutation SignIn($email: String!, $password: String!) {
    signIn(input: { email: $email, password: $password }) {
      user {
        id
        email
        first_name
        last_name
      }
      token
    }
  }
`;

const SIGNUP_MUTATION = `
  mutation CreatePatient($input: createClientInput!) {
    createClient(input: $input) {
      user {
        id
        email
        first_name
        last_name
      }
      token
    }
  }
`;

export interface AuthSession {
  isAuthenticated: boolean;
  patient: HealthiePatient | null;
  token: string | null;
}

export async function getSession(): Promise<AuthSession> {
  // In development, return mock session
  if (IS_DEV) {
    const cookieStore = await cookies();
    const mockAuth = cookieStore.get("mock_auth");
    if (mockAuth) {
      return {
        isAuthenticated: true,
        patient: mockPatient,
        token: "mock-token",
      };
    }
  }

  const cookieStore = await cookies();
  const authCookie = cookieStore.get(AUTH_COOKIE_NAME);

  if (!authCookie?.value) {
    return { isAuthenticated: false, patient: null, token: null };
  }

  try {
    const token = authCookie.value;
    const data = await healthieRequest<{ currentUser: HealthiePatient }>({
      query: CURRENT_USER_QUERY,
      token,
    });

    return {
      isAuthenticated: true,
      patient: data.currentUser,
      token,
    };
  } catch {
    // Token is invalid, clear it
    return { isAuthenticated: false, patient: null, token: null };
  }
}

export interface LoginInput {
  email: string;
  password: string;
}

export interface SignupInput {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  phone?: string;
  dob?: string;
}

export async function login(input: LoginInput): Promise<AuthSession> {
  // Mock login for development
  if (IS_DEV) {
    if (input.email && input.password) {
      // Set mock cookie
      const cookieStore = await cookies();
      cookieStore.set("mock_auth", "true", {
        httpOnly: true,
        secure: true,
        sameSite: "lax",
        maxAge: 60 * 60 * 24 * 7, // 1 week
      });
      return {
        isAuthenticated: true,
        patient: mockPatient,
        token: "mock-token",
      };
    }
    throw new Error("Invalid credentials");
  }

  const data = await healthieRequest<{
    signIn: { user: HealthiePatient; token: string };
  }>({
    query: LOGIN_MUTATION,
    variables: input as unknown as Record<string, unknown>,
  });

  // Store token in httpOnly cookie
  const cookieStore = await cookies();
  cookieStore.set(AUTH_COOKIE_NAME, data.signIn.token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    maxAge: 60 * 60 * 24 * 7, // 1 week
  });

  return {
    isAuthenticated: true,
    patient: data.signIn.user,
    token: data.signIn.token,
  };
}

export async function signup(input: SignupInput): Promise<AuthSession> {
  // Mock signup for development
  if (IS_DEV) {
    const cookieStore = await cookies();
    cookieStore.set("mock_auth", "true", {
      httpOnly: true,
      secure: true,
      sameSite: "lax",
      maxAge: 60 * 60 * 24 * 7,
    });
    return {
      isAuthenticated: true,
      patient: {
        ...mockPatient,
        email: input.email,
        first_name: input.firstName,
        last_name: input.lastName,
      },
      token: "mock-token",
    };
  }

  const data = await healthieRequest<{
    createClient: { user: HealthiePatient; token: string };
  }>({
    query: SIGNUP_MUTATION,
    variables: {
      input: {
        email: input.email,
        password: input.password,
        first_name: input.firstName,
        last_name: input.lastName,
        phone_number: input.phone,
        dob: input.dob,
      },
    },
  });

  const cookieStore = await cookies();
  cookieStore.set(AUTH_COOKIE_NAME, data.createClient.token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    maxAge: 60 * 60 * 24 * 7,
  });

  return {
    isAuthenticated: true,
    patient: data.createClient.user,
    token: data.createClient.token,
  };
}

export async function logout(): Promise<void> {
  const cookieStore = await cookies();
  cookieStore.delete(AUTH_COOKIE_NAME);
  cookieStore.delete("mock_auth");
}

