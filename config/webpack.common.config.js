const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

/**
 * webpack智能提示功能
 * @type {import('webpack').Configuration}
 */
const config = {
    entry: {
        app: './src/index.js',
        framework: ['react', 'react-dom']
    },
    output: {
        filename: '[name].[chunkhash:8].bundle.js',
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
        })
    ],
    optimization: {
        splitChunks: {
            chunks: 'all',
            minSize: 30000,
            maxSize: 0,
            minChunks: 1,
            cacheGroups: {
                framework: {
                    test: 'framework',
                    name: 'framework',
                    enforce: true,
                },
                vendors: {
                    priority: -10,
                    test: /[\\/]node_modules[\\/]/,
                    name: 'vendor',
                    enforce: true,
                }
            }
        }
    }
};
module.exports = config;
