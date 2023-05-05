<template>
<div>
  <div>
    <section class="container">
<!--      <header class="comm-title">-->
<!--        <h2 class="tac" style="">-->
<!--          <span class="c-333">Hot Course</span>-->
<!--        </h2>-->
<!--      </header>-->
      <div>
        <article class="comm-course-list">
          <ul class="of" id="bna">
            <li v-for="course in course_list" :key="course.id">
              <div class="cc-l-wrap">
                <section class="course-img">
                  <img
                    :src="course.cover"
                    class="img-responsive"
                    :alt="course.title"
                    height="5px"
                  >
                  <div class="cc-mask">
                    <a href="#" title="开始学习" class="comm-btn c-btn-1">Start Learning</a>
                  </div>
                </section>
                <h3 class="hLh30 txtOf mt10">
                  <a href="#" :title="course.title" class="course-title fsize18 c-333">{{ course.title }}</a>
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
<!--        <section class="tac pt20">-->
<!--          <router-link to="/course" tag="li" active-class="current">-->
<!--            <a title="全部课程" class="comm-btn c-btn-2">All Course</a>-->
<!--          </router-link>-->
<!--        </section>-->
      </div>
    </section>
  </div>
</div>
</template>

<script>
import loginApi from '@/api/login'
export default {
  name: "search",
  data(){
    return {
      course_list: []
    }
  },
  created() {
    let keyword = this.$route.query.id
    loginApi.search(keyword).then(response =>{
      let abc = response.data.data.search_result
      this.course_list = abc
    })
  }
  // mounted() {
  //   let out = this.$route.query.id
  //   // console.log(1 ,out)
  //   out = decodeURIComponent(out)
  //   // console.log(out)
  //   // out  = JSON.stringify(out)
  //   // let a1 = out.split('=')[1]
  //   // console.log(out)
  //   // let a2 = a1.split('%')[0]+'='
  //   if(out !== null){
  //     // let decode = decodeURIComponent(out)
  //     // console.log(decode)
  //     // this.course_list = JSON.parse(decode[0])
  //     this.course_list =JSON.parse(out)
  //     // console.log(this.course_list)
  //   }
  //   else {
  //     this.$message.error("Exit")
  //     return null
  //   }

//     const originalString = 'Hello, World!';
//     const encodedString = btoa(originalString);
//     console.log(encodedString); // "SGVsbG8sIFdvcmxkIQ=="
//
// // Base64 解码为原始字符串
//     const decodedString = atob(encodedString);
//     console.log(decodedString); // "Hello, World!"
}
</script>

<style scoped>

</style>
