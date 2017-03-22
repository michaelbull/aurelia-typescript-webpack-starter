let path = require('path'),
    webpack = require('webpack'),
    { AureliaPlugin } = require('aurelia-webpack-plugin');

module.exports = {
    entry: {
        app: 'aurelia-bootstrapper'
    },

    output: {
        path: path.join(__dirname, 'dist'),
        publicPath: '/dist/',
        filename: '[name].js'
    },

    resolve: {
        extensions: [
            '.webpack.js',
            '.web.js',
            '.js',
            '.jsx',
            '.ts',
            '.tsx'
        ],
        modules: [
            'src',
            'node_modules'
        ]
    },

    module: {
        rules: [
            {
                test: /\.ts$/,
                use: 'awesome-typescript-loader'
            },
            {
                test: /\.html$/,
                use: 'html-loader'
            }
        ]
    },

    plugins: [
        new AureliaPlugin({
            includeAll: 'src'
        })
    ]
};
