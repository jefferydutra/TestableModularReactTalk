var path = require('path');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

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
            { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader?presets[]=es2015&presets[]=react' },
            { test: /\.css$/, loader: ExtractTextPlugin.extract("style-loader", "css-loader")}
        ]
    },
    plugins: [
        new ExtractTextPlugin("styles.css")
    ]
};
