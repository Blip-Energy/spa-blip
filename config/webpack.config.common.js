'use strict';

const VueLoaderPlugin = require('vue-loader/lib/plugin');
const HtmlPlugin = require('html-webpack-plugin');
const MiniCSSExtractPlugin = require('mini-css-extract-plugin');
const helpers = require('./helpers');
const isDev = process.env.NODE_ENV === 'development';

const webpackConfig = {
    entry: {
        polyfill: '@babel/polyfill',
        main: helpers.root('src', 'main'),
    },
    resolve: {
        extensions: ['.js', '.vue'],
        alias: {
            'vue$': isDev ? 'vue/dist/vue.runtime.js' : 'vue/dist/vue.runtime.min.js',
            '@': helpers.root('src')
        }
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader',
                // include: [helpers.root('src')] //////////////////////////////////Heeeeeeeeerrrrrrrrrrreeeeeeeee
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                include: [helpers.root('src')]
            },
            {
                test: /\.(png|gif|jpg|woff|woff2|eot|ttf|svg)$/,
                use: [
                    'file-loader',
                ],
            },
            // {
            //     test: /\.(png|gif|jpg|woff|woff2|eot|ttf|svg)$/,
            //     use: [
            //         'url-loader',
            //     ],
            // },
            {
                // HTML LOADER
                test: /\.html$/,
                loader: 'html-loader'
              },
            {
                test: /\.css$/,
                use: [
                    isDev ? 'vue-style-loader' : MiniCSSExtractPlugin.loader,
                    { loader: 'css-loader', options: { sourceMap: isDev } },
                ]
            },
            {
                test: /\.scss$/,
                use: [
                    isDev ? 'vue-style-loader' : MiniCSSExtractPlugin.loader,
                    { loader: 'css-loader', options: { sourceMap: isDev } },
                    { loader: 'sass-loader', options: { sourceMap: isDev } }
                ]
            },
            {
                test: /\.sass$/,
                use: [
                    'vue-style-loader',
                    'css-loader',
                    {
                        loader: 'sass-loader',
                        options: {
                            indentedSyntax: true,
                            // sass-loader version >= 8
                            sassOptions: {
                                indentedSyntax: true
                            }
                        }
                    }
                ]
            }
        ]
    },
    plugins: [
        new VueLoaderPlugin(),
        new HtmlPlugin({ template: 'index.html', chunksSortMode: 'dependency' })
    ]
};

module.exports = webpackConfig;