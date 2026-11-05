import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services & Deliverables | Awais Baig eBay Virtual Assistant",
  description:
    "Explore all 9 specialised services for UK and international eBay sellers: store management, product research, listing optimization, order fulfillment, inventory management, customer support, and Cassini SEO.",
  alternates: {
    canonical: "/services",
  },
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
