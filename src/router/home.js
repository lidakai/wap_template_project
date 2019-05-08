/**
 * time:2019年5月8日10:47:00
 * 功能: 各模块路由组件单独引入
 * 作者:-
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
