/** @type {import('next').NextConfig} */

const { withContentlayer } = require("next-contentlayer");

const nextConfig = {
    reactStrictMode: false,
    compiler: {
        removeConsole: true,
    },
};

module.exports = withContentlayer({ ...nextConfig });
