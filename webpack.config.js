const webpack = require('webpack');
const path = require('path');
const extractScss = require('extract-text-webpack-plugin');
const pkg = require('./package.json');

let config = {
    /* entry: [
        './index.js', './Scripts/pageScripts/fileA.js', './Scripts/pageScripts/fileB.js', './Styles/global/scaffold.scss'
    ], */
    entry: {
        main: './Scripts/pageScripts/index.js',
        fileA: './Scripts/pageScripts/fileA.js',
        fileB: './Scripts/pageScripts/fileB.js',
        vueApp: './Scripts/pageScripts/myVueEntryFile.js',
        calculator: './Scripts/pageScripts/calcIndex.js',
        globalStyle: './Styles/global/scaffold.scss'
    },
    output: {
        path: path.resolve(__dirname, './Scripts/dist'),
        filename: '[name].bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader',
                options: {
                    loaders: {
                      js: 'babel-loader'
                    }
                }
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "babel-loader"
            },
            {
                test: /\.scss$/,
                use: extractScss.extract({
                    use: 'css-loader!autoprefixer-loader!sass-loader',
                    fallback: 'style-loader'
                })
            }
        ]
    },
    resolve: {
        alias: {
          'vue$': 'vue/dist/vue.esm.js'
        }
    },
    plugins: [
        new extractScss({
            filename: '../../Styles/dist/[name].bundle.css',
            allChunks: true
        })
    ],
    devServer: {
        contentBase: path.resolve(__dirname, '.'),
        historyApiFallback: true,
        inline: true,
        open: true
    },
    devtool: 'eval-source-map'
}

module.exports = config;