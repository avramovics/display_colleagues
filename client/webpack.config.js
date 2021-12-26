const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
require('dotenv').config({path:__dirname+'/../.env'})
module.exports = {
  entry: {
    app: path.join(__dirname, "/src/Index.js"),
  },

  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "main.js",
  },

  module: {
    rules: [
      {
        test: /\.(sa|sc|c)ss$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: "babel-loader",
      },
      {
        test: /\.html$/,
        use: "html-loader",
      },
    ],
  },

  resolve: {
    extensions: [".js", ".jsx"],
  },

  plugins: [
    new HtmlWebpackPlugin({
      title: "React App",
      filename: "index.html",
      template: "./src/index.html",
    }),

    new MiniCssExtractPlugin({
      filename: "app.css",
      chunkFilename: "[id].css",
    }),
  ],
  devServer: {
    historyApiFallback: true,
    contentBase: path.join(__dirname, "dist"),
    compress: true,
    port: process.env.PORT_CLIENT, 
    open: true,
    stats: "errors-only",
  },
};
