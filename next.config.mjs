/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [{
            hostname: "images.unsplash.com",
        }],
    },
    env: {
        UNSPLASH_ACCESS_KEY: process.env.UNSPLASH_ACCESS_KEY,
    },
};

export default nextConfig;
