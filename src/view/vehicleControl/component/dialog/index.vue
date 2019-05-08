<template>
    <div class="box-dialog">
        <div class="dialog" :class="show?'showDialog':''">
            <div class="dialog-content">
                <div class="title">操作提示</div>
            </div>
        </div>
        <div class="mask dialog" :class="show?'showMask':''" @click="hideDialog"></div>
    </div>

</template>
<script>
    export default {
        name: 'ys-dialog',
        data() {
            return {}
        },
        props: {
            show: {
                type: Boolean,
                default: false
            },
        },
        methods: {
            hideDialog() {
                this.$emit('isShow', false)
            }
        },
        created() {

        }
    }
</script>

<style scoped lang="less">
    @keyframes show {
        from {
            opacity: 0
        }
        to {
            opacity: 1
        }
    }

    @keyframes hide {
        from {
            opacity: 1;
        }
        to {
            opacity: 0;
        }
    }

    .dialog {
        animation: hide 300ms;
        display: none;
    }

    .showDialog {
        display: block;
        animation: show 300ms;
        z-index: 6;
        position: fixed;
        background-color: #fff;
        left: 50%;
        top: 50%;
        height: 440px;
        width: 325px;
        margin-top: -220px;
        margin-left: -163px;
        border-radius: 12px;
    }

    .mask {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: 5;
        background-color: rgba(0, 0, 0, .6);
    }

    .showMask {
        display: block;
        animation: show 300ms;
    }
</style>
