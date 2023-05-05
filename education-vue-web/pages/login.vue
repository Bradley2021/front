<template>
  <div class="main">
    <div class="title">
      <a class="active" href="/login">Login</a>
      <span style="font-size: large;">|</span>
      <a href="/register">Register</a>
    </div>
<style>
  .input_check{

  }
  .input_check:invalid{
    border: #0c72f0;
  }
</style>
    <div class="sign-up-container">
      <el-form ref="userForm" :model="user">

        <el-form-item class="input-prepend restyle" prop="mobile"
                      :rules="[{ required: true, message: 'Please Input Phone Number', trigger: 'blur' },{validator: checkPhone, trigger: 'blur'}]">
          <div>
            <el-input class="input_check" type="text" aria-required="true" placeholder="Phone Number" v-model="user.mobile"/>
            <i class="iconfont icon-phone"/>
          </div>
        </el-form-item>

        <el-form-item class="input-prepend" prop="password"
                      :rules="[{ required: true, message: 'Please Input Password', trigger: 'blur' }]">
          <div>
            <el-input class="input_check" type="password" aria-required="true" placeholder="password" v-model="user.password"/>
            <i class="iconfont icon-password"/>
          </div>
        </el-form-item>

        <div class="btn">
          <input type="button" class="sign-in-button" value="Login" @click="submitLogin()">
        </div>
      </el-form>
      <!-- 更多登录方式 -->
      <div class="more-sign">
        <h6>MORE</h6>
        <ul>
          <li><a id="weixin" class="weixin" target="_blank"
                 href="http://localhost:8160/api/ucenter/wx/login"><i class="iconfont icon-weixin"/></a>
          </li>
          <li><a id="qq" class="qq" target="_blank" href="#"><i class="iconfont icon-qq"/></a></li>
        </ul>
      </div>
    </div>

  </div>
</template>

<script>
import '~/assets/css/sign.css'
import '~/assets/css/iconfont.css'
import cookie from 'js-cookie'
import loginApi from '@/api/login'

export default {
  layout: 'sign',
  data() {
    return {
      //用于封装手机号和密码
      user: {
        mobile: '',
        password: ''
      },
      //用户信息
      loginInfo: {}
    }
  },
  methods: {
    //登录的方法
    submitLogin() {
      this.$refs["userForm"].validate(valid => {
        if (valid) {
          //第一步 调用接口进行登录，返回token字符串
          loginApi.submitLoginUser(this.user).then(response => {
            //第二步 获取token字符串放到cookie里面
            //第一个参数cookie名称，第二个参数值，第三个参数作用范围
            cookie.set('guli_token', response.data.data.token, {domain: 'localhost'})
            //第四步 调用接口根据token获取用户信息，为了首页显示
            loginApi.getLoginUserInfo()
              .then(response => {
                this.loginInfo = response.data.data.userInfo
                //获取返回用户信息，放到cookie里面
                cookie.set('guli_ucenter', this.loginInfo, {domain: 'localhost'})
                //跳转页面
                window.location.href = "/";
              })
          }).catch(() => {})
        }
      })
    },
    checkPhone(rule, value, callback) {
      //debugger
      if (!(/^1[34578]\d{9}$/.test(value))) {
        return callback(new Error('手机号码格式不正确'))
      }
      return callback()
    }
  }
}
</script>

<style>
.el-form-item__error {
   z-index: 9999999;
}
</style>
