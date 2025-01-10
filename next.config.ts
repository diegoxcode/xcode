import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: ["png.pngtree.com", "img.freepik.com", "static.vecteezy.com"]
  },
  distDir: "out"
};

export default nextConfig;
