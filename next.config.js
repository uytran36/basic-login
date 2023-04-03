/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  plugins: [require("@tailwindcss/forms")],
  env: {
    API_HOST: process.env.API_HOST,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "tailwindui.com",
        port: "",
        pathname: "/img/logos/**",
      },
      {
        protocol: "https",
        hostname: "www.totalwine.com",
        port: "",
        pathname: "/media/sys_master/**",
      },
    ],
  },
};

module.exports = nextConfig;
