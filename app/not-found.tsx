import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/config/site";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Page Not Found | Healinque",
  description: `The page you're looking for doesn't exist or has been moved.`,
};

export default function NotFound() {
  return (
    <main className="min-h-screen bg-navy-deep flex flex-col items-center justify-center px-4">
      <div className="text-center max-w-md">
        {/* 404 Number */}
        <div className="mb-6">
          <p className="text-9xl font-serif font-bold text-gold mb-2">404</p>
          <div className="h-1 w-24 bg-gradient-to-r from-gold to-gold-light mx-auto"></div>
        </div>

        {/* Heading */}
        <h1 className="text-4xl md:text-5xl font-serif font-bold text-cream mb-4">
          Page Not Found
        </h1>

        {/* Subtext */}
        <p className="text-lg text-cream/80 mb-8">
          The page you&apos;re looking for doesn&apos;t exist or has been moved. Let&apos;s get you back on track.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild variant="default" size="lg">
            <Link href="/">Back to Home</Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link href="/treatments">View Treatments</Link>
          </Button>
        </div>

        {/* Additional Help Text */}
        <p className="text-sm text-cream/60 mt-8">
          Need assistance?{" "}
          <Link
            href={`tel:${siteConfig.phoneRaw}`}
            className="text-gold hover:text-gold-light transition-colors"
          >
            Call {siteConfig.phone}
          </Link>
        </p>
      </div>
    </main>
  );
}
