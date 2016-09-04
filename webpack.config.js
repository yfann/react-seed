 var webpack = require('webpack')


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
    plugins:[]
}