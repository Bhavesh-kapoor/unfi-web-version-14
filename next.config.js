const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: false,
});

const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "crm.unificars.com",
      "api.unificars.com",
      "customer-docs-unifi.s3.amazonaws.com",
      "d3b8ag7jj1mzle.cloudfront.net",
    ],
  },
  env: {
    NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL,
  },
  webpack: (config, { isServer, dev }) => {
    // Remove ReactRefreshWebpackPlugin in production
    if (!dev) {
      config.plugins = config.plugins.filter(
        (plugin) => plugin.constructor.name !== "ReactRefreshWebpackPlugin"
      );
    }

    return config;
  },
  async redirects() {
    return [
      {
        source: '/',
        has: [
          {
            type: 'host',
            value: 'unificars.com', // replace with your non-www domain
          },
        ],
        permanent: true,
        destination: 'https://www.unificars.com', // replace with your www domain
      },
    ];
  },
};

module.exports = nextConfig;
