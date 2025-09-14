/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: false,
  images: {
    unoptimized: true,
    domains: ['images.unsplash.com', 'res.cloudinary.com'],
  },
}

export default nextConfig
