import { ShieldCheck } from "lucide-react";
import type { PolicyDef } from "@/types";
import { privacyEn } from "./en";
import { privacyId } from "./id";

export const privacy: PolicyDef = {
  slug: "privacy",
  icon: ShieldCheck,
  effectiveDate: "2026-11-01",
  versions: [
    {
      date: "2026-11-01",
      changes: {
        id: "Menambahkan tabel lama penyimpanan data dan menjelaskan hak penghapusan data secara lebih rinci.",
        en: "Added a data retention table and described deletion rights in more detail.",
      },
    },
    {
      date: "2026-03-15",
      changes: {
        id: "Memperjelas daftar pihak yang dapat menerima data dan menambahkan bagian anak-anak.",
        en: "Clarified who may receive data and added a section on children.",
      },
    },
    {
      date: "2025-08-01",
      changes: {
        id: "Versi pertama Kebijakan Privasi.",
        en: "First version of the Privacy Policy.",
      },
    },
  ],
  content: { id: privacyId, en: privacyEn },
};
