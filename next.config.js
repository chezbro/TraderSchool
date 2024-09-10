/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: '/traderschool',
  images: {
    domains: ['images.unsplash.com'],
    unoptimized: true, // This allows image optimization to be handled by Vercel
  },
  assetPrefix: '/traderschool',
}

// Add support for SVG files
nextConfig.webpack = (config) => {
  config.module.rules.push({
    test: /\.svg$/,
    use: ['@svgr/webpack']
  });

  return config;
}

module.exports = nextConfig