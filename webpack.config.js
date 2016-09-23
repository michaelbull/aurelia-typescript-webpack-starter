var webpack = require('webpack'),
    AureliaWebPackPlugin = require('aurelia-webpack-plugin');

module.exports = {
  entry: {
    app: [
      './src/main.ts'
    ],
    aurelia: [
      'aurelia-bootstrapper-webpack',
      'aurelia-binding',
      'aurelia-dependency-injection',
      'aurelia-event-aggregator',
      'aurelia-framework',
      'aurelia-history',
      'aurelia-history-browser',
      'aurelia-loader',
      'aurelia-loader-webpack',
      'aurelia-logging',
      'aurelia-logging-console',
      'aurelia-metadata',
      'aurelia-pal',
      'aurelia-pal-browser',
      'aurelia-path',
      'aurelia-polyfills',
      'aurelia-route-recognizer',
      'aurelia-router',
      'aurelia-task-queue',
      'aurelia-templating',
      'aurelia-templating-binding',
      'aurelia-templating-router',
      'aurelia-templating-resources'
    ]
  },

  output: {
    path: './dist',
    publicPath: 'dist/',
    filename: '[name].js'
  },

  resolve: {
      extensions: [
          '',
          '.webpack.js',
          '.web.js',
          '.js',
          '.jsx',
          '.ts',
          '.tsx'
      ]
  },

  module: {
    loaders: [
      {
        test: /\.ts$/,
        loader: 'awesome-typescript-loader'
      },
      {
        test: /\.html$/,
        loader: 'html'
      }
    ]
  },

  plugins: [
      new AureliaWebPackPlugin(),

      new webpack.optimize.CommonsChunkPlugin({
        name: [
          'aurelia'
        ]
      }),
  ],
}
