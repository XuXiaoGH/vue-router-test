<template>
  <div id="app">
     <p>我拿到了你的名字噢，你是{{name}}</p>
  </div>
</template>

<script>

  export default {
    name: 'linkParams',
    data(){
        return{
            name: '',
            age: ''
        }
    },
    watch: {
      '$route' (to, from) {
        // 对路由变化作出响应...这个方法，只在页面复用的时候才生效
        console.log(to);
        console.log(from);
      }
    },
    mounted(){
        this.name = this.$route.params.name; //通过router映射的取参数方式
        console.log(this.$route.params);
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
