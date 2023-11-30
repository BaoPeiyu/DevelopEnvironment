const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {

  entry: path.resolve(__dirname, 'resources/assets/js/main.js'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: './assets/js/main.js',
    clean: true
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'resources/view/index.ejs'),
      filename: path.resolve(__dirname, 'dist/index.html')
    }),
    new MiniCssExtractPlugin({
      filename: './assets/css/style.css'
    })
  ],
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader',
        ],
      },
      {
        test: /\.ejs$/,
        use: [
          "html-loader",
          "ejs-plain-loader"
        ],
      },
    ],
  },
};