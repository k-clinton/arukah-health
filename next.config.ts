import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: "export",
  reactStrictMode: true,
  trailingSlash: true,
  turbopack: {
    root: __dirname,
  },
};

export default nextConfig;
