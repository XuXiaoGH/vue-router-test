/**
 * Created by admin on 2017/4/24.
 */
import Vue from 'vue';
import VueRouter from 'vue-router';


Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  scrollBehavior (to, from, savedPosition) {   //设置路由跳转滚动条坐标
    return {x: 0, y: 0};
  },
  routes:[

  ]
});
