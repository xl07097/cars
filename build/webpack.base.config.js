const path = require("path");
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        app: path.resolve(__dirname, '../src/main.js')
    },
    module: {
        rules: [{
                test: /\.(js|jsx)$/,
                use: 'babel-loader',
                exclude: /^node_modules$/
            },
            {
                test: /\.(png|svg|jpe?g|gif)$/,
                use: [{
                    loader: 'url-loader',
                    options: {
                        limit: 10240,
                        name: path.posix.join('static', 'img/[name].[hash].[ext]')
                    }
                }]

            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: [{
                    loader: 'url-loader',
                    options: {
                        limit: 10000,
                        name: path.posix.join('static', 'fonts/[name].[hash].[ext]')
                    }
                }]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: path.resolve(__dirname, '../dist/index.html'),
            template: path.resolve(__dirname, '../public/index.html')
        }),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.optimize.SplitChunksPlugin(),
    ],
    resolve: {
        alias: {
            '@': path.resolve(__dirname, '../src')
        },
        extensions: ['.js', '.json']
    }
}