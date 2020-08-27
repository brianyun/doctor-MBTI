const webpack = require("webpack");
const withImages = require("next-images");

module.exports = withImages({
	webpack(config, options) {
		return config;
	},
	assetPrefix: process.env.NODE_ENV === "production" ? "" : "",
});
