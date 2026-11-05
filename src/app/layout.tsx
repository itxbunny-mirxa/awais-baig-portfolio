import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { getSiteUrl } from "@/data/siteConfig";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = getSiteUrl();

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Awais Baig | eBay Virtual Assistant & Store Management Specialist",
    template: "%s | Awais Baig",
  },
  description:
    "Professional eBay Virtual Assistant specialising in store management, product research, listing optimisation and eCommerce operations for UK and international sellers.",
  keywords: [
    "eBay Virtual Assistant",
    "eBay VA UK",
    "eBay Store Management",
    "eBay Listing Optimisation",
    "Cassini SEO",
    "Product Research eBay",
    "Terapeak Research",
    "ZIK Analytics",
    "Awais Baig",
    "eBay Specialist Multan",
    "eCommerce Operations"
  ],
  authors: [{ name: "Awais Baig", url: siteUrl }],
  creator: "Awais Baig",
  publisher: "Awais Baig",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: siteUrl,
    title: "Awais Baig | eBay Virtual Assistant & Store Management Specialist",
    description:
      "Professional eBay Virtual Assistant specialising in store management, product research, listing optimisation and eCommerce operations for UK and international sellers.",
    siteName: "Awais Baig — eBay Virtual Assistant",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Awais Baig — eBay Virtual Assistant & Store Management Specialist",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Awais Baig | eBay Virtual Assistant & Store Management Specialist",
    description:
      "Professional eBay Virtual Assistant specialising in store management, product research, listing optimisation and eCommerce operations for UK and international sellers.",
    creator: "@awaisbaig01",
    images: ["/images/og-image.jpg"],
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/favicon.ico",
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
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en-GB" className="scroll-smooth bg-[#F7F7F2] text-[#111827]">
      <body
        className={`${geistSans.variable} ${geistMono.variable} font-sans min-h-screen bg-[#F7F7F2] text-[#111827] flex flex-col antialiased selection:bg-[#6558F5] selection:text-white`}
      >
        <Navbar />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
        <FloatingWhatsApp />
      </body>
    </html>
  );
}
