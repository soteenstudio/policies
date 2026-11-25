"use client";
import { LanguageSwitcher as GaineLanguageSwitcher } from "@gaine/nextjs";
import { localeLabels, locales, type Locale } from "@/i18n/config";

interface LanguageSwitcherProps {
    locale: Locale;
    label: string;
}

export function LanguageSwitcher({ locale, label }: LanguageSwitcherProps) {
    return (<GaineLanguageSwitcher locale={locale} label={label} locales={locales} localeLabels={localeLabels}/>);
}
