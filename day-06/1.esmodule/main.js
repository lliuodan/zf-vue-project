//如果是第三方模块不需要加./     如果是文件模块需要加./
//在另一个文件中将内容解构出来即可使用
//import拥有声明功能,可以提升变量，import放在页面的顶部

// import {str,str2}  from './a.js'; //方法一
// console.log(str,str2);

import * as b from './a.js';//方法二
console.log(b.str,b.str2);
b.a();

//bb代表的是default后的结果
import bb from './b.js';//导出一个用export default
console.log(bb);
