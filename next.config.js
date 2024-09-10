/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['images.unsplash.com'],
    unoptimized: true, // This allows image optimization to be handled by Vercel
  },
  // Remove the conditional output: 'export' as it's not needed for Vercel deployment
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