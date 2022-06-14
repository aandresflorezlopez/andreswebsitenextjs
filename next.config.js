/** @type {import('next').NextConfig} */
const i18n = require('./next-i18next.config');

const nextConfig = {
  reactStrictMode: true,
  ...i18n,
  images: {
    domains: ['awv3node-homepage.surge.sh']
  }
};

module.exports = nextConfig;
