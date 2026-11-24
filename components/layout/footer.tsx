import Link from "next/link";
import { Logo } from "@/components/shared/logo";
import type { Dictionary } from "@/data/ui";
import { site } from "@/data/site";
import type { Locale } from "@/i18n/config";
import type { NavEntry } from "@/lib/nav";
import { reveal } from "@/lib/reveal";
interface FooterProps {
    locale: Locale;
    dict: Dictionary;
    entries: NavEntry[];
}
export function Footer({ locale, dict, entries }: FooterProps) {
    return (<footer className="mt-auto border-t bg-secondary/40">
      <div className="mx-auto max-w-7xl px-5 py-12 sm:px-8" {...reveal(0, "fade")}>
        <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:justify-between">
          <div>
            <Logo locale={locale}/>
          </div>

          <nav aria-label={dict.header.ariaFooter}>
            <ul className="flex flex-wrap gap-x-8 gap-y-3">
              {entries.map((entry) => (<li key={entry.id}>
                  <Link href={entry.href} className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                    {entry.label}
                  </Link>
                </li>))}
            </ul>
          </nav>
        </div>

        <div className="mt-10 space-y-1 border-t pt-8 text-xs text-muted-foreground">
          <p>
            © {new Date().getFullYear()} {site.name}. {dict.footer.rights}
          </p>
          <p>{dict.footer.legalNotice}</p>
        </div>
      </div>
    </footer>);
}
