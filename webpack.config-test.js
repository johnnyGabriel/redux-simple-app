var path = require('path')

module.exports = {
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
    }
}