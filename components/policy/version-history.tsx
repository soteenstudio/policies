import { Badge } from "@/components/ui/badge";
import type { Dictionary } from "@/data/ui";
import type { Locale } from "@/i18n/config";
import { formatDate, renderInline } from "@/lib/format";
import { reveal } from "@/lib/reveal";
import type { PolicyVersion } from "@/types";
interface VersionHistoryProps {
    id: string;
    versions: PolicyVersion[];
    locale: Locale;
    copy: Dictionary["policy"];
}
export function VersionHistory({ id, versions, locale, copy }: VersionHistoryProps) {
    return (<section id={id} className="scroll-mt-header border-t py-10" {...reveal()}>
      <h2 className="font-display text-2xl font-semibold tracking-tight">{copy.history}</h2>
      <p className="mt-3 text-muted-foreground">{copy.historyDescription}</p>

      <ol className="mt-8 space-y-7 border-l pl-6">
        {versions.map((version, index) => (<li key={version.date} className="relative">
            <span aria-hidden className="absolute -left-[1.875rem] top-1.5 size-3 rounded-full border-2 border-background bg-brand ring-1 ring-border"/>
            <div className="flex flex-wrap items-center gap-3">
              <time dateTime={version.date} className="font-display font-semibold">
                {formatDate(version.date, locale)}
              </time>
              {index === 0 ? <Badge variant="live">{copy.latest}</Badge> : null}
            </div>
            <p className="mt-2 max-w-xl leading-relaxed text-muted-foreground">
              {renderInline(version.changes[locale], locale)}
            </p>
          </li>))}
      </ol>
    </section>);
}
