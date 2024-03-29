//webpack必须采用commonjs写法
let path=require('path');//专门处理路径用的
//以当前路径解析出一个相对路径
console.log(path.resolve('./dist'));//E:\vue-project\day-06\dist
let HtmlWebpackPlugin=require('html-webpack-plugin');
module.exports={
    entry:'./src/main.js',//打包的入口文件，webpack会自动查找相关的依赖进行打包
    output:{
        filename:'bundle.js',//打包后的名字（自己起的名字）
        path:path.resolve('./dist'),//必须是一个绝对路径
    },
    //模块的解析规则
    // - js 匹配所有的js，用babel-loader来转义，排除掉node_modules
    module:{
        rules:[
            {test:/\.js$/,use:'babel-loader',exclude:/node_modules/},

            {test:/\.css$/,use:['style-loader','css-loader']},//use时从右往左写
            {test:/\.less$/,use:['style-loader','css-loader','less-loader']},
            //转化base64只在8192字节下转化，其他情况下输出图片
            {test:/\.(jpg|png|gif)$/,use:'url-loader?limit=8192'},
            {test:/\.(eot|svg|woff|woff2|wtf)$/,use:'url-loader'}
        ]
    },
    plugins:[
        new HtmlWebpackPlugin({//自动插入到dist目录中
            template:'./src/index.html',//使用的模版
            // filename:'login.html'//如果不叫index.html,可以这么改，产出的文件名字
        })
    ]
};

//2.写好文件之后，运行了以下npm run build  然后yes
//会生成一个bundle.js这个就是解析成功的文件，可以直接run一下，也可以使用html文件引入这个js来测试
