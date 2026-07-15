/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: "/:path*",
        destination: "https://jdjuan.io/nine/:path*",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
