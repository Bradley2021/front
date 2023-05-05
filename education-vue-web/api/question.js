import request from "../utils/request";

export default {
  select_new_post(){
    return request({
      url: '/eduservice/qu/get/1/10',
      method: 'get'
    })
  },

  select_hot(){
    return request({
      url: '/eduservice/qu/hot',
      method: 'get'
    })
  },
  get_user(){
    return request({
      url: '/eduservice/qu/user',
      method: 'get'
    })
  }
}
