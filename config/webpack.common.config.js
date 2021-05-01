const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const { webpack } = require('webpack');
const UglifyjsWebpackPlugin = require('uglifyjs-webpack-plugin');

/**
 * webpack智能提示功能
 * @type {import('webpack').Configuration}
 */
const config = {
    entry: {
        app: './src/index.js',
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, '../dist')
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                use: 'babel-loader',
                exclude: /node_modules/,
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'public/index.html',
            filename: 'index.html',
            inject: 'body',
            minify: {
                removeComments: true,
                collapseWhitespace: true,
            }
        }),
        new CleanWebpackPlugin({
            dry: false,
        }),
    ],
};
module.exports = config;
