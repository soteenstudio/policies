import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import { ScrollReveal, ThemeSync } from "@gaine/nextjs";
import { site } from "@/data/site";
import { getDictionary } from "@/data/ui";
import { isLocale, locales } from "@/i18n/config";
import { getNavEntries } from "@/lib/nav";
import { revealInitScript, themeInitScript } from "@gaine/core";
import "../globals.css";
import "@gaine/core/reveal.css";
const sans = Inter({ subsets: ["latin"], variable: "--font-sans", display: "swap" });
const display = Plus_Jakarta_Sans({ subsets: ["latin"], variable: "--font-display", display: "swap" });
interface LocaleLayoutProps {
    children: React.ReactNode;
    params: Promise<{
        locale: string;
    }>;
}
export function generateStaticParams() {
    return locales.map((locale) => ({ locale }));
}
export async function generateMetadata({ params }: Pick<LocaleLayoutProps, "params">): Promise<Metadata> {
    const { locale } = await params;
    if (!isLocale(locale))
        return {};
    const dict = getDictionary(locale);
    return {
        title: { default: `${dict.meta.title} | ${site.name}`, template: `%s | ${site.name}` },
        description: dict.meta.description,
    };
}
export default async function LocaleLayout({ children, params }: LocaleLayoutProps) {
    const { locale } = await params;
    if (!isLocale(locale))
        notFound();
    const dict = getDictionary(locale);
    const entries = getNavEntries(locale, dict);
    return (<html lang={locale} className={`${sans.variable} ${display.variable}`} data-scroll-behavior="smooth" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }}/>
      </head>
      <body className="flex min-h-screen flex-col">
        <ThemeSync />
        <ScrollReveal />
        <a href="#content" className="sr-only z-50 rounded-full bg-primary px-4 py-2 text-sm font-medium text-primary-foreground focus:not-sr-only focus:fixed focus:left-4 focus:top-4">
          {dict.header.skipToContent}
        </a>
        <Header locale={locale} copy={dict.header} entries={entries}/>
        <main id="content" className="flex-1">
          {children}
        </main>
        <Footer locale={locale} dict={dict} entries={entries}/>
        <script dangerouslySetInnerHTML={{ __html: revealInitScript }}/>
      </body>
    </html>);
}
