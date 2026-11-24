import type { PolicyContent } from "@/types";
export const cookiesId: PolicyContent = {
    title: "Kebijakan Cookie",
    summary: "Cookie dan teknologi serupa apa yang kami pakai, dan bagaimana Anda mengaturnya.",
    intro: [
        "Cookie adalah berkas teks kecil yang disimpan di perangkat Anda saat mengunjungi situs. Kami memakainya seperlunya, dan Anda dapat mengaturnya kapan saja.",
    ],
    highlights: [
        { title: "Cookie esensial saja", text: "Situs ini hanya memakai cookie yang dibutuhkan agar berfungsi." },
        { title: "Tanpa iklan", text: "Kami tidak memasang cookie periklanan atau pelacakan lintas situs." },
        { title: "Mudah diatur", text: "Anda dapat menghapus atau memblokir cookie lewat pengaturan browser." },
    ],
    sections: [
        {
            id: "what-are-cookies",
            title: "Apa itu cookie",
            blocks: [
                { type: "p", text: "Selain cookie, kami juga dapat memakai teknologi serupa seperti penyimpanan lokal (local storage) di browser. Dalam dokumen ini, semuanya kami sebut \"cookie\"." },
            ],
        },
        {
            id: "types",
            title: "Cookie yang kami gunakan",
            blocks: [
                {
                    type: "table",
                    head: ["Nama", "Tujuan", "Jenis", "Masa simpan"],
                    rows: [
                        ["theme", "Mengingat pilihan tema terang atau gelap", "Esensial", "Tanpa batas, sampai Anda menghapusnya"],
                        ["NEXT_LOCALE", "Mengingat bahasa yang Anda pilih", "Esensial", "12 bulan"],
                        ["analytics_session", "Statistik kunjungan agregat tanpa identitas pribadi", "Analitik (opsional)", "30 menit"],
                    ],
                },
                { type: "callout", tone: "info", text: "Contoh tabel di atas bersifat dummy. Sesuaikan dengan cookie yang sebenarnya dipakai situs Anda." },
            ],
        },
        {
            id: "manage",
            title: "Cara mengatur cookie",
            blocks: [
                { type: "p", text: "Anda dapat mengendalikan cookie melalui pengaturan browser:" },
                {
                    type: "ul",
                    items: [
                        "Menghapus cookie yang sudah tersimpan.",
                        "Memblokir semua cookie, atau hanya dari situs tertentu.",
                        "Menggunakan mode penjelajahan pribadi agar cookie dihapus saat sesi berakhir.",
                    ],
                },
                { type: "p", text: "Perlu diingat, memblokir cookie esensial dapat membuat sebagian fitur, seperti penyimpanan tema, tidak berfungsi." },
            ],
        },
        {
            id: "third-party",
            title: "Cookie pihak ketiga",
            blocks: [
                { type: "p", text: "Saat ini situs kebijakan ini tidak memuat cookie pihak ketiga. Jika kami menambahkannya di masa depan, daftar di atas akan diperbarui dan Anda akan diminta persetujuan bila diwajibkan." },
            ],
        },
        {
            id: "more-info",
            title: "Informasi lebih lanjut",
            blocks: [
                { type: "p", text: "Cara kami menangani data pribadi dijelaskan di [Kebijakan Privasi](/privacy#how-we-use). Pertanyaan lain dapat dikirim ke [{{email}}](mailto:{{email}})." },
            ],
        },
    ],
};
