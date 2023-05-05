<template>
  <!-- 布局容器 -->
  <div class="container">
    <!-- 问题容器 -->
    <div class="post_container">
      <!-- 选择标签 -->
      <div class="tag_box">
        <div @click="ten_question">New Question</div>
        <div @click="hot_question">Hot Question</div>
      </div>
      <!-- 问题盒子，存放单个问题 -->
      <div class="box" v-for="i in this.box_data" :key="i.id" >
        <h4 class="box_title">{{i.description}}</h4>
        <p class="box_content">
          {{i.content}}
        </p>
        <div class="box_tips">
          <text class="box_time">
            {{i.user.nickname}}
          </text>
          <div class="box_view">{{i.user.nickname}}</div>
        </div>
        <!--          <div class="comment" @click="show_view(i.id)" v-for="comment in comment_dict[i.id]">-->
        <!--            <div class="sub-comment" style="&#45;&#45;0a74c5b9:#61666d; &#45;&#45;9534e6ea:20px">-->
        <!--              <div class="sub-user-info">-->
        <!--                 <div class="sub-user-name" style="font-size: 13px;line-height: 24px;"></div>-->
        <!--              </div>-->
        <!--              <span class="sub-replay">胜多负少</span>-->
        <!--            </div>-->
        <!--          </div>-->
      </div>
    </div>
    <!-- 侧边栏容器 -->
    <div class="aside_container">
      <!-- 侧边栏第一个盒子 -->
      <div class="top_box">
        <!-- 盒子title -->
        <div class="top_box_title">&bull; Best contributor</div>
        <!-- 用户盒子 -->
        <div class="top_box_users">
          <!-- 每一个用户 -->
          <div class="top_box_user" v-for="user in user_list" :key="user">
            <img :src="user.avatar" alt="">
            <div>{{user.nickname}}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import question from '@/api/question'
export default {
  name: "index",

  data() {
    return {
      box_data: [],
      user_list: [],
      comment_dict: {}
    }
  },

  methods: {
    ten_question(){
      question.select_new_post().then(response =>{
        console.log("ten:"+response)
        this.box_data = response.data.data.data
      })
    },
    hot_question(){
      question.select_hot().then(response =>{
        console.log("hot:"+response)
        if(response.data.data === null){
          return
        }
        this.box_data = response.data.data
      })
    },
    load_user(){
      question.get_user().then(response =>{
        console.log("user:"+response)
        // debugger
        this.user_list = response.data.data
      })
    },
    show_view(post_id){

    }
  },
  created() {
    this.ten_question()
    this.load_user()
  }
}
</script>

<style scoped>

/* 布局容器 */
.container {
  display: flex;
  width: 1200px;
  margin: 20px auto;
  box-sizing: border-box;
}

/* 侧边栏容器 */
.aside_container {
  width: 280px;
  margin-left: 20px;

}

.top_box {
  width: 100%;
  height: 350px;
  box-sizing: border-box;
  background-color: #ffffff;
  border-top: 2px solid #438b1061;
  padding: 20px 13px;
  overflow: hidden;
}

.top_box_title {
  height: 15px;
  line-height: 15px;
  font-size: 14px;
  word-spacing: 1px;

}

.top_box_users {
  height: 280px;
  overflow: hidden;
  margin-top: 15px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}

.top_box_user {
  width: 120px;
  height: 30px;
  /* background-color: #b85454; */
  margin-bottom: 10px;
  display: flex;
  box-sizing: border-box;
}

.top_box_user img {
  /* background-color: #c72b2b; */
  height: 30px;
  width: 30px;
  margin-right: 10px;
}

.top_box_user div {
  height: 30px;
  line-height: 30px;
  font-size: 14px;
  text-overflow: ellipsis;
  overflow: hidden;
}

.top_box_user:nth-child(odd) {
  margin-right: 10px;
}

/* 提问容器 */
.post_container {
  box-sizing: border-box;
  padding: 20px 30px;
  width: 800px;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.tag_box {
  width: 90%;
  height: 40px;
  display: flex;
  align-items: center;
}

.tag_box div {
  width: 90px;
  height: 25px;
  font-size: 13px;
  text-align: center;
  line-height: 25px;
  background-color: #7b7a7a2b;
  border-radius: 5px;
  margin-right: 8px;
  cursor: pointer;
}

.box {
  width: 90%;
  height: 195px;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  padding: 20px 0px;
  border-bottom: 1px solid rgba(90, 89, 89, 0.224);
}

.box_title {}

.box_content {
  color: rgba(90, 89, 89, 0.751);
  font-size: 14px;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  /*设置p元素最大4行，父元素需填写宽度才明显*/
  text-overflow: ellipsis;
  overflow: hidden;
}
.box .comment{
  display: flex;
  overflow: hidden;
  margin-top: 10px;
  padding-left: calc(80px - 8px)
}

.comment .sub-user-info{
  display: inline-flex;
  align-items: center;
  margin-right: 9px;
  line-height: 24px;
  vertical-align: baseline;
  white-space: nowrap;
}

.sub-replay{
  font-family: PingFang SC, HarmonyOS_Regular, Helvetica Neue, Microsoft YaHei, sans-serif;
  font-weight: 400;
  box-sizing: border-box;
  -webkit-font-smoothing: antialiased;
}

.box_tips {
  display: flex;
  color: rgba(90, 89, 89, 0.751);
  letter-spacing: 1px;
  font-size: 12px;

}
.box_time {

}
.box_view {
  margin-left: auto;
}


</style>
