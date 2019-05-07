import 'babel-polyfill'

import Vue from 'vue'

import 'normalize.css/normalize.css'// A modern alternative to CSS resets

import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

import '@/styles/index.scss' // global css

import App from './App'
import router from './router'
import store from './store'
import _api from './api/index'
import './icons' // icon
import './errorLog'// error log
import './permission' // permission control
import './mock' // simulation data generator
import 'lib-flexible/flexible';
import * as filters from './filters' // global filteri18n
Vue.use(Element, {
  size: 'medium'
});
Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
});

Vue.config.productionTip = false;
Vue.prototype.$api = _api;
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: {App}
});
