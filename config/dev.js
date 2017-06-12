'use strict';

var webpack = require("webpack");

function augment(config, definition) {
    config.devtool = "eval-source-map";
    delete config.externals;
    
    console.log("running hot module replacement");
    config.plugins = [new webpack.HotModuleReplacementPlugin()];
    
    config.entry[definition.name].
        splice(0,0,
            'webpack-hot-middleware/client?reload=true&overlay=false');
}


module.exports = augment;