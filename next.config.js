/** @type {import('next').NextConfig} */
const nextConfig = {
  // Removed 'output: export' to enable server-side features
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    // !! WARN !!
    // Dangerously allow production builds to successfully complete even if
    // your project has type errors.
    // !! WARN !!
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
    domains: ["images.unsplash.com"],
  },

  // Add this watchOptions configuration
  webpack: (config, { isServer, dev }) => {
    if (dev && !isServer) {
      // Ignore watching the pagefile.sys and other system files
      config.watchOptions = {
        ignored: [/node_modules/, /\.git/, /pagefile\.sys/],
      };
    }
    return config;
  },
};

module.exports = nextConfig;
