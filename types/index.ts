import type { LucideIcon } from "lucide-react";
import type { Locale } from "@/i18n/config";

/* ---------------------------------------------------------------------------
 * Blok konten dokumen kebijakan
 * Teks di dalam blok boleh memakai:
 *   **tebal**              -> teks tebal
 *   [label](/privacy#id)   -> tautan internal (otomatis diberi prefix bahasa)
 *   [label](https://...)   -> tautan eksternal (dibuka di tab baru)
 *   {{email}} {{company}} {{address}} {{siteName}} -> diisi dari data/site.ts
 * ------------------------------------------------------------------------- */
export type PolicyBlock =
  | { type: "p"; text: string }
  | { type: "h3"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "ol"; items: string[] }
  | { type: "callout"; tone?: "info" | "warning"; title?: string; text: string }
  | { type: "table"; head: string[]; rows: string[][] }
  | { type: "dl"; items: { term: string; description: string }[] };

export interface PolicySection {
  /** Dipakai sebagai anchor (#id). Pakai id yang SAMA di semua bahasa agar tautan tetap valid saat ganti bahasa. */
  id: string;
  title: string;
  blocks: PolicyBlock[];
}

/** Seluruh teks satu dokumen untuk satu bahasa. */
export interface PolicyContent {
  title: string;
  /** Ringkasan satu-dua kalimat untuk kartu di halaman ikhtisar & meta description. */
  summary: string;
  /** Paragraf pembuka di bawah judul. */
  intro: string[];
  /** Poin penting singkat (disarankan 3). */
  highlights: { title: string; text: string }[];
  sections: PolicySection[];
}

export interface PolicyVersion {
  /** Format ISO: YYYY-MM-DD. */
  date: string;
  /** Ringkasan perubahan per bahasa. */
  changes: Record<Locale, string>;
}

export interface PolicyDef {
  /** Slug URL: /[locale]/<slug>. Harus unik dan sama di semua bahasa. */
  slug: string;
  icon: LucideIcon;
  /** Tanggal berlaku versi terbaru (YYYY-MM-DD). Harus sama dengan `versions[0].date`. */
  effectiveDate: string;
  /** Urut dari yang terbaru. */
  versions: PolicyVersion[];
  /** Wajib lengkap untuk semua bahasa di `i18n/config.ts` (TypeScript akan menandai yang kurang). */
  content: Record<Locale, PolicyContent>;
}

export interface FaqItem {
  question: string;
  /** Satu atau beberapa paragraf; mendukung sintaks teks yang sama dengan blok kebijakan. */
  answer: string[];
}

export interface FaqGroup {
  id: string;
  title: string;
  items: FaqItem[];
}

export type PrincipleId = "transparent" | "control" | "secure" | "minimal";

export interface PrincipleDef {
  id: PrincipleId;
  icon: LucideIcon;
}