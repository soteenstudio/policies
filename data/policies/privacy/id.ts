import type { PolicyContent } from "@/types";
export const privacyId: PolicyContent = {
    title: "Kebijakan Privasi",
    summary: "Data apa yang mungkin digunakan, untuk tujuan apa, dan bagaimana Anda dapat menanyakannya.",
    intro: [
        "{{siteName}} adalah studio independen yang belum berbentuk badan hukum resmi. Dokumen ini merupakan transparansi operasional proyek kami, bukan nasihat hukum formal.",
        "Kami berupaya memakai data sesedikit mungkin. Jika ada istilah yang kurang jelas, lihat [Istilah penting](#key-terms) atau [FAQ](/faq).",
    ],
    highlights: [
        { title: "Data minimal", text: "Data hanya dipakai untuk tujuan yang wajar dan dibatasi sebatas yang diperlukan." },
        { title: "Tidak diperjualbelikan", text: "Kami tidak menjual data Anda kepada pihak ketiga." },
        { title: "Silakan bertanya", text: "Hubungi kami untuk menanyakan, mengoreksi, atau menghapus data Anda." },
    ],
    sections: [
        {
            id: "key-terms",
            title: "Istilah penting",
            blocks: [
                {
                    type: "dl",
                    items: [
                        { term: "Data", description: "Informasi yang terkait dengan Anda atau pemakaian layanan kami, jika kami mengumpulkan atau memakainya." },
                        { term: "Layanan", description: "Game, situs web, perangkat lunak, dan platform yang dikelola {{siteName}}." },
                        { term: "Ekosistem studio", description: "Layanan dan produk yang dijalankan sendiri oleh {{siteName}}, yang dapat saling menyinkronkan data secara internal." },
                    ],
                },
            ],
        },
        {
            id: "data-we-collect",
            title: "Data yang kami kumpulkan",
            blocks: [
                { type: "p", text: "Data yang kami kumpulkan bergantung pada layanan yang Anda pakai. Jika suatu layanan mengumpulkan atau memakai data, kami membatasinya sebatas yang diperlukan agar layanan itu berjalan." },
                {
                    type: "callout",
                    tone: "info",
                    title: "Data dipakai hanya jika diperlukan",
                    text: "Banyak proyek kami, terutama yang bersifat open source, mungkin tidak memerlukan data apa pun dari Anda.",
                },
            ],
        },
        {
            id: "how-we-use",
            title: "Cara kami menggunakan data",
            blocks: [
                { type: "p", text: "Jika data digunakan, data tersebut hanya dipakai untuk tujuan berikut:" },
                {
                    type: "ul",
                    items: [
                        "**Operasional**, agar layanan kami berjalan sebagaimana mestinya.",
                        "**Keamanan dan anti-penyalahgunaan**, untuk mendeteksi dan mencegah penyalahgunaan layanan.",
                        "**Peningkatan fitur**, dalam batas yang wajar dan dengan data seminimal mungkin.",
                        "**Sinkronisasi internal** di dalam ekosistem studio {{siteName}}.",
                    ],
                },
            ],
        },
        {
            id: "sharing",
            title: "Berbagi data dengan pihak lain",
            blocks: [
                { type: "p", text: "Kami tidak menjual data Anda kepada pihak ketiga." },
                { type: "p", text: "Jika suatu saat kami ingin memakai data di luar studio secara sukarela, hal itu akan kami sampaikan dengan jelas dan jujur melalui popup persetujuan **sebelum** data digunakan." },
            ],
        },
        {
            id: "retention",
            title: "Berapa lama data disimpan",
            blocks: [
                { type: "p", text: "Kami menyimpan data hanya selama masih diperlukan untuk tujuan di atas. Jika data sudah tidak diperlukan, kami berupaya menghapusnya." },
            ],
        },
        {
            id: "your-rights",
            title: "Hak dan pilihan Anda",
            blocks: [
                { type: "p", text: "Anda dapat menghubungi kontak resmi studio di [{{email}}](mailto:{{email}}) untuk menanyakan data Anda atau mengajukan permohonan, misalnya:" },
                {
                    type: "ol",
                    items: [
                        "Mengakses data yang terkait dengan Anda.",
                        "Mengoreksi data yang tidak akurat.",
                        "Menghapus data yang relevan.",
                    ],
                },
                { type: "p", text: "Permohonan ditangani sesuai ketentuan yang berlaku di yurisdiksi Anda. Pengaturan cookie dijelaskan di [Kebijakan Cookie](/cookies#manage)." },
            ],
        },
        {
            id: "children",
            title: "Usia dan anak-anak",
            blocks: [
                { type: "p", text: "Layanan yang memiliki sistem login diperuntukkan bagi pengguna berusia minimal 16 tahun. Pengguna juga wajib memenuhi ketentuan usia serta persetujuan atau pendampingan orang tua atau wali sesuai hukum perlindungan anak di negara atau wilayah masing-masing. Lihat [Kelayakan pengguna](/terms#acceptance)." },
            ],
        },
        {
            id: "changes",
            title: "Perubahan pada kebijakan ini",
            blocks: [
                { type: "p", text: "Kebijakan ini dapat diperbarui seiring perubahan layanan, produk, atau studio itu sendiri. Bila diperlukan, kami akan memperbarui tanggal berlaku yang tertera di halaman ini. Riwayat versi tersedia di bagian bawah halaman." },
            ],
        },
        {
            id: "contact",
            title: "Hubungi kami",
            blocks: [
                { type: "p", text: "Pertanyaan privasi dan permohonan terkait data dapat dikirim ke [{{email}}](mailto:{{email}})." },
            ],
        },
    ],
};
