const path = require("path");
const webpack = require("webpack");

module.exports = {
  mode: "development",
  devtool: "eval-source-map",
  entry: path.resolve("src/index.tsx"),
  resolve: {
    extensions: [".js", ".ts", ".tsx"]
  },
  devServer: {
    port: 9000,
    historyApiFallback: true,
    hot: true
  },
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
    publicPath: "/dist/"
  },
  module: {
    rules: [
      {
        test: /\.tsx?/,
        exclude: /\.test.tsx?$/,
        loader: "ts-loader"
      },
      {
        test: /\.(png|jpg)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              mimetype: 'image/png'
            }
          }
        ]
      }
    ]
  },
  plugins: [new webpack.HotModuleReplacementPlugin()]
};
