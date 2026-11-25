import { defineLocales } from "@gaine/core";

const kit = defineLocales({
    locales: ["id", "en"],
    defaultLocale: "id",
    labels: {
        id: "Bahasa Indonesia",
        en: "English",
    },
});

export const { locales, defaultLocale, localeLabels, isLocale } = kit;
export type Locale = (typeof locales)[number];
