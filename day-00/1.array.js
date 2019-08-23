//1.配置npm 和语法
//file---->settings  搜索npm 和languages(配置成js  中的react JSX)
// console.log('ok');

let arr=[1,2,3,4,5];
arr.b='bb';
for(let i=0;i<arr.length;i++){//编程式
    console.log(arr[i]);//1,2,3,4,5
}


//面试：forEach，for，for in,for of 区别
//1）forEach 不支持return
arr.forEach(function (item,index){//声明式（不关心如何实现）
    console.log(item);
});

for(let key in arr){//key会变成字符串类型,包括数组的私有属性b也可以打印出来
    console.log(typeof  key);//6个string
    console.log(key);//0,1,2,3,4,b
}

for (let value of arr){//支持return  并且是值of数组（不能遍历对象）
    console.log(value);//1,2,3,4,5

}

let obj={school:'ffff',age:8};//Object.keys将对象的key作为新的数组
//['school','age']
for(let val of Object.keys(obj)){
    console.log((obj[val]));//得到的是属性值  'zfpx',8
    //得到属性值有两种方法：一种是obj.aa,一种是obj[aa]
}



//2)filter 是否操作原数组：不   返回结果：过滤后的新新数组  回调函数的返回结果：如果返回true   表示这一项放到新数组里
//（想删除某项）

let arr2=[1,2,3,4,5];
let newArr=arr2.filter(function (item,index) {
    return item<5&&item>2;
});
console.log(newArr);//[3,4]   arr2不变


//3)map（想更新某项）  映射  将原有的数组映射成一个新数组
//不操作原数组    返回新数组   回调函数中返回什么这一项就是什么

let arr3=[1,2,3].map(function (item) {
    // return 2;//[2,2,2]
    // return item*=3;//[3,6,9]
    return `<li>${item}</li>`;//``是es6中的模版字符串语法  遇到变量用${}取值
    //'<li>1</li>', '<li>2</li>', '<li>3</li>'
});
console.log(arr3.join(''));//<li>1</li><li>2</li><li>3</li>

//join() 方法用于把数组中的所有元素放入一个字符串。
//
// 元素是通过指定的分隔符进行分隔的。
// 指定分隔符方法join("#");其中#可以是任意

//split()方法：用于把一个字符串分割成字符串数组.
// {/*<script type="text/javascript">*/}
    // var str="how are you?";
    // document.write(str.split("")+"<br />");
    // document.write(str.split(" ")+"<br />");
    // document.write(str.split("",3)+"<br />");
// </script>
// 返回
//     h,o,w, ,a,r,e, ,y,o,u,?
//     how,are,you?
//     h,o,w

//4)includes(es6) 返回的是boolean

let arr4=[1,2,3,4,55,555];
console.log(arr4.includes(5));//false

//5)find(es6)  返回找到的那一项,不会改变数组  回调函数中返回true表示找到了，找到后停止循环，找不到返回的是undefined
//indexOf() 查找n是否在数组里存在，如果存在返回这一项索引，如果不存在返回-1
//toString()  将数组转换成字符串
let result=arr4.find(function (item, index) {//找到具体的某一项用find

    return item.toString().indexOf(5)>-1;//在字符串里找5
})
console.log(result);//55

//6)some 找true  找到true后停止 返回true   找不到返回false
//  every 找false  找到false后停止  返回false
//将上面find变成some  every即可得到结果

//7)reduce 收敛 4个参数 返回的是叠加后的结果 原数组不变 回调函数返回的结果：
//第一次：prev 代表的是数组的第一项 next 是数组的第二项
//第二次：prev 是undefined,next是数组的第三项

let sum=[1,2,3,4,5].reduce(function (prev,next,index,ary) {
    console.log(arguments);
    // return 100;//本次的返回值 会作为下一次的prev
    return prev+next;
});

let sum2=[{price:30,count:2},{price:30,count:3},{price:30,count:4}].reduce(function (prev, next) {
    //0+60
    //60+90
    //150+120
    console.log(prev,next);
    return prev+next.price*next.count;
},0);//默认指定第一次的prev为0
console.log(sum2);

//二维数组变成一维数组
// let arr5=[[1,2,3],[4,5,6],[7,8,9]].join(',').split(',');//[ '1', '2', '3', '4', '5', '6', '7', '8', '9' ]
let arr5=[[1,2,3],[4,5,6],[7,8,9]].reduce(function (prev, next) {
    return prev.concat(next);
})
console.log(arr5);//[ 1, 2, 3, 4, 5, 6, 7, 8, 9 ]

