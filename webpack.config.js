
const path = require('path');
const MinifyPlugin = require("babel-minify-webpack-plugin");

module.exports = {
    module: {
        rules: [{
            test: /\.less$/,
            use: [{
                    loader: 'style-loader', // creates style nodes from JS strings
                },
                {
                    loader: 'css-loader', // translates CSS into CommonJS
                },
                {
                    loader: 'less-loader', // compiles Less to CSS
                },
            ],
        }, ],
    },
    entry: './src/main.js',
    devtool: 'source-map',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'sparkle.min.js'
    },
    plugins: [
        new MinifyPlugin()
    ]
};