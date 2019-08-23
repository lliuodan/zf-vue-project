import Vue from 'vue';//runtime不支持，template只支持render
//如果 'vue/dist/vue'，compiler+runtime
import App from './App.vue';

import router from './router/index.js';
import notify from './plugin/notify';
Vue.use(notify,{
    delay:2000
});//使用带有Install的对象
new Vue({
    router,
    el:'#app',
    render:h=>h(App)
});

