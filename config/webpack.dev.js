const webpack = require('webpack');
let baseConfig = require('./webpack.base');
let DefinePlugin = webpack.DefinePlugin;
baseConfig.plugins.push(new DefinePlugin({
    "process.env":'"development"'
}));
module.exports = {
    ...baseConfig,
    devServer:{
        inline:true,
        open:true,
        port:3000,
        historyApiFallback:true,
        noInfo:true,
    },
    devtool:"eval-source-map"
}