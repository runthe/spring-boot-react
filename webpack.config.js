'use strict';

const webpack = require('webpack');
const path = require('path');

const PATHS = {
    entryPath: path.join(__dirname, 'src/main/webapp/static/js/react/index.js'),
    buildPath: path.join(__dirname, 'src/main/webapp/static/js/react')
};

module.exports = {
    entry: PATHS.entryPath,

    output: {
        path: PATHS.buildPath,
        filename: 'bundle.js'
    },

    externals: {
        // require("jquery") is external and available
        //  on the global var jQuery
        "jquery": "jQuery"
    },

    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel',
                exclude: /(node_modules|bower_components)/,
                query: {
                    cacheDirectory: true,
                    presets: ['es2015', 'react']
                }
            },
            {
                test: /\.css$/,
                loaders: ['style', 'css']
            }
        ]
    },

    /*
     plugins: [
     new webpack.optimize.UglifyJsPlugin({
     compress: {
     warnings: false
     }
     })
     ]
     */
};