const withImages = require("next-images");

module.exports = withImages({
  reactStrictMode: false,
  images: {
    domains: ["tutorlab.s3.ap-northeast-2.amazonaws.com"],
  },

  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
  resolve: {
    modules: [resolve(process.cwd(), "src"), "node_modules"],
    extensions: ["*", ".js", ".jsx", ".json"],
    symlinks: false,
    cacheWithContext: false,
  },
});
