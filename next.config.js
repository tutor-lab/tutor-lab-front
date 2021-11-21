module.exports = {
  reactStrictMode: false,
  images: {
    domains: ["example.com"],
  },

  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
};
