import type { Locale } from "@/i18n/config";
import type { FaqGroup } from "@/types";
const BASE_URL = "https://policies.soteenstudio.my.id";
interface FaqJsonLdProps {
    locale: Locale;
    groups: FaqGroup[];
    siteName: string;
}
function stripMarkdownLinks(text: string): string {
    return text
        .replace(/\*\*(.*?)\*\*/g, "$1")
        .replace(/\[([^\]]+)\]\([^)]+\)/g, "$1")
        .trim();
}
export function FaqJsonLd({ locale, groups, siteName }: FaqJsonLdProps) {
    const items = groups.flatMap((group) => group.items);
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        url: `${BASE_URL}/${locale}/faq`,
        inLanguage: locale,
        publisher: {
            "@type": "Organization",
            name: siteName,
            url: BASE_URL,
        },
        mainEntity: items.map((item) => ({
            "@type": "Question",
            name: stripMarkdownLinks(item.question),
            acceptedAnswer: {
                "@type": "Answer",
                text: item.answer.map(stripMarkdownLinks).join(" "),
            },
        })),
    };
    return (<script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}/>);
}
