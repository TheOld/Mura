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
			PATH('assets/css/style.less'),
			PATH('assets/js/index.js')
		]
	},
	output: {
		path: PATH('assets/build'),
		filename: 'bundle-[name].js',
		sourceMapFilename: '[file].map'
	},
	module: {
		loaders: [
			{
				test: /\.js$|\.json$|\.jsx$/,
				loader: 'babel-loader',
				include: PATH('js'),
				exclude: /node_modules/
			},
			{
				test: /\.(jpg|png|woff|woff2|eot|ttf|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
				loader: 'url-loader'
			},
			{
				test: /\.less$/,
				loader: ExtractTextPlugin.extract({
					fallbackLoader: 'style-loader',
					loader: [
						{
							loader: 'css-loader',
							options: {
								sourceMap: true
							}
						},
						{
							loader: 'autoprefixer-loader',
							query: { browsers: 'last 2 versions' }
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
						include: PATH('js'),
						exclude: [/node_modules/, PATH('js/head')]
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
				new webpack.optimize.DedupePlugin()
			]
		});
		break;
	default:
		// config = merge(common, {
		// 	entry: {
		// 		vendor: [
		// 			'react',
		// 			'react-dom'
		// 		]
		// 	},
		// 	plugins: [
		// 		new webpack.optimize.CommonsChunkPlugin({
		// 			name: ['vendor']
		// 		}),
		// 		new webpack.ProvidePlugin({
		// 			$: 'jquery',
		// 			jQuery: 'jquery',
		// 			'window.jQuery': 'jquery'
		// 		})
		// 	],
		// 	devtool: 'source-map'
		// });
		config = common;
}
export default config;
