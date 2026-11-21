import type { PolicyContent } from "@/types";

export const privacyId: PolicyContent = {
  title: "Kebijakan Privasi",
  summary: "Data apa yang kami kumpulkan, mengapa kami membutuhkannya, dan bagaimana Anda bisa mengendalikannya.",
  intro: [
    "Saat Anda memakai game, situs, dan perangkat lunak {{siteName}}, Anda mempercayakan sebagian informasi kepada kami. Kebijakan ini menjelaskan informasi apa yang kami kumpulkan, untuk apa kami menggunakannya, dan pilihan apa yang Anda miliki.",
    "Kami berusaha menulisnya sesederhana mungkin. Jika ada istilah yang kurang jelas, lihat bagian [Istilah penting](#key-terms) atau [FAQ](/faq).",
  ],
  highlights: [
    { title: "Secukupnya", text: "Kami hanya mengumpulkan data yang dibutuhkan agar layanan berjalan." },
    { title: "Tidak dijual", text: "Kami tidak menjual data pribadi Anda kepada pihak mana pun." },
    { title: "Anda yang pegang kendali", text: "Akses, unduh, atau hapus data Anda lewat satu permintaan." },
  ],
  sections: [
    {
      id: "key-terms",
      title: "Istilah penting",
      blocks: [
        {
          type: "dl",
          items: [
            { term: "Data pribadi", description: "Informasi yang dapat mengidentifikasi Anda, misalnya nama, alamat email, atau ID akun." },
            { term: "Layanan", description: "Seluruh game, situs web, dan perangkat lunak yang dikelola {{siteName}}." },
            { term: "Pemroses data", description: "Pihak ketiga yang membantu kami mengolah data atas instruksi kami, seperti penyedia hosting." },
          ],
        },
      ],
    },
    {
      id: "data-we-collect",
      title: "Data yang kami kumpulkan",
      blocks: [
        { type: "p", text: "Jenis data yang kami kumpulkan bergantung pada layanan yang Anda gunakan. Secara umum, ada tiga kelompok:" },
        {
          type: "table",
          head: ["Kelompok", "Contoh", "Sumber"],
          rows: [
            ["Data yang Anda berikan", "Nama pengguna, alamat email, isi pesan dukungan", "Anda sendiri"],
            ["Data penggunaan", "Jenis perangkat, versi aplikasi, log kesalahan, progres permainan", "Dikumpulkan otomatis"],
            ["Data dari pihak lain", "ID profil dari platform tempat game dirilis", "Platform mitra"],
          ],
        },
        {
          type: "callout",
          tone: "info",
          title: "Kami tidak meminta data sensitif",
          text: "Kami tidak meminta data seperti nomor identitas, data kesehatan, atau lokasi presisi untuk memakai layanan kami.",
        },
      ],
    },
    {
      id: "how-we-use",
      title: "Cara kami menggunakan data",
      blocks: [
        { type: "p", text: "Data Anda kami gunakan untuk tujuan berikut, dan hanya itu:" },
        {
          type: "ul",
          items: [
            "**Menjalankan layanan**, misalnya menyimpan progres permainan dan memulihkan akun.",
            "**Menjaga keamanan**, termasuk mendeteksi kecurangan, penyalahgunaan, dan akses tidak sah.",
            "**Memperbaiki produk** dengan menganalisis log kesalahan dan pola penggunaan yang telah diringkas.",
            "**Berkomunikasi dengan Anda** tentang pembaruan penting dan permintaan dukungan.",
          ],
        },
      ],
    },
    {
      id: "sharing",
      title: "Berbagi data dengan pihak lain",
      blocks: [
        { type: "p", text: "Kami tidak menjual data pribadi Anda. Kami hanya membagikannya dalam keadaan terbatas:" },
        {
          type: "ul",
          items: [
            "Kepada **pemroses data** yang bekerja atas instruksi kami dan terikat perjanjian kerahasiaan.",
            "Bila **diwajibkan hukum**, misalnya berdasarkan perintah pengadilan yang sah.",
            "Dengan **persetujuan Anda**, untuk keperluan yang dijelaskan secara spesifik saat persetujuan diminta.",
          ],
        },
      ],
    },
    {
      id: "retention",
      title: "Berapa lama data disimpan",
      blocks: [
        { type: "p", text: "Kami menyimpan data selama diperlukan untuk tujuan di atas, lalu menghapus atau menganonimkannya." },
        {
          type: "table",
          head: ["Jenis data", "Lama penyimpanan"],
          rows: [
            ["Data akun", "Selama akun aktif, dihapus maksimal 30 hari setelah penghapusan akun"],
            ["Log keamanan", "90 hari"],
            ["Korespondensi dukungan", "24 bulan sejak percakapan terakhir"],
          ],
        },
      ],
    },
    {
      id: "your-rights",
      title: "Hak dan pilihan Anda",
      blocks: [
        { type: "p", text: "Anda dapat meminta hal-hal berikut kapan saja dengan menulis ke [{{email}}](mailto:{{email}}):" },
        {
          type: "ol",
          items: [
            "Mengakses salinan data pribadi yang kami simpan.",
            "Memperbaiki data yang tidak akurat.",
            "Menghapus data pribadi Anda, dengan pengecualian yang diwajibkan hukum.",
            "Membatasi atau menolak pemrosesan tertentu, termasuk menarik persetujuan.",
          ],
        },
        { type: "p", text: "Kami akan menanggapi permintaan Anda dalam waktu 30 hari. Pengaturan cookie dapat diubah kapan saja di [Kebijakan Cookie](/cookies#manage)." },
      ],
    },
    {
      id: "security",
      title: "Keamanan data",
      blocks: [
        { type: "p", text: "Kami melindungi data dengan enkripsi saat transit dan saat disimpan, pembatasan akses berbasis peran, serta peninjauan keamanan berkala." },
        {
          type: "callout",
          tone: "warning",
          title: "Tidak ada sistem yang sepenuhnya kebal",
          text: "Jika terjadi insiden yang memengaruhi data Anda, kami akan memberi tahu Anda dan pihak berwenang sesuai ketentuan yang berlaku.",
        },
      ],
    },
    {
      id: "children",
      title: "Anak-anak",
      blocks: [
        { type: "p", text: "Sebagian layanan kami dimainkan oleh pengguna muda. Kami tidak secara sadar mengumpulkan data pribadi dari anak di bawah usia yang ditetapkan hukum setempat tanpa persetujuan orang tua atau wali. Jika Anda yakin anak Anda memberikan data tanpa izin, hubungi kami agar data tersebut dapat dihapus." },
      ],
    },
    {
      id: "changes",
      title: "Perubahan kebijakan ini",
      blocks: [
        { type: "p", text: "Kami dapat memperbarui kebijakan ini dari waktu ke waktu. Perubahan material akan kami umumkan di halaman ini dan, bila perlu, melalui email. Riwayat versi tersedia di bagian bawah halaman." },
      ],
    },
    {
      id: "contact",
      title: "Hubungi kami",
      blocks: [
        { type: "p", text: "Pengendali data: **{{company}}**, {{address}}. Pertanyaan seputar privasi dapat dikirim ke [{{email}}](mailto:{{email}})." },
      ],
    },
  ],
};
