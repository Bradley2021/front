<template>
  <div class="main">
    <div class="title">
      <a href="/login">Login</a>
      <span style="font-size: large;">|</span>
      <a class="active" href="/register">Register</a>
    </div>

    <div class="sign-up-container">
      <el-form ref="userForm" :model="params">

        <el-form-item class="input-prepend restyle" prop="nickname"
                      :rules="[{ required: true, message: '', trigger: 'blur' }]">
          <div>
            <el-input type="text" placeholder="Your Nick Name" v-model="params.nickname"/>
            <i class="iconfont icon-user"/>
          </div>
        </el-form-item>

        <el-form-item class="input-prepend restyle no-radius" prop="mobile"
                      :rules="[{ required: true, message: 'input phone number', trigger: 'blur' },{validator: checkPhone, trigger: 'blur'}]">
          <div>
            <el-input type="text" placeholder="phone number" v-model="params.mobile"/>
            <i class="iconfont icon-phone"/>
          </div>
        </el-form-item>

        <el-form-item class="input-prepend restyle no-radius" prop="code"
                      :rules="[{ required: true, message: 'input code', trigger: 'blur' }]">
          <div style="width: 100%;display: block;float: left;position: relative">
            <el-input type="text" placeholder="Code" v-model="params.code"/>
            <i class="iconfont icon-phone"/>
          </div>
          <div class="btn" style="position:absolute;right: 0;top: 6px;width: 40%;">
            <a href="javascript:" type="button" @click="getCodeFun()" :value="codeTest"
               style="border: none">{{ codeTest }}</a>
          </div>
        </el-form-item>

        <el-form-item class="input-prepend" prop="password"
                      :rules="[{ required: true, message: 'please input password', trigger: 'blur' }]">
          <div>
            <el-input type="password" placeholder="set password" v-model="params.password"/>
            <i class="iconfont icon-password"/>
          </div>
        </el-form-item>

        <div class="btn">
          <input type="button" class="sign-up-button" value="GO!" @click="submitRegister()">
        </div>
        <p class="sign-up-msg">
          Click register to allow law
          <br>
          <a target="_blank" href="http://www.jianshu.com/p/c44d171298ce">User Agreement</a>
          and
          <a target="_blank" href="http://www.jianshu.com/p/2ov8x3">Privacy Policy</a> 
        </p>
      </el-form>
      <!-- 更多注册方式 -->
      <div class="more-sign">
        <h6>MORE</h6>
        <ul>
          <li><a id="weixin" class="weixin" target="_blank" href="http://localhost:8160/api/ucenter/wx/login"><i
            class="iconfont icon-weixin"/></a></li>
          <li><a id="qq" class="qq" target="_blank" href="#"><i class="iconfont icon-qq"/></a></li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import '~/assets/css/sign.css'
import '~/assets/css/iconfont.css'

import registerApi from '@/api/register'

export default {
  layout: 'sign',
  data() {
    return {
      params: { //封装注册输入数据
        mobile: '',
        code: '',  //验证码
        nickname: '',
        password: ''
      },
      sending: true,      //是否发送验证码
      second: 60,        //倒计时间
      codeTest: 'Get Code'
    }
  },
  methods: {
    //注册提交的方法
    submitRegister() {
      this.$refs["userForm"].validate(valid => {
        if (valid) {
          registerApi.registerMember(this.params).then(response => {
            //提示注册成功
            this.$message({
              type: 'success',
              message: "注册成功"
            })
            //跳转登录页面
            this.$router.push({path: '/login'})
          })
        }
      })
    },
    //60秒倒计时
    timeDown() {
      let result = setInterval(() => {
        --this.second;
        this.codeTest = this.second
        if (this.second < 1) {
          clearInterval(result);
          this.sending = true;
          //this.disabled = false;
          this.second = 60;
          this.codeTest = ""
        }
      }, 1000);
    },
    //通过输入手机号发送验证码
    getCodeFun() {
      registerApi.sendCode(this.params.mobile).then(response => {
        this.sending = false
        //调用倒计时的方法
        this.timeDown()
      })
    },
    //判断手机号格式
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
