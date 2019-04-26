  /* jshint esversion: 6 */
import VueRouter from 'vue-router';

//导入对应的路由组件
import HomeContainer from './components/tabbar/HomeContainer.vue';
import MemberContainer from './components/tabbar/MemberContainer.vue';
import SearchContainer from './components/tabbar/SearchContainer.vue';
import ShopContainer from './components/tabbar/ShopContainer.vue';




var router = new VueRouter({
    routes:[
        {path:'/',redirect:'/home'},
        {path:'/home',component:HomeContainer},
        {path:'/member',component:MemberContainer},
        {path:'/shopcar',component:ShopContainer},
        {path:'/search',component:SearchContainer}


    ],
    linkActiveClass:"mui-active"
});
export default router;