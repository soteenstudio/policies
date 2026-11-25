import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import type { NavEntry } from "@/lib/nav";
import { cn } from "@gaine/core";
interface PagerProps {
    previous?: NavEntry;
    next?: NavEntry;
    previousLabel: string;
    nextLabel: string;
}
const card = "group flex flex-col gap-1 rounded-3xl border p-6 transition-all duration-300 hover:-translate-y-0.5 hover:border-brand/40 hover:shadow-xl hover:shadow-brand/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring";
export function Pager({ previous, next, previousLabel, nextLabel }: PagerProps) {
    if (!previous && !next)
        return null;
    return (<nav data-print-hide className="grid gap-4 sm:grid-cols-2">
      {previous ? (<Link href={previous.href} className={card}>
          <span className="inline-flex items-center gap-1.5 text-sm text-muted-foreground">
            <ArrowLeft className="size-4 transition-transform group-hover:-translate-x-1"/>
            {previousLabel}
          </span>
          <span className="font-display text-lg font-semibold tracking-tight">{previous.label}</span>
        </Link>) : null}
      {next ? (<Link href={next.href} className={cn(card, "sm:col-start-2 sm:items-end sm:text-right")}>
          <span className="inline-flex items-center gap-1.5 text-sm text-muted-foreground">
            {nextLabel}
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-1"/>
          </span>
          <span className="font-display text-lg font-semibold tracking-tight">{next.label}</span>
        </Link>) : null}
    </nav>);
}
