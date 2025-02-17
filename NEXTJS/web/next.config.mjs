/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    trailingSlash: false,
    images: {
        domains: ['*'],
    },
    experimental: {
        appDir: true,
    },
}

export default nextConfig