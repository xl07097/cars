const path = require("path");
const webpack = require("webpack");
const merge = require("webpack-merge");
const base = require("./webpack.base.config");

module.exports = merge(base, {
    mode: "development",
    devtool: "source-map",
    output: {
        path: path.resolve(__dirname, "../dist"),
        filename: "js/[name].js",
        publicPath: "/"
    },
    module: {
        rules: [{
            test: /\.css$/,
            include: /node_modules\/antd\.css/,
            use: [
                {
                    loader: "style-loader", 
                },
                {
                    loader: 'css-loader',
                    options: {
                        modules: true,
                        importLoaders: 1
                    }
                },
                {
                    loader: "postcss-loader",
                }
            ]
        },
        {
            test: /\.less$/,
            include: /node_modules\/antd\.less/,
            use: [
                {
                    loader: "style-loader",
                },
                {
                    loader: 'css-loader',
                    options: {
                        modules: true,
                        importLoaders: 1
                    }
                },
                {
                    loader: "postcss-loader",
                },
                {
                    loader: "less-loader",
                    options: {
                        javascriptEnabled: true
                    }
                }
            ]
        }
        ]
    },
    devServer: {
        port: "9000",
        host: "localhost",
        allowedHosts: ["0.0.0.0", "192.168.1.49"],
        open: true,
        hot: true,
        historyApiFallback: true,
        contentBase: path.join(__dirname, "../dist"),
        proxy: {
            "/api": {
                target: "http://localhost:3002",
                changeOrigin: true,
                // pathRewrite: {
                //     "/api": ""
                // },
            }
        }
    }
});
