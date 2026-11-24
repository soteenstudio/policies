import type { PolicyContent } from "@/types";
export const termsId: PolicyContent = {
    title: "Syarat & Ketentuan",
    summary: "Aturan main saat Anda memakai game, situs, dan perangkat lunak SoTeen Studio.",
    intro: [
        "Ketentuan ini mengatur penggunaan layanan {{siteName}}. Dengan membuat akun atau memakai layanan kami, Anda menyetujui ketentuan ini. Jika tidak setuju, mohon jangan gunakan layanan.",
        "Cara kami menangani data Anda dijelaskan terpisah di [Kebijakan Privasi](/privacy).",
    ],
    highlights: [
        { title: "Perlakukan sesama dengan baik", text: "Kecurangan, pelecehan, dan penyalahgunaan tidak diperbolehkan." },
        { title: "Karya Anda tetap milik Anda", text: "Kami hanya meminta izin terbatas untuk menjalankan layanan." },
        { title: "Perubahan diumumkan", text: "Kami memberi tahu Anda sebelum perubahan material berlaku." },
    ],
    sections: [
        {
            id: "acceptance",
            title: "Persetujuan dan kelayakan",
            blocks: [
                { type: "p", text: "Anda harus berusia minimal 13 tahun, atau usia yang disyaratkan hukum setempat, untuk memakai layanan. Pengguna di bawah umur dewasa harus mendapat izin orang tua atau wali." },
                { type: "p", text: "Jika Anda memakai layanan atas nama organisasi, Anda menyatakan berwenang mengikat organisasi tersebut pada ketentuan ini." },
            ],
        },
        {
            id: "accounts",
            title: "Akun Anda",
            blocks: [
                { type: "p", text: "Anda bertanggung jawab atas aktivitas di akun Anda. Untuk menjaganya tetap aman:" },
                {
                    type: "ul",
                    items: [
                        "Gunakan kata sandi yang kuat dan jangan membagikannya.",
                        "Beri tahu kami segera jika Anda menduga akun diakses pihak lain.",
                        "Berikan informasi akun yang akurat dan perbarui bila berubah.",
                    ],
                },
            ],
        },
        {
            id: "acceptable-use",
            title: "Penggunaan yang diperbolehkan",
            blocks: [
                { type: "p", text: "Saat memakai layanan, Anda setuju untuk tidak:" },
                {
                    type: "ul",
                    items: [
                        "Melakukan kecurangan, mengeksploitasi bug demi keuntungan, atau memakai perangkat lunak pihak ketiga yang mengganggu permainan.",
                        "Melecehkan, mengancam, atau mendiskriminasi pengguna lain.",
                        "Mengganggu atau mencoba menembus keamanan layanan kami.",
                        "Menggunakan layanan untuk tujuan yang melanggar hukum.",
                    ],
                },
                {
                    type: "callout",
                    tone: "warning",
                    title: "Pelanggaran dapat berujung pada pembatasan akun",
                    text: "Bergantung pada tingkat keparahannya, kami dapat memberi peringatan, membatasi fitur, atau menangguhkan akun.",
                },
            ],
        },
        {
            id: "content",
            title: "Konten Anda",
            blocks: [
                { type: "p", text: "Anda tetap memiliki konten yang Anda buat. Agar layanan dapat berjalan, Anda memberi {{siteName}} lisensi non-eksklusif, bebas royalti, dan terbatas untuk menyimpan, menampilkan, dan memproses konten tersebut hanya untuk mengoperasikan layanan." },
            ],
        },
        {
            id: "ip",
            title: "Kekayaan intelektual dan perangkat lunak terbuka",
            blocks: [
                { type: "p", text: "Merek, logo, dan aset visual {{siteName}} dilindungi hukum. Sebagian perangkat lunak kami dirilis sebagai sumber terbuka dan tunduk pada lisensinya masing-masing, yang tercantum di repositori proyek terkait." },
                {
                    type: "table",
                    head: ["Jenis karya", "Ketentuan"],
                    rows: [
                        ["Game dan aset visual", "Hak cipta dimiliki {{siteName}}; penggunaan terbatas sesuai ketentuan ini"],
                        ["Perangkat lunak sumber terbuka", "Mengikuti lisensi pada repositori masing-masing"],
                    ],
                },
            ],
        },
        {
            id: "termination",
            title: "Penghentian",
            blocks: [
                { type: "p", text: "Anda dapat berhenti memakai layanan dan menghapus akun kapan saja. Kami dapat menangguhkan atau menghentikan akses jika Anda melanggar ketentuan ini, dengan pemberitahuan wajar kecuali bila hukum atau keamanan mengharuskan tindakan segera." },
            ],
        },
        {
            id: "disclaimer",
            title: "Jaminan dan batasan tanggung jawab",
            blocks: [
                { type: "p", text: "Layanan disediakan **sebagaimana adanya**. Kami berusaha menjaganya andal, tetapi tidak dapat menjamin layanan bebas gangguan atau kesalahan." },
                { type: "p", text: "Sejauh diizinkan hukum, tanggung jawab {{siteName}} atas kerugian tidak langsung atau konsekuensial dibatasi. Ketentuan ini tidak membatasi hak yang tidak dapat dikecualikan menurut hukum yang berlaku." },
            ],
        },
        {
            id: "law",
            title: "Hukum yang berlaku",
            blocks: [
                { type: "p", text: "Ketentuan ini tunduk pada hukum Republik Indonesia. Perselisihan akan diupayakan diselesaikan secara musyawarah terlebih dahulu sebelum ditempuh jalur pengadilan di Denpasar." },
            ],
        },
        {
            id: "changes",
            title: "Perubahan ketentuan",
            blocks: [
                { type: "p", text: "Kami dapat memperbarui ketentuan ini. Untuk perubahan material, kami akan memberi tahu Anda setidaknya 14 hari sebelum berlaku. Dengan tetap memakai layanan setelah itu, Anda dianggap menyetujui perubahan tersebut." },
            ],
        },
        {
            id: "contact",
            title: "Hubungi kami",
            blocks: [
                { type: "p", text: "Pertanyaan tentang ketentuan ini dapat dikirim ke [{{email}}](mailto:{{email}}) atau ke {{company}}, {{address}}." },
            ],
        },
    ],
};
