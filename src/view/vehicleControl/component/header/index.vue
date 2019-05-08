<template>
    <div class="vehicleControl-header">
        <div class="menu">
            <img src="./images/menu.png" alt="">
        </div>
        <div class="signOut">
            icon
        </div>
    </div>
</template>
<script>
    /*
    * time:2019年5月8日10:44:35
    * 功能:车控钥匙、蓝牙 - header
    * 作者:-
    * */
    export default {
        name: 'vehicleControl-header',
        data() {
            return {}
        },
        created() {

        }
    }
</script>

<style scoped lang="less">
    .vehicleControl-header {
        height: 44px;
        margin: 0 15px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        img {
            width: 100%;
            height: auto;
            vertical-align: middle;
            display: block;
        }
        .menu {
            width: 25px;
            height: 17px;
        }
        .signOut {
            width: 57px;
            height: 32px;
            background-color: #757575;
            color: whitesmoke;
            font-size: 12px;
            overflow: hidden;
            border-radius: 5px;
            display: flex;
            align-items: center;
            justify-content: center;
        }
    }
</style>
