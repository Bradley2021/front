import request from '@/utils/request'

export default {
    //查询热门课程和讲师
  getListBanner() {
    return request({
        url: `/eduservice/indexfront/index`,
        method: 'get'
      })
  },
  getList(){
    return request({
      url: '/eduservice/coursefront/getTop10',
      method: 'get'
    })
  },
  getChapter(id){
    return request({
      url: '/eduservice/chapter/getChapterVideo/'+id,
      method: 'get'
    })
  }
}
