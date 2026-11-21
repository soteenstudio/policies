import { ScrollText } from "lucide-react";
import type { PolicyDef } from "@/types";
import { termsEn } from "./en";
import { termsId } from "./id";

export const terms: PolicyDef = {
  slug: "terms",
  icon: ScrollText,
  effectiveDate: "2026-09-10",
  versions: [
    {
      date: "2026-09-10",
      changes: {
        id: "Menambahkan bagian kekayaan intelektual dan perangkat lunak terbuka.",
        en: "Added a section on intellectual property and open-source software.",
      },
    },
    {
      date: "2025-08-01",
      changes: {
        id: "Versi pertama Syarat & Ketentuan.",
        en: "First version of the Terms & Conditions.",
      },
    },
  ],
  content: { id: termsId, en: termsEn },
};
