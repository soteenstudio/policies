/**
 * FAQ per bahasa. Tambah grup atau pertanyaan baru cukup dengan menambah objek di array.
 * Jawaban mendukung sintaks teks yang sama dengan dokumen: **tebal**, [tautan](/privacy#your-rights), {{email}}.
 */
import type { Locale } from "@/i18n/config";
import type { FaqGroup } from "@/types";

export const faq: Record<Locale, FaqGroup[]> = {
  id: [
    {
      id: "privacy",
      title: "Privasi dan data",
      items: [
        {
          question: "Apakah SoTeen Studio menjual data saya?",
          answer: ["Tidak. Kami tidak menjual data pribadi Anda kepada siapa pun. Rincian kapan data dapat dibagikan ada di [Berbagi data dengan pihak lain](/privacy#sharing)."],
        },
        {
          question: "Bagaimana cara meminta salinan atau penghapusan data saya?",
          answer: [
            "Kirim email ke [{{email}}](mailto:{{email}}) dari alamat email yang terdaftar di akun Anda. Kami akan menanggapi dalam waktu 30 hari.",
            "Hak lain yang Anda miliki dijelaskan di [Hak dan pilihan Anda](/privacy#your-rights).",
          ],
        },
        {
          question: "Berapa lama data saya disimpan?",
          answer: ["Tergantung jenis datanya. Tabel lengkapnya ada di bagian [Berapa lama data disimpan](/privacy#retention)."],
        },
      ],
    },
    {
      id: "account",
      title: "Akun dan layanan",
      items: [
        {
          question: "Berapa usia minimal untuk memakai layanan?",
          answer: ["Minimal 13 tahun atau usia yang disyaratkan hukum setempat. Pengguna di bawah umur dewasa memerlukan izin orang tua atau wali. Lihat [Persetujuan dan kelayakan](/terms#acceptance)."],
        },
        {
          question: "Apa yang terjadi jika akun saya ditangguhkan?",
          answer: ["Kami akan memberi tahu alasannya, kecuali bila hukum atau keamanan mengharuskan tindakan segera. Anda dapat mengajukan keberatan lewat [{{email}}](mailto:{{email}}). Lihat juga [Penghentian](/terms#termination)."],
        },
      ],
    },
    {
      id: "cookies",
      title: "Cookie",
      items: [
        {
          question: "Apakah situs ini memakai cookie pelacak?",
          answer: ["Tidak. Situs ini hanya memakai cookie esensial untuk mengingat bahasa dan tema. Daftarnya ada di [Cookie yang kami gunakan](/cookies#types)."],
        },
        {
          question: "Bagaimana cara menghapus cookie?",
          answer: ["Lewat pengaturan browser Anda. Panduan singkatnya ada di [Cara mengatur cookie](/cookies#manage)."],
        },
      ],
    },
  ],
  en: [
    {
      id: "privacy",
      title: "Privacy and data",
      items: [
        {
          question: "Does SoTeen Studio sell my data?",
          answer: ["No. We do not sell your personal data to anyone. Details on when data may be shared are in [Sharing data with others](/privacy#sharing)."],
        },
        {
          question: "How do I request a copy or deletion of my data?",
          answer: [
            "Send an email to [{{email}}](mailto:{{email}}) from the address registered to your account. We will respond within 30 days.",
            "Your other rights are described in [Your rights and choices](/privacy#your-rights).",
          ],
        },
        {
          question: "How long is my data kept?",
          answer: ["It depends on the type of data. The full table is in [How long we keep data](/privacy#retention)."],
        },
      ],
    },
    {
      id: "account",
      title: "Accounts and services",
      items: [
        {
          question: "What is the minimum age to use the services?",
          answer: ["At least 13, or the age required by local law. Users below the age of majority need permission from a parent or guardian. See [Acceptance and eligibility](/terms#acceptance)."],
        },
        {
          question: "What happens if my account is suspended?",
          answer: ["We will tell you why, unless law or security requires immediate action. You can appeal via [{{email}}](mailto:{{email}}). See also [Termination](/terms#termination)."],
        },
      ],
    },
    {
      id: "cookies",
      title: "Cookies",
      items: [
        {
          question: "Does this site use tracking cookies?",
          answer: ["No. This site only uses essential cookies to remember language and theme. The list is in [Cookies we use](/cookies#types)."],
        },
        {
          question: "How do I delete cookies?",
          answer: ["Through your browser settings. A short guide is in [How to manage cookies](/cookies#manage)."],
        },
      ],
    },
  ],
};
