"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { LanguageSwitcher } from "@/components/shared/language-switcher";
import { Logo } from "@/components/shared/logo";
import { ThemeToggle } from "@/components/shared/theme-toggle";
import type { Dictionary } from "@/data/ui";
import type { Locale } from "@/i18n/config";
import type { NavEntry } from "@/lib/nav";
import { cn } from "@/lib/utils";

interface HeaderProps {
  locale: Locale;
  copy: Dictionary["header"];
  entries: NavEntry[];
}

export function Header({ locale, copy, entries }: HeaderProps) {
  const pathname = usePathname();
  const [open, setOpen] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  React.useEffect(() => {
    setOpen(false);
  }, [pathname]);

  const isActive = (entry: NavEntry) =>
    entry.id === "home" ? pathname === entry.href : pathname === entry.href || pathname.startsWith(`${entry.href}/`);

  return (
    <header
      className={cn(
        "sticky top-0 z-40 w-full border-b border-transparent bg-background/80 backdrop-blur-md transition-colors",
        scrolled && "border-border",
      )}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-5 sm:px-8">
        <Logo locale={locale} product={copy.product} />

        <nav aria-label={copy.ariaMain} className="hidden items-center gap-1 lg:flex">
          {entries.map((entry) => (
            <Link
              key={entry.id}
              href={entry.href}
              aria-current={isActive(entry) ? "page" : undefined}
              className={cn(
                "rounded-full px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
                isActive(entry) ? "bg-accent text-foreground" : "text-muted-foreground",
              )}
            >
              {entry.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <LanguageSwitcher locale={locale} label={copy.language} />
          <ThemeToggle label={copy.theme} />
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden"
            aria-label={open ? copy.closeMenu : copy.openMenu}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X /> : <Menu />}
          </Button>
        </div>
      </div>

      {open ? (
        <nav aria-label={copy.ariaMobile} className="border-t bg-background px-5 py-4 lg:hidden">
          <ul>
            {entries.map((entry) => (
              <li key={entry.id}>
                <Link
                  href={entry.href}
                  aria-current={isActive(entry) ? "page" : undefined}
                  className={cn(
                    "block rounded-xl px-3 py-2.5 text-sm font-medium hover:bg-accent",
                    isActive(entry) && "bg-accent",
                  )}
                >
                  {entry.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      ) : null}
    </header>
  );
}
