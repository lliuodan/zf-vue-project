<template>
    <div>
        {{msg}}
        <!--<router-view></router-view>-->
        <button @click="show">notify弹框插件</button>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                msg:'hello'
            }
        },
        methods: {
            show(){
                this.$notify('我很丑',{delay:1000});
                Vue.say();
            }
        },
        computed: {},
        components: {}
    }
</script>
<style scoped>


</style>
