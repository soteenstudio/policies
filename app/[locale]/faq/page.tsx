import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { FaqJsonLd } from "@/components/faq/json-ld";
import { FaqList } from "@/components/faq/faq-list";
import { SectionHeading, reveal } from "@gaine/core";
import { siteName } from "@/data/structure";
import { faq } from "@/data/faq";
import { getDictionary } from "@/data/ui";
import { isLocale, locales } from "@/i18n/config";
interface FaqPageProps {
    params: Promise<{
        locale: string;
    }>;
}
export async function generateMetadata({ params }: FaqPageProps): Promise<Metadata> {
    const { locale } = await params;
    if (!isLocale(locale))
        return {};
    const copy = getDictionary(locale).faq;
    return {
        title: copy.eyebrow,
        description: copy.description,
        alternates: { languages: Object.fromEntries(locales.map((l) => [l, `/${l}/faq`])) },
    };
}
export default async function FaqPage({ params }: FaqPageProps) {
    const { locale } = await params;
    if (!isLocale(locale))
        notFound();
    const dict = getDictionary(locale);
    const groups = faq[locale];
    return (<div className="mx-auto max-w-7xl px-5 pb-24 pt-16 sm:px-8 sm:pt-24">
      <FaqJsonLd locale={locale} groups={groups} siteName={siteName}/>

      <div className="grid gap-14 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <div className="lg:sticky lg:top-28">
            <SectionHeading eyebrow={dict.faq.eyebrow} title={dict.faq.title} description={dict.faq.description}/>
            <nav aria-label={dict.faq.eyebrow} className="mt-10 hidden lg:block">
              <ul className="border-l">
                {groups.map((group) => (<li key={group.id}>
                    <a href={`#${group.id}`} className="-ml-px block border-l-2 border-transparent px-4 py-1.5 text-sm text-muted-foreground transition-colors hover:border-brand hover:text-foreground">
                      {group.title}
                    </a>
                  </li>))}
              </ul>
            </nav>
          </div>
        </div>

        <div className="space-y-14 lg:col-span-8">
          {groups.map((group) => (<section key={group.id} id={group.id} className="scroll-mt-header" {...reveal()}>
              <h2 className="mb-5 font-display text-2xl font-semibold tracking-tight">{group.title}</h2>
              <FaqList items={group.items} locale={locale}/>
            </section>))}
        </div>
      </div>

    </div>);
}
