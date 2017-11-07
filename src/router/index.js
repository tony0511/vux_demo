import Vue from 'vue';
import VueRouter from 'vue-router';
import { CloseDialogsPlugin } from 'vux';
import orderRouter from './orderRouter';

import Login from '../views/Login';
import NotFound from '../views/404';
import Home from '../views/Home';
import Index from '../views/Index';

Vue.use(VueRouter);

const routes = [
  {
    path: '/login',
    component: Login,
    name: '',
    hidden: true,
    meta: {
      title: '登录',
    },
  },
  {
    path: '/',
    component: Home,
    redirect: '/index',
    children: [
      { path: '/index', component: Index, name: 'index', meta: { title: '首页' } },
    ],
  },
  {
    path: '/404',
    component: NotFound,
    name: '',
    hidden: true,
    meta: {
      title: '404',
    },
  },
  {
    path: '*',
    hidden: true,
    redirect: { path: '/404' },
  },
];

routes.push(orderRouter);

const router = new VueRouter({
  mode: 'history',
  routes,
});

Vue.use(CloseDialogsPlugin, router); // 切换路由的时候关闭弹窗

// router.beforeEach((to, from, next) => {
//   if (to.path === '/login') {
//     sessionStorage.removeItem('user');
//   }
//   const user = JSON.parse(sessionStorage.getItem('user'));
//   if (!user && to.path !== '/login') {
//     next({ path: '/login' });
//   } else {
//     next();
//   }
// });;

// 动态设置页面title
router.afterEach((to) => {
  document.title = `${to.meta.title}`;
  // console.log('router--$vux==', Vue.$vux);
});

export default router;
