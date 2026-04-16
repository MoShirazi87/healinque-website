/**
 * Pabau API Client
 *
 * REST API integration with Pabau practice management system.
 * Handles patient creation, appointment booking, and treatment sync.
 *
 * Setup:
 * 1. Get your API key from Pabau support (Settings → Integrations → API)
 * 2. Set PABAU_API_KEY in your .env.local
 * 3. Set PABAU_COMPANY_SLUG in your .env.local (your clinic's URL slug)
 *
 * Docs: https://docs.developers-qa.pabau.com/docs/intro
 * Base URL: https://api.pabau.com
 * Auth: Bearer token in Authorization header
 * Rate limits: 110 req/min (standard), 190 req/min (enterprise)
 */

const PABAU_API_BASE = process.env.PABAU_API_URL || 'https://api.pabau.com';
const PABAU_API_KEY = process.env.PABAU_API_KEY || '';

// ─── Types ───────────────────────────────────────────────────────────────

export interface PabauPatient {
  id?: number;
  first_name: string;
  last_name: string;
  email: string;
  phone?: string;
  date_of_birth?: string;
  gender?: 'male' | 'female' | 'other';
  notes?: string;
}

export interface PabauAppointment {
  id?: number;
  patient_id: number;
  treatment_id?: number;
  start_date: string; // ISO 8601
  end_date?: string;
  notes?: string;
  status?: 'pending' | 'confirmed' | 'cancelled' | 'completed';
}

export interface PabauTreatment {
  id: number;
  name: string;
  duration?: number;
  price?: number;
  category?: string;
}

// ─── Client ──────────────────────────────────────────────────────────────

class PabauClient {
  private baseUrl: string;
  private apiKey: string;

  constructor() {
    this.baseUrl = PABAU_API_BASE;
    this.apiKey = PABAU_API_KEY;
  }

  get isConfigured(): boolean {
    return !!this.apiKey;
  }

  private async request<T>(
    endpoint: string,
    options: RequestInit = {}
  ): Promise<T> {
    if (!this.isConfigured) {
      throw new Error(
        'Pabau API key not configured. Set PABAU_API_KEY in .env.local'
      );
    }

    const url = `${this.baseUrl}${endpoint}`;
    const response = await fetch(url, {
      ...options,
      headers: {
        'Authorization': `Bearer ${this.apiKey}`,
        'Content-Type': 'application/json',
        ...options.headers,
      },
    });

    if (!response.ok) {
      const errorBody = await response.text();
      throw new Error(
        `Pabau API error (${response.status}): ${errorBody}`
      );
    }

    return response.json();
  }

  // ─── Patients ────────────────────────────────────────────────────────

  async getPatient(patientId: number): Promise<PabauPatient> {
    return this.request<PabauPatient>(`/patients/${patientId}`);
  }

  async createPatient(patient: PabauPatient): Promise<PabauPatient> {
    return this.request<PabauPatient>('/patients', {
      method: 'POST',
      body: JSON.stringify(patient),
    });
  }

  async updatePatient(
    patientId: number,
    updates: Partial<PabauPatient>
  ): Promise<PabauPatient> {
    return this.request<PabauPatient>(`/patients/${patientId}`, {
      method: 'PATCH',
      body: JSON.stringify(updates),
    });
  }

  async searchPatientByEmail(email: string): Promise<PabauPatient | null> {
    try {
      const results = await this.request<PabauPatient[]>(
        `/patients?email=${encodeURIComponent(email)}`
      );
      return results.length > 0 ? results[0] : null;
    } catch {
      return null;
    }
  }

  // ─── Appointments ────────────────────────────────────────────────────

  async getAppointment(appointmentId: number): Promise<PabauAppointment> {
    return this.request<PabauAppointment>(
      `/appointments/${appointmentId}`
    );
  }

  async createAppointment(
    appointment: PabauAppointment
  ): Promise<PabauAppointment> {
    return this.request<PabauAppointment>('/appointments', {
      method: 'POST',
      body: JSON.stringify(appointment),
    });
  }

  async listAppointments(): Promise<PabauAppointment[]> {
    return this.request<PabauAppointment[]>('/appointments');
  }

  // ─── Treatments ──────────────────────────────────────────────────────

  async listTreatments(): Promise<PabauTreatment[]> {
    return this.request<PabauTreatment[]>('/treatments');
  }

  async getTreatment(treatmentId: number): Promise<PabauTreatment> {
    return this.request<PabauTreatment>(`/treatments/${treatmentId}`);
  }
}

// ─── Singleton Export ────────────────────────────────────────────────────

export const pabau = new PabauClient();

// ─── Helper: Create patient from form submission ─────────────────────────

export async function createPatientFromForm(data: {
  name: string;
  email: string;
  phone?: string;
  concern?: string;
  message?: string;
}): Promise<PabauPatient | null> {
  if (!pabau.isConfigured) return null;

  const nameParts = data.name.trim().split(/\s+/);
  const firstName = nameParts[0] || data.name;
  const lastName = nameParts.slice(1).join(' ') || '';

  // Check if patient already exists
  const existing = await pabau.searchPatientByEmail(data.email);
  if (existing) return existing;

  // Create new patient
  return pabau.createPatient({
    first_name: firstName,
    last_name: lastName,
    email: data.email,
    phone: data.phone,
    notes: [
      data.concern ? `Concern: ${data.concern}` : '',
      data.message ? `Message: ${data.message}` : '',
      `Source: Healinque website form`,
    ]
      .filter(Boolean)
      .join('\n'),
  });
}
