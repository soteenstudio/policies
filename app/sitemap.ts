import type { MetadataRoute } from "next";
import { locales } from "@/i18n/config";
import { policies } from "@/data/policies";

const BASE_URL = "https://soteenstudio.my.id";

const POLICY_PRIORITIES: Record<string, number> = {
  privacy: 0.9,
  terms: 0.9,
  faq: 0.8,
  cookies: 0.7,
};

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const entries: MetadataRoute.Sitemap = [];

  for (const locale of locales) {
    entries.push({
      url: `${BASE_URL}/${locale}`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1.0,
    });

    for (const policy of policies) {
      entries.push({
        url: `${BASE_URL}/${locale}/${policy.slug}`,
        lastModified: now,
        changeFrequency: "weekly",
        priority: POLICY_PRIORITIES[policy.slug] ?? 0.7,
      });
    }
  }

  return entries;
}