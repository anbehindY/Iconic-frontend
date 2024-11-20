/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "daisyui.com",
      },
      {
        hostname: "cloud.appwrite.io",
      },
    ],
  },
  env: {
    API_URL: process.env.API_URL,
    STORAGE_URL: process.env.STORAGE_URL,
    APPWRITE_PROJECT_ID: process.env.APPWRITE_PROJECT_ID,
  },
};

export default nextConfig;
