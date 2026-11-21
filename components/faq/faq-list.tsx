import { ChevronDown } from "lucide-react";
import type { Locale } from "@/i18n/config";
import { renderInline } from "@/lib/format";
import type { FaqItem } from "@/types";

/** Akordeon memakai elemen <details> bawaan browser: aksesibel tanpa JavaScript tambahan. */
export function FaqList({ items, locale }: { items: FaqItem[]; locale: Locale }) {
  return (
    <div className="divide-y overflow-hidden rounded-3xl border">
      {items.map((item) => (
        <details key={item.question} className="group px-6 transition-colors open:bg-secondary/40">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-5 text-left font-display text-lg font-medium tracking-tight outline-none focus-visible:ring-2 focus-visible:ring-ring [&::-webkit-details-marker]:hidden">
            {item.question}
            <ChevronDown
              aria-hidden
              className="size-5 shrink-0 text-muted-foreground transition-transform duration-200 group-open:rotate-180"
            />
          </summary>
          <div className="space-y-3 pb-6 pr-9 leading-relaxed text-muted-foreground">
            {item.answer.map((paragraph, i) => (
              <p key={i}>{renderInline(paragraph, locale)}</p>
            ))}
          </div>
        </details>
      ))}
    </div>
  );
}
