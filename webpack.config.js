const webpack = require('webpack');
const WebpackPwaManifest = require("webpack-pwa-manifest");
const path = require('path');


  const config = {
    entry: {
      app: './public/js/index.js',
    },
    output: {
      filename: '[name].bundle.js',
      path: `${__dirname}/dist`
    },
    module: {
      rules: [
        {
          test: /\.(png|jpe?g|gif)$/i,
          use: [
            {
              loader: 'file-loader',
              options: {
                esModule: false,
                name(file) {
                  return '[path][name].[ext]';
                },
                publicPath(url) {
                  return url.replace('../', '/assets/');
                }
              }
            },
            {
              loader: 'image-webpack-loader'
            }
          ]
        }
      ]
    },
    plugins: [
      new webpack.ProvidePlugin({
        $: 'jquery',
        jQuery: 'jquery'
      }),
    new WebpackPwaManifest({
        name: "Budget Tracker",
        short_name: "$ Tracker",
        description: "An app that allows you to budget your money.",
        start_url: "../index.html",
        background_color: "#01579b",
        theme_color: "#ffffff",
        fingerprints: false,
        inject: false,
        icons: [{
          src: path.resolve("./public/icons/icon-512x512.png"),
          sizes: [96, 128, 192, 256, 384, 512],
          destination: path.join("public", "icons")
        }]
      })
       
  
    ],
    mode: 'development'
  };
  
  module.exports = config;