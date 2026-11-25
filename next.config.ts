import path from "node:path";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    reactStrictMode: true,
    transpilePackages: ["@gaine/core", "@gaine/nextjs"],
    poweredByHeader: false,
    // Hapus blok ini setelah @gaine/* dipasang dari registry (bukan link:../gaine).
    turbopack: {
        root: path.resolve(process.cwd(), ".."),
    },
};

export default nextConfig;
