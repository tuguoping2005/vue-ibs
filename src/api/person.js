import request from '@/utils/request'


export function getPersonList(query) {
  return request({
    url: '/vue-ibs/person/getPersonList',
    method: 'get',
    params: query
  })
}


export function createPerson(data) {
  return request({
    url: '/vue-ibs/person/createPerson',
    method: 'post',
    data
  })
}
export function updatedPerson(data) {
  return request({
    url: '/vue-ibs/person/updatedPerson',
    method: 'post',
    data
  })
}

