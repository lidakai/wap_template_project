/**
 * time:2019年05月07日21:25:48
 * 作者:lk
 * 功能: 各模块路由组件单独引入
 */

//exp
const Demo = () =>
    import ('@/view/demo');


export default [
    {
        path: '/demo',
        name: 'demo',
        component: Demo,
        meta: {
            title: 'demo'
        }
    },

]