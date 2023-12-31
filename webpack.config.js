const path = require("path")
const fs = require("fs")
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const CopyPlugin = require("copy-webpack-plugin")

const PAGES_DIR = "./src/pug"
const PUG_FILES = fs
  .readdirSync(PAGES_DIR)
  .filter((fileName) => fileName.endsWith(".pug"))

module.exports = (env) => {
  const mode = env.development ? "development" : "production"
  const isDev = mode === "development"

  console.log(`Current mode - ${mode}`)

  return {
    mode: mode,
    entry: {
      general: path.resolve(__dirname, "./src/index.js"),
      mainPage: path.resolve(__dirname, "./src/js/mainPage.js"),
      rapperPage: path.resolve(__dirname, "./src/js/rapperPage.js"),
    },
    output: {
      filename: "[name].[contenthash].js",
      path: path.resolve(__dirname, "./build"),
      clean: true,
    },
    devServer: {
      port: 6900,
      open: true,
      watchFiles: "src/**/*",
    },
    module: {
      rules: [
        {
          test: /\.sass$/,
          use: [
            isDev ? "style-loader" : MiniCssExtractPlugin.loader,
            "css-loader",
            "sass-loader",
          ],
        },
        {
          test: /\.js$/,
          use: {
            loader: "babel-loader",
            options: {
              presets: ["@babel/preset-env"],
            },
          },
        },
        {
          test: /\.(png|jpe?g|gif|svg)$/i,
          type: "asset/resource",
        },
        {
          test: /\.(woff|woff2|eot|ttf|otf)$/i,
          type: "asset/resource",
        },
        {
          test: /\.pug$/i,
          loader: "pug-loader",
        },
      ],
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: "./src/index.html",
        filename: "index.html",
        inject: "body",
        chunks: ["general", "mainPage"],
      }),
      ...PUG_FILES.map(
        (page) =>
          new HtmlWebpackPlugin({
            template: `${PAGES_DIR}/${page}`,
            filename: `html/${page.replace(/\.pug$/, ".html")}`,
            inject: "body",
            chunks: ["general", "rapperPage"],
          })
      ),
      new MiniCssExtractPlugin({
        filename: "style.css",
      }),
      new CopyPlugin({
        patterns: [
          { from: "./src/img", to: "./img" },
          { from: "./src/video", to: "./video" },
          { from: "./src/fonts", to: "./fonts" },
        ],
      }),
    ],
  }
}
