var path = require('path');

module.exports = {
    entry: path.resolve(__dirname, "."),

    output: {
        filename: 'bundle.js',
        publicPath: ''
    },
    watchOptions: {
        aggregateTimeout: 300,
        poll: 1000
    },
    resolve: {root: [__dirname + path.sep + 'scripts']},
    module: {
        loaders: [
            { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader?presets[]=es2015&presets[]=react' }
        ]
    }
}