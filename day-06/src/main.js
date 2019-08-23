// document.write('你好');
 import Vue from 'vue';
//这样直接引用vue，引用的并不是vue.js，引用的是vue的runtime
//vue = compiler + runtime(complier可以编译模版)
//compiler有6K

import App from './App.vue';
new Vue({
    // el:'#app'

    //render函数的作用是将xu虚拟dom渲染成真实的dom
    //createElement返回的是虚拟的dom
 /*render:function (createElement) {
  //param1:标签名  params2：内容
  //    return createElement('h1','hello');
     return createElement('h1',[
         'hello',
         createElement('sapn','一则头条')
     ])
 }*/
    //改成箭头函数
    // render:(h)=>h('h1',['hello',h('sapn','一则头条')])

    render:(h)=>h(App)
}).$mount('#app');

