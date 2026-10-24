import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  turbopack: {
    // Pin the workspace root to this project. Without this, Next infers the
    // root from a stray package-lock.json in the home folder and then fails
    // to resolve the tailwindcss import from the wrong directory.
    root: __dirname,
  },
};

export default nextConfig;
