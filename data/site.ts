/**
 * Data situs yang netral bahasa. Ubah di sini, lalu semua dokumen yang memakai
 * token {{email}}, {{company}}, dst. ikut berubah.
 */
export const site = {
  name: "SoTeen Studio",
  /** Placeholder: ganti dengan data resmi sebelum publikasi. */
  company: { legalName: "PT SoTeen Studio Indonesia" },
  contact: { email: "privasi@soteen.studio" },
  address: "Jl. Contoh Raya No. 00, Denpasar, Bali, Indonesia",
} as const;

/**
 * Selama true, setiap halaman dokumen menampilkan pemberitahuan bahwa isinya masih contoh (dummy).
 * Ubah ke false setelah seluruh isi di `data/policies` diganti dengan teks resmi.
 */
export const isDummyContent = true;
