"use client";

import { useEffect } from "react";
import Link from "next/link";
import { AlertCircle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function Error({ error, reset }: ErrorProps) {
  useEffect(() => {
    // Log error for debugging
    console.error("Application error:", error);
  }, [error]);

  return (
    <main className="min-h-screen bg-navy-deep flex flex-col items-center justify-center px-4">
      <div className="text-center max-w-md">
        {/* Error Icon */}
        <div className="mb-6 flex justify-center">
          <div className="rounded-full bg-gold/10 border border-gold/30 p-4">
            <AlertCircle className="w-12 h-12 text-gold" />
          </div>
        </div>

        {/* Heading */}
        <h1 className="text-4xl md:text-5xl font-serif font-bold text-cream mb-4">
          Something Went Wrong
        </h1>

        {/* Subtext */}
        <p className="text-lg text-cream/80 mb-8">
          We&apos;re sorry for the inconvenience. An unexpected error occurred. Please try again or return to the home page.
        </p>

        {/* Error Details (in development) */}
        {process.env.NODE_ENV === "development" && error?.message && (
          <div className="mb-8 p-4 bg-red-500/10 border border-red-500/30 rounded-lg text-left">
            <p className="text-sm text-red-300 font-mono">{error.message}</p>
          </div>
        )}

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button onClick={reset} variant="default" size="lg" className="gap-2">
            Try Again
            <ArrowRight className="w-4 h-4" />
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link href="/">Back to Home</Link>
          </Button>
        </div>
      </div>
    </main>
  );
}
