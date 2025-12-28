import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Montserrat } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/navigation/header";
import { Footer } from "@/components/navigation/footer";
import { MobileCtaBar } from "@/components/navigation/mobile-cta-bar";
import { LocalBusinessSchema, PhysicianSchema, MedicalBusinessSchema } from "@/components/seo/schema";
import { Providers } from "@/components/providers";

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
  metadataBase: new URL("https://healinque.com"),
  title: {
    default: "Healinque | Premier Medical Spa & Longevity Center in Poway, CA",
    template: "%s | Healinque",
  },
  description:
    "Physician-performed aesthetic treatments and longevity medicine in Poway, CA. Led by Dr. Azi Shirazi with 20+ years experience. Botox, fillers, Morpheus8, weight loss, hormone therapy & more.",
  keywords: [
    "medical spa poway",
    "medical spa san diego",
    "botox poway",
    "botox san diego",
    "dermal fillers poway",
    "dermal fillers san diego",
    "morpheus8 poway",
    "morpheus8 san diego",
    "weight loss clinic poway",
    "semaglutide san diego",
    "tirzepatide san diego",
    "hormone therapy poway",
    "bhrt san diego",
    "prp therapy poway",
    "aesthetic medicine poway",
    "longevity medicine san diego",
    "dr azi shirazi",
    "healinque",
    "anti aging poway",
    "med spa near me",
  ],
  authors: [{ name: "Dr. Azadeh Shirazi, MD" }],
  creator: "Healinque Wellness Clinic",
  publisher: "Healinque",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: "https://healinque.com",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://healinque.com",
    siteName: "Healinque - Aesthetic Medicine & Longevity Center",
    title: "Healinque | Premier Medical Spa & Longevity Center in Poway, CA",
    description:
      "Look younger, feel younger, live longer. Physician-performed aesthetic treatments and longevity medicine. Led by Dr. Azi Shirazi with 20+ years experience.",
    images: [
      {
        url: "/images/og-home.jpg",
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
    images: ["/images/og-home.jpg"],
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
    google: "your-google-verification-code",
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
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <LocalBusinessSchema />
        <PhysicianSchema />
        <MedicalBusinessSchema />
      </head>
      <body className="min-h-screen flex flex-col">
        <Providers>
          <Header />
          <main className="flex-1 pb-16 lg:pb-0">{children}</main>
          <Footer />
          <MobileCtaBar />
        </Providers>
      </body>
    </html>
  );
}
