import request from '@/utils/request'


export function getAppList(query) {
  return request({
    url: '/app/getAppList',
    method: 'get',
    params: query
  })
}

export function createApp(data) {
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



