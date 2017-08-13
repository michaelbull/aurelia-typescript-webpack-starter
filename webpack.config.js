const path = require('path');
const webpack = require('webpack');
const { AureliaPlugin } = require('aurelia-webpack-plugin');

module.exports = (env) => {
    let config = {
        entry: {
            app: 'aurelia-bootstrapper'
        },

        output: {
            path: path.resolve(__dirname, 'dist'),
            publicPath: '/dist/',
            filename: '[name].js',
            chunkFilename: '[name].js'
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
            new AureliaPlugin()
        ]
    };

    if (env === 'prod') {
        config.plugins.push(new webpack.optimize.UglifyJsPlugin());
        config.plugins.push(new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify('production')
            }
        }));
    }

    return config;
};
