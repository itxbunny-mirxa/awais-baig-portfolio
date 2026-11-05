import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tools & Software Stack | Awais Baig eBay Virtual Assistant",
  description:
    "Review Awais Baig's software ecosystem: Confirmed proficiency in ZIK Analytics, Terapeak, and eBay Seller Hub, plus transparent operational familiarity across logistics and automation software.",
  alternates: {
    canonical: "/tools",
  },
};

export default function ToolsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
