/**
 * Created by admin on 2017/4/24.
 */
import Vue from 'vue';
import VueRouter from 'vue-router';
import linkParams from './page/linkParams.vue';


Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  scrollBehavior (to, from, savedPosition) {   //设置路由跳转滚动条坐标
    return {x: 0, y: 0};
  },
  routes:[
    {
      path: '/linkParams/:name',
      name: 'linkParams',
      component:linkParams
    },
    {
      path: '/linkParamsQuestion',
      name: 'xxx',
      component: resolve => require(['./page/linkParamsQuestion.vue'], resolve)
    },
    {
      path: '/nestRouter',
      component: resolve => require(['./page/nestRouter.vue'], resolve),
      children: [
        {
          path:'child',
          component:resolve => require(['./page/nestRouterChild.vue'], resolve),
        }
      ]
    },
    {
      path: '/manager',
      components: {
        a: resolve => require(['./page/slider.vue'], resolve),
        b: resolve => require(['./page/main.vue'], resolve),
      }

    }
  ]
});
export default router;
