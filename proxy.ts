import { createLocaleProxy } from "@gaine/nextjs/proxy";
import { defaultLocale, locales } from "@/i18n/config";

export default createLocaleProxy({ locales, defaultLocale });

export const config = {
    matcher: ["/((?!_next|api|.*\\..*).*)"],
};
