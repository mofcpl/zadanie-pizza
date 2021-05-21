const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const config = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
      },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {loader: "babel-loader"}
            },
            {
                test: /\.scss$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader, 
                        options: {
                            publicPath: ''
                        }
                    },
                    'css-loader',
                    'sass-loader',
                    "postcss-loader"
                ]
            },
            
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'public/index.html',
            filename: 'index.html',
            minify: false
        }),
        new MiniCssExtractPlugin()
    ]
};

module.exports = config;