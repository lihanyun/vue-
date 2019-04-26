
 /* jshint esversion: 6 */
import Vue from 'vue';

import  App from './App.vue';

// 导入路由模块
import VueRouter from 'vue-router';
// 安装路由
Vue.use(VueRouter);

//mint-ui 的样式库
import 'mint-ui/lib/style.css';

//按需导入组件
import { Header,Swipe,SwipeItem } from 'mint-ui';


import './lib/mui/css/mui.min.css';

import './lib/mui/css/icons-extra.css';

import './lib/mui/fonts/mui-icons-extra.ttf';

// 导入自己的路由模块
import router from './router.js';

Vue.component(Header.name,Header);

//首页轮播图、
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);

import VueResource from 'vue-resource'
Vue.use(VueResource)


var vm =new Vue({
  el :' #app',
  router,

  render:c=>c(App)
});