import request from '@/utils/request'


export function getTimeZoneList(query) {
  return request({
    url: '/vue-ibs/timeZone/getTimeZoneList',
    method: 'get',
    params: query
  })
}

