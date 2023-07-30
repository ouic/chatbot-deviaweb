const path = require('path');
const dotenv = require('dotenv');

// Load the environment variables from secrets.env
const secretsEnvPath = path.resolve(__dirname, '../secrets.env');
dotenv.config({ path: secretsEnvPath });

const { i18n } = require('./next-i18next.config');

/** @type {import('next').NextConfig} */
const nextConfig = {
  i18n,
  reactStrictMode: true,

  webpack(config, { isServer, dev }) {
    config.experiments = {
      asyncWebAssembly: true,
      layers: true,
    };

    return config;
  },
};

module.exports = nextConfig;
