import request from '@/utils/request'

export function login(data) {
  return request({
    url: '/user/login',
    method: 'post',
    data
  })
}
export function getUserList(query) {
  return request({
    url: '/user/getUserList',
    method: 'get',
    params: query
  })
}

export function createUser(data) {
  return request({
    url: '/user/createUser',
    method: 'post',
    data
  })
}
export function updatedUser(data) {
  return request({
    url: '/user/updatedUser',
    method: 'post',
    data
  })
}


export function getInfo(token) {
  return request({
    url: '/user/info',
    method: 'get',
    params: { token }
  })
}

// 动态路由
export function DongtRouter() {
  return request({
      url: `/group/subMenu`,
      method: 'get',
  })
}

export function logout() {
  return request({
    url: '/user/logout',
    method: 'post'
  })
}
