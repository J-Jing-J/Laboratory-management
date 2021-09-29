<template>
  <div style="width: 100%; height: 100%">
    <div class="login_container">
      <div class="login_box" shadow="hover">
        <el-form
          class="login_form"
          :model="loginForm"
          :rules="loginFormRules"
          ref="loginFormRef">
<!--          标题-->
          <el-form-item>
            <p class="form_title">实验室设备报修系统</p>
          </el-form-item>
<!--          账号-->
          <el-form-item prop="username">
            <el-input
              placeholder="用户名"
              v-model="loginForm.username"
              name="username"
              type="text"
              prefix-icon="el-icon-user"
            />
          </el-form-item>
<!--          密码-->
          <el-form-item prop="password">
            <el-input
              placeholder="密码"
              v-model="loginForm.password"
              name="password"
              type="password"
              prefix-icon="el-icon-more"
            />
          </el-form-item>
          <el-form-item class="login_button_container">
            <el-button type="primary">注册</el-button>
            <el-button type="info" @click="loginClick">登录</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "login",
  data() {
    return {
      // 登录数据绑定
      loginForm: {
        username: "admin",
        password: "123456"
      },
      token: 123,
      // 验证用户名和密码
      loginFormRules: {
        username: [
          { required: true, message: '请输入用户名', trigger: 'blur' },
          { min: 2, max: 10, message: '用户名的长度在 2 到 10 个字符', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' },
          { min: 6, max: 15, message: '密码的长度在 6 到 15 个字符', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    // 点击登录按钮时,表单预校验
    loginClick() {
      // valid是布尔值:表单是否验证通过
      // this.$refs.loginFormRef.validate(async valid => {
      //   if(!valid) return this.$message.error('登录失败');
      //   const res = await this.$http.post("login", this.loginForm)
      //   console.log(res);
      //   this.$router.push({
      //    name: "WorkBench"
      //   });
      //   return this.$message.success('登陆成功');
      //   window.sessionStorage.setItem('token', res.data.token);
      //   this.$route.push('/home');
      // })

      this.$refs.loginFormRef.validate( valid => {
        if(!valid) return this.$message.error('登录失败')

        this.$router.push('/work-bench');
        return this.$message.success('登陆成功');
      })
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../../styles/variables";
.login_container {
  background-color: $color-text-placeholder;
  height: 100%;
}

.login_box {
  width: 550px;
  height: 450px;
  background-color: #778beb;
  border-radius: 30px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}

.login_form{
  position: absolute;
  bottom: 20px;
  width: 100%;
  padding: 0 20px;
  //form表单默认的box-sizing是content，设成border-box就不会超出去了
  box-sizing: border-box;
}

.form_title {
  color: #fff;
  font-size: $f3;
  text-align: center;
}
.login_button_container {
  text-align: center;
}
.el-button {
  margin: 40px;
  width: 100px;
  height: 40px;
  //改element-ui按钮样式
  opacity: .7;
  background-color: #fff;
  color: $sidebar-third-color;
  font-weight: bold;
  font-size: $f6;
  text-align: center;
}
</style>
