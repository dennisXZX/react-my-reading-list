const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: [
    './src/index.js'
  ],
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, 'build'),
		publicPath: 'build/'
	},
	devServer: {
		historyApiFallback: true,
		contentBase: './'
	},
  module: {
    rules: [
    	{
	      test: /\.js$/,
	      exclude: /node_modules/,
	      use: 'babel-loader'
	    },
	    {
		    test: /\.css$/,
		    use: ExtractTextPlugin.extract({
			    use: [
				    {
					    loader: 'css-loader'
				    }
			    ],
			    fallback: 'style-loader'
		    })
	    },
	    {
		    test: /\.(ttf|eot|svg|otf|woff|woff2)$/,
		    loader: 'file-loader',
		    options: {
			    name: 'fonts/[name].[ext]',
		    }
	    },
    ]
  },
	plugins: [
		new ExtractTextPlugin('apps.css')
	]
};
