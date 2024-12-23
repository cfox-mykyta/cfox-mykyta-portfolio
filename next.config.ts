import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true, // Увімкнення строгого режиму React
  swcMinify: true, // Оптимізація виробничої збірки
  images: {
    domains: ["yourdomain.com"], // Налаштування дозволених доменів для next/image
  },
  webpack: (config) => {
    // Кастомізація Webpack (якщо потрібно)
    return config;
  },
  // next.config.ts
  module,exports : {
    reactStrictMode: true,
  }

};

export default nextConfig;
