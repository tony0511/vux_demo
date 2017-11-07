// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import FastClick from 'fastclick';
// import VueRouter from 'vue-router';
import { AlertPlugin } from 'vux';
import store from './store';
import router from './router';
import App from './App';
// import Home from './components/HelloFromVux';

// Vue.use(VueRouter);

// const routes = [{
//   path: '/',
//   component: Home,
// }];

// const router = new VueRouter({
//   routes,
// });

// 使用 plugins
// Vue.use(DevicePlugin);
// Vue.use(ToastPlugin);
Vue.use(AlertPlugin);
// Vue.use(ConfirmPlugin);
// Vue.use(LoadingPlugin);
// Vue.use(BusPlugin);
// Vue.use(DatetimePlugin);

console.log('===', Vue.$vux);
FastClick.attach(document.body);

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app-box');
