const common = require('./webpack.common.config');
const { merge } = require('webpack-merge');

/**
 * @type {import('webpack').Configuration}
 */
const config = {
    mode:'development',
};
module.exports = merge(common, config);
