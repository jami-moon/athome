const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
	context: __dirname,
	entry: "./src/scss/main.scss",
	output: {
		path: path.resolve(__dirname, "public"),
	},
	plugins: [new MiniCssExtractPlugin({ filename: "css/style.css" })],
	module: {
		rules: [
			{
				test: /\.s[ac]ss$/i,
				use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
				exclude: /node_modules/,
			},
		],
	},
    mode: 'production'
};
