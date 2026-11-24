import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Check, ChevronRight, Info } from "lucide-react";
import { PolicyJsonLd } from "@/components/policy/json-ld";
import { PolicyBlocks } from "@/components/policy/policy-blocks";
import { Pager } from "@/components/policy/pager";
import { PrintButton } from "@/components/policy/print-button";
import { Toc } from "@/components/policy/toc";
import { VersionHistory } from "@/components/policy/version-history";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { siteName } from "@/data/structure";
import { getPolicy, policies } from "@/data/policies";
import { isDummyContent } from "@/data/site";
import { getDictionary } from "@/data/ui";
import { isLocale, locales } from "@/i18n/config";
import { formatDate, renderInline } from "@/lib/format";
import { getPageEntries } from "@/lib/nav";
import { reveal } from "@/lib/reveal";
import { homeHref } from "@/lib/routes";

interface PolicyPageProps {
  params: Promise<{ locale: string; slug: string }>;
}

const HISTORY_ID = "history";

export function generateStaticParams() {
  return locales.flatMap((locale) => policies.map((policy) => ({ locale, slug: policy.slug })));
}

export async function generateMetadata({ params }: PolicyPageProps): Promise<Metadata> {
  const { locale, slug } = await params;
  const policy = getPolicy(slug);
  if (!isLocale(locale) || !policy) return {};
  const content = policy.content[locale];

  return {
    title: content.title,
    description: content.summary,
    alternates: {
      languages: Object.fromEntries(locales.map((l) => [l, `/${l}/${policy.slug}`])),
    },
  };
}

export default async function PolicyPage({ params }: PolicyPageProps) {
  const { locale, slug } = await params;
  const policy = getPolicy(slug);
  if (!isLocale(locale) || !policy) notFound();

  const dict = getDictionary(locale);
  const copy = dict.policy;
  const content = policy.content[locale];
  const Icon = policy.icon;

  const pages = getPageEntries(locale, dict);
  const index = pages.findIndex((page) => page.id === policy.slug);
  const previous = index > 0 ? pages[index - 1] : undefined;
  const next = index >= 0 ? pages[index + 1] : undefined;

  const tocItems = [
    ...content.sections.map((section) => ({ id: section.id, title: section.title })),
    { id: HISTORY_ID, title: copy.history },
  ];

  return (
    <article className="mx-auto max-w-7xl px-5 pb-24 pt-10 sm:px-8 sm:pt-14">
      <PolicyJsonLd
        locale={locale}
        policy={policy}
        doc={content}
        siteName={siteName}
      />

      <nav aria-label="Breadcrumb" data-print-hide>
        <ol className="flex items-center gap-1.5 text-sm text-muted-foreground">
          <li>
            <Link href={homeHref(locale)} className="transition-colors hover:text-foreground">
              {copy.breadcrumbHome}
            </Link>
          </li>
          <ChevronRight aria-hidden className="size-4" />
          <li aria-current="page" className="font-medium text-foreground">
            {content.title}
          </li>
        </ol>
      </nav>

      <header className="mt-10 grid gap-10 lg:grid-cols-12">
        <div className="lg:col-span-8">
          <span {...reveal(0)} className="grid size-14 place-items-center rounded-2xl bg-brand text-brand-foreground">
            <Icon className="size-6" />
          </span>
          <h1
            {...reveal(100)}
            className="mt-8 font-display text-4xl font-semibold tracking-tight text-balance sm:text-5xl lg:text-6xl"
          >
            {content.title}
          </h1>
          <div {...reveal(200)} className="mt-6 max-w-2xl space-y-4 text-lg leading-relaxed text-muted-foreground sm:text-xl">
            {content.intro.map((paragraph, i) => (
              <p key={i}>{renderInline(paragraph, locale)}</p>
            ))}
          </div>
        </div>

        <aside className="lg:col-span-4 lg:pt-[5.5rem]">
          <div {...reveal(250, "right")} className="space-y-5 rounded-3xl border p-7">
            <div>
              <p className="text-sm text-muted-foreground">{copy.effective}</p>
              <p className="mt-1 font-display text-xl font-semibold tracking-tight">
                <time dateTime={policy.effectiveDate}>{formatDate(policy.effectiveDate, locale)}</time>
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-3 border-t pt-5">
              <PrintButton label={copy.print} />
              <Button asChild variant="ghost" size="sm" data-print-hide>
                <a href={`#${HISTORY_ID}`}>{copy.history}</a>
              </Button>
            </div>
          </div>
        </aside>
      </header>

      {isDummyContent ? (
        <div
          {...reveal(0)}
          data-print-hide
          className="mt-10 flex items-start gap-4 rounded-2xl border border-amber-200 bg-amber-50 p-5 dark:border-amber-500/30 dark:bg-amber-500/10"
        >
          <Info aria-hidden className="mt-0.5 size-5 shrink-0 text-amber-600 dark:text-amber-300" />
          <div className="space-y-1">
            <p className="font-semibold">{copy.dummyNotice.title}</p>
            <p className="text-[0.9375rem] leading-relaxed text-muted-foreground">{copy.dummyNotice.text}</p>
          </div>
        </div>
      ) : null}

      <section aria-label={copy.highlights} className="mt-12">
        <ul className="grid gap-px overflow-hidden rounded-3xl border bg-border md:grid-cols-3">
          {content.highlights.map((highlight, i) => (
            <li key={highlight.title} {...reveal(i * 100)} className="bg-background p-7">
              <Check aria-hidden className="size-5 text-brand" />
              <h2 className="mt-6 font-display text-lg font-semibold tracking-tight">{highlight.title}</h2>
              <p className="mt-2 leading-relaxed text-muted-foreground">{highlight.text}</p>
            </li>
          ))}
        </ul>
      </section>

      <div className="mt-16 grid gap-10 lg:grid-cols-[15rem_minmax(0,1fr)] lg:gap-16">
        <Toc title={copy.onThisPage} items={tocItems} />

        <div className="max-w-3xl">
          {content.sections.map((section, i) => (
            <section
              key={section.id}
              id={section.id}
              {...reveal()}
              className={`scroll-mt-header py-10 ${i === 0 ? "pt-0" : "border-t"}`}
            >
              <h2 className="font-display text-2xl font-semibold tracking-tight">{section.title}</h2>
              <div className="mt-5 space-y-5">
                <PolicyBlocks blocks={section.blocks} locale={locale} />
              </div>
            </section>
          ))}

          <VersionHistory id={HISTORY_ID} versions={policy.versions} locale={locale} copy={copy} />
        </div>
      </div>

      <div className="mt-16">
        <Pager previous={previous} next={next} previousLabel={copy.previous} nextLabel={copy.next} />
      </div>
    </article>
  );
}
