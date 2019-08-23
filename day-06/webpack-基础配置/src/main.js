//node代码用require
let str = require('./a.js');
//es6用import
import xxx from './b.js';

console.log(str);
console.log(xxx);

let a = b => c => d => b + c + d;

let obj = {
    school: 'afsf'
};
/*let obj1={age:'8'};
let newObj={...obj,...obj1};//es7语法
console.log(newObj);*/

import './index.css';//引入css样式
import './style.less';

//在js中引入图片需要import,或者写一个线上路径
import page from './aa.png';

console.log(page);//page就是打包后图片的路径
let img = new Image();
// img.src='./aa.png';//写了一个字符串  webpack不会查找
img.src = page;
document.body.appendChild(img);
