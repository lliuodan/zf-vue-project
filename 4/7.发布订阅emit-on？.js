//发布 emit  订阅 on{女生失恋：['哭','购物'，'吃']}

function Girl() {
    this._events={}
}
Girl.prototype.on=function (eventName,callback) {

    if(this._events[eventName]){//不是第一次
        this._events[eventName].push(callback);//{失恋：[cry,eat,shopping]}
    }else{//是第一次
        this._events[eventName]=[callback];//{失恋：[cry]}
    }
};
Girl.prototype.emit=function (eventName,...args) {//['我','你','它']
    // [].slice.call(arguments,1);//除去第一个
    if(this._events[eventName]){
        this._events[eventName].forEach(cb=>cb.apply(...args));
    }
};
let girl=new Girl();
let cry=(who)=>{
    console.log(who+'哭');
};
let shopping=(who)=>{
    console.log(who+'购物');
};
let eat=(who)=>{
    console.log(who+'吃');
};

girl.on('失恋',cry);//{失恋：[cry]}
girl.on('失恋',eat);//{失恋：[cry,eat]}
girl.on('失恋',shopping);//{失恋：[cry,eat,shopping]}

girl.emit('失恋',['你','我','它']);

