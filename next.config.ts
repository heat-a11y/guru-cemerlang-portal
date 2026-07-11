import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/guru-cemerlang-portal",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
