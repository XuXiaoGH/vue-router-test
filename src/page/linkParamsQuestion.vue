<template>
  <div id="app">
    <p>我拿到了你的年龄噢，你是{{age}}</p>
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
    components: {

    },
    mounted(){
        this.age = this.$route.query.age; // 对于链接里?号的方式，vue会把这些参数加在 $route.query里
        console.log(this.$route.query);
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
