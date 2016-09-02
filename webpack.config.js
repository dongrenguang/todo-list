const path = require("path");
const webpack = require("webpack");
const CleanWebpackPlugin = require("clean-webpack-plugin");

const mainPath = path.resolve("./client");
const buildPath = path.resolve("./public/assets");
const publicPath = path.resolve("./public");

module.exports = {
  context: mainPath,
  entry: {
    vendor: [
      "react",
      "react-dom",
      "redux",
      "react-redux"
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
  devServer: {
    contentBase: publicPath
  },
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
    new webpack.optimize.CommonsChunkPlugin({
      name: "vendor",
      filename: "vendor.js",
      minChunks: Infinity
    })
  ]
};
