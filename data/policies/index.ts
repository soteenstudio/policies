/**
 * Registry dokumen kebijakan. Urutan array = urutan di navigasi, footer, kartu ikhtisar, dan tombol sebelumnya/selanjutnya.
 *
 * Menambah dokumen baru:
 *   1. Buat folder data/policies/<slug>/ berisi id.ts, en.ts, dan index.ts (salin dari folder yang ada).
 *   2. Daftarkan di array `policies` di bawah.
 * Halaman, navigasi, sitemap internal, dan daftar pembaruan akan ikut otomatis.
 */
import { cookies } from "./cookies";
import { privacy } from "./privacy";
import { terms } from "./terms";
import type { PolicyDef } from "@/types";

export const policies: PolicyDef[] = [privacy, terms, cookies];

export function getPolicy(slug: string): PolicyDef | undefined {
  return policies.find((policy) => policy.slug === slug);
}

/** Slug yang dipakai halaman lain sehingga tidak boleh dipakai dokumen. */
export const reservedSlugs = ["faq"] as const;
