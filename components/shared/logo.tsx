import { Logo as GaineLogo } from "@gaine/nextjs";
import type { Locale } from "@/i18n/config";
import { site } from "@/data/site";

interface LogoProps {
    locale: Locale;
    product?: string;
    className?: string;
}

export function Logo({ locale, product, className }: LogoProps) {
    return (<GaineLogo href={`/${locale}`} label={product ? `${site.name} ${product}` : site.name} mark="S" primary="SoTeen" secondary="Studio" product={product} className={className}/>);
}
