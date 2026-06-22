import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: '/tools/diaper-calculator',
        destination: '/tools/diaper-cost',
        permanent: true,
      },
    ]
  },
}

export default nextConfig
