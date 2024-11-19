const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    watchOptions: {
        poll: true,
        ignored: /node_modules/
    },
    entry: path.resolve(__dirname, './app/app.ts'), // Use './' to clarify that this is a relative path
    output: {
        path: path.resolve(__dirname, './app'),
        filename: 'app.bundle.js',
        library: 'EntryPoint',         // Ensure 'EntryPoint' is set here
        libraryTarget: 'window'         // Attach it to the `window` object
    },

    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            }
        ],
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
    plugins: [
        new HtmlWebpackPlugin({
            hash: true,
            template: path.resolve(__dirname, 'app/game.template.html'), // Full path to the template
            filename: 'game.html' // This is relative to 'output.path'
        })
    ]
};
