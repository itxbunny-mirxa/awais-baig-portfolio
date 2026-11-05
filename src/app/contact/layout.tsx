import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Awais Baig | eBay Virtual Assistant Consultation",
  description:
    "Get in touch with Awais Baig for eBay store management, listing optimization, and product research consultations. Verified email: awaisbaig138@gmail.com. Fast response within UK business hours.",
  alternates: {
    canonical: "/contact",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
