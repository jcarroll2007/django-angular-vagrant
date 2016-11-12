'use strict';

// Modules
var webpack = require('webpack');
var path = require('path');

var ENV = process.env.npm_lifecycle_event;
var isTest = ENV === 'test' || ENV === 'test-watch';
var isProd = ENV === 'build';

var PATHS = {
    entry: ['./src/app.js'],
    dist: './dist',
    assetsSrc: './images',
    bundleName: 'bundle.js'
};

PATHS.assestsDist = path.join(PATHS.dist, 'assets');

module.exports = function () {
    var config = {};

    config.entry = isTest ? {} : PATHS.entry;
    config.output = isTest ? {} : {
        path: PATHS.dist,
        publicPath: './',
        filename: PATHS.bundleName
    };

    if (isTest) {
        config.devtool = 'inline-source-map';
    } else if (isProd) {
        config.devtool = 'source-map';
    } else {
        config.devtool = 'eval-source-map';
    }

    config.module = {
        preLoaders: [{
            test: /\.js$/,
            loader: 'eslint',
            exclude: [/.*node_modules/, /generators/, /images/, /fonts/]
        }],
        loaders: [{
            test: /\.js$/,
            loader: 'babel',
            exclude: [/.*node_modules/, /generators/]
        }, {
            test: /\.css$/,
            loader: 'style!css!'
        }, {
            test: /\.scss$/,
            loader: isTest ? 'null' : 'style!css!sass!'
        }, {
            test: /\.html$/,
            loader: 'raw'
        }, {
            test: /\.woff?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
            loader: 'url-loader?limit=10000&mimetype=application/font-woff&name=assets/[path][name].[ext]'
        }, {
            test: /\.woff2?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
            loader: 'url-loader?limit=10000&mimetype=application/font-woff2&name=assets/[path][name].[ext]'
        }, {
            test: /\.(eot|ttf|svg|gif|png|jpg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
            loader: 'file-loader?name=assets/[path][name].[ext]'
        }, {
            test: /\.json$/,
            loader: 'json-loader'
        }]
    };

    if (isTest) {
        config.module.preLoaders.unshift({
            test: /\.js$/,
            exclude: [
                /node_modules/,
                /\.spec\.js$/
            ],
            loader: 'isparta-loader'
        });
    }

    config.devServer = {
        contentBase: './src'
    };

    config.resolve = {
        root: [
            path.resolve('./src'),
            path.resolve('./node_modules')
        ]
    };

    config.watch = !isProd;
    config.watchOptions = {
        poll: 1000
    };

    return config;
}();