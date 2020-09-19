const webpack = require('webpack')
const HtmlWebPackPlugin = require('html-webpack-plugin')
const path = require('path')
const htmlPlugin = new HtmlWebPackPlugin({
  template: './src/index.html', 
  filename: './index.html'
})
module.exports = {
    mode: 'development',
    devtool: 'eval-cheap-module-source-map',
    entry: './src/App.js',
    output: {
        path: path.join(__dirname, 'dist'),
        filename: '[name].js'
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.s?css$/,
                use: ['style-loader', 'css-loader', 'sass-loader']
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                loader: 'file-loader',
                options: { name: '/static/[name].[ext]' }
              }
        ]
    },
    devServer: {
        historyApiFallback: true,
        hot: true,
        inline: true,
        host: 'localhost', // Defaults to `localhost`
        port: 3000, // Defaults to 8080
        proxy: {
            '^/api/*': {
                target: 'http://localhost:8080/api/',
                secure: false
            }
        }
    },
    plugins: [
        htmlPlugin,
        new webpack.HotModuleReplacementPlugin({
            multistep: true
        })
    ]
}