var webpack = require('webpack');
var MinifyPlugin = require("babel-minify-webpack-plugin");

module.exports = {
  entry: "./src/app.js",
  stats: {
      warnings: false
  },
  output: {
    path: __dirname + "/",
    filename: "app.js"
  },
  module: {
    loaders: [{
      exclude: /node_modules/,
      loader: 'babel-loader',
      query: {
        presets: ['react', 'env']
      }
    }]
  },
  plugins: [
    new MinifyPlugin(),
    new webpack.DefinePlugin({
      "process.env": {
        NODE_ENV: JSON.stringify("production"),
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      compressor: {
        warnings: false,
      }
    })
  ]
};
