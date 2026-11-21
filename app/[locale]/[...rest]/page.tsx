import { notFound } from "next/navigation";

/** Menangkap semua URL yang tidak dikenal agar tampil halaman 404 yang sudah memakai layout bahasa. */
export default function CatchAll() {
  notFound();
}
