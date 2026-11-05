import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "My Working Process & SOPs | Awais Baig eBay Virtual Assistant",
  description:
    "Discover Awais Baig's structured 4-step onboarding and daily operational workflow: store audit, secure MUAA setup, dispatch cut-off execution, and daily activity logs.",
  alternates: {
    canonical: "/process",
  },
};

export default function ProcessLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
