/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['images.unsplash.com', 'via.placeholder.com'],
  },
  experimental: {
    serverComponentsExternalPackages: ['@prisma/client', 'prisma']
  }
}

module.exports = nextConfig
