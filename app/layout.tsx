import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Montserrat } from "next/font/google";
import "./globals.css";
import "./mobile.css";
import { Header } from "@/components/navigation/header";
import { Footer } from "@/components/navigation/footer";
import { MobileCtaBar } from "@/components/navigation/mobile-cta-bar";
import { LocalBusinessSchema, PhysicianSchema, MedicalBusinessSchema } from "@/components/seo/schema";
import { Providers } from "@/components/providers";
import { ScrollProgress } from "@/components/ui/scroll-progress";
import { ScrollTint } from "@/components/ui/scroll-tint";
import { AutoReveal } from "@/components/ui/auto-reveal";
import { FlipOnTap } from "@/components/ui/flip-on-tap";
import { InteractionEngine } from "@/components/ui/interaction-engine";
import { siteConfig } from "@/lib/config/site";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-cormorant",
  display: "swap",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-montserrat",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#0a1628",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.urls.baseUrl),
  title: {
    default: siteConfig.seo.title,
    template: `%s | ${siteConfig.name}`,
  },
  description:
    "Physician-led aesthetics, regenerative medicine & longevity care in Poway, CA. Led by Dr. Azadeh Shirazi, MD with 20+ years experience. Botox, fillers, PRP, hair restoration & more.",
  keywords: siteConfig.seo.keywords,
  authors: [{ name: "Dr. Azadeh Shirazi, MD" }],
  creator: "Healinque Wellness & Longevity Center",
  publisher: "Healinque",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: siteConfig.urls.baseUrl,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.urls.baseUrl,
    siteName: siteConfig.name,
    title: siteConfig.seo.title,
    description: siteConfig.seo.description,
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Healinque - Aesthetic Medicine & Longevity Center",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Healinque | Medical Spa & Longevity Center in Poway, CA",
    description:
      "Physician-performed aesthetic treatments and longevity medicine. Dr. Azi Shirazi, 20+ years experience.",
    images: ["/images/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_VERIFICATION || "",
  },
  category: "Medical Spa",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${cormorant.variable} ${montserrat.variable}`}>
      <head>
        <link rel="icon" href="/images/favicon-32.png" sizes="32x32" type="image/png" />
        <link rel="icon" href="/images/favicon-512.png" sizes="512x512" type="image/png" />
        <link rel="apple-touch-icon" href="/images/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <LocalBusinessSchema />
        <PhysicianSchema />
        <MedicalBusinessSchema />
      </head>
      <body className="min-h-screen flex flex-col">
        <Providers>
          <ScrollProgress />
          <ScrollTint />
          <AutoReveal />
          <FlipOnTap />
          <InteractionEngine />
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
          <MobileCtaBar />
        </Providers>
      </body>
    </html>
  );
}
