<template>
<div>
  <div class="container">
    <div class="head_list">
      <div class="m_learned">
         <a class="teacher_bar">
<!--           <img src="" style="width: 80px;height: 80px" alt="No Img"/>-->
         </a>
         <div class="head_info">
<!--           <img class="head_course_img" style="height: 48px;width: auto" alt="no"/>-->
           <div>
             <div class="course_info" style="cursor: pointer">
               <a style="float: left"><h4 style="color:  #333333; font-size: 18px">{{this.courseInfo.title}}</h4></a>
             </div>
             <h5 style="color: #00CC7E;">111</h5>
           </div>
         </div>
      </div>

      <div class="footer_box">
        <div class="course_detail">
          <div style="margin-top: 5px; display: flex">
          <a :href="'/course/'+courseInfo.id" style="cursor: pointer; margin-top: 3px"><h5 style="font-size: 14px;margin-top: 2px">{{courseInfo.title}}</h5></a>
          <div><i class="el-submenu__icon-arrow el-icon-arrow-right" style="padding-top: 5px;"></i></div></div>
          <el-tabs v-model="title" @tab-click="handleCommand" style="margin-left: 20px">
<!--            <el-tab-pane label="用户管理" name="first"></el-tab-pane>-->
<!--            <el-tab-pane label="配置管理" name="second"></el-tab-pane>-->
<!--            <el-tab-pane label="角色管理" name="third"></el-tab-pane>-->
<!--            <el-tab-pane label="定时任务补偿" name="fourth"></el-tab-pane>-->
             <el-tab-pane v-for="(item,index) in this.chapterTotal"
                          :label="item.title"
                          :name="item.id"
                          :key="index"></el-tab-pane>
          </el-tabs>

        </div>

        <div class="video_box" style="margin-top: 20px">
          <Video
            v-show="true"
            :videoSrc="require('@/assets/video/2.mp4')"
            :videoPoster="videoPoster"
            :width="800"
            :height="450"
            :autoplay="true"
            :controls="true"
            :loop="false"
            :muted="false"
            preload="auto"
            :showPlay="true"
            :playWidth="96"
            zoom="contain"
          />
          <!-- <video>
            <source src="http://127.0.0.1:8083/2.mp4" type="video/mp4">
          </video> -->
        </div>
      </div>


    </div>
  </div>

  <div style="float: left;margin-bottom: 60px;width: 50%"></div>
</div>
</template>

<script>
import Video from '../../components/Video.vue'
import learn from '~/api/learn'
import course from '@/api/course'

export default {
  name: "_id",
  components: {
    Video
  },
  asyncData({ params, error }) {
    return {
      courseId: params.id
    }
  },
  created() {
    this.init_course()
    // this.init_img()
  },
  data(){
    return {
       title: '',
       chapterHead: {'id': '', 'title': '', 'sort':''},
       content: ['a','b','c'],
       courseInfo: {},
       videoSrc: '127.0.0.1:8083/2.mp4',
       videoPoster: '@/assets/img/404.jpg',
       index_img: '',
       courseTitle: '',
       chapterTotal: [],
       compareMap: {},
       videoList: []
    }
  },
  methods: {
    init_course() {
       learn.get_course_info(this.courseId).then(response => {
           let data = response.data.data
           let video = data.video
           let chapter = data.chapter
           this.courseInfo = {id: data.courseId, title: data.title}
           console.log(JSON.stringify(this.courseInfo))
           // let chapterTotal = {}
         for (let i = 0; i < chapter.length; i++) {
           let out = chapter[i]
           let convert = {'id': out.id, 'title': out.title, 'sort':out.sort}
           this.chapterTotal.push(convert)
           this.compareMap[out.id] = ''
         }
         for (let i = 0; i < video.length; i++) {
           let video_out = video[i]
           let video_convert = {'chapter': video_out.chapterId, 'src': video_out.videoSourceId}
           this.videoList.push(video_convert)
           this.compareMap[video_out.chapterId] = i
         }
           // let
         // this.chapterHead = this.chapterTotal[this.chapterHandle(this.courseId)]
         this.title = this.chapterTotal[this.chapterHandle(this.courseId)].id
       })
    },
    search_video(id){
      return this.videoList[this.compareMap[id]]
    },
    chapterHandle(id){
      let cur = 0
      for (let i = 0; i < this.chapterTotal.length; i++) {
         let chapterTotalElement = this.chapterTotal[i];
         if (chapterTotalElement.id === id){
           cur = i
           break
         }
      }
      return cur
    },
    handleCommand() {
      let video = this.compareMap[this.title]
      let video_content = this.videoList[video]
      this.videoSrc = ''
    }

  },
  init_img() {
    // course.getCourseInfo(this.courseInfo.id).then(response => {
    //   response.data.data
    // })
  }
}
</script>

<style scoped>
.body{
  background-color: rgb(240,242,245);
}

.m_learned{
  display: flex;
  background-color: #fff;
  border: 1px solid rgba(0, 21, 41, 0.12);
  padding: 10px 32px;
  margin-top: 4px;
}
.teacher_bar{
  margin-top: 2px;
  border-right: 1px solid rgba(230, 230, 230, 1);
  margin-right: 32px;
  padding-right: 32px;
}

.head_info{
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
}

.head_course_img{
  margin-right: 16px;
  border-radius: 6px;
}

.footer_box{

}

.course_detail{
  display: flex;

}

.el-submenu__title i {
  color: #909399;
}

.el-submenu__icon-arrow {
  position: static;
  vertical-align: middle;
  margin-left: 8px;
  margin-top: -3px;
}

::v-deep el-select-dropdown {
  position: absolute !important;
  top: 35px !important;
  left: 0 !important;
}
</style>
