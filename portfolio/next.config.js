/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "localhost",
        port: "8000",
      },
      {
        protocol: "https",
        hostname: "asd-portfolio.s3.ap-southeast-1.amazonaws.com",
        port: "",
      },
    ],
  },
};

module.exports = nextConfig;
