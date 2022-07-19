/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // images: {
  //   deviceSizes: [320, 420, 768, 1024, 1200],
  //   iconSizes: [],
  //   domains: ["https://res.cloudinary.com/"],
  //   path: '/_next/image',
  //   loader: 'default',
  // },
  images: {
    domains: ['res.cloudinary.com'],
  }
}

module.exports = nextConfig
