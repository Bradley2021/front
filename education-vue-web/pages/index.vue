<template>
  <div>
<!--    <div class="index_img">-->
<!--      <img :src="index_img"/>-->
<!--    </div>-->

    <div>
      <div class="header_line" style="border-color: #1f2d3d">
        <div class="course_bar">
           <div class="c_item" v-for="(item) in b" :key="item.id">
            <router-link :to="'/course/'+item.id">
              <span class="c_item_font1">{{item.title}}</span>
              <!-- <span class="c_item_font2">456</span> -->
            </router-link>
           </div>
        </div>
        <div class="section_banner">
          <input type="radio" name="tabs" id="tab_top" checked class="section_banner_input">
          <input type="radio" name="tabs" id="tab_middle" class="section_banner_input">
          <input type="radio" name="tabs" id="tab_bottom" class="section_banner_input">
          <div class="cube">
            <div class="tab-content">
            <a :src="'/course/'+'1192252213659774977'">
              <!-- <img style="width: 100%; height: 90%;border: #1f2d3d 2px solid;background-image: url('');" src="http://127.0.0.1:8083/java-logo.png"> -->
            </a>
            </div>
            <div class="tab-content">
            <a :src="'/course/'+'1319566435449688065'">
              <!-- <img style="width: 100%; height: 90%;border: #1f2d3d 2px solid;" src="http://127.0.0.1:8083/thumb.jpg"/> -->
            </a>
            </div>
            <div class="tab-content">
            <a :src="'/course/'+'1316902348370411521'">
              <!-- <img style="width: 100%; height: 90%;border: #1f2d3d 2px solid;" src="http://127.0.0.1:8083/R-C (1).png"/> -->
            </a>
            </div>
          </div>
          <div class="labels">
            <label for="tab_top" class="tab"><img style="height: 100%; width: 100%" src="http://127.0.0.1:8083/java-logo.png"/></label>
            <label for="tab_middle" class="tab"><img style="height: 100%; width: 100%" src="http://127.0.0.1:8083/thumb.jpg"/></label>
            <label for="tab_bottom" class="tab"><img style="height: 100%; width: 100%" src="http://127.0.0.1:8083/R-C (1).png"/></label>
          </div>
        </div>
        <!-- 幻灯片 开始 -->
<!--        <div v-swiper:mySwiper="swiperOption" style="display: flex;border: 2px red solid">-->
<!--          <div class="swiper-wrapper">-->
<!--            <div v-for="banner in bannerList" :key="banner.id" class="swiper-slide" style="background: #040B1B;">-->
<!--              <a :href="banner.linkUrl">-->
<!--                <img :src="banner.imageUrl" :alt="banner.title">-->
<!--              </a>-->
<!--            </div>-->
<!--          </div>-->
<!--          <div class="swiper-pagination swiper-pagination-white"></div>-->
<!--          <div class="swiper-button-prev swiper-button-white" slot="button-prev"></div>-->
<!--          <div class="swiper-button-next swiper-button-white" slot="button-next"></div>-->
<!--        </div>-->
        <!-- 幻灯片 结束 -->
      </div>

      <div id="aCoursesList">
        <!-- 网校课程 开始 -->
        <div>
          <section class="container">
            <header class="comm-title">
              <h2 class="tac" style="">
                <span class="c-333">Hot Course</span>
              </h2>
            </header>
            <div>
              <article class="comm-course-list">
                <ul class="of" id="bna">
                  <li v-for="course in eduList" :key="course.id">
                    <div class="cc-l-wrap">
                      <section class="course-img">
                        <img
                          :src="course.cover"
                          class="img-responsive"
                          :alt="course.title"
                          height="5px"
                        >
                        <div class="cc-mask">
<!--                          <router-link to="/course/{{course.id}}">-->
                            <a :href="'/course/'+course.id" title="开始学习" class="comm-btn c-btn-1">Start Learning</a>
<!--                          </router-link>-->
                        </div>
                      </section>
                      <h3 class="hLh30 txtOf mt10">
                        <a :href="'/course/'+course.id" :title="course.title" class="course-title fsize18 c-333">{{ course.title }}</a>
                      </h3>
                      <section class="mt10 hLh20 of">
                      <span class="fr jgTag bg-green" v-if="Number(course.price) === 0">
                        <i class="c-fff fsize12 f-fA">Free</i>
                      </span>
                        <span class="fr jgTag bg-green" v-else>
                        <i class="c-fff fsize12 f-fA">￥{{ course.price }}</i>
                      </span>
                        <span class="fl jgAttr c-ccc f-fA">
                        <i class="c-999 f-fA">{{ course.buyCount }} person</i>
                        |
                        <i class="c-999 f-fA">{{ course.viewCount }} read</i>
                      </span>
                      </section>
                    </div>
                  </li>
                </ul>
                <div class="clear"></div>
              </article>
              <section class="tac pt20">
                <router-link to="/course" tag="li" active-class="current">
                  <a title="全部课程" class="comm-btn c-btn-2">All Course</a>
                </router-link>
              </section>
            </div>
          </section>
        </div>
        <!-- /网校课程 结束 -->
        <br/>
        <br/>
        <!-- 网校名师 开始 -->
        <div>
          <section class="container">
            <header class="comm-title">
              <h2 class="tac">
                <span class="c-333">Famous Teacher</span>
              </h2>
            </header>
            <div>
              <article class="i-teacher-list">
                <ul class="of">
                  <li v-for="teacher in teacherList" :key="teacher.id">
                    <section class="i-teach-wrap">
                      <div class="i-teach-pic">
                        <a :href="'/teacher/'+teacher.id" :title="teacher.name">
                          <img :alt="teacher.name" :src="teacher.avatar">
                        </a>
                      </div>
                      <div class="mt10 hLh30 txtOf tac">
                        <a :href="'/teacher/'+teacher.id" :title="teacher.name" class="fsize18 c-666">{{ teacher.name }}</a>
                      </div>
                      <div class="hLh30 txtOf tac">
                        <span class="fsize14 c-999">{{ teacher.career }}</span>
                      </div>
                      <div class="mt15 i-q-txt">
                        <p
                          class="c-999 f-fA"
                        >{{ teacher.intro }}</p>
                      </div>
                    </section>
                  </li>
                </ul>
                <div class="clear"></div>
              </article>
              <section class="tac pt20">
                <router-link to="/teacher" tag="li" active-class="current">
                  <a href="#" title="全部讲师" class="comm-btn c-btn-2">All Teacher</a>
                </router-link>
              </section>
            </div>
          </section>
        </div>
        <!-- /网校名师 结束 -->
      </div>

      <!--    <div style="float: left;margin-bottom: 20px;width: 50%"></div>-->
    </div>
    <br/>
<!--    <img src="https://edu-image.nosdn.127.net/C4C10C0C27254ED77925331F19F83FED.jpg?imageView&quality=100&thumbnail=230y130"/>-->
    <div style="clear: both;" class="video">
    </div>
    <div style="float: left;margin-bottom: 20px;width: 50%"></div>
    <!--  排行榜-->
     <div class="list_from">
       <p class="p1" style="text-align: left;margin-right: 90% ">Hot Class</p>
       <div class="list_table wow shake">
         <div class="table">
             <div class="title">
               <div class="QPlXu"><div class="_1eRPK"></div><div class="f5bWh">Hot List<span class="_1A3Dy">TOP5</span></div></div>
               <span class="_3iNZP">POPULAR COURSES</span>
             </div>
           <div class="course_list">
             <ul class="L7" style="left: 0; width: 392px; height: 470px;">
               <div v-for="(course,i) in eduHotCourse" :key="course.id">
                 <div class="_2vopq" @click="jumpToPage(course.id)">
                   <span>{{i+1}}</span>
                   <img :src="course.cover" :alt="course.title"/>
                   <div class="_oR7n">
                     <p class="_18oBr">{{course.title}}</p>
                     <p class="L8">{{course.teacher}}</p>
                     <p class="L9">{{course.buyCount}} Learned</p>
                   </div>
                 </div>
               </div>
             </ul>
           </div>
         </div>
<!--         热门课程结束-->
<!--         新课程-->
         <div class="table">
           <div class="title">
             <div class="QPlXu"><div class="_1eRPK"></div><div class="f5bWh">Add New<span class="_1A3Dy">TOP5</span></div></div>
             <span class="_3iNZP">NEW COURSES</span>
           </div>
           <div class="course_list">
             <ul class="L7" style="left: 0; width: 392px; height: 470px;">
               <div v-for="(course,i) in eduNewCourse" :key="course.id">
                 <div class="_2vopq" @click="jumpToPage(course.id)">
                   <span>{{i+1}}</span>
                   <img :src="course.cover" :alt="course.title"/>
                   <div class="_oR7n">
                     <p class="_18oBr">{{course.title}}</p>
                     <p class="L8">{{course.teacher}}</p>
                     <p class="L9">{{course.buyCount}} Learned</p>
                   </div>
                 </div>
               </div>
             </ul>
           </div>
         </div>
<!--         新课程结束-->
<!--         好评课程-->
         <div class="table">
           <div class="title">
             <div class="QPlXu"><div class="_1eRPK"></div><div class="f5bWh">Good Rates<span class="_1A3Dy">TOP5</span></div></div>
             <span class="_3iNZP">FIVE-STAR</span>
           </div>
           <div class="course_list">
             <ul class="L7" style="left: 0; width: 392px; height: 470px;">
               <div v-for="(course,i) in eduFiveStar" :key="course.id">
                 <div class="_2vopq" @click="jumpToPage(course.id)">
                   <span>{{i+1}}</span>
                   <img :src="course.cover" :alt="course.title"/>
                   <div class="_oR7n">
                     <p class="_18oBr">{{course.title}}</p>
                     <p class="L8">{{course.teacher}}</p>
                     <p class="L9">{{course.buyCount}} Learned</p>
                   </div>
                 </div>
               </div>
             </ul>
           </div>
         </div>
<!--好评课程结束-->
         </div>
       </div>

<!--    <div class="wow shake">hello</div>-->

    <!--  排行榜结束-->
    <div style="clear: both;" class="video">
      <!--      <video src="../nina.mp4"></video>-->
    </div>
    <div style="float: left;margin-bottom: 60px;width: 50%"></div>

</div>


</template>

<script>
import banner from '@/api/banner'
import index from '@/api/index'
import Video from "../components/Video";

export default{
  components: {Video},
  data() {
    return {
      
      swiperOption: {
        //配置分页
        pagination: {
          el: '.swiper-pagination'//分页的dom节点
        },
        //配置导航
        navigation: {
          nextEl: '.swiper-button-next',//下一页dom节点
          prevEl: '.swiper-button-prev'//前一页dom节点
        }
      },
      //banner数组
      bannerList: [],
      eduList: [],
      teacherList: [],
      eduHotCourse: [],
      eduNewCourse: [],
      eduFiveStar: [],
      headerCourse: [],
      b: []
    }
  },
  created() {
    // var container = document.getElementById('#aCourseList');
    // var containerWidth = container.offsetWidth;

    //调用查询banner的方法
    this.getBannerList()
    //调用查询热门课程和名师
    this.getHotCourseTeacher()

    
  },
  mounted() {
    // eduHotCourse: [],
    //   eduNewCourse: [],
    //   eduFiveStar: []
    if (process.browser) {  // 在页面mounted生命周期里面 根据环境实例化WOW
      new WOW({
        live: true,
        offset: 0
      }).init()
    }

    this.init_list()
  },
  methods: {
    init_list(){
         index.getList().then(response => {
           console.log(response)
           this.eduFiveStar = response.data.data.buy
           this.eduNewCourse = response.data.data.view
           this.eduHotCourse = this.eduList
           for (let i = 0; i < 10; i++) {
             console.log("第一个"+this.eduFiveStar[i]+",,,"+this.eduNewCourse[i])
           }
         })
    },
    jumpToPage(id) {
       this.$router.push({
         url: '/course/'+id
       })
    },
    //查询热门课程和名师
    getHotCourseTeacher() {
      index.getListBanner()
        .then(response => {
          debugger
          this.eduList = response.data.data.courseList
          this.teacherList = response.data.data.teacherList
          this.b = this.eduList.slice(0,5)
        })
      
    },
    //查询banner数据
    getBannerList() {
      banner.getListBanner()
        .then(response => {
          this.bannerList = response.data.data.list
          console.log(this.bannerList)
        })
    },

    updateScaleRatio(ImgObj, maxWidth, maxHeight) {
      var image = new Image();
      //原图片原始地址（用于获取原图片的真实宽高，当<img>标签指定了宽、高时不受影响）
      image.src = ImgObj.src;
      // 用于设定图片的宽度和高度
      var tempWidth;
      var tempHeight;

      if (image.width > 0 && image.height > 0) {
        //原图片宽高比例 大于 指定的宽高比例，这就说明了原图片的宽度必然 > 高度
        if (image.width / image.height >= maxWidth / maxHeight) {
          if (image.width > maxWidth) {
            tempWidth = maxWidth;
            // 按原图片的比例进行缩放
            tempHeight = (image.height * maxWidth) / image.width;
          } else {
            // 按原图片的大小进行缩放
            tempWidth = image.width;
            tempHeight = image.height;
          }
        } else {
          // 原图片的高度必然 > 宽度
          if (image.height > maxHeight) {
            tempHeight = maxHeight;
            // 按原图片的比例进行缩放
            tempWidth = (image.width * maxHeight) / image.height;
          } else {
            // 按原图片的大小进行缩放
            tempWidth = image.width;
            tempHeight = image.height;
          }
        }
        // 设置页面图片的宽和高
        ImgObj.height = tempHeight;
        ImgObj.width = tempWidth;
        // 提示图片的原来大小
        ImgObj.alt = image.width + "×" + image.height;
      }
    }
  }
}
</script>

<style scoped>

.section_banner{
  width: 600px;
  display: flex;
  /*position: absolute;*/
  /*left: 50%;*/
  /*top: 50%;*/
  /*transform: translate(-45%,-50%);*/
  /*margin-right: 0 auto;*/
  color: #fff;
  font-weight: 300;
  perspective: 1300px;
}
.section_banner_input{
  display: none;
}
.labels{
  height: 250px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.tab{
  border-radius: 5%;
  width: 100px;
  height: 80px;
  line-height: 80px;
  text-align: center;
  transition:all 0.2s linear 0s;
}
.tab:hover{
  transform: rotateY(-30deg);
  transition: all .5s;
}
.tab:nth-child(1){
  background-color: #6eb43d;
}
.tab:nth-child(2){
  background-color: #5b9233;
}
.tab:nth-child(3){
  background-color: #3d6122;
}
.tab:nth-child(1):hover{
  box-shadow: 0 20px 20px rgb(110, 180, 61);
}
.tab:nth-child(2):hover{
  box-shadow: 0 20px 20px rgb(91, 146, 51);
}
.tab:nth-child(3):hover{
  box-shadow: 0 20px 20px rgb(61, 97, 34);
}
.cube{
  position: relative;
  flex: 1;
  transform-style: preserve-3d;
  transition: transform 0.5s ease-in;
}
.tab-content{
  border-radius: 3%;
  width: 95%;
  height: 230px;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  transition:all 0.2s linear 0s;
}
.tab-content h1{
  font-size: 28px;
  font-weight: 300;
}
.tab-content p{
  font-size: 14px;
  font-weight: 100;
}
.tab-content:nth-child(1){
  border: #333 1px solid;
  background-image: url('http://127.0.0.1:8083/java-logo.png');
  background-size:100% 100%;
  background-repeat: repeat;
  /* background-color: #6eb43d; */
  transform: rotateX(-270deg) translateY(-115px);
  transform-origin: top center;
}
.tab-content:nth-child(2){
  border: #333 1px solid;
  background-image: url('http://127.0.0.1:8083/thumb.jpg');
  background-size:100% 100%;
  background-color: #5b9233;
  transform: translateZ(115px);
}
.tab-content:nth-child(3){
  border: #333 1px solid;
  background-image: url('http://127.0.0.1:8083/R-C (1).png');
  background-size:100% 100%;
  background-color: #3f6324;
  transform: rotateX(-90deg) translateY(115px);
  transform-origin: bottom center;
}
#tab_top:checked ~ .cube{
  transform: rotateX(-90deg);
}
#tab_middle:checked ~ .cube{
  transform: rotateX(0deg) translateY(10px);
}
#tab_bottom:checked ~ .cube{
  transform: rotateX(90deg);
}
/*.container1 {*/
/*  float: left;*/
/*  width: 45%;*/
/*  margin-left: 5%;*/
/*}*/
.list_from{
  margin-left: auto;
  margin-right: auto;
  padding: 0;
  outline: none;
  height: 550px;
  width: 1200px;
}
.list_from .p1{
  color: #333;
  font-size: 24px;
  font-weight: 300;
  margin-bottom: 20px;
}
.list_table{
  display: -ms-flexbox;
  display: flex;
  -ms-flex-pack: justify;
  justify-content: space-between;
}
.list_table .table{
  width: 387px;
  border-radius: 8px;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  background: rgba(255, 255, 255, 1);
  float: left;
  position: relative;
  height: 496px;
}
.list_table .title{
  display: -ms-flexbox;
  display: flex;
  -ms-flex-align: center;
  align-items: center;
  -ms-flex-pack: justify;
  justify-content: space-between;
  height: 68px;
  padding: 0 16px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  /*background: -webkit-gradient(linear, left top, left bottom, from(#fcf8ed), color-stop(#fefbf5), to(#fff));*/
  /*background: -o-linear-gradient(top, #fcf8ed, #fefbf5, #fff);*/
  background: linear-gradient(to bottom, #fcf8ed, #fefbf5, #fff);
}
.title .QPlXu{
  display: -ms-flexbox;
  display: flex;
  -ms-flex-align: center;
  align-items: center;
  color: #d1802b;
}
.title ._3iNZP{
  font-size: 18px;
  font-weight: bold;
  font-style: italic;
  color: #e2e2e2;
}
.list_table .title ._1eRPK{
  width: 20px;
  height: 20px;
  margin-right: 4px;
  /*background: url('http://edu-image.nosdn.127.net/3e29dfc47a3f4ff6836453607094406d.jpg?imageView&quality=100');*/
  background-size: 100% 100%;
}
.list_table .title .f5bWh{
  display: -ms-flexbox;
  display: flex;
  -ms-flex-align: end;
  align-items: flex-end;
  font-size: 18px;
  font-weight: 600;
}
.list_table .title ._1A3Dy{
  margin-left: 8px;
  font-size: 14px;
  font-weight: 400;
}
.course_list{
  width: 392px;
  overflow: hidden;
  cursor: pointer;
  position: relative;
}
.course_list .L7{
  position: relative;
  overflow: hidden;
  transition: left .3s ease-in;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: flex-start;
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
._2vopq{
  margin-bottom: 20px;
  width: 392px;
  display: flex;
  padding-left: 14px;
  box-sizing: border-box;
  position: relative;
}
._2vopq span{
  font-size: 20px;
  font-family: Helvetica-BoldOblique,Helvetica,serif;
  width: 20px;
  margin-left: -10px;
  margin-right: 11px;
  text-align: right;
  color: #FA5055
}
._2vopq img{
  width: 112px;
  border-radius: 3px;
  margin-right: 12px;
  max-height: 70px;
  height: 100px;
}
._oR7n{
   color: #00baf2;
}
._18oBr {
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  color: #333;
  margin-bottom: 3px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  width: 210px;
}
.L8{
  color: #666;
  font-size: 12px;
  line-height: 16px;
}
.L9{
  font-size: 12px;
  color: #999;
  line-height: 17px;
  position: relative;
  left: 1px;
  bottom: 0;
}
.index_img{
  height: 600px;
  width: 100%;
}
.index_img img{
  height: 100%;
  width: 100%;
  object-fit: contain;
}
.video video{
  position: absolute;
  bottom: 10%;
  width: 640px;
  height: 640px;
  border-radius: 624.9375rem;
  box-shadow: 0 0.375rem 0.375rem 0.1875rem rgba(0,0,0,.2);
  right: 16%;
}

.course_bar{
  display: flex;
  flex-direction: column;
  height: 250px;
  width: 200px;
  /*background-color: yellow;*/
  margin-right: 50px;
  border-radius: 8px;
}

.header_line{
   margin-top: 10px;
   margin-bottom: 10px;
   display: flex;
   justify-content: center;
}

.c_item{
  height: 50px;
  /*background-color: blue;*/
  border-bottom: 1px dashed black;
  width: 200px;
  margin: 0 auto;
  line-height: 50px;
  padding: 0 10px;
  /*display: inline-block;*/
  /*flex-direction: column;*/
}
.c_item_font1{
  line-height: 50px;
  border-left: 3px;
  font-size: 15px; /*字体的大小*/
  font-weight: 500;/*字体的厚度，根据这个设置是否是粗体*/
  margin-right: 20px;
  cursor: pointer;
}
.c_item_font2{
   font-size: 12px;
   font-weight: 300;
   line-height: 17px;
   cursor: pointer;
}
</style>
