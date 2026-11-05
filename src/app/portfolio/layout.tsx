import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Portfolio & Interactive Demonstrations | Awais Baig eBay Virtual Assistant",
  description:
    "Explore 5 interactive demonstration dashboards showcasing eBay Cassini SEO, Terapeak & ZIK product research calculators, daily store health triage, and dropshipping fulfillment workflows.",
  alternates: {
    canonical: "/portfolio",
  },
};

export default function PortfolioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
