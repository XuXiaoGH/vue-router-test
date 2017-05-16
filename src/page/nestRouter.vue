<template>
  <div id="app">
    <p>我是嵌套路由页面</p>
    <router-view></router-view>
  </div>
</template>

<script>

  export default {
    name: 'nestRouter',
    data(){
        return{
            name: '',
        }
    },
    components: {

    },
    mounted(){
    }
  }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>
