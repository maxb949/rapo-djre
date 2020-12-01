const BundleTracker = require('webpack-bundle-tracker');

const publicPath = "/static/bundles/";

const cssFilename = 'css/[name].[contenthash:8].css';

module.exports = {
  // KEEP OTHER VALUES
  output: {
    // NEAR LINE 67

    // Generated JS file names (with nested folders).
    // There will be one main bundle, and one file per asynchronous chunk.
    // We don't currently advertise code splitting but Webpack supports it.
    filename: 'js/[name].[chunkhash:8].js',
    chunkFilename: 'js/[name].[chunkhash:8].chunk.js',
  },
  module: {
    // .. KEEP OTHER VALUES, ONLY UPDATE THE FOLLOWING VALUES
    rules: [
      {
        oneOf: [
          // LINE 140
          {
            options: {
              limit: 10000,
              name: 'media/[name].[hash:8].[ext]',
            },
          },
          {
            // LINE 220
            options: {
              name: 'media/[name].[hash:8].[ext]',
            },
          },
        ],
      },
    ],
  },
  plugins: [
    // KEEP OTHER VALUES
    // LINE 320
    new BundleTracker({path: paths.statsRoot, filename: 'webpack-stats.prod.json'}),
  ],
}