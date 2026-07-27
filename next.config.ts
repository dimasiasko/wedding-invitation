import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  allowedDevOrigins: [
    'http://localhost:3000',
    '192.168.0.102',
    'fredricka-unpetrifying-oilily.ngrok-free.dev'
  ]
};

export default nextConfig;
