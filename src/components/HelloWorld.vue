<template>
    <div class="hello">
        <h1>{{ msg }}</h1>
        <p>
            For a guide and recipes on how to configure / customize this project,<br>
            check out the
            <a href="javascript:;" target="_blank" rel="noopener">vue-cli documentation</a>.
        </p>
        <h3>Installed CLI Plugins</h3>
        <van-button type="default">默认按钮</van-button>
        <van-button type="primary">主要按钮</van-button>
        <van-button type="info">信息按钮</van-button>
        <van-button type="warning">警告按钮</van-button>
        <van-button type="danger">危险按钮</van-button>
        <van-circle
                v-model="currentRate"
                color="#07c160"
                fill="#fff"
                size="120px"
                layer-color="#ebedf0"
                :text="text"
                :rate="100"
                :speed="100"
                :clockwise="false"
                :stroke-width="60"
        />
    </div>
</template>

<script>
    import {Button} from 'vant';
    import {Circle} from 'vant';

    export default {
        name: 'HelloWorld',
        props: {
            msg: String
        },
        data() {
            return {
                currentRate:10
            }
        },
        computed: {
            text() {
                return this.currentRate.toFixed(0) + '%'
            }
        },
        components: {// eslint-disable-next-line
            'van-button': Button,
            'van-circle': Circle
        },
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    h3 {
        margin: 40px 0 0;
    }

    ul {
        list-style-type: none;
        padding: 0;
    }

    li {
        display: inline-block;
        margin: 0 10px;
    }

    a {
        color: #42b983;
    }
</style>
