const path = require('path');

const HTMLWebpackPlugin = require("html-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
    mode: 'development',
    entry: './src/app.ts',
    output: {
        filename: 'index.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: 'ts-loader'
            },
            {
                test: /\.(scss|css)$/,
                use: ['style-loader', 'css-loader', 'sass-loader'],
            },
        ]
    },
    resolve: {
        extensions: [ '.ts', '.tsx', '.js' ]
    },
    plugins: [
        new HTMLWebpackPlugin({
            template: './public/index.html',
        }),
        new CopyPlugin({
            patterns: [
                { from: "public/img/bacteria.svg", to: "img/" },
            ],
        }),
    ],
};
