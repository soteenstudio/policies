import type { PolicyContent } from "@/types";
export const cookiesId: PolicyContent = {
    title: "Kebijakan Cookie",
    summary: "Cara cookie dan penyimpanan lokal digunakan, dan bagaimana Anda mengaturnya.",
    intro: [
        "Cookie adalah berkas teks kecil yang disimpan di perangkat Anda saat mengunjungi situs. Kami memakainya seperlunya, dengan mengutamakan efisiensi dan data yang minimal.",
    ],
    highlights: [
        { title: "Seperlunya saja", text: "Dipakai untuk fungsi situs, performa lokal, dan preferensi lokal." },
        { title: "Data minimal", text: "Kami membatasi data dan mengutamakan efisiensi." },
        { title: "Bisa Anda hapus", text: "Anda dapat menghapus cookie dan data lokal lewat browser." },
    ],
    sections: [
        {
            id: "what-are-cookies",
            title: "Apa itu cookie",
            blocks: [
                { type: "p", text: "Selain cookie, kami juga memakai teknologi serupa seperti penyimpanan lokal (local storage) di browser. Dalam dokumen ini, semuanya kami sebut \"cookie\"." },
            ],
        },
        {
            id: "types",
            title: "Cara kami menggunakan cookie",
            blocks: [
                {
                    type: "table",
                    head: ["Tujuan", "Kegunaan"],
                    rows: [
                        ["Fungsi situs", "Diperlukan agar layanan berjalan, seperti sesi login atau mekanisme serupa"],
                        ["Performa dan caching", "Caching lokal untuk mengurangi permintaan berulang ke API, agar tidak mudah terkena rate limit"],
                        ["Preferensi lokal", "Pengaturan seperti tema dan pengaturan lain yang bersifat local-only"],
                    ],
                },
            ],
        },
        {
            id: "manage",
            title: "Cara mengatur cookie",
            blocks: [
                { type: "p", text: "Anda dapat menghapus cookie dan data lokal lewat pengaturan browser." },
                {
                    type: "callout",
                    tone: "warning",
                    title: "Data local-only menjadi tanggung jawab Anda",
                    text: "Jika suatu pengaturan atau state hanya tersimpan secara lokal, hilang atau ter-reset-nya data tersebut menjadi risiko dan tanggung jawab Anda sendiri. Data yang tersimpan atau tersinkron di server maupun database mengikuti mekanisme sistem terkait.",
                },
            ],
        },
        {
            id: "more-info",
            title: "Informasi lainnya",
            blocks: [
                { type: "p", text: "Cara data ditangani dijelaskan di [Kebijakan Privasi](/privacy#how-we-use). Pertanyaan lain dapat dikirim ke [{{email}}](mailto:{{email}})." },
            ],
        },
    ],
};
