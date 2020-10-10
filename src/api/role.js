import request from '@/utils/request'

export function getRoutes() {
  return request({
    url: '/vue-ibs/routes',
    method: 'get'
  })
}
export function getConstantRoutes() {
  return request({
    url: '/vue-ibs/constantRoutes',
    method: 'get'
  })
}
export function getAsyncRoutes() {
  return request({
    url: '/vue-ibs/asyncRoutes',
    method: 'get'
  })
}

export function getRoles() {
  return request({
    url: '/vue-ibs/roles',
    method: 'get'
  })
}

export function addRole(data) {
  return request({
    url: '/vue-ibs/role',
    method: 'post',
    data
  })
}

export function updateRole(id, data) {
  return request({
    url: `/vue-ibs/role/${id}`,
    method: 'put',
    data
  })
}

export function deleteRole(id) {
  return request({
    url: `/vue-ibs/role/${id}`,
    method: 'delete'
  })
}
