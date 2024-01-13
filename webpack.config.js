const path = require("path")
const fs = require("fs")
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const HtmlWebpackPlugin = require("html-webpack-plugin")

const PAGES_DIR = "./src/pug"
const PUG_FILES = fs
  .readdirSync(PAGES_DIR)
  .filter((fileName) => fileName.endsWith(".pug"))

module.exports = (env) => {
  const mode = env.development ? "development" : "production"
  const isDev = mode === "development"

  const HtmlWebpackPluginSettings = {
    inject: "body",
    minify: !isDev,
    favicon: "./src/favicon.png",
  }

  console.log(`Current mode - ${mode}`)

  return {
    mode: mode,
    entry: {
      general: path.resolve(__dirname, "./src/index.js"),
      mainPage: path.resolve(__dirname, "./src/js/mainPage.js"),
      rapperPage: path.resolve(__dirname, "./src/js/rapperPage.js"),
    },
    output: {
      filename: "js/[name].[contenthash].js",
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
          exclude: /node_modules/,
          use: {
            loader: "babel-loader",
            options: {
              presets: ["@babel/preset-env"],
            },
          },
        },
        {
          test: /\.pug$/i,
          use: [
            {
              loader: "html-loader",
            },
            {
              loader: "pug-html-loader",
            },
          ],
        },
        isDev
          ? {}
          : {
              test: /\.(jpg|jpeg|png)$/,
              type: "asset/resource",
              generator: {
                filename: "img/[contenthash][ext]",
              },
            },
        isDev
          ? {}
          : {
              test: /\.(eot|woff2|ttf)$/,
              type: "asset/resource",
              generator: {
                filename: "fonts/[contenthash][ext]",
              },
            },
        isDev
          ? {}
          : {
              test: /\.webm$/,
              type: "asset/resource",
              generator: {
                filename: "video/[contenthash][ext]",
              },
            },
      ],
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: "./src/index.pug",
        filename: "index.html",
        chunks: ["general", "mainPage"],
        ...HtmlWebpackPluginSettings,
      }),
      ...PUG_FILES.map(
        (page) =>
          new HtmlWebpackPlugin({
            template: `${PAGES_DIR}/${page}`,
            filename: `html/${page.replace(/\.pug$/, ".html")}`,
            chunks: ["general", "rapperPage"],
            ...HtmlWebpackPluginSettings,
          })
      ),
      new MiniCssExtractPlugin({
        filename: "css/style.min.[contenthash].css",
      }),
    ],
  }
}
