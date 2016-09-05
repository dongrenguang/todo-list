const path = require("path");
const webpack = require("webpack");
const CleanWebpackPlugin = require("clean-webpack-plugin");

const mainPath = path.resolve("./src");
const buildPath = path.resolve("./public/assets");

module.exports = {
  context: mainPath,
  entry: {
    vendor: [
      "react",
      "react-dom",
      "redux",
      "react-redux",
      "babel-polyfill"
    ],
    index: ["./index.js"]
  },
  output: {
    path: buildPath,
    publicPath: "/assets/",
    filename: "[name].js"
  },
  resolve: {
    extensions: ["", ".js", ".jsx"],
  },
  devtool: "inline-source-map",
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_module/,
        loaders: ["babel-loader"]
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin([buildPath]),
    new webpack.optimize.OccurrenceOrderPlugin(),
    // new webpack.optimize.UglifyJsPlugin(),
    new webpack.optimize.CommonsChunkPlugin({
      name: "vendor",
      filename: "vendor.js",
      minChunks: Infinity
    })
  ]
};
