require("dotenv").config();
const withCSS = require("@zeit/next-css");
const withSass = require("@zeit/next-sass");
const withImages = require("next-images");
const path = require("path");
const Dotenv = require("dotenv-webpack");

const webpackConfig = {
  webpack: config => {
    config.plugins = config.plugins || [];

    config.plugins = [
      ...config.plugins,

      // Read the .env file
      new Dotenv({
        path: path.join(__dirname, ".env"),
        systemvars: true
      })
    ];

    return config;
  }
};
module.exports = withImages(withSass(webpackConfig));
