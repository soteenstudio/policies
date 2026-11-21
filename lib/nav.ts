import type { Dictionary } from "@/data/ui";
import { policies } from "@/data/policies";
import type { Locale } from "@/i18n/config";
import { faqHref, homeHref, policyHref } from "@/lib/routes";

export interface NavEntry {
  id: string;
  href: string;
  label: string;
}

/** Entri navigasi utama (header, menu seluler, footer). Dibangun dari registry dokumen. */
export function getNavEntries(locale: Locale, dict: Dictionary): NavEntry[] {
  return [
    { id: "home", href: homeHref(locale), label: dict.header.overview },
    ...getPageEntries(locale, dict),
  ];
}

/** Semua halaman selain ikhtisar, berurutan. Dipakai juga untuk tombol sebelumnya/selanjutnya. */
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
