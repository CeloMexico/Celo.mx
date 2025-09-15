/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    typedRoutes: true,
    optimizePackageImports: [
      "framer-motion",
      "@privy-io/react-auth",
      "wagmi",
      "viem"
    ]
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'i.postimg.cc',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;



