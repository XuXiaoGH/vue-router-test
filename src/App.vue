<template>
  <div id="app">
    <img src="./assets/logo.png">
    <hello></hello>
    <p><router-link to="/linkParams/xuxiao">1.链接直接传参数</router-link></p>
    <p><router-link to="/linkParamsQuestion?age=18">2.链接问号传参数</router-link></p>
    <p><router-link to="/linkParams/xiaoxiong">3.路由钩子测试，你从哪里来</router-link></p>
    <p><router-link to="/nestRouter">4.嵌套路由</router-link></p>
    <p><router-link to="/nestRouter/child">5.嵌套路由子页面</router-link></p>
    <p><a @click="goPush">编程式导航</a></p>

    <p></p>




    <router-view class="view one"></router-view>
    <router-view class="view two" name="a"></router-view>
    <router-view class="view three" name="b"></router-view>

  </div>
</template>

<script>
import Hello from './components/Hello'

export default {
  name: 'app',
  components: {
    Hello
  },
  methods:{
    goPush: function () {
      //this.$router.push('linkParamsQuestion'); //字符串，从这里可以得出，是根据路径去匹配的
      //this.$router.push({name : 'xxx'});  //完全按照name进行匹配
      //this.$router.push({path : 'linkParamsQuestion'});
      //this.$router.push({name : 'linkParams',params: {name : 'xiaochun'}});
      this.$router.push({path : 'linkParamsQuestion', query: {age : '20'}});
    }
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
