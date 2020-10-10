import request from '@/utils/request'


export function getHomeList(query) {
  return request({
    url: '/home/getHomeList',
    method: 'get',
    params: query
  })
}

export function createHome(data) {
  return request({
    url: '/app/createApp',
    method: 'post',
    data
  })
}
export function updatedApp(data) {
  return request({
    url: '/app/updatedApp',
    method: 'post',
    data
  })
}
