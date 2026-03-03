import type { NextConfig } from "next";
import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin('./src/i18n.ts');

const nextConfig: NextConfig = {
  // Enables standalone mode, which radically reduces the Vercel bundle size
  output: "standalone",

  allowedDevOrigins: [
    'http://192.168.31.218:3000',
    'http://192.168.31.*:3000',
  ],

  // In Next.js 15+, this is now a top-level configuration property
  outputFileTracingExcludes: {
    "**/*": [
      ".next/cache/**/*",
      "node_modules/@swc/**/*",
    ],
  },
};

export default withNextIntl(nextConfig);
