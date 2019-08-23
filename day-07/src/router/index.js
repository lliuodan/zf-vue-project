import Vue from 'vue';
import Home from '../components/Home';
import List from '../components/List';
import VueRouter from 'vue-router';
Vue.use(VueRouter);//和以前不一样的地方引入router必须使用use
//注册一些全局的内容
export default new VueRouter({
    routes:[
        {path:'/home',components:Home},
        {path:'/list',components:List},
    ]
});
