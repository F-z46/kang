let path = require('path');

//导入分离css插件
let miniCssExtractPlugin = require('mini-css-extract-plugin');

// //导入处理html模板插件
// let htmlWebpackPlugin = require('html-webpack-plugin');


//暴露配置文件
module.exports = {

    //配置模式
    //development:开发模式   //production:生产模式
    mode: 'development',

    //配置入口
    entry: {
        app: './app/app.js'
    },

    //配置输出文件路径
    output: {
        //打包输出的文件路径
        path: path.resolve(__dirname + '/build'),
        //打包输出文件重命名
        filename: '[name].min.js'
    },

    //  配置loader 

    //处理css、less 
    module: {
        //定义loader规则
        rules: [
            //每一个对象就是一loader规则
            //处理css
            {
                //匹配文件规则
                test: /\.css$/,
                use: [
                    // { loader: 'style-loader' },
                    { loader: miniCssExtractPlugin.loader },
                    { loader: 'css-loader' },
                    { loader: 'less-loader' }
                ]
            },
            //处理less
            {
                test: /\.less$/,
                use: [
                    // { loader: 'style-loader' },
                    { loader: miniCssExtractPlugin.loader },
                    { loader: 'css-loader' },
                    { loader: 'less-loader' }
                ]
            },
        ]
    },

    //配置插件
    plugins: [
        //实例化分离css插件
        new miniCssExtractPlugin({
            //输出文件名
            filename: '[name].min.css'
        })

        //     //实例化处理html模板插件
        //     new htmlwebpackPlugin({
        //         //处理模板的路径
        //         template: './app.html',
        //     })
    ]

};