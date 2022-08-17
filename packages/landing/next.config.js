const withPlugins = require('next-compose-plugins');

const nextConfig = { images: { domains: ['pbs.twimg.com'], loader: 'akamai', path: '', }, };

module.exports = withPlugins([], nextConfig);
