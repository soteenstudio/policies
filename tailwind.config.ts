import type { Config } from "tailwindcss";
import { gaineContent, gainePreset } from "@gaine/core/tailwind";

const config: Config = {
    presets: [gainePreset()],
    content: [
        "./app/**/*.{ts,tsx}",
        "./components/**/*.{ts,tsx}",
        "./data/**/*.{ts,tsx}",
        "./lib/**/*.{ts,tsx}",
        ...gaineContent,
    ],
};

export default config;
