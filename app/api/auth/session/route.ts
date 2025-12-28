import { NextResponse } from "next/server";
import { getUnifiedSession } from "@/lib/auth/unified";

export async function GET() {
  try {
    const session = await getUnifiedSession();

    return NextResponse.json({
      isAuthenticated: session.isAuthenticated,
      email: session.email,
      healthie: {
        isAuthenticated: session.healthie.isAuthenticated,
        patient: session.healthie.patient ? {
          id: session.healthie.patient.id,
          email: session.healthie.patient.email,
          firstName: session.healthie.patient.first_name,
          lastName: session.healthie.patient.last_name,
          phone: session.healthie.patient.phone_number,
        } : null,
      },
      shopify: {
        isAuthenticated: session.shopify.isAuthenticated,
        customer: session.shopify.customer ? {
          id: session.shopify.customer.id,
          email: session.shopify.customer.email,
          firstName: session.shopify.customer.firstName,
          lastName: session.shopify.customer.lastName,
          phone: session.shopify.customer.phone,
        } : null,
      },
    });
  } catch (error) {
    console.error("Session error:", error);
    return NextResponse.json({
      isAuthenticated: false,
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
}

