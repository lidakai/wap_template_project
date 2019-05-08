/**
 * time:2019年5月8日10:47:00
 * 功能: 各模块路由组件单独引入
 * 作者:-
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
