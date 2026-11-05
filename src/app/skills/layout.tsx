import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Skills & Technical Expertise | Awais Baig eBay Virtual Assistant",
  description:
    "Explore Awais Baig's verified skill domains: eBay store operations, Cassini search optimization, Terapeak & ZIK Analytics product research, order dispatch triage, and account health compliance.",
  alternates: {
    canonical: "/skills",
  },
};

export default function SkillsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
