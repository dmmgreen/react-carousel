﻿var config={
    entry:'./main.jsx',
    output:{
        path:'./build',
        filename:'index.js'
    },
    devServer:{
        inline:true,
        port:3000
    },
    module:{
        loaders:[
            {
                test:/\.jsx?$/,
                exclude:/node_modules/,
                loader:'babel',
                query:{
                    presets:['es2015','react']
                }
            }
        ]
    }
};

module.exports=config;