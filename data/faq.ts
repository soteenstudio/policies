import type { Locale } from "@/i18n/config";
import type { FaqGroup } from "@/types";
export const faq: Record<Locale, FaqGroup[]> = {
    id: [
        {
            id: "general",
            title: "Umum",
            items: [
                {
                    question: "Apa itu SoTeen Studio, dan apakah dokumen ini mengikat secara hukum?",
                    answer: ["SoTeen Studio adalah studio pengembangan perangkat lunak independen yang membuat game, proyek open source, dan eksperimen teknologi, dengan porsi terbesar pada proyek open source. Studio ini belum berbentuk PT atau badan hukum resmi dan belum menjadi brand komersial besar.", "Dokumen di situs ini adalah transparansi operasional proyek indie, bukan nasihat hukum formal."],
                },
                {
                    question: "Dokumen apa saja yang ada di sini?",
                    answer: ["Ada tiga dokumen: [Kebijakan Privasi](/privacy), [Syarat & Ketentuan](/terms), dan [Kebijakan Cookie](/cookies). Masing-masing punya daftar isi, tanggal berlaku, dan riwayat versi."],
                },
                {
                    question: "Apakah semua dokumen berlaku untuk setiap proyek?",
                    answer: ["Dokumen ini berlaku untuk layanan SoTeen Studio. Beberapa ketentuan hanya relevan untuk jenis layanan tertentu, misalnya batas usia untuk layanan dengan sistem login, atau aturan penggunaan API untuk layanan open source. Setiap bagian menjelaskan jenis layanan yang dimaksud."],
                },
                {
                    question: "Bagaimana jika dokumen ini diperbarui?",
                    answer: ["Dokumen dapat diperbarui seiring perubahan layanan, produk, atau pihak pengelola studio. Bila diperlukan, tanggal berlaku diperbarui dan riwayat perubahan dapat dilihat di bagian bawah tiap dokumen. Lihat [Perubahan pada kebijakan ini](/privacy#changes) dan [Perubahan pada syarat ini](/terms#changes)."],
                },
                {
                    question: "Ke mana saya bisa bertanya?",
                    answer: ["Hubungi kontak resmi studio di [{{email}}](mailto:{{email}}). Lihat juga [Hubungi kami](/privacy#contact)."],
                },
            ],
        },
        {
            id: "privacy",
            title: "Privasi dan data",
            items: [
                {
                    question: "Apakah SoTeen Studio mengumpulkan data saya?",
                    answer: ["Bergantung pada layanan yang Anda pakai. Jika suatu layanan mengumpulkan atau memakai data, jumlahnya dibatasi sebatas yang diperlukan agar layanan berjalan. Banyak proyek kami, terutama yang open source, mungkin tidak memerlukan data apa pun dari Anda. Lihat [Data yang kami kumpulkan](/privacy#data-we-collect)."],
                },
                {
                    question: "Untuk apa data saya digunakan?",
                    answer: ["Jika data digunakan, tujuannya hanya empat: operasional, keamanan dan anti-penyalahgunaan, peningkatan fitur, serta sinkronisasi internal di dalam ekosistem layanan dan produk studio sendiri. Lihat [Cara kami menggunakan data](/privacy#how-we-use)."],
                },
                {
                    question: "Apakah SoTeen Studio menjual data saya?",
                    answer: ["Tidak. Kami tidak menjual data Anda kepada pihak ketiga. Lihat [Berbagi data dengan pihak lain](/privacy#sharing)."],
                },
                {
                    question: "Apakah data saya bisa dipakai pihak di luar studio?",
                    answer: ["Hanya jika Anda menyetujuinya. Jika suatu saat ada permintaan pemakaian data di luar studio secara sukarela, hal itu akan disampaikan dengan jelas dan jujur melalui popup persetujuan sebelum data digunakan."],
                },
                {
                    question: "Apa yang dimaksud dengan sinkronisasi internal?",
                    answer: ["Artinya data dapat dipakai bersama oleh layanan dan produk yang dijalankan sendiri oleh studio, selama sesuai tujuan yang wajar dan dengan data seminimal mungkin. Data tidak keluar dari studio untuk keperluan ini."],
                },
                {
                    question: "Bagaimana cara bertanya, mengoreksi, atau menghapus data saya?",
                    answer: ["Hubungi kontak resmi studio di [{{email}}](mailto:{{email}}). Anda dapat mengajukan akses, koreksi, atau penghapusan data yang relevan. Permohonan ditangani sesuai ketentuan yang berlaku di yurisdiksi Anda. Lihat [Hak dan pilihan Anda](/privacy#your-rights)."],
                },
                {
                    question: "Berapa lama data saya disimpan?",
                    answer: ["Hanya selama masih diperlukan untuk tujuan penggunaannya. Jika sudah tidak diperlukan, kami berupaya menghapusnya. Lihat [Berapa lama data disimpan](/privacy#retention)."],
                },
            ],
        },
        {
            id: "account",
            title: "Usia dan layanan dengan login",
            items: [
                {
                    question: "Berapa usia minimal untuk memakai layanan?",
                    answer: ["Layanan atau platform yang memiliki sistem login mewajibkan pengguna berusia minimal 16 tahun sebagai batas layanan studio. Lihat [Kelayakan pengguna](/terms#acceptance)."],
                },
                {
                    question: "Apakah cukup berusia 16 tahun?",
                    answer: ["Belum tentu. Anda juga wajib memenuhi ketentuan usia serta persetujuan atau pendampingan orang tua atau wali sesuai hukum perlindungan anak di negara atau wilayah Anda. Jika hukum di wilayah Anda mensyaratkan usia lebih tinggi atau pendampingan, ketentuan itu yang berlaku. Lihat juga [Usia dan anak-anak](/privacy#children)."],
                },
                {
                    question: "Apakah proyek tanpa login juga punya batas usia 16 tahun?",
                    answer: ["Batas 16 tahun berlaku untuk layanan atau platform yang memiliki sistem login. Ketentuan hukum perlindungan anak di wilayah Anda tetap perlu dipenuhi."],
                },
            ],
        },
        {
            id: "terms",
            title: "Aturan penggunaan",
            items: [
                {
                    question: "Apa yang dilarang pada layanan open source atau yang menyediakan API?",
                    answer: ["Untuk layanan atau platform open source, atau yang menyediakan API maupun tautan unduhan biner (seperti akses cURL), pengguna dan developer dilarang melakukan spam atau penyalahgunaan (abuse), eksploitasi, serta tindakan yang mengarah ke DDoS atau mengganggu ketersediaan layanan. Lihat [Penggunaan yang diizinkan](/terms#acceptable-use)."],
                },
                {
                    question: "Apa yang terjadi jika saya melanggar aturan penggunaan?",
                    answer: ["Pemakaian yang melanggar syarat, termasuk penyalahgunaan di atas, dapat berujung pada pembatasan akses ke layanan yang terdampak. Lihat [Pembatasan akses](/terms#termination)."],
                },
                {
                    question: "Apakah proyek SoTeen Studio boleh saya pakai dan modifikasi?",
                    answer: ["Proyek di organisasi GitHub soteenstudio yang berlisensi MIT atau Apache-2.0 bersifat open source dan dapat digunakan sesuai ketentuan lisensi masing-masing. Cek berkas lisensi di tiap repositori. Lihat [Open source dan atribusi](/terms#ip)."],
                },
                {
                    question: "Apakah saya wajib memberi kredit jika melakukan fork?",
                    answer: ["Ya. Jika Anda melakukan fork atau membuat turunan, Anda wajib menyertakan kredit atau atribusi kepada SoTeen Studio."],
                },
                {
                    question: "Apa itu proyek eksperimen?",
                    answer: ["Proyek uji coba yang disediakan sebagaimana adanya (*as is*). Proyek ini tidak ditujukan untuk konsumsi publik umum atau produksi yang stabil, dapat berubah atau dihentikan sewaktu-waktu tanpa jaminan keandalan, dan risikonya ditanggung pengguna. Lihat [Proyek eksperimen](/terms#experimental)."],
                },
                {
                    question: "Bolehkah saya memakai proyek eksperimen untuk produksi?",
                    answer: ["Tidak disarankan. Proyek eksperimen tidak dirancang untuk produksi yang stabil dan tidak ada jaminan keandalan atasnya."],
                },
            ],
        },
        {
            id: "cookies",
            title: "Cookie dan penyimpanan lokal",
            items: [
                {
                    question: "Untuk apa situs ini memakai cookie?",
                    answer: ["Ada tiga tujuan: fungsi situs (seperti sesi login atau mekanisme serupa), performa dan caching lokal, serta preferensi lokal seperti tema. Lihat [Cara kami menggunakan cookie](/cookies#types)."],
                },
                {
                    question: "Apakah penyimpanan lokal (local storage) termasuk?",
                    answer: ["Ya. Selain cookie, kami juga memakai teknologi serupa seperti local storage, dan dalam dokumen ini semuanya disebut \"cookie\". Lihat [Apa itu cookie](/cookies#what-are-cookies)."],
                },
                {
                    question: "Apa itu caching lokal dan mengapa dipakai?",
                    answer: ["Caching lokal menyimpan sementara hasil permintaan di perangkat Anda untuk mengurangi permintaan berulang ke API, sehingga Anda tidak mudah terkena rate limit. Penggunaannya tetap mengutamakan efisiensi dan pembatasan data."],
                },
                {
                    question: "Bagaimana cara menghapus cookie?",
                    answer: ["Lewat pengaturan browser Anda. Lihat [Cara mengatur cookie](/cookies#manage)."],
                },
                {
                    question: "Apa yang terjadi jika saya menghapus cookie atau data lokal?",
                    answer: ["Jika pengaturan atau state hanya tersimpan secara lokal (local-only), hilang atau ter-reset-nya data tersebut menjadi risiko dan tanggung jawab Anda sendiri. Bagian yang tersimpan atau tersinkron di server atau database mengikuti mekanisme sistem terkait."],
                },
            ],
        },
    ],
    en: [
        {
            id: "general",
            title: "General",
            items: [
                {
                    question: "What is SoTeen Studio, and are these documents legally binding?",
                    answer: ["SoTeen Studio is an independent software development studio that builds games, open-source projects, and technology experiments, with open source as the biggest share. It is not yet a registered company or legal entity and is not yet a large commercial brand.", "The documents on this site are operational transparency for an indie project, not formal legal advice."],
                },
                {
                    question: "Which documents are here?",
                    answer: ["There are three: the [Privacy Policy](/privacy), the [Terms & Conditions](/terms), and the [Cookie Policy](/cookies). Each has a table of contents, an effective date, and a version history."],
                },
                {
                    question: "Does every document apply to every project?",
                    answer: ["These documents apply to SoTeen Studio services. Some provisions only matter for certain kinds of services, for example the age limit for services with a login system, or API usage rules for open-source services. Each section says which kind of service it means."],
                },
                {
                    question: "What happens when these documents are updated?",
                    answer: ["They may be updated as our services, products, or the studio's managing party change. When needed, the effective date is updated and the change history is available at the bottom of each document. See [Changes to this policy](/privacy#changes) and [Changes to these terms](/terms#changes)."],
                },
                {
                    question: "Where can I ask questions?",
                    answer: ["Contact the studio's official contact at [{{email}}](mailto:{{email}}). See also [Contact us](/privacy#contact)."],
                },
            ],
        },
        {
            id: "privacy",
            title: "Privacy and data",
            items: [
                {
                    question: "Does SoTeen Studio collect my data?",
                    answer: ["It depends on the service you use. Where a service collects or uses data, it is limited to what that service needs to work. Many of our projects, especially open-source ones, may not need any data from you. See [Data we collect](/privacy#data-we-collect)."],
                },
                {
                    question: "What is my data used for?",
                    answer: ["If data is used, it is only for four purposes: operations, security and anti-abuse, feature improvement, and internal synchronization within the studio's own services and products. See [How we use data](/privacy#how-we-use)."],
                },
                {
                    question: "Does SoTeen Studio sell my data?",
                    answer: ["No. We do not sell your data to third parties. See [Sharing data with others](/privacy#sharing)."],
                },
                {
                    question: "Can my data be used by anyone outside the studio?",
                    answer: ["Only with your agreement. If we ever want to use data outside the studio on a voluntary basis, we will say so clearly and honestly in a consent popup before the data is used."],
                },
                {
                    question: "What does internal synchronization mean?",
                    answer: ["It means data may be shared between the services and products the studio runs itself, for reasonable purposes and with as little data as possible. Data does not leave the studio for this purpose."],
                },
                {
                    question: "How do I ask about, correct, or delete my data?",
                    answer: ["Contact the studio's official contact at [{{email}}](mailto:{{email}}). You can ask for access, correction, or deletion of relevant data. Requests are handled in line with the rules that apply in your jurisdiction. See [Your rights and choices](/privacy#your-rights)."],
                },
                {
                    question: "How long is my data kept?",
                    answer: ["Only as long as it is needed for its purposes. When it is no longer needed, we aim to delete it. See [How long we keep data](/privacy#retention)."],
                },
            ],
        },
        {
            id: "account",
            title: "Age and services with login",
            items: [
                {
                    question: "What is the minimum age to use the services?",
                    answer: ["Services or platforms with a login system require users to be at least 16 years old, as the studio's service limit. See [Eligibility](/terms#acceptance)."],
                },
                {
                    question: "Is being 16 enough?",
                    answer: ["Not necessarily. You must also meet the age requirements and parental or guardian consent or supervision rules under child protection laws in your country or region. If your region requires a higher age or supervision, that requirement applies. See also [Age and children](/privacy#children)."],
                },
                {
                    question: "Do projects without a login also have a 16+ limit?",
                    answer: ["The 16+ limit applies to services or platforms with a login system. Child protection laws in your region still need to be met."],
                },
            ],
        },
        {
            id: "terms",
            title: "Rules of use",
            items: [
                {
                    question: "What is prohibited on open-source or API services?",
                    answer: ["For open-source services or platforms, or those that provide an API or binary download links (such as cURL access), users and developers must not spam or abuse the service, exploit it, or take actions that lead to DDoS or disrupt availability. See [Acceptable use and abuse prevention](/terms#acceptable-use)."],
                },
                {
                    question: "What happens if I break the rules of use?",
                    answer: ["Use that violates the terms, including the abuse above, may lead to restricted access to the affected service. See [Access restrictions](/terms#termination)."],
                },
                {
                    question: "Can I use and modify SoTeen Studio projects?",
                    answer: ["Projects in the soteenstudio GitHub organization licensed under MIT or Apache-2.0 are open source and may be used according to the terms of their respective licenses. Check the license file in each repository. See [Open source and attribution](/terms#ip)."],
                },
                {
                    question: "Do I have to give credit if I fork a project?",
                    answer: ["Yes. If you fork or create a derivative work, you must include credit or attribution to SoTeen Studio."],
                },
                {
                    question: "What is an experimental project?",
                    answer: ["A project provided for testing and **as is**. It is not meant for general public use or stable production, may change or be discontinued at any time without any reliability guarantee, and the risk is yours. See [Experimental projects](/terms#experimental)."],
                },
                {
                    question: "Can I use an experimental project in production?",
                    answer: ["It is not recommended. Experimental projects are not designed for stable production and come with no reliability guarantee."],
                },
            ],
        },
        {
            id: "cookies",
            title: "Cookies and local storage",
            items: [
                {
                    question: "Why does this site use cookies?",
                    answer: ["For three purposes: site function (such as login sessions or similar mechanisms), performance and local caching, and local preferences such as theme. See [How we use cookies](/cookies#types)."],
                },
                {
                    question: "Does local storage count too?",
                    answer: ["Yes. Besides cookies, we also use similar technologies such as local storage, and in these documents all of them are called \"cookies\". See [What cookies are](/cookies#what-are-cookies)."],
                },
                {
                    question: "What is local caching and why is it used?",
                    answer: ["Local caching temporarily keeps request results on your device to reduce repeated API requests, so rate limits are not hit as easily. It is still used with efficiency and minimal data in mind."],
                },
                {
                    question: "How do I delete cookies?",
                    answer: ["Through your browser settings. See [How to manage cookies](/cookies#manage)."],
                },
                {
                    question: "What happens if I delete cookies or local data?",
                    answer: ["If a setting or state is stored only locally (local-only), losing or resetting it is your own risk and responsibility. Parts stored or synced on a server or database follow the mechanism of the system concerned."],
                },
            ],
        },
    ],
};
