import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Hero } from "@/components/home/hero";
import { PolicyCards } from "@/components/home/policy-cards";
import { getDictionary } from "@/data/ui";
import { isLocale, locales } from "@/i18n/config";
interface HomePageProps {
    params: Promise<{
        locale: string;
    }>;
}
export async function generateMetadata({ params }: HomePageProps): Promise<Metadata> {
    const { locale } = await params;
    if (!isLocale(locale))
        return {};
    return {
        alternates: { languages: Object.fromEntries(locales.map((l) => [l, `/${l}`])) },
    };
}
export default async function HomePage({ params }: HomePageProps) {
    const { locale } = await params;
    if (!isLocale(locale))
        notFound();
    const dict = getDictionary(locale);
    return (<>
      <Hero locale={locale} copy={dict.home}/>
      <PolicyCards locale={locale} dict={dict}/>
    </>);
}
