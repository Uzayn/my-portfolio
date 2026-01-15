import type { NextConfig } from "next";

const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'picsum.photos',
        port: '', // Leave empty if no specific port
        pathname: '/**', // Allows all paths under this domain
      },
      // Add more patterns if you have other domains (e.g., for real project images)
    ],
  },
};

export default nextConfig;
