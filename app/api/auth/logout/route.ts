import { NextResponse } from "next/server";
import { unifiedLogout } from "@/lib/auth/unified";

export async function POST() {
  try {
    await unifiedLogout();

    return NextResponse.json({
      success: true,
      message: "Logged out successfully",
    });
  } catch (error) {
    console.error("Logout error:", error);
    // Still return success - we want to clear the session even if there's an error
    return NextResponse.json({
      success: true,
      message: "Logged out",
    });
  }
}
