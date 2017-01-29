var path = require('path'),
    webpack = require('webpack'),
    AureliaWebPackPlugin = require('aurelia-webpack-plugin');

module.exports = {
    entry: {
        app: [
            './src/main.ts'
        ],
        vendor: [
            'aurelia-bootstrapper-webpack',
            'aurelia-event-aggregator',
            'aurelia-framework',
            'aurelia-history-browser',
            'aurelia-logging-console',
            'aurelia-templating-binding',
            'aurelia-templating-router',
            'aurelia-templating-resources'
        ]
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
        ]
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
        new AureliaWebPackPlugin(),
        new webpack.optimize.CommonsChunkPlugin('vendor')
    ]
};
