import Vue from 'vue'
import Router from 'vue-router'
// import Vuex from 'vuex'

Vue.use(Router);

import demoRouters from './demo';
import homeRouters from './home';
import error_404 from '@/view/errPage/404'

const routes = [
    ...demoRouters,
    ...homeRouters,
    {
        path: '/404',
        name: '404',
        component: error_404,
        meta: {
            title: '404'
        }
    },
    {
        // 设置默认首页路由
        path: '/',
        redirect: '/home'
    },
    {
        // 会匹配所有路径，匹配失败跳转404
        path: '*',
        redirect:'404'
    }
];

const router = new Router({
    // mode: 'hash',
    mode: 'history',
    routes,
    scrollBehavior() {
        // return 期望滚动到哪个的位置
        return { x: 0, y: 0 }
    }
});

//跳转监听
router.beforeEach((to, from, next) => {
    if (to.meta.title) {
        document.title = to.meta.title
    }
    next();
})

export { routes }

export default router;