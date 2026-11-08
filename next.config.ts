import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      { source: "/mentorias", destination: "/asesorias", permanent: true },
      { source: "/projects", destination: "/casos", permanent: true },
    ];
  },
};

export default nextConfig;
