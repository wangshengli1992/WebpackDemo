const common = require('./webpack.common.config');
const { merge } = require('webpack-merge');
const UglifyjsWebpackPlugin = require('uglifyjs-webpack-plugin');

/**
 * @type {import('webpack').Configuration}
 */
const config = {
    entry: {
        framework: ['react', 'react-dom']
    },
    mode: 'production',
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
        },
        minimize: true,
        minimizer: [new UglifyjsWebpackPlugin()],
    }
};
module.exports = merge(common, config);
