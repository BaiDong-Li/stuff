<template>
<!-- 全局注册了 所以没有引入就使了 -->
 <el-container>
<el-aside style='width:201px;background-color:#323745' >
<layout-aside></layout-aside>

</el-aside>
<!-- 因为右侧是上下结构的 要再放一个el-container 右侧-->
<el-container>
  <el-header>
    <layout-header></layout-header>
    </el-header>
  <el-main class="homeindex" >

    <router-view></router-view>
    </el-main>
</el-container>
 </el-container>
</template>

<script>

export default {

}
</script>

<style lang='less' scoped >
.homeindex{
  margin:0;
  padding:0
}
</style>
