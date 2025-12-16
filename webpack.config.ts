import path from 'path'
import { fileURLToPath } from 'url'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import { CleanWebpackPlugin } from 'clean-webpack-plugin'
import type { Configuration } from 'webpack'
import 'webpack-dev-server'

const rootDir = path.dirname(fileURLToPath(import.meta.url))

const config: Configuration = {
    entry: './src/index.tsx',
    output: {
        path: path.resolve(rootDir, 'dist'),
        filename: '[name].[contenthash].js'
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx']
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html'
        }),
        new CleanWebpackPlugin()
    ],
    devtool: 'source-map',
    module: {
        rules: [
            {
                test: /\.(ts|js)x?$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: [
                                '@babel/preset-env',
                                ['@babel/preset-react', { runtime: 'automatic' }],
                                '@babel/preset-typescript'
                            ]
                        }
                    }
                ]
            },
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader', 'postcss-loader']
            },
            {
                test: /\.scss$/i,
                use: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader']
            },
            {
                test: /\.(png|jpg|jpeg|gif|svg)$/i,
                type: 'asset/resource'
            }
        ]
    },
    devServer: {
        static: {
            directory: path.join(rootDir, 'public')
        },
        compress: true,
        historyApiFallback: true
    },
    mode: 'development'
}

export default config
