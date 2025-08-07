/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  output: 'standalone', // 🔥 Requerido por next-on-pages
  experimental: {
    serverActions: true, // Opcional, solo si estás usándolos
  }
}

export default nextConfig
