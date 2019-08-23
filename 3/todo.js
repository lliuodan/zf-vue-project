let vm = new Vue({
    el: '#app',
    data: {
        todos: [
            {isSelected: false, title: '睡觉'},
            {isSelected: false, title: '吃饭'}
        ],
        content: '',
        cur: '',
        hash:''
    },
    created() {//ajax获取 初始化数据
        //parse用于从一个字符串中解析出json对象
        //如果localstorage里面有数据就用有的，如果没有就用默认的
        this.todos = JSON.parse(localStorage.getItem('data')) || this.todos;

        //监控hash值的变化，如果页面已经有hash了，重新刷新页面也要获取hash值
        //
        this.hash=window.location.hash.slice(2) || 'all';
        window.addEventListener('hashchange',()=>{
            // console.log(window.location.hash)
            this.hash=window.location.hash.slice(2);
        },false)

    },
    watch: {//watch默认只监控一层的数据变化，深度监控
        //监控只要todos有变化，就触发
        todos: {
            handler() {//默认写成函数，就相当于默认写了个handler
                // alert(111);
                //localStorage默认存的是字符串
                //stringify()用于从一个对象解析出字符串
                localStorage.setItem('data', JSON.stringify(this.todos));
                // localStorage.setItem('data',this.todos)
            },
            deep: true
        }
    },
    methods: {
        add() {//keyup/keydown差一个单词，keydown的时候内容没有进入到输入框内
            // alert(this.content)
            this.todos.push({
                isSelected: false,
                title: this.content
            });
            this.content = '';

        },
        remove(todo) {//拿到当前点击的和数组里的比对，相等则返回false即可
            this.todos = this.todos.filter(item => item !== todo);
        },
        remember(todo) {//当前传递的是todo（当前点击的这一项）
            this.cur = todo;//点谁，此时就记住了

        },
        cancel() {
            this.cur = '';
        }
    },
    computed: {
        count() {//没有被选中就留下，过滤掉的是为true的，剩下的是为false的
            return this.todos.filter(item => !item.isSelected).length;
        },
        filterTodos(){
            if(this.hash==='all') return this.todos;
            //已完成，过滤掉的是false的
            if(this.hash==='finish') return this.todos.filter(item=>item.isSelected);
            //未完成，过滤掉的是true的
            if(this.hash==='unfinish') return this.todos.filter(item=>!item.isSelected);
            return this.todos;
        }
    },
    directives: {
        focus(el, bindings) {
            //当点击当前li时让内部的输入框获取焦点
            if (bindings.value) {
                el.focus();//获取焦点
            }
        }
    }
});
//实现功能：
//1.将数据循环到页面上
//2.敲回车时添加新数据（需要加入isSelected属性）
//3.删除功能
//4.计算以下当前没有被选中的个数
