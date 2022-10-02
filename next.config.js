/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  async redirects() {
    return [
      {
        source: '/category',
        destination: '/category/empty',
        permanent: true,
      },
      {
        source: '/account',
        destination: '/account/details',
        permanent: true,
      },
    ]
  },
}

module.exports = nextConfig
