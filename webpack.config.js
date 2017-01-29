let path = require('path'),
    webpack = require('webpack'),
    aureliaCoreDependencies = require('aurelia-core-dependencies'),
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
        ],
        symlinks: false
    },

    module: {
        rules: [
            {
                test: /\.ts$/,
                loader: 'awesome-typescript-loader'
            },
            {
                test: /\.html$/,
                loader: 'html-loader'
            }
        ]
    },

    plugins: [
        new AureliaPlugin({
            includeAll: 'src'
        }),
        aureliaCoreDependencies
    ]
};
