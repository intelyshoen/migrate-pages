/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    assetPrefix:
        process.env.NODE_ENV === 'production' ? 'https://intelyshoen.github.io/migrate-pages' : '',
    images: {
        loader: 'imgix',
        path: 'https://intelyshoen.github.io/migrate-pages',
    },
};

module.exports = nextConfig;
