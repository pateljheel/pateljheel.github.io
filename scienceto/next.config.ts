import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: 'export',  // Ensures a static export
  images: {
    unoptimized: true, // GitHub Pages doesn't support Next.js Image Optimization
  },
  // Optional: If your repo is 'username.github.io/repo-name/', 
  // add: basePath: '/repo-name',
};

export default nextConfig;
