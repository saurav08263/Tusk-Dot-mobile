import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  /* config options here */
  typescript: {
    ignoreBuildErrors: true,
  },
  reactStrictMode: false,
  // Serve the exported Expo web build (public/affirmations-app) as an SPA:
  // static assets are served from public/ first, any other path under the
  // sub-path falls back to the SPA index.html so client-side routes work.
  async rewrites() {
    return {
      afterFiles: [
        { source: "/affirmations-app", destination: "/affirmations-app/index.html" },
        { source: "/affirmations-app/:path*", destination: "/affirmations-app/index.html" },
      ],
    };
  },
};

export default nextConfig;
