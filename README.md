# SoTeen Studio · Privasi & Persyaratan

Situs kebijakan **mandiri** (terpisah dari situs utama SoTeen Studio) dengan tampilan terinspirasi [policies.google.com](https://policies.google.com/) dan memakai desain yang sama dengan situs utama.

Stack mengikuti `package.json` situs utama: Next.js 15 (App Router) · React 19 · TypeScript · Tailwind CSS 3 · Radix UI · lucide-react · class-variance-authority.

## Menjalankan

```bash
pnpm install
pnpm dev          # http://localhost:3001
pnpm typecheck
pnpm build && pnpm start
```

## Struktur

```
app/[locale]/
  page.tsx              Ikhtisar (hero + kartu Privacy, Terms, Cookie, FAQ)
  [slug]/page.tsx       Halaman dokumen apa pun yang ada di registry
  faq/page.tsx          FAQ
data/
  site.ts               Nama, email, alamat, flag isDummyContent
  faq.ts                Isi FAQ per bahasa
  ui/                   Teks antarmuka (header, footer, label) per bahasa
  policies/
    index.ts            REGISTRY dokumen (urutan = urutan navigasi)
    privacy|terms|cookies/{id,en,index}.ts
components/policy/      Renderer blok, daftar isi (scroll-spy), riwayat versi, pager
lib/format.tsx          Token {{...}}, sintaks **tebal** dan [tautan](...), format tanggal
```

## Cara menambah / mengubah

### Mengubah isi dokumen
Buka `data/policies/<slug>/id.ts` dan `en.ts`. Satu dokumen = objek `PolicyContent` berisi `sections`, tiap section berisi array `blocks`.

Jenis blok: `p`, `h3`, `ul`, `ol`, `callout` (`info` / `warning`), `table`, `dl`.

```ts
{
  id: "data-we-collect",          // anchor URL; pakai id yang SAMA di id.ts dan en.ts
  title: "Data yang kami kumpulkan",
  blocks: [
    { type: "p", text: "Teks biasa dengan **tebal** dan [tautan](/terms#accounts)." },
    { type: "ul", items: ["Butir 1", "Butir 2"] },
    { type: "table", head: ["A", "B"], rows: [["1", "2"]] },
  ],
}
```

Sintaks di dalam teks:

| Tulis | Hasil |
| --- | --- |
| `**teks**` | tebal |
| `[label](/privacy#sharing)` | tautan internal, prefix bahasa otomatis |
| `[label](https://...)` / `[label](mailto:...)` | tautan eksternal |
| `{{email}} {{company}} {{address}} {{siteName}}` | diisi dari `data/site.ts` |

Daftar isi di sisi kiri dibuat otomatis dari `sections`.

### Menambah dokumen baru
1. Salin folder `data/policies/cookies/` menjadi `data/policies/<slug-baru>/`, lalu ubah isinya.
2. Daftarkan di `data/policies/index.ts`:
   ```ts
   export const policies: PolicyDef[] = [privacy, terms, cookies, slugBaru];
   ```
Halaman `/<locale>/<slug-baru>`, menu header, footer, kartu ikhtisar, dan tombol sebelumnya/selanjutnya akan ikut otomatis.

### Merilis versi baru sebuah dokumen
Tambahkan entri **di paling atas** `versions` pada `index.ts` dokumen tersebut dan samakan `effectiveDate` dengan tanggal entri itu:

```ts
versions: [
  { date: "2027-02-01", changes: { id: "...", en: "..." } },
  // versi lama di bawahnya
],
```

### Menambah bahasa
1. Tambahkan kode bahasa di `i18n/config.ts` (`locales` dan `localeLabels`).
2. TypeScript akan menandai semua tempat yang belum punya terjemahan: `data/ui/*`, `data/faq.ts`, dan tiap dokumen di `data/policies/*`.

### Menambah jenis blok baru
Tambahkan tipenya di `types/index.ts` (`PolicyBlock`), lalu tangani di `components/policy/policy-blocks.tsx`.

### FAQ
Tambah objek pada grup yang ada di `data/faq.ts`, atau tambah grup baru. Menu grup di sisi kiri dibuat otomatis.

## Sebelum dipublikasikan

- Ganti seluruh isi dummy di `data/policies/*` dan `data/faq.ts` dengan teks resmi (sebaiknya ditinjau pihak hukum).
- Isi data asli di `data/site.ts` (nama badan hukum, email, alamat).
- Ubah `isDummyContent` menjadi `false` di `data/site.ts` untuk menghapus pemberitahuan "Isi contoh".
- Sesuaikan tabel cookie di `data/policies/cookies/` dengan cookie yang benar-benar dipakai.

## Menautkan dari situs lain

`legalLinks` di situs utama (`data/structure.ts`) bisa diarahkan ke `/<locale>/privacy`, `/<locale>/terms`, dan `/<locale>/cookies` situs ini.

## Catatan teknis

- Bahasa dideteksi dari header `Accept-Language` oleh `middleware.ts` (default `id`), sama seperti situs utama.
- Tema terang/gelap memakai class `dark` + `localStorage`, tanpa kilatan saat muat.
- Tombol "Cetak / simpan PDF" memakai `window.print()`; gaya cetak ada di `app/globals.css` (header, footer, dan elemen `data-print-hide` disembunyikan).
- `app/[locale]/layout.tsx` adalah root layout (memuat `<html>`), sehingga tidak ada `app/layout.tsx` terpisah.
