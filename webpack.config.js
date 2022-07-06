const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    context: __dirname,
    entry: './src/js/index.js',
    output: {
        publicPath: '/dist/',
        path: path.resolve(__dirname, 'dist'),
        filename: 'main.js'
    }
}
