const webpack = require('webpack');
const WebpackPwaManifest = require("webpack-pwa-manifest");

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