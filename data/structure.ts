/**
 * Data struktural yang netral bahasa (id, ikon, urutan).
 * Seluruh teks yang tampil ada di `data/ui/*` atau `data/policies/*`.
 */
import { Eye, Lock, SlidersHorizontal, Sprout } from "lucide-react";
import type { PrincipleDef } from "@/types";

export const principles: PrincipleDef[] = [
  { id: "transparent", icon: Eye },
  { id: "control", icon: SlidersHorizontal },
  { id: "secure", icon: Lock },
  { id: "minimal", icon: Sprout },
];

/** Jumlah pembaruan terbaru yang tampil di halaman ikhtisar. */
export const recentUpdatesLimit = 4;
