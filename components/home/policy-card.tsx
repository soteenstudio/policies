import Link from "next/link";
import { ArrowUpRight, type LucideIcon } from "lucide-react";
import { reveal } from "@/lib/reveal";
import { cn } from "@/lib/utils";

interface PolicyCardProps {
  href: string;
  icon: LucideIcon;
  title: string;
  summary: string;
  readMore: string;
  /** Keterangan kecil di kiri bawah, mis. tanggal berlaku. */
  footnote?: React.ReactNode;
  className?: string;
  revealDelay?: number;
}

export function PolicyCard({ href, icon: Icon, title, summary, readMore, footnote, className, revealDelay = 0 }: PolicyCardProps) {
  return (
    <Link
      href={href}
      {...reveal(revealDelay)}
      className={cn(
        "group relative flex flex-col justify-between overflow-hidden rounded-3xl border bg-background p-7 transition-all duration-300",
        "hover:-translate-y-1 hover:border-brand/40 hover:shadow-xl hover:shadow-brand/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
        className,
      )}
    >
      <div>
        <span className="mb-8 grid size-11 place-items-center rounded-2xl bg-secondary text-foreground transition-colors group-hover:bg-brand group-hover:text-brand-foreground">
          <Icon className="size-5" />
        </span>
        <h3 className="font-display text-xl font-semibold tracking-tight">{title}</h3>
        <p className="mt-3 leading-relaxed text-muted-foreground">{summary}</p>
      </div>
      <div className="mt-8 flex items-end justify-between gap-4">
        <p className="text-xs text-muted-foreground">{footnote}</p>
        <span className="inline-flex items-center gap-1 whitespace-nowrap text-sm font-medium">
          {readMore}
          <ArrowUpRight className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
        </span>
      </div>
    </Link>
  );
}
