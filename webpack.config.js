var CopyWebpackPlugin = require('copy-webpack-plugin')
var path = require('path')

module.exports = {
    entry: './src/app.js',
    output: {
        filename: 'app.js',
        path: path.resolve(__dirname, './dist')
    },
    module: {
        rules: [{
                test: /\.js$/,
                exclude: /(node_modules)/,
                use: [{ 
                    loader: 'babel-loader',
                    options: {
                        presets: [['es2015', { modules: false }]],
                        plugins: ['transform-object-rest-spread']
                    }
                }]
        }]
    },
    plugins: [
        new CopyWebpackPlugin([
            { from: './src/index.html' }
        ])
    ]
}