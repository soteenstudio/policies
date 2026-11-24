import type { PolicyContent } from "@/types";
export const termsId: PolicyContent = {
    title: "Syarat & Ketentuan",
    summary: "Aturan main untuk memakai game, situs web, dan perangkat lunak SoTeen Studio.",
    intro: [
        "Syarat ini mengatur pemakaian layanan {{siteName}}. Dengan memakai layanan kami, Anda menyetujuinya. Jika tidak setuju, mohon jangan memakai layanan ini.",
        "{{siteName}} adalah studio independen yang belum berbentuk badan hukum resmi. Dokumen ini merupakan transparansi operasional, bukan nasihat hukum formal. Cara kami menangani data dijelaskan di [Kebijakan Privasi](/privacy).",
    ],
    highlights: [
        { title: "16+ untuk login", text: "Layanan dengan sistem login mewajibkan pengguna berusia minimal 16 tahun." },
        { title: "Tanpa penyalahgunaan", text: "Spam, eksploitasi, dan tindakan yang mengganggu ketersediaan layanan dilarang." },
        { title: "Eksperimen apa adanya", text: "Proyek eksperimen tanpa jaminan dan risikonya ditanggung pengguna." },
    ],
    sections: [
        {
            id: "acceptance",
            title: "Kelayakan pengguna",
            blocks: [
                { type: "p", text: "Pengguna layanan atau platform yang memiliki sistem login wajib berusia minimal 16 tahun sebagai batas layanan studio." },
                { type: "p", text: "Anda juga wajib memenuhi ketentuan usia serta persetujuan atau pendampingan orang tua atau wali sesuai hukum perlindungan anak di negara atau wilayah Anda." },
            ],
        },
        {
            id: "acceptable-use",
            title: "Penggunaan yang diizinkan dan pencegahan penyalahgunaan",
            blocks: [
                { type: "p", text: "Untuk layanan atau platform open source, atau yang menyediakan API maupun tautan unduhan biner (seperti akses cURL), pengguna dan developer dilarang:" },
                {
                    type: "ul",
                    items: [
                        "Melakukan spam atau penyalahgunaan (abuse) terhadap layanan.",
                        "Mengeksploitasi layanan.",
                        "Melakukan tindakan yang mengarah ke DDoS atau mengganggu ketersediaan layanan.",
                    ],
                },
            ],
        },
        {
            id: "ip",
            title: "Open source dan atribusi",
            blocks: [
                { type: "p", text: "Proyek di organisasi GitHub soteenstudio yang berlisensi MIT atau Apache-2.0 bersifat open source dan dapat digunakan sesuai ketentuan lisensi masing-masing." },
                { type: "p", text: "Jika Anda melakukan fork atau membuat turunan, Anda wajib menyertakan kredit atau atribusi kepada {{siteName}}." },
            ],
        },
        {
            id: "experimental",
            title: "Proyek eksperimen",
            blocks: [
                { type: "p", text: "Proyek eksperimen disediakan untuk uji coba dan **sebagaimana adanya** (*as is*). Proyek ini tidak ditujukan untuk konsumsi publik umum maupun produksi yang stabil." },
                {
                    type: "callout",
                    tone: "warning",
                    title: "Tanpa jaminan keandalan",
                    text: "Proyek eksperimen dapat berubah atau dihentikan sewaktu-waktu. Risiko pemakaiannya ditanggung oleh pengguna.",
                },
            ],
        },
        {
            id: "termination",
            title: "Pembatasan akses",
            blocks: [
                { type: "p", text: "Pemakaian yang melanggar syarat ini, termasuk penyalahgunaan yang dijelaskan di atas, dapat berujung pada pembatasan akses ke layanan yang terdampak." },
            ],
        },
        {
            id: "changes",
            title: "Perubahan pada syarat ini",
            blocks: [
                { type: "p", text: "Syarat ini dapat diperbarui seiring perubahan layanan, produk, atau pihak pengelola maupun entitas studio. Bila diperlukan, kami akan memperbarui tanggal berlaku yang tertera di halaman ini." },
            ],
        },
        {
            id: "contact",
            title: "Hubungi kami",
            blocks: [
                { type: "p", text: "Pertanyaan tentang syarat ini dapat dikirim ke [{{email}}](mailto:{{email}})." },
            ],
        },
    ],
};
