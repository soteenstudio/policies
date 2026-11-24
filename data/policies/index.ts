import { cookies } from "./cookies";
import { privacy } from "./privacy";
import { terms } from "./terms";
import { locales, type Locale } from "@/i18n/config";
import type { PolicyContent, PolicyDef } from "@/types";
export const policies: PolicyDef[] = [privacy, terms, cookies];
export function getPolicy(slug: string): PolicyDef | undefined {
    return policies.find((policy) => policy.slug === slug);
}
export const reservedSlugs = ["faq"] as const;
type PolicySlug = (typeof policies)[number]["slug"];
export type PolicyDictionary = Record<PolicySlug, PolicyContent>;
function resolveLocale(locale: string): Locale {
    return (locales as readonly string[]).includes(locale)
        ? (locale as Locale)
        : "id";
}
function extractPolicyContent(policy: PolicyDef, lang: Locale): PolicyContent {
    return (policy.content[lang] ??
        policy.content.id ??
        Object.values(policy.content)[0]);
}
export function getDictionary(locale: string): PolicyDictionary {
    const lang = resolveLocale(locale);
    return Object.fromEntries(policies.map((policy) => [policy.slug, extractPolicyContent(policy, lang)])) as PolicyDictionary;
}
