import Link from "next/link";
import type { Locale } from "@/i18n/config";
import { site } from "@/data/site";
import { cn } from "@/lib/utils";

interface LogoProps {
  locale: Locale;
  /** Nama produk di samping logo, mis. "Privasi & Persyaratan". */
  product?: string;
  className?: string;
}

export function Logo({ locale, product, className }: LogoProps) {
  return (
    <Link
      href={`/${locale}`}
      aria-label={product ? `${site.name} ${product}` : site.name}
      className={cn("group inline-flex items-center gap-2.5 font-display text-lg font-semibold tracking-tight", className)}
    >
      <span
        aria-hidden
        className="grid size-8 place-items-center rounded-lg bg-primary text-sm font-bold text-primary-foreground transition-transform duration-300 group-hover:-rotate-6"
      >
        S
      </span>
      <span>
        SoTeen<span className="font-normal text-muted-foreground">Studio</span>
      </span>
      {product ? (
        <>
          <span aria-hidden className="hidden h-5 w-px bg-border sm:block" />
          <span className="hidden text-base font-medium text-muted-foreground sm:block">{product}</span>
        </>
      ) : null}
    </Link>
  );
}
