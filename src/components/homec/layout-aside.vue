<template>
<div class="layout-aside">
    <div class="title">
    <img src="../../assets/image/logo_admin.png" alt="">
    </div>
  <el-menu
      default-active="2"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
      background-color="#323745"
      text-color="#adafb5"
      active-text-color="#ffd04b">

      <el-menu-item index="1">
          <i class="el-icon-house" ></i>
        <span slot="title">首页</span>
      </el-menu-item>

      <el-submenu index='2' >
        <template slot="title" >
            <i class="el-icon-collection-tag" ></i>
        <span >内容管理</span>
        </template>

        <el-menu-item>发布文章</el-menu-item>
        <el-menu-item>内容列表</el-menu-item>
        <el-menu-item>评论管理</el-menu-item>
        <el-menu-item>素材管理</el-menu-item>
      </el-submenu>

      <el-submenu index='3' >
        <template slot="title" >
            <i class='el-icon-s-custom' ></i>
        <span >内容管理</span>
        </template>

        <el-menu-item>图文数据</el-menu-item>
        <el-menu-item>粉丝概况</el-menu-item>
        <el-menu-item>粉丝列表</el-menu-item>
        <el-menu-item>粉丝画像</el-menu-item>
      </el-submenu>

      <el-menu-item index="4" >
          <i class="el-icon-receiving" ></i>
        <span slot="title">账户信息</span>
      </el-menu-item>

    </el-menu>
    </div>
</template>

<script>
export default {

}
</script>

<style lang='less' scoped >
.layout-aside{
   width:200px;
   height:100vh;
   background-color:#323745;
    vertical-align: middle;
    .el-menu-vertical-demo{
        width:201px;
    }
   .title{
       text-align: center;
       background-color: #2e2f32;
       width:200px;
       padding:10px 0;
       img{
           height:25px;
       }
   }
}
</style>
