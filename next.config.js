/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['images.unsplash.com'],
  },
}

// Conditionally add the 'output: export' for production builds
if (process.env.NODE_ENV === 'production') {
  nextConfig.output = 'export'
}

module.exports = nextConfig