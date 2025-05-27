/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "img.shoplineapp.com",
      },
    ],
    // domains: ["img.shoplineapp.com"],
  },
};

export default nextConfig;
