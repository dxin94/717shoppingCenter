let path = require('path');
let dir = process.cwd();
// console.log(dir);
let baseConfig = {
    entry:{
        "bundle":dir + "/src/main.js"
    },
    output:{
        filename:"[name].js",
        path:dir + '/dist',
        publicPath:'/'
    },
    module:{
        rules:[
            {
                test:/\.(js|jsx)$/,
                use:["babel-loader"]
            },
            {
                test:/\.css$/,
                use:['style-loader','css-loader']
            },
            {
                test:/\.less$/,
                loader:'style-loader!css-loader!less-loader'
            },
            {
                test:/\.(eot|svg|ttf|woff|woff2)$/,
                use:['url-loader']
            },
            {
                test:/\.(jpg|jpeg|png|gif)$/,
                use:['url-loader']
            }
        ]
    },
    plugins:[],
    resolve:{
        extensions:['.js','.jsx']
    }
}
module.exports=baseConfig;