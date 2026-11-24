import type { Dictionary } from "@/data/ui";
import { policies } from "@/data/policies";
import type { Locale } from "@/i18n/config";
import { faqHref, homeHref, policyHref } from "@/lib/routes";
export interface NavEntry {
    id: string;
    href: string;
    label: string;
}
export function getNavEntries(locale: Locale, dict: Dictionary): NavEntry[] {
    return [
        { id: "home", href: homeHref(locale), label: dict.header.overview },
        ...getPageEntries(locale, dict),
    ];
}
export function getPageEntries(locale: Locale, dict: Dictionary): NavEntry[] {
    return [
        ...policies.map((policy) => ({
            id: policy.slug,
            href: policyHref(locale, policy.slug),
            label: policy.content[locale].title,
        })),
        { id: "faq", href: faqHref(locale), label: dict.header.faq },
    ];
}
