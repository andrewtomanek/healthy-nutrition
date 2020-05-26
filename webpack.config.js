const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const Dotenv = require("dotenv-webpack");

module.exports = {
  mode: "development",
  devtool: "eval-source-map",
  entry: path.resolve("src/index.tsx"),
  resolve: {
    extensions: [".js", ".ts", ".tsx"],
  },
  devServer: {
    port: 5000,
    publicPath: "/dist/",
    contentBase: path.join(__dirname, 'dist'),
    historyApiFallback: true,
    hot: true,
  },
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
    publicPath: "/dist/",
  },
  module: {
    rules: [
      {
        test: /\.tsx?/,
        exclude: /\.test.tsx?$/,
        loader: "ts-loader",
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        loader: "file-loader",
        options: {
          name: "[path][name].[ext]",
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "public", "index.html"),
      filename: "./index.html",
      favicon: path.join(__dirname, "public", "favicon.ico"),
    }),
    new Dotenv(),
  ],
};
