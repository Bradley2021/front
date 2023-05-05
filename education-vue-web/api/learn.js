import request from "../utils/request";
export default {
  get_course_info(id){
    return request({
      url: '/eduservice/chapter/getChapterAndCourse/'+id,
      method: 'get'
    })
  }
}

