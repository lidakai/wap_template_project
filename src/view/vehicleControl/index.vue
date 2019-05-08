<template>
    <div class="vehicleControl">
        <vehicleControl-header></vehicleControl-header>
        <div class="content">
            <div class="screen">
                <img src="./images/screen.png" alt="">
            </div>
            <div class="box">
                <div class="key">
                    <img src="./images/Key.png" alt="">
                </div>
                <div class="modular">
                    <div class="switch-1layer">
                        <div>
                            <img src="./images/switch-0.png" alt="">
                        </div>
                        <div>
                            <img src="./images/switch-1.png" alt="">
                        </div>
                    </div>
                    <div class="search-2layer">
                        <div>
                            <img src="./images/search.png" alt="">
                        </div>
                        <div>
                            <img src="./images/reset.png" alt="">
                        </div>
                    </div>
                    <div class="logo-3layer">
                        <div>
                            <img src="./images/logo.png" alt="">
                        </div>
                    </div>
                    <div class="door-4layer">
                        <div>
                            <img src="./images/door-1.png" alt="">
                        </div>
                        <div>
                            <img src="./images/door-0.png" alt="">
                        </div>
                    </div>
                    <div class="tailDoor-4layer">
                        <div>
                            <img src="./images/tailDoor-0.png" alt="">
                        </div>
                        <div>
                            <img src="./images/tailDoor-1.png" alt="">
                        </div>
                    </div>
                </div>
            </div>
            <div class="describe" @click="showHelpTap">
                <img src="./images/describe.png" alt="">
            </div>
        </div>
        <footer-component></footer-component>
        <ys-dialog :show="show" @isShow="isShow"></ys-dialog>
    </div>
</template>
<script>
    /*
    * time:2019年5月8日10:44:35
    * 功能:车控钥匙、蓝牙
    * 作者:-
    * */
    import vehicleControlHeader from './component/header'
    import footerComponent from '@/components/footer'
    import dialog from './component/dialog'

    export default {
        name: 'vehicleControl',
        data() {
            return {
                show: false
            }
        },
        components: {
            'vehicleControl-header': vehicleControlHeader,
            'footer-component': footerComponent,
            'ys-dialog': dialog
        },
        methods: {
            showHelpTap() {
                this.show = true;
            },
            isShow(e) {
                this.show = e;
            }
        },
        created() {

        }
    }
</script>

<style scoped lang="less">
    @import "index.less";
</style>
