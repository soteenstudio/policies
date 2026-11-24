import { ScrollText } from "lucide-react";
import type { PolicyDef } from "@/types";
import { termsEn } from "./en";
import { termsId } from "./id";
export const terms: PolicyDef = {
    slug: "terms",
    icon: ScrollText,
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
    content: { id: termsId, en: termsEn },
};
