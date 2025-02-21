/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true, // this disables default image optimization
  },
  assetPrefix: isProd ? '/specify' : '',
  basePath: isProd ? '/specify' : '',
  output: 'export'  // this enables static exports
};

export default nextConfig;
