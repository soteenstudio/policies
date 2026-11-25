"use client";
import Link from "next/link";
import { useParams } from "next/navigation";
import { Button } from "@gaine/core";
import { getDictionary } from "@/data/ui";
import { defaultLocale, isLocale } from "@/i18n/config";
export default function NotFound() {
    const params = useParams<{
        locale?: string;
    }>();
    const locale = params.locale && isLocale(params.locale) ? params.locale : defaultLocale;
    const copy = getDictionary(locale).notFound;
    return (<section className="mx-auto max-w-7xl px-5 py-28 sm:px-8 sm:py-40">
      <p className="font-display text-sm font-semibold text-brand">404</p>
      <h1 className="mt-4 max-w-2xl font-display text-4xl font-semibold tracking-tight text-balance sm:text-6xl">
        {copy.title}
      </h1>
      <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">{copy.description}</p>
      <Button asChild variant="brand" size="lg" className="mt-10">
        <Link href={`/${locale}`}>{copy.cta}</Link>
      </Button>
    </section>);
}
