/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        UNSPLASH_ACCESS_KEY: process.env.UNSPLASH_ACCESS_KEY,
    },
};

export default nextConfig;
