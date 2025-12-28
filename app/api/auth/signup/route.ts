import { NextResponse } from "next/server";
import { unifiedSignup } from "@/lib/auth/unified";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { firstName, lastName, email, phone, password } = body;

    // Validate required fields
    if (!email || !password || !firstName || !lastName) {
      return NextResponse.json(
        { 
          success: false,
          error: "All required fields must be provided",
          errors: { healthie: "All required fields must be provided" }
        },
        { status: 400 }
      );
    }

    // Validate password strength
    if (password.length < 8) {
      return NextResponse.json(
        { 
          success: false,
          error: "Password must be at least 8 characters",
          errors: { healthie: "Password must be at least 8 characters" }
        },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { 
          success: false,
          error: "Please enter a valid email address",
          errors: { healthie: "Please enter a valid email address" }
        },
        { status: 400 }
      );
    }

    // Create accounts in both Healthie and Shopify
    const result = await unifiedSignup({
      email,
      password,
      firstName,
      lastName,
      phone,
    });

    if (!result.success) {
      // Determine which error to show
      const primaryError = result.errors.healthie || result.errors.shopify || "Signup failed";
      return NextResponse.json(
        { 
          success: false,
          error: primaryError,
          errors: result.errors,
        },
        { status: 400 }
      );
    }

    return NextResponse.json({
      success: true,
      session: {
        email: result.session.email,
        healthie: {
          isAuthenticated: result.session.healthie.isAuthenticated,
          patient: result.session.healthie.patient,
        },
        shopify: {
          isAuthenticated: result.session.shopify.isAuthenticated,
          customer: result.session.shopify.customer,
        },
      },
      // Partial success warnings
      warnings: {
        healthie: result.errors.healthie ? `Patient portal: ${result.errors.healthie}` : undefined,
        shopify: result.errors.shopify ? `Shop account: ${result.errors.shopify}` : undefined,
      },
    });
  } catch (error) {
    console.error("Signup error:", error);
    return NextResponse.json(
      { 
        success: false,
        error: error instanceof Error ? error.message : "Signup failed",
        errors: { healthie: error instanceof Error ? error.message : "Signup failed" }
      },
      { status: 500 }
    );
  }
}
