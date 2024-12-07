/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: "/sitemap.xml",
        destination: "/", // This points to your dynamic sitemap API route
      },
    ];
  },
};

module.exports = nextConfig;
