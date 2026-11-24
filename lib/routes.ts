import type { Locale } from "@/i18n/config";
export function homeHref(locale: Locale): string {
    return `/${locale}`;
}
export function policyHref(locale: Locale, slug: string, anchor?: string): string {
    return `/${locale}/${slug}${anchor ? `#${anchor}` : ""}`;
}
export function faqHref(locale: Locale): string {
    return `/${locale}/faq`;
}
