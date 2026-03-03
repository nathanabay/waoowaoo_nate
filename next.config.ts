import type { NextConfig } from "next";
import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin('./src/i18n.ts');

const nextConfig: NextConfig = {
  // 1. Standalone mode radically reduces the Vercel bundle size
  output: "standalone",

  allowedDevOrigins: [
    'http://192.168.31.218:3000',
    'http://192.168.31.*:3000',
  ],

  // 2. This is now a TOP-LEVEL configuration property in Next.js 15
  outputFileTracingExcludes: {
    "**/*": [
      ".next/cache/**/*",
      "node_modules/@swc/**/*",
    ],
  },
};

export default withNextIntl(nextConfig);
