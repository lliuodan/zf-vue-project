const path=require('path');
const HtmlWebpackPlugin=require('html-webpack-plugin');
// const webpack = require('webpack');
module.exports={
    entry:'./src/main.js',
    output:{
        filename:'bundle.js',
        path:path.resolve('./dist'),
    },
    module:{
        rules:[
            {test:/\.js$/,use:'babel-loader',exclude:/node_modules/},

            {test:/\.css$/,use:['style-loader','css-loader']},
            {test:/\.less$/,use:['style-loader','css-loader','less-loader']},
            {test:/\.(jpg|png|gif)$/,use:'url-loader?limit=8192'},
            {test:/\.(eot|svg|woff|woff2|wtf)$/,use:'url-loader'},
            {test:/.vue$/,use:'vue-loader'}
        ]
    },
    plugins:[
        // new webpack.optimize.UglifyJsPlugin(),
        new HtmlWebpackPlugin({
            template:'./src/index.html',
        }),

    ]
};

