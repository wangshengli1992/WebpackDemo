const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const { webpack } = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');


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
            },
            {
                test: /\.css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader',
                        options: {
                            modules: {
                                mode:'local',
                                localIdentName: '[name]__[local]-[hash:base64:5]'
                            },
                        }
                    },
                    'postcss-loader',
                ],
                exclude: /node_modules/,
            },
            {
                test: /\.less$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader',
                        options: {
                            modules: {
                                mode:'local',
                                localIdentName: '[name]__[local]-[hash:base64:5]'
                            },
                        }
                    },
                    'postcss-loader',
                    'less-loader',
                ]
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
        new MiniCssExtractPlugin({
            filename: 'css/[name].[hash:8].css',
            chunkFilename: 'css/[id].[hash:8].css'
        }),
    ],
};
module.exports = config;
