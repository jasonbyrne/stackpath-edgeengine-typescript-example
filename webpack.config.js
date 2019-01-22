const webpack = require('webpack');
const Path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: Path.resolve(__dirname, 'src/index.ts'),
    output: {
        path: Path.join(__dirname, 'dist'),
        filename: 'bundle.js',
    },
    optimization: {
        minimize: false,
    },
    resolve: {
        extensions: [".ts", ".tsx", ".js"],
        alias: {
            '~': Path.resolve(__dirname, 'src'),
        }
    },
    module: {
        rules: [
            { test: /\.tsx?$/, loader: "ts-loader" }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(['build'], {
            root: Path.resolve(__dirname),
        })
    ],
};