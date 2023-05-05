import request from '@/utils/request'

export default {
  //用户登录
  submitLoginUser(userInfo) {
    return request({
        url: `/educenter/member/login`,
        method: 'post',
        data: userInfo
      })
  },
  //根据token获取用户信息
  getLoginUserInfo() {
    return request({
      url: `/educenter/member/getMemberInfo`,
      method: 'get'
    })
  },
  search(data) {
    console.log(data)
    return request({
      url: '/eduservice/search/a_1/1'+'?'+'q='+data,
      method: 'get',
    })
  },


}
