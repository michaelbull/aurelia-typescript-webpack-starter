import * as HtmlWebpackPlugin from 'html-webpack-plugin';
import * as path from 'path';
import * as webpack from 'webpack';

const { AureliaPlugin } = require('aurelia-webpack-plugin');

let srcDir = path.resolve(__dirname, 'src');
let distDir = path.resolve(__dirname, 'dist');

function configure(env: any, args: any): webpack.Configuration {
    let config: webpack.Configuration = {
        entry: {
            app: 'aurelia-bootstrapper'
        },

        output: {
            path: distDir,
            filename: '[name].js',
            chunkFilename: '[name].js'
        },

        module: {
            rules: [
                {
                    test: /\.ts$/,
                    use: 'ts-loader'
                },
                {
                    test: /\.html$/,
                    use: 'html-loader'
                }
            ]
        },

        resolve: {
            extensions: [
                '.js',
                '.ts'
            ],
            modules: [
                'node_modules',
                srcDir
            ]
        },

        plugins: [
            new AureliaPlugin(),
            new HtmlWebpackPlugin({
                template: path.resolve(srcDir, 'index.html')
            })
        ],

        devServer: {
            stats: 'errors-only'
        }
    };

    if (args.mode === 'development') {
        config.devtool = 'inline-source-map';
    }

    return config;
}

export default configure;
