import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Professional Experience | Awais Baig eBay Virtual Assistant",
  description:
    "Explore Awais Baig's 2–3 years professional timeline: from foundational Seller Hub administration to Cassini algorithm SEO engineering and dedicated UK store retainers.",
  alternates: {
    canonical: "/experience",
  },
};

export default function ExperienceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
