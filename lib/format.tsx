import * as React from "react";
import Link from "next/link";
import { site } from "@/data/site";
import type { Locale } from "@/i18n/config";

/** Token {{nama}} yang bisa dipakai di semua teks dokumen & FAQ. */
const variables: Record<string, string> = {
  siteName: site.name,
  company: site.company.legalName,
  email: site.contact.email,
  address: site.address,
};

export function interpolate(text: string): string {
  return text.replace(/\{\{(\w+)\}\}/g, (match, key: string) => variables[key] ?? match);
}

const TOKEN = /(\*\*[^*]+\*\*|\[[^\]]+\]\([^)\s]+\))/g;
const LINK = /^\[([^\]]+)\]\(([^)\s]+)\)$/;

const linkClass =
  "font-medium text-foreground underline decoration-brand/60 decoration-2 underline-offset-4 transition-colors hover:decoration-brand";

/** Mengubah teks dengan sintaks ringan (**tebal**, [tautan](href), {{token}}) menjadi node React. */
export function renderInline(text: string, locale: Locale): React.ReactNode[] {
  return interpolate(text)
    .split(TOKEN)
    .filter(Boolean)
    .map((part, index) => {
      if (part.length > 4 && part.startsWith("**") && part.endsWith("**")) {
        return (
          <strong key={index} className="font-semibold text-foreground">
            {part.slice(2, -2)}
          </strong>
        );
      }

      const link = LINK.exec(part);
      if (link) {
        const [, label, href] = link;
        if (href.startsWith("/")) {
          return (
            <Link key={index} href={`/${locale}${href === "/" ? "" : href}`} className={linkClass}>
              {label}
            </Link>
          );
        }
        const external = /^https?:\/\//.test(href);
        return (
          <a
            key={index}
            href={href}
            className={linkClass}
            {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
          >
            {label}
          </a>
        );
      }

      return <React.Fragment key={index}>{part}</React.Fragment>;
    });
}

export function formatDate(iso: string, locale: Locale): string {
  return new Intl.DateTimeFormat(locale === "id" ? "id-ID" : "en-US", {
    dateStyle: "long",
    timeZone: "UTC",
  }).format(new Date(`${iso}T00:00:00Z`));
}
