import webpack from 'webpack'


module.exports={
    entry:[],
    output:{
        filename:'[name].bundle.js',
        publicPath:'/scripts/',
        path:__dirname__+"/dist/scripts",
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