/**
 * Healthie API Client
 * 
 * This is a placeholder for the Healthie API integration.
 * In production, you'll need to set up:
 * 1. HEALTHIE_API_KEY in your environment variables
 * 2. HEALTHIE_API_URL (sandbox or production)
 * 3. OAuth flow for patient authentication
 */

const HEALTHIE_API_URL = process.env.HEALTHIE_API_URL || "https://api.gethealthie.com/graphql";
const HEALTHIE_API_KEY = process.env.HEALTHIE_API_KEY || "";

interface HealthieRequestOptions {
  query: string;
  variables?: Record<string, unknown>;
  token?: string; // Patient auth token for authenticated requests
}

export async function healthieRequest<T>({
  query,
  variables,
  token,
}: HealthieRequestOptions): Promise<T> {
  const headers: Record<string, string> = {
    "Content-Type": "application/json",
  };

  // Use patient token if provided, otherwise use API key
  if (token) {
    headers["Authorization"] = `Bearer ${token}`;
  } else if (HEALTHIE_API_KEY) {
    headers["Authorization"] = `Basic ${HEALTHIE_API_KEY}`;
  }

  const response = await fetch(HEALTHIE_API_URL, {
    method: "POST",
    headers,
    body: JSON.stringify({ query, variables }),
  });

  if (!response.ok) {
    throw new Error(`Healthie API error: ${response.status}`);
  }

  const data = await response.json();
  
  if (data.errors) {
    throw new Error(data.errors[0]?.message || "Healthie API error");
  }

  return data.data;
}

// Patient Types
export interface HealthiePatient {
  id: string;
  email: string;
  first_name: string;
  last_name: string;
  phone_number?: string;
  dob?: string;
}

export interface HealthieAppointment {
  id: string;
  date: string;
  start_time: string;
  end_time: string;
  appointment_type: {
    id: string;
    name: string;
  };
  provider: {
    id: string;
    full_name: string;
  };
  status: string;
}

// Mock data for development
export const mockPatient: HealthiePatient = {
  id: "mock-patient-id",
  email: "patient@example.com",
  first_name: "Jane",
  last_name: "Doe",
  phone_number: "(858) 555-0100",
  dob: "1985-03-15",
};

export const mockAppointments: HealthieAppointment[] = [
  {
    id: "apt-1",
    date: "2025-01-15",
    start_time: "10:00 AM",
    end_time: "10:45 AM",
    appointment_type: { id: "type-1", name: "Botox Consultation" },
    provider: { id: "prov-1", full_name: "Dr. Azi Shirazi" },
    status: "Scheduled",
  },
  {
    id: "apt-2",
    date: "2024-12-20",
    start_time: "2:00 PM",
    end_time: "2:30 PM",
    appointment_type: { id: "type-2", name: "IV Therapy" },
    provider: { id: "prov-1", full_name: "Dr. Azi Shirazi" },
    status: "Completed",
  },
];

