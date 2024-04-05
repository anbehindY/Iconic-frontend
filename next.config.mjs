/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "daisyui.com",
      },
      {
        hostname: "images.unsplash.com",
      },
        {
            hostname: "iconic.sgp1.digitaloceanspaces.com",
        },
    ],
  },
  env: {
    UNSPLASH_ACCESS_KEY: process.env.UNSPLASH_ACCESS_KEY,
    API_URL: process.env.API_URL,
    STORAGE_URL: process.env.STORAGE_URL,
  },
};

export default nextConfig;
