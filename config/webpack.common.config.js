const path = require('path');
/**
 * webpack智能提示功能
 * @type {import('webpack').Configuration}
 */
const config = {
    entry: {
        app: './src/index.js'
    },
    output: {
        filename: 'js/bundle.js',
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
    }
};
module.exports = config;
