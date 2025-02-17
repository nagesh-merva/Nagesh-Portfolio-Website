/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,

    // Enable static rendering for dynamic routes
    trailingSlash: false,

    // Add image domains if you're loading images from external sources
    images: {
        domains: ['*'],
    },

    // Additional experimental features that can help with dynamic routes
    experimental: {
        appDir: true,
    },
}

module.exports = nextConfig