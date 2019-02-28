const path = require('path');
var webpack = require('webpack')
var HtmlWebpackPlugin = require('html-webpack-plugin');

const config = {
	mode: "development",
	entry: {
		app: [path.join(__dirname, './src/index.tsx'), 'webpack-hot-middleware/client'],
		vendor: ['react', 'react-dom', 'redux', 'react-redux', 'react-router-dom', 'redux-thunk',
			'react-router-redux', 'socket.io-client'
		]
	},
	output: {
		path: path.resolve(__dirname, 'dist'),
		publicPath: "/",
		filename: 'js/[name].bundle.js'
	},
	devtool: 'source-map',
	resolve: {
		extensions: ['mjs', '.js', '.jsx', '.json', '.ts', '.tsx'], // .mjs must be before .js

	},
	module: {
		rules: [{
				test: /\.(ts|tsx)$/,
				loader: 'ts-loader'
			}
		]
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: path.resolve(__dirname, 'src', 'index.html'),
			baseUrl: "/"
		}),
		new webpack.HotModuleReplacementPlugin()
	]
}

module.exports = config
