/**
 * time:2019年05月07日21:25:48
 * 作者:lk
 * 功能: 各模块路由组件单独引入
 */

//exp
const Home = () =>
    import ('@/view/home');



export default [
    {
        path: '/home',
        name: 'home',
        component: Home,
        meta: {
            title: 'home'
        }
    },

]