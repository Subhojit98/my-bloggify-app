/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https" || "http",
                hostname: "**"
            }
        ],
    }
};

export default nextConfig;
