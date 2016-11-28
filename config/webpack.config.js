const webpack = require('webpack');
const path = require('path');
const htmlPlugin = require('html-webpack-plugin');

module.exports = {

    entry: './src/app.js',
    output: {
        filename: 'app.bundle.min.js',
        path: path.join(__dirname, '..', './build')
    },
    module: {
        loaders: [{
            test: /\.js$/,
            loader: 'babel-loader',
            exclude: /(node_modules)/,

            query: {
                presets: 'es2015'
            }
        }]
    },
    plugins: [
        new htmlPlugin({
            template: './src/index.html',
            inject: 'body'
        }),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        })
    ],
    devServer: {
        port: 3000,
        host: 'localhost',
        historyApiFallback: true,
        watchOptions: {
            aggregateTimeout: 300
        },
        stats: 'errors-only'
    }

}
