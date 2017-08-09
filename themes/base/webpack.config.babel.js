'use strict';

import CleanWebpackPlugin from 'clean-webpack-plugin';
import ExtractTextPlugin from 'extract-text-webpack-plugin';
import merge from 'webpack-merge';
import path from 'path';
import webpack from 'webpack';

const PATH = (str) => path.resolve(__dirname, str);
let config;

let common = {
	cache: true,
	context: __dirname,
	entry: {
		index: [
			PATH('assets/js/index.js'),
			PATH('assets/css/style.less')
		]
	},
	output: {
		path: PATH('assets/build'),
		filename: 'bundle-[name].js',
		sourceMapFilename: '[file].map'
	},
	performance: {
		maxAssetSize: 250000,
		maxEntrypointSize: 250000
	},
	module: {
		loaders: [
			{
				test: /\.js$|\.json$|\.jsx$/,
				use: 'babel-loader',
				include: PATH('assets/js'),
				exclude: /node_modules/
			},
			{
				test: /\.(jpg|png|woff|woff2|eot|ttf|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
				use: 'url-loader'
			},
			{
				test: /\.less$/,
				use: ExtractTextPlugin.extract({
					fallback: 'style-loader',
					use: [
						{
							loader: 'css-loader',
							options: {
								sourceMap: true
							}
						},
						{
							loader: 'postcss-loader',
							options: {
								sourceMap: true,
								plugins: (loader) => [
									require('autoprefixer')(
										{ browsers: ['last 2 versions'] }
									)
								]
							}
						},
						{
							loader: 'less-loader',
							options: {
								sourceMap: true
							}
						}
					]
				}),
				exclude: /node_modules/
			},
			{
				test: /\.svg$/,
				loader: 'babel-loader!svg-react-loader'
			}
		]
	},
	plugins: [
		new webpack.NoEmitOnErrorsPlugin(),
		new ExtractTextPlugin({
			filename: 'bundle-style.css',
			disable: false,
			allChunks: true
		}),
		new CleanWebpackPlugin('build', {
			root: process.cwd()
		}),
		new webpack.ProvidePlugin({
			$: 'jquery',
			jQuery: 'jquery',
			'window.jQuery': 'jquery'
		})
	]
};

switch (process.env.npm_lifecycle_event) {
	case 'prod':
		config = merge(common, {
			module: {
				loaders: [
					{
						test: /\.js$|\.json$|\.jsx$/,
						enforce: 'pre',
						loader: 'eslint-loader',
						include: PATH('assets/js'),
						exclude: [/node_modules/, PATH('assets/js/head')],
						options: {
							fix: true
						}
					}
				]
			},
			plugins: [
				new webpack.DefinePlugin({
					'process.env': {'NODE_ENV': JSON.stringify('production')} }
				),
				new webpack.LoaderOptionsPlugin({
					minimize: true,
					debug: false
				}),
				new webpack.optimize.UglifyJsPlugin({
					output: {
						comments: false
					},
					compress: {
						drop_console: true,
						warnings: false
					},
					sourceMap: false
				}),
				new webpack.optimize.ModuleConcatenationPlugin()
			]
		});
		break;
	case 'server':
		config = merge(common, {
			devServer: {
				// add contentBase if you need to handle a subdomain.
				// For example for z.co.nz/win/ simply add
				// contentBase: '/win/', // to serve the content
				// from there.
				// display errors in a webpage overlay
				overlay: true,
				// gzip everything produced by Webpack
				compress: true,
				port: 9000,
				// serve over https
				https: true,
				// allow Cross Origin Request
				headers: {
					'Access-Control-Allow-Origin': '*'
				},
				// redirect every static assets to the
				// silverstripe instance
				proxy: {
					'/themes/base': {
						target: {
							// replace this with project
							// host name (eg: zwin.dev)
							host: '',
							// can be changed to handle
							// non-secure website.
							protocol: 'https:',
							port: 443
						},
						secure: false
					}
				}
			}
		});
		break;
	default:
		config = merge(common, {
			entry: {
				vendor: [
					'react',
					'react-dom'
				]
			},
			plugins: [
				new webpack.optimize.CommonsChunkPlugin({
					name: ['vendor'],
					minChunks: Infinity
				}),
				new webpack.ProvidePlugin({
					$: 'jquery',
					jQuery: 'jquery',
					'window.jQuery': 'jquery'
				})
			],
			devtool: 'source-map'
		});
	config = common;
}

export default config;
