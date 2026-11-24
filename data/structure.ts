import { Eye, Lock, SlidersHorizontal, Sprout } from "lucide-react";
import type { PrincipleDef } from "@/types";
export const siteName = "SoTeen Studio";
export const principles: PrincipleDef[] = [
    { id: "transparent", icon: Eye },
    { id: "control", icon: SlidersHorizontal },
    { id: "secure", icon: Lock },
    { id: "minimal", icon: Sprout },
];
export const recentUpdatesLimit = 4;
