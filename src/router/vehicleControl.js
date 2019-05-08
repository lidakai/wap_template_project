/**
 * time:2019年5月8日10:47:00
 * 功能: 各模块路由组件单独引入
 * 作者:-
 */

//exp
const vehicleControl = () =>
    import ('@/view/vehicleControl');


export default [
    {
        path: '/vehicleControl',
        name: 'vehicleControl',
        component: vehicleControl,
        meta: {
            title: '车控'
        }
    },

]
