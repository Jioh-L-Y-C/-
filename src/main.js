// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI);

import SlideVerify from 'vue-monoplasty-slide-verify';
Vue.use(SlideVerify);  //引入滑动验证码

import MAIN from "./layout/main"  //全局组件
Vue.component('Main',MAIN)
import ASIDELEFT from "./layout/aside"
Vue.component('asideLeft',ASIDELEFT)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
