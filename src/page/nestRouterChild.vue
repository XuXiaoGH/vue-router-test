<template>
  <div id="app">
    <p>我是嵌套路由儿子页面喏</p>
  </div>
</template>

<script>

  export default {
    name: 'nestRouterChild',
    data(){
        return{
            name: '',
            age: ''
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
