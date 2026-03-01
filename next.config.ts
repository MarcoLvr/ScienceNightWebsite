import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    output: "standalone",
    allowedDevOrigins: ["*"],
    images: {
        remotePatterns: [
            new URL("https://sciencenight.it/gallery/**"),
            ]
    }
  /* config options here */
};

export default nextConfig;
