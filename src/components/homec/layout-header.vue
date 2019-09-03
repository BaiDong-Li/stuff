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
      <img  class="head-img" :src="userInfo.photo ? userInfo.photo : defaultImg " >
      <!-- 下拉菜单入口处 -->
      <el-dropdown trigger="click" @command='handleMenuItem' >
        <span class="el-dropdown-link">
        {{userInfo.name}}
          <i class="el-icon-arrow-down el-icon--right"></i>

        </span>
        <el-dropdown-menu slot="dropdown">

          <el-dropdown-item command='account' >个人信息</el-dropdown-item>
          <el-dropdown-item command='git'>git地址</el-dropdown-item>
          <el-dropdown-item command='lgout' >退出</el-dropdown-item>

        </el-dropdown-menu>
      </el-dropdown>
    </el-col>
  </el-row>
</template>

<script>
export default {
  data () {
    return {
      userInfo: {},
      defaultImg: require('../../assets/image/avatar.jpg')// 转 为base64
    }
  },
  methods: {
    getUserInfo () {
      // let token = window.localStorage.getItem('user-token')
      this.$axios({
        url: '/user/profile'
        // headers: { 'Authorization': `Bearer ${token}` }
      })
        .then(res => { this.userInfo = res.data })
        .catch(err => console.log(err))
    },
    handleMenuItem (command) {
      if (command === 'account') {

      } else if (command === 'git') {
        window.location.href = 'https://github.com/BaiDong-Li/stuff'
      } else {
        window.localStorage.clear()
        this.$router.push('/login')
      }
    }

  },
  created () {
    this.getUserInfo()
  }
}
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
