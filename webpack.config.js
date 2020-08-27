module.exports = {
	webpackConfig: {
		module: {
			rules: [
				// Babel loader, will use your project’s .babelrc
				{
					test: /\.jsx?$/,
					exclude: /node_modules/,
					loader: "babel-loader",
				},
			],
		},
	},
};
