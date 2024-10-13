'use strict'
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require('path')
const autoprefixer = require('autoprefixer')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyPlugin = require("copy-webpack-plugin");
const HtmlWebpackSimpleIncludePlugin = require("html-webpack-simple-include-plugin");
const fs = require("fs");


const htmlFiles = ['index', 'about-us', "features", 'account', 'account-details', 'confirm-gmail', 'contact-us', 'credit-card-details', 'credit-card', 'forget-password', 'loan-details', 'loan', 'service-details', 'services', 'sign-in', 'sign-up', 'team-details', 'team'].map(
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
        tag: "<include-testimonials />",
        content: fs.readFileSync(
          path.resolve(__dirname, "src/partials/testimonials.html")
        ),
      },
      {
        tag: "<include-work-with-brand />",
        content: fs.readFileSync(
          path.resolve(__dirname, "src/partials/work-with-brand.html")
        ),
      },
      {
        tag: "<include-call-to-action />",
        content: fs.readFileSync(
          path.resolve(__dirname, "src/partials/call-to-action.html")
        ),
      },
      {
        tag: "<include-faq />",
        content: fs.readFileSync(
          path.resolve(__dirname, "src/partials/faq.html")
        ),
      },
      {
        tag: "<include-loan-process />",
        content: fs.readFileSync(
          path.resolve(__dirname, "src/partials/loan-process.html")
        ),
      },
      {
        tag: "<include-how-it-work />",
        content: fs.readFileSync(
          path.resolve(__dirname, "src/partials/how-it-work.html")
        ),
      },
      {
        tag: "<include-our-app />",
        content: fs.readFileSync(
          path.resolve(__dirname, "src/partials/our-app.html")
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
      {
        tag: "<include-scripts />",
        content: fs.readFileSync(
          path.resolve(__dirname, "src/partials/scripts.html")
        ),
      },
    ]),
  ],
  module: {
    rules: [
      {
        test: /\.(scss)$/,
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
      }
    ]
  }
}