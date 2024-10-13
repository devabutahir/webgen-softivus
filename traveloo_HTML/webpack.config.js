'use strict'
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require('path')
const autoprefixer = require('autoprefixer')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyPlugin = require("copy-webpack-plugin");
const HtmlWebpackSimpleIncludePlugin = require("html-webpack-simple-include-plugin");
const fs = require("fs");


const htmlFiles = ['index', 'about-us', 'blogs', 'blog-details', 'contact-us', 'destination-details', 'destinations', 'tours', 'tour-details'].map(
  (fileName) => new HtmlWebpackPlugin({
    template: './src/' + fileName + '.html',
    filename: './' + fileName + '.html' //relative to root of the application
  })
)

module.exports = {
  mode: 'development',
  entry: './src/main.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true
  },
  devServer: {
    static: path.resolve(__dirname, 'dist'),
    port: 8080,
    hot: true,
    liveReload: true,
    watchFiles: ['src/**/*'],
  },
  plugins: [
    ...htmlFiles,

    new CopyPlugin({
      patterns: [
        { from: "src/assets", to: "assets" }
      ],
    }),
    new MiniCssExtractPlugin({
      filename: "style.css",
    }),

    new HtmlWebpackPlugin({ template: './src/index.html' }),
    new HtmlWebpackSimpleIncludePlugin([
      {
        tag: "<include-footer />",
        content: fs.readFileSync(
          path.resolve(__dirname, "src/partials/footer.html")
        ),
      },
      {
        tag: "<include-testimonial />",
        content: fs.readFileSync(
          path.resolve(__dirname, "src/partials/testimonial.html")
        ),
      },
      {
        tag: "<include-head />",
        content: fs.readFileSync(
          path.resolve(__dirname, "src/partials/head.html")
        ),
      },
      {
        tag: "<include-back-to-top />",
        content: fs.readFileSync(
          path.resolve(__dirname, "src/partials/back-to-top.html")
        ),
      },
      {
        tag: "<include-preloader />",
        content: fs.readFileSync(
          path.resolve(__dirname, "src/partials/preloader.html")
        ),
      },
      {
        tag: "<include-header />",
        content: fs.readFileSync(
          path.resolve(__dirname, "src/partials/header.html")
        ),
      },
    ]),
  ],
  module: {
    rules: [
      {
        test: /\.(sa|sc|c)ss$/i,
        use: [
          {
            // Adds CSS to the DOM by injecting a `<style>` tag
            loader: MiniCssExtractPlugin.loader
          },
          {
            // Interprets `@import` and `url()` like `import/require()` and will resolve them
            loader: 'css-loader'
          },
          {
            // Loader for webpack to process CSS with PostCSS
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: [
                  autoprefixer
                ]
              }
            }
          },
          {
            // Loads a SASS/SCSS file and compiles it to CSS
            loader: 'sass-loader'
          },
        ]
      },
      {
        test: /\.(png|jpg|gif|webp)$/i,
        type: "asset/resource",
        generator: {
          filename: 'assets/images/[name][ext]',
        },
      },
      {
        test: /\.(?:js|mjs|cjs)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
      {
        test: /\.json$/,
        exclude: /node_modules/,
        use: 'json-loader',
        // loader: 'json-loader'
      }
    ]
  }
}