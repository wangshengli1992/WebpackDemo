const common = require('./webpack.common.config');
const { merge } = require('webpack-merge');
const webpack = require('webpack');
const path = require('path');

/**
 * @type {import('webpack').Configuration}
 */
const config = {
    mode: 'development',
    output:{
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, '../dist')
    },
    devServer: {
        contentBase: path.resolve(__dirname, '../dist'),
        open: false,
        port: 9000,
        compress: false,
        hot: true,
        host: '127.0.0.1',
    },
};
module.exports = merge(common, config);
