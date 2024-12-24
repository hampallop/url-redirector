import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: '/',
        destination: 'https://shop.line.me/@yuru.coffee',
        permanent: true,
      },
    ]
  },
}

export default nextConfig
