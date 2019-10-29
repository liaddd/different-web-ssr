const withCSS = require("@zeit/next-css");
const withSass = require("@zeit/next-sass");
const withImages = require("next-images");
const path = require("path");

const webpackConfig = {
  webpack: config => {
    config.plugins = config.plugins || [];
    return config;
  }
};
module.exports = withImages(withSass(webpackConfig));
