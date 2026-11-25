import { renderOgCover } from "@gaine/nextjs/og";
import { getDictionary } from "@/data/policies";
import { siteName } from "@/data/structure";

export const alt = "SoTeen Studio";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image({ params, }: {
    params: Promise<{
        locale: string;
    }>;
}) {
    const { locale } = await params;
    const dict = getDictionary(locale);
    const doc = dict.privacy ?? dict.terms ?? dict.cookies;
    return renderOgCover({
        brand: siteName,
        title: doc.title,
        description: doc.summary,
        footerStart: `policies.soteenstudio.my.id/${locale}`,
        footerEnd: doc.highlights[0]?.title,
    });
}
