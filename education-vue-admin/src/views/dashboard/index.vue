<template>
  <div class="dashboard-container">
    <!-- <div class="dashboard-text">用户名：{{ name }}</div>
    <div class="dashboard-text">用户角色：<span v-for="role in roles" :key="role">{{ role }}</span></div> -->
    <el-row :gutter="20">
      <el-col :sm="24" style="padding-left: 20px">
        <h2>在线教育项目 <el-tag type="danger">&yen;免费开源</el-tag></h2>
        <p>
          在线教育顾名思义，是以网络为介质的教学方式，通过网络学员与教师即使相隔万里也可以开展教学活动，此外
          借助网络课件
          学员还可以随时随地进行学习，真正打破了时间和空间的限制，对于工作繁忙，学习时间不固定的职场人而言网络远程教育是最方便不过的学习方式。
          <br />项目采用B2C模式，分为前台用户系统和后台运营平台。
        </p>
        <p></p>
        <p>
          <el-button type="primary" size="mini" icon="el-icon-cloudy" plain>
            <a
              href="https://gitee.com/StarSea007/guli_parent"
              target="_blank"
              style="text-decoration: none"
              >访问码云后端</a
            >
          </el-button>
          <el-button type="primary" size="mini" icon="el-icon-cloudy" plain>
            <a
              href="https://gitee.com/StarSea007/vscode2020"
              target="_blank"
              style="text-decoration: none"
              >访问码云前端</a
            >
          </el-button>
        </p>
      </el-col>
    </el-row>
    <div style="background: #f5f5f5">
      <div class="text">
        <el-alert title="项目介绍" type="info" :closable="false">
          <li>guli_parent 是后台工程，核心框架：Spring Cloud</li>
          <li>education-vue-web 是前端门户工程，核心框架：Vuejs + Nuxt.js</li>
          <li>
            education-vue-admin 是后台管理工程，核心框架：vue-element-admin
          </li>
          <li>vue1010 是前端学习demo案例</li>
        </el-alert>
      </div>
    </div>
    <div style="background: #f5f5f5; margin-top: 20px">
      <div class="text">
        <el-alert title="参考资料" type="info" :closable="false">
          项目视频：<el-link
            type="primary"
            href="https://www.bilibili.com/video/BV1dQ4y1A75e"
            target="_blank"
            :underline="false"
            >https://www.bilibili.com/video/BV1dQ4y1A75e</el-link
          >
          <br />
          学习笔记：<el-link
            type="primary"
            href="https://blog.csdn.net/weixin_45606067/category_10427871.html"
            target="_blank"
            :underline="false"
            >https://blog.csdn.net/weixin_45606067/category_10427871.html</el-link
          >
        </el-alert>
      </div>
    </div>
    <br />
    <div>
      <el-alert
        title="提示：本项目适用于学习前后分离端项目、微服务架构、Vue组件的使用等，可进行二次开发。"
        type="warning"
      >
      </el-alert>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "Dashboard",
  computed: {
    ...mapGetters(["name", "roles"]),
  },
};
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
.dashboard {
  &-container {
    margin: 30px;
  }

  &-text {
    font-size: 30px;
    line-height: 46px;
  }
}

.text {
  font-size: 25px;
  line-height: 46px;
}
</style>
