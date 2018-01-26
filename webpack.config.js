/**
 * Created by zsp on 2018/1/26.
 */
// 文件名默认叫webpack..config.js  是一个配置文件
let path = require('path');   //  node 核心模块
let HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    // 打包 将内容 后打出一个文件
    entry: './src/index.js',  //入口
    output: {
        filename: 'bundle.js',    //  打包出的文件名
        path: path.resolve('dist')   // 可以将文件名转化 成当前路径下的绝对路径地址
    },
    module: { // 可以存放规则
        rules: [
            // 需要告诉loader 翻译成什么样的类型,需要 在当前根目录下建立一个文件,配上预设才可以   .babelrc
            {test: /\.js$/, use: 'babel-loader', exclude: /node_modules/},
            {test: /\.css$/, use: ['style-loader', 'css-loader']},
            {test: /\.less$/, use: ['style-loader', 'css-loader', 'less-loader']},
            {test: /\.(jpg|png|bmp|gif)$/, use: ['url-loader?limit=8192']}
        ]
    },
    plugins:[
        new HtmlWebpackPlugin({
            template:'./src/index.html'
        })
    ],
    devServer:{
        port:3000 // 更改端口号
    }
};