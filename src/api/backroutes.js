import request from '@/utils/request'

export function getRoutesList(query) {
  return request({
    url: 'vue-ibs/routes/getRoutes',
    method: 'get',
    params: query
  })
}
