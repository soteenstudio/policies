import type { MetadataRoute } from "next";
import { createSitemap } from "@gaine/nextjs/metadata";
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
    return createSitemap({
        baseUrl: BASE_URL,
        locales,
        pages: [
            { path: "", priority: 1.0 },
            ...policies.map((policy) => ({
                path: `/${policy.slug}`,
                priority: POLICY_PRIORITIES[policy.slug] ?? 0.7,
            })),
        ],
    });
}
