//webpack必须采用commonjs写法
let path=require('path');//专门处理路径用的
//以当前路径解析出一个相对路径
console.log(path.resolve('./dist'));//E:\vue-project\day-06\dist
module.exports={
    entry:'./src/main.js',//打包的入口文件，webpack会自动查找相关的依赖进行打包
    output:{
        filename:'bundle.js',//打包后的名字（自己起的名字）
        path:path.resolve('./dist'),//必须是一个绝对路径
    },
    //模块的解析规则
};
//多个（入口）文件打包
/*module.exports={
    entry:{
        main:'./src/main.js',
        main1:'./src/main1.js'
    },
    output:{
        filename:'[name].js',
        path:path.resolve('./dist')
    }
};*/

//2.写好文件之后，运行了以下npm run build  然后yes
//会生成一个bundle.js这个就是解析成功的文件，可以直接run一下，也可以使用html文件引入这个js来测试
