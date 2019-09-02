<template>
<!-- flex布局入口 -->
  <el-row type="flex" justify="space-between" class="layout-header"  >
      <!-- 左侧 -->
    <el-col :span="6" class="left" >
      <i class="el-icon-s-operation icon"></i>
      <span>与无声处听惊雷</span>
    </el-col>
    <!-- 右侧 -->
    <el-col :span="3" class="right" >
      <img  class="head-img" src="../../assets/image/avatar.jpg" alt />
      <!-- 下拉菜单入口处 -->
      <el-dropdown trigger="click">
        <span class="el-dropdown-link">
        点击下拉
          <i class="el-icon-arrow-down el-icon--right"></i>

        </span>
        <el-dropdown-menu slot="dropdown">

          <el-dropdown-item>个人信息</el-dropdown-item>
          <el-dropdown-item >git地址</el-dropdown-item>
          <el-dropdown-item >退出</el-dropdown-item>

        </el-dropdown-menu>
      </el-dropdown>
    </el-col>
  </el-row>
</template>

<script>
export default {}
</script>

<style lang='less' scoped >
.layout-header{
    padding:8px 0;
    .left{
    .icon{
        font-size:20px;
        margin-right:10px;
    }
    display:flex;
    align-items: center;
    }

    .right{
        display:flex;
        align-items: center;
      .head-img{
        width:30px;
        border-radius: 50%;
        margin-right:5px;
    }
    }
}
</style>
