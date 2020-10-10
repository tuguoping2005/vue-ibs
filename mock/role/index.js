const Mock = require('mockjs')
const { deepClone } = require('../utils')
const { asyncRoutes, constantRoutes } = require('./routes.js')

const routes = deepClone([...constantRoutes, ...asyncRoutes])

const roles = [
  {
    key: 'admin',
    name: 'admin',
    actionAuth:'Main,Report,Data Module,Permission',
    description: 'Super Administrator. Have access to view all pages.',
    routes: routes
  },
  {
    key: 'developer',
    name: 'developer',
    actionAuth:'Main,Report,Data Module',
    description: 'Can see all pages except permission module',
    routes: routes.filter(i => i.path !== '/permission')// just a mock
  },
  {
    key: 'normal',
    name: 'normal',
    actionAuth:'Main',
    description: 'Can only see the main page ...',
    routes: routes.filter(i => i.path === '/')
  }
]

module.exports = [
  // mock get all routes form server
  {
    url: '/vue-ibs/routes',
    type: 'get',
    response: _ => {
      return {
        code: 20000,
        data: routes
      }
    }
  },
  {
    url: '/vue-ibs/constantRoutes',
    type: 'get',
    response: _ => {
      return {
        code: 20000,
        data: constantRoutes
      }
    }
  },
  {
    url: '/vue-ibs/asyncRoutes',
    type: 'get',
    response: _ => {
      return {
        code: 20000,
        data: asyncRoutes
      }
    }
  },

  // mock get all roles form server
  {
    url: '/vue-ibs/roles',
    type: 'get',
    response: _ => {
      return {
        code: 20000,
        data: roles
      }
    }
  },

  // add role
  {
    url: '/vue-ibs/role',
    type: 'post',
    response: {
      code: 20000,
      data: {
        key: Mock.mock('@integer(300, 5000)')
      }
    }
  },

  // update role
  {
    url: '/vue-ibs/role/[A-Za-z0-9]',
    type: 'put',
    response: {
      code: 20000,
      data: {
        status: 'success'
      }
    }
  },

  // delete role
  {
    url: '/vue-ibs/role/[A-Za-z0-9]',
    type: 'delete',
    response: {
      code: 20000,
      data: {
        status: 'success'
      }
    }
  }
]
