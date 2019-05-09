const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const TerserJSPlugin = require('terser-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = merge(common, {
   mode: 'production',
   optimization: {
     minimizer: [new TerserJSPlugin({}), new OptimizeCSSAssetsPlugin({})],
   },
   plugins: [
     new HtmlWebpackPlugin({
       title: 'Cruise',
       template: 'index.html',
       minify: {
        collapseWhitespace: true
       }
     })
   ]
});
