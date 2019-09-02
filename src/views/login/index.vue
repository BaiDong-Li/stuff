<template>
  <div class="login">
      <el-card class="login-card"  >
          <div class=" logo"  ><img src="../../assets/image/logo_index.png" alt=""></div>
          <!-- 表单容器 -->
          <el-form ref="abc"  style="margin-top:20px" :model="loginForm" :rules="loginRules">
              <!-- 手机号 -->
              <el-form-item prop="mobile" >
                  <el-input placeholder="请输入手机号" v-model='loginForm.mobile'   ></el-input>
              </el-form-item>
              <!-- 验证码 -->
              <el-form-item prop="code" >
                  <el-input style="width:280px" placeholder="请输入验证码" v-model="loginForm.code" ></el-input>
                  <el-button style="float:right" type="info" >发送验证码</el-button>
              </el-form-item>
              <!-- 确认框 -->
               <el-form-item prop="check" >
                    <el-checkbox v-model="loginForm.check">亲爱的用户我是你爹</el-checkbox>
               </el-form-item>
               <!-- 确认框 -->
               <el-button  @click='login' type="primary" style="width:100%"   >确认登陆</el-button>
          </el-form>
      </el-card>
  </div>
</template>

<script>

export default {

  data () {
    let validator = function (rule, value, callBack) {
      if (value) {
        callBack() // 如果 value 为true直接通过
      } else {
        callBack(new Error('唉不懂'))
      }
    }

    return {
      loginForm: {
        mobile: '', // 手机号
        code: '', // 验证码
        check: true

      },
      loginRules: {
        mobile: [
          {
            required: true,
            message: '手机号不能为空'
          }, {
            pattern: /^1[3456789]\d{9}$/,
            message: '手机号格式不正确'
          }
        ],
        code: [
          { required: true,
            message: '验证码不能为空' },
          {
            pattern: /^\d{6}$/,
            message: '验证码需要为六位数字'
          }
        ],
        check: [{ validator: validator }]
      }
    }
  },
  methods: {
    login () {
      this.$refs.abc.validate(isOk => {
        if (isOk) {
          this.$axios({
            url: '/authorizations',
            method: 'post',
            data: this.loginForm
          }).then(res => {
            window.localStorage.setItem('user-token', res.data.data.token)
            this.$router.push('/')
          }).catch(() => this.$message({
            message: '验证错误',
            type: 'waring'
          }))
        }
      })
    }
  }

}

</script>

<style lang='less'  scoped >
.login {
  background: url("../../assets/image/login_bg.jpg");
  height: 100vh;
  background-size: cover;
  display:flex;
  justify-content: center;
  align-items: center;
}
.login-card{
    height:340px;
    width: 450px;
    .logo{
        text-align:center;
        img{
            height:40px;

        }
    }
}
</style>
