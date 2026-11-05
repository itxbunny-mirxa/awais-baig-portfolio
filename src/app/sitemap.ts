import type { MetadataRoute } from "next";
import { getSiteUrl } from "@/data/siteConfig";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = getSiteUrl();

  return [
    {
      url: baseUrl,
      lastModified: new Date("2026-11-04T00:00:00Z"),
      changeFrequency: "weekly",
      priority: 1.0,
    },
  ];
}
