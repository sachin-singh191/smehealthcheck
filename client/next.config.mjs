/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['example.com'], 
    },
     eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
