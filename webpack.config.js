const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
module.exports={
    entry:'./src/main.js',
    output:{
        path:path.join(__dirname , "./dist"),
        filename: '[name].bundle.js' , 
    },
    devServer: {
    historyApiFallback: true,
},
    optimization:{
        minimize:true,
        minimizer:[new TerserPlugin()]
    },
    module:{
        rules:[
            {
                test:/\.m?js$/i , 
                exclude:/node_modules/ ,
                use:{
                    loader:'babel-loader'
                }
            },

            {
                test:/\.(jpe?g|jpg|svg|png|gif|otf|svg|ttf)$/i , 
                loader:'file-loader',
                options:{
                    outputPath:'asesst',
                    name:'[name].[ext]'
                }
            },
            ],
    },
    plugins:[
        new HtmlWebpackPlugin({template:'./src/index.html'}),
    ]

}
