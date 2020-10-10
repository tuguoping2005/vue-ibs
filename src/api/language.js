import request from '@/utils/request'


export function getLanguageList(query) {
  return request({
    url: '/language/getLanguageList',
    method: 'get',
    params: query
  })
}

