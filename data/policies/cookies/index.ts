import { Cookie } from "lucide-react";
import type { PolicyDef } from "@/types";
import { cookiesEn } from "./en";
import { cookiesId } from "./id";
export const cookies: PolicyDef = {
    slug: "cookies",
    icon: Cookie,
    effectiveDate: "2026-11-01",
    versions: [
        {
            date: "2026-11-01",
            changes: {
                id: "Menambahkan tabel daftar cookie dan panduan pengaturan lewat browser.",
                en: "Added a cookie list table and browser settings guidance.",
            },
        },
        {
            date: "2025-08-01",
            changes: {
                id: "Versi pertama Kebijakan Cookie.",
                en: "First version of the Cookie Policy.",
            },
        },
    ],
    content: { id: cookiesId, en: cookiesEn },
};
