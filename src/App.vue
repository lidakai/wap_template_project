<template>
	<div id="app">
    <router-view></router-view>
	</div>
</template>

<script>
  export default{
    name: 'APP'
  }
</script>
<style>
  /*#app .el-menu-item{*/
    /*height: 66px;*/
  /*}*/
  .el-tooltip__popper.is-light{
    border: 1px solid #fff;
    box-shadow: 0 2px 1px 2px rgba(0,0,0,.1);
  }
  .popper__arrow{
    border-top-color: rgba(255,255,255,0)!important;
    bottom: 0!important;
    border-width: 0!important;
  }
  .box>i{
    font-style: normal;
    font-size: 12px;
    padding: 2px;
    border-radius: 5px;
    color: #4b4d56;
    position: relative;
    margin-left: 18px;
    vertical-align: top;
  }
  .box>i:after{
    content: '';
    background-color: #51cbf7;
    border-radius: 50%;
    width: 8px;
    height: 8px;
    display: inline-block;
    position: absolute;
    left: -12px;
    top:5px
  }
  .box i.NoOpenBroadcast{
    color: #dbdbdd;
  }
  .box i.NoOpenBroadcast:after{
    background-color: #dbdbdd;
  }
  .box_title{
    padding-left: 60px;
    box-sizing: border-box;
    text-align: left;
  }
  .el-dialog__header{
    background-color: rgba(196, 196, 196, 0.1);
  }
</style>
