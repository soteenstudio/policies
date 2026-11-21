import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { SectionHeading } from "@/components/shared/section-heading";
import { policies } from "@/data/policies";
import { recentUpdatesLimit } from "@/data/structure";
import type { Dictionary } from "@/data/ui";
import type { Locale } from "@/i18n/config";
import { formatDate, renderInline } from "@/lib/format";
import { reveal } from "@/lib/reveal";
import { policyHref } from "@/lib/routes";

/** Dibangun otomatis dari `versions` setiap dokumen, jadi tidak perlu diubah saat ada versi baru. */
export function RecentUpdates({ locale, copy }: { locale: Locale; copy: Dictionary["home"]["updates"] }) {
  const updates = policies
    .flatMap((policy) => policy.versions.map((version) => ({ policy, version })))
    .sort((a, b) => b.version.date.localeCompare(a.version.date))
    .slice(0, recentUpdatesLimit);

  return (
    <section className="border-t py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading eyebrow={copy.eyebrow} title={copy.title} description={copy.description} />

        <ul className="mt-14 divide-y overflow-hidden rounded-3xl border">
          {updates.map(({ policy, version }, index) => {
            const Icon = policy.icon;
            return (
              <li key={`${policy.slug}-${version.date}`} {...reveal(index * 80)}>
                <Link
                  href={policyHref(locale, policy.slug, "history")}
                  aria-label={`${copy.viewLabel}: ${policy.content[locale].title}`}
                  className="group grid gap-3 p-6 transition-colors hover:bg-secondary/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-ring md:grid-cols-[11rem_14rem_1fr_auto] md:items-center md:gap-8"
                >
                  <time dateTime={version.date} className="font-display text-sm font-semibold">
                    {formatDate(version.date, locale)}
                  </time>
                  <span className="inline-flex items-center gap-2.5 font-medium">
                    <Icon aria-hidden className="size-4 text-brand" />
                    {policy.content[locale].title}
                  </span>
                  <span className="leading-relaxed text-muted-foreground">
                    {renderInline(version.changes[locale], locale)}
                  </span>
                  <ArrowUpRight
                    aria-hidden
                    className="hidden size-4 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 md:block"
                  />
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
