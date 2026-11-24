import type { Locale } from "@/i18n/config";
import type { PolicyContent, PolicyDef } from "@/types";
const BASE_URL = "https://policies.soteenstudio.my.id";
interface PolicyJsonLdProps {
    locale: Locale;
    policy: PolicyDef;
    doc: PolicyContent;
    siteName: string;
}
export function PolicyJsonLd({ locale, policy, doc, siteName, }: PolicyJsonLdProps) {
    const url = `${BASE_URL}/${locale}/${policy.slug}`;
    const dateModified = policy.versions[0]?.date ?? policy.effectiveDate;
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "WebPage",
        name: doc.title,
        description: doc.summary,
        url,
        inLanguage: locale,
        dateModified,
        isPartOf: {
            "@type": "WebSite",
            name: siteName,
            url: BASE_URL,
        },
        breadcrumb: {
            "@type": "BreadcrumbList",
            itemListElement: [
                {
                    "@type": "ListItem",
                    position: 1,
                    name: locale === "id" ? "Beranda" : "Home",
                    item: `${BASE_URL}/${locale}`,
                },
                {
                    "@type": "ListItem",
                    position: 2,
                    name: doc.title,
                    item: url,
                },
            ],
        },
    };
    return (<script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}/>);
}
