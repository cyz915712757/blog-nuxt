<template>
  <el-container class="login-wrapper">
    <el-form
      ref="loginForm"
      :model="loginData"
      label-width="80px"
      :rules="rules"
      class="login-form"
    >
      <el-form-item
        label="用户名："
        prop="username"
      >
        <el-input
          prefix-icon="el-icon-user-solid"
          v-model="loginData.username"
          type="text"
          clearable
        >
        </el-input>
      </el-form-item>
      <el-form-item
        label="密码："
        prop="password"
      >
        <el-input
          ref="password"
          v-model="loginData.password"
          prefix-icon="el-icon-lock"
          sufffix-icon="el-icon-view"
          :type="passwordType"
          @keyup.enter.native="handleLogin"
        >
          <i
            class="el-icon-view el-input__icon"
            slot="suffix"
            @click="handlePasswordShow"
          >
          </i>
        </el-input>
      </el-form-item>
      <el-button
        type="primary"
        class="login-button"
        @click="handleLogin"
        :loading="loading"
      >登录</el-button>
      <el-row
        type="flex"
        class="tips"
      >
        <el-col> uesername：admin</el-col>
        <el-col class="ta-r">password：随便填</el-col>
      </el-row>
    </el-form>
  </el-container>
</template>
<script>
export default {
  data () {
    var checkName = (rule, value, callback) => {
      if (!value) {
        return callback(new Error('请输入用户名！'))
      } else if (value.length > 12) {
        return callback(new Error('用户名长度不能超过12位！'))
      } else {
        callback()
      }
    };
    var checkPassWord = (rule, value, callback) => {
      if (!value) {
        return callback(new Error('请输入密码！'))
      } else if (value.length > 12) {
        return callback(new Error('密码长度不能超过12位！'))
      } else {
        callback()
      }
    };
    return {
      loginData: {
        username: '',
        password: '',
      },
      passwordType: 'password',//是否展示密码
      loading: false,
      rules: {
        username: [
          {
            validator: checkName,
            trigger: ['blur', 'change']
          }
        ],
        password: [
          {
            validator: checkPassWord,
            trigger: ['blur', 'change']
          }
        ]
      }
    }
  },
  methods: {
    handlePasswordShow () {
      if (this.passwordType === 'password') {
        this.passwordType = ''
      } else {
        this.passwordType = 'password'
      }
      this.$nextTick(() => {
        this.$refs.password.focus()
      })
    },

    handleLogin () {
      this.$refs.loginForm.validate(valid => {
        if (valid) {
          this.loading = true
          this.$store.dispatch('loginPage', this.loginData).then(() => {
            this.$router.replace('/')
            this.loading = false
          }).catch(() => {
            this.loading = false
          })
        } else {
          console.log('error sublmit!')
        }
      })
    }

  }
}
</script>
<style scoped>
.login-wrapper {
  /* background: url("~/assets/images/login.jpg") no-repeat; */
  /* background-size: 100% 100%; */
  justify-content: center;
  width: 500px;
  height: 600px;
  border: 1px solid #ccc;
  margin: 0 auto;
}

.login-form {
  margin-top: 200px;
}
.el-form-item /deep/ .el-form-item__error {
  color: red;
}
.el-form-item /deep/.el-form-item__label {
  color: #000;
  font-weight: 700;
}
.login-button {
  width: 100%;
}
.tips {
  margin-top: 20px;
  color: #fff;
  font-weight: 700;
}
</style>
