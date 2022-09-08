const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");


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
			filename: 'index.html',
			template: "./src/html/index.html",
			chunks: ['main']
		}),
		new MiniCssExtractPlugin({
			filename: "./style.css",
		}),
	],
	devServer: {
		watchFiles: ["./src/html/*"], 
		port: 8020,
		static: {
			directory: path.resolve(__dirname, "dist"),
		},
	},
	devtool: 'source-map',
    mode: 'production'
};