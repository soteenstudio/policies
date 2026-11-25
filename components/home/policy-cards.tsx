import { CircleHelp } from "lucide-react";
import { PolicyCard } from "@/components/home/policy-card";
import { SectionHeading } from "@gaine/core";
import { policies } from "@/data/policies";
import type { Dictionary } from "@/data/ui";
import type { Locale } from "@/i18n/config";
import { formatDate } from "@/lib/format";
import { faqHref, policyHref } from "@/lib/routes";
interface PolicyCardsProps {
    locale: Locale;
    dict: Dictionary;
}
export function PolicyCards({ locale, dict }: PolicyCardsProps) {
    const copy = dict.home.cards;
    return (<section id="documents" className="scroll-mt-header border-t py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading eyebrow={copy.eyebrow} title={copy.title} description={copy.description}/>
        <div className="mt-14 grid gap-5 md:grid-cols-2">
          {policies.map((policy, index) => (<PolicyCard key={policy.slug} href={policyHref(locale, policy.slug)} icon={policy.icon} title={policy.content[locale].title} summary={policy.content[locale].summary} readMore={copy.readMore} footnote={<>
                  {copy.updated} <time dateTime={policy.effectiveDate}>{formatDate(policy.effectiveDate, locale)}</time>
                </>} revealDelay={index * 100}/>))}
          <PolicyCard href={faqHref(locale)} icon={CircleHelp} title={dict.header.faq} summary={dict.faq.description} readMore={copy.readMore} revealDelay={policies.length * 100}/>
        </div>
      </div>
    </section>);
}
