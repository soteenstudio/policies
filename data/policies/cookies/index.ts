import { Cookie } from "lucide-react";
import type { PolicyDef } from "@/types";
import { cookiesEn } from "./en";
import { cookiesId } from "./id";
export const cookies: PolicyDef = {
    slug: "cookies",
    icon: Cookie,
    effectiveDate: "2026-11-24",
    versions: [
        {
            date: "2026-11-24",
            changes: {
                id: "Menulis kebijakan sesuai praktik data studio saat ini, termasuk batas usia 16+ dan persetujuan sebelum data dipakai di luar studio.",
                en: "Wrote the policy to reflect the studio's current data practices, including the 16+ age limit and consent before data is used outside the studio.",
            },
        }
    ],
    content: { id: cookiesId, en: cookiesEn },
};
