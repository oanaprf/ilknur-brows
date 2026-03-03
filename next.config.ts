import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/ilknur-brows",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
