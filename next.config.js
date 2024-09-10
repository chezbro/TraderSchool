/** @type {import('next').NextConfig} */
const nextConfig = {
  assetPrefix: process.env.NODE_ENV === 'production' ? '/traderschool' : '',
  images: {
    domains: ['images.unsplash.com'],
    unoptimized: true, // This allows image optimization to be handled by Vercel
  },
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          { key: 'X-Frame-Options', value: 'ALLOWALL' },
        ],
      },
    ];
  },
  // Add this to ensure proper asset handling on Vercel
  output: 'standalone',
};

// Use module.exports instead of export default
module.exports = nextConfig;