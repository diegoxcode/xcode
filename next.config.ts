import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    unoptimized: true,
    domains: ["s3.amazonaws.com","png.pngtree.com", "img.freepik.com", "static.vecteezy.com","scontent.faqp1-1.fna.fbcdn.net","gestion.pe","mujeresejecutivas.pe","play-lh.googleusercontent.com"]
  },
  distDir: "out",
  output: 'export',
  
};

export default nextConfig;
