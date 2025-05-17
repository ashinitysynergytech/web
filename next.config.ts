import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
    // Tell Next.js to produce a full static export
    output: 'export',

    // If you use next/image, you may need to un-optimize images:
    images: {
      unoptimized: true
    },
};

export default nextConfig;
