<template>
  <div id="app">
     我拿到了你的参数噢{{name}}
  </div>
</template>

<script>

  export default {
    name: 'linkParams',
    data(){
        return{
            name: ''
        }
    },
    components: {

    },
    mounted(){
        alert('xxxxx');
        this.name = this.$route.params.name;
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
