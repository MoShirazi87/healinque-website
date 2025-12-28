import { NextResponse } from "next/server";
import { unifiedLogin } from "@/lib/auth/unified";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { email, password } = body;

    if (!email || !password) {
      return NextResponse.json(
        { 
          success: false,
          error: "Email and password are required",
          errors: { healthie: "Email and password are required" }
        },
        { status: 400 }
      );
    }

    // Authenticate with both Healthie and Shopify
    const result = await unifiedLogin({ email, password });

    if (!result.success) {
      // Determine which error to show
      const primaryError = result.errors.healthie || result.errors.shopify || "Invalid credentials";
      return NextResponse.json(
        { 
          success: false,
          error: primaryError,
          errors: result.errors,
        },
        { status: 401 }
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
      // Partial success warnings (e.g., logged into Healthie but not Shopify)
      warnings: {
        healthie: result.errors.healthie ? `Patient portal: ${result.errors.healthie}` : undefined,
        shopify: result.errors.shopify ? `Shop account: ${result.errors.shopify}` : undefined,
      },
    });
  } catch (error) {
    console.error("Login error:", error);
    return NextResponse.json(
      { 
        success: false,
        error: error instanceof Error ? error.message : "Login failed",
        errors: { healthie: error instanceof Error ? error.message : "Login failed" }
      },
      { status: 500 }
    );
  }
}
