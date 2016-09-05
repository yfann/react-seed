var webpack = require('webpack')
var HtmlPlugin=require('html-webpack-plugin')

module.exports={
    entry:['./src/index.js'],
    output:{
        filename:'[name].bundle.js',
        publicPath:'/scripts/',
        path:__dirname+"/dist/scripts",
    },
    module:{
        loaders:[
            {
                test:/\.(js|jsx)$/,
                loader:'babel',
                exclude:/node_modules/,
                query:{
                    presets:['es2015','react']
                }
            }
        ]
    },
    resolve:{
        extensions:['','.jsx','.js']
    },
    plugins:[
        new HtmlPlugin({
            title:'react seed',
            filename:__dirname+'/dist/index.html',
            template:__dirname+'/src/assets/index.html'
        })
    ]
}