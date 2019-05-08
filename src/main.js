import Vue from 'vue'
import App from './App.vue'
import '@/assets/styles/reset.less'
import 'prefixfree';
import 'lib-flexible';
import router from "./router/index";

Vue.config.productionTip = false;

new Vue({
    render: h => h(App),
    router,
}).$mount('#app');
