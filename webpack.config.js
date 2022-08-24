const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const StylelintWebpackPlugin = require("stylelint-webpack-plugin");

module.exports = {
	context: __dirname,
	entry: "./src/index.js",
	output: {
		path: path.resolve(__dirname, "dist"),
		filename: "main.js",
	},
	module: {
		rules: [
			{
				test: /\.s[ac]ss$/i, 
				use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
				exclude: /node_modules/,
			},
		],
	},
	plugins: [
		new CleanWebpackPlugin (),
		new HtmlWebpackPlugin({
			template: "./src/html/index.html",
		}),
		new MiniCssExtractPlugin({
			filename: "./style.css",
		}),
		new StylelintWebpackPlugin({
			configFile: ".stylelintrc",
			files: "./**.*.scss",
			fix: true,
		}),
	],
	devServer: {
		static: {
			directory: path.resolve(__dirname, "dist"),
		},
		port: 8020,
	},
	devtool: 'source-map',
    mode: 'production'
};