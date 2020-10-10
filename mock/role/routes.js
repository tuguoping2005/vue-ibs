// Just a mock data

const constantRoutes = [
  {
    path: "/login",
    component: '/views/login/index',
    hidden: true
  },

  {
    path: "/404",
    component: '/views/404',
    hidden: true
  },


  {
    path: "/",
    component: 'layout/Layout',
    redirect: "/main",
    children: [
      {
        path: "main",
        name: "Main",
        component: '/views/main/index',
        meta: { title: "Main", icon: "el-icon-s-home" }
      }
    ]
  },

  {
    path: "/report",
    component: 'layout/Layout',
    redirect: "/report/user",
    name: "Report",
    meta: { title: "Report", icon: "component" },
    children: [
      {
        path: "user",
        name: "Users",
        component: '/views/report/user',
        meta: { title: "User", icon: "peoples" }
      },
      {
        path: "person",
        name: "Persons",
        component: '/views/report/person',
        meta: { title: "Persons", icon: "peoples" }
      },
      {
        path: "language",
        name: "Language",
        component: '/views/report/language',
        meta: { title: "Languages", icon: "language" }
      },
      {
        path: "timeZone",
        name: "TimeZone",
        component: '/views/report/timeZone',
        meta: { title: "TimeZones", icon: "el-icon-date" }
      },
      {
        path: "home",
        name: "Home",
        component: '/views/report/home',
        meta: { title: "Homes", icon: "el-icon-house" }
      },
      {
        path: "app",
        name: "App",
        component: '/views/report/app',
        meta: { title: "Apps", icon: "el-icon-s-shop" }
      }
    ]
  },

  {
    path: "/dataModule",
    component: 'layout/Layout',
    redirect: "/dataModule/person",
    name: "DataModule",
    meta: {
      title: "Data Modeler",
      icon: "nested"
    },
    children: [
      {
        path: "person",
        component: '/views/dataModule/person/index', // Parent router-view
        name: "Person",
        alwaysShow: true,
        meta: { title: "Person" },
        children: [
          {
            path: "user",
            component: '/views/dataModule/person/user/index',
            name: "User",
            meta: { title: "User" }
          },

        ]
      },
      {
        path: "geography",
        component: '/views/nested/menu2/index',
        name: "Geography",
        meta: { title: "Geography" },
        children: [
          {
            path: "menu1-2-1",
            component: '/views/nested/menu1/menu1-2/menu1-2-1',
            name: "Menu1-2-11",
            meta: { title: "Menu1-2-1" }
          },
          {
            path: "menu1-2-2",
            component: '/views/nested/menu1/menu1-2/menu1-2-2',
            name: "Menu1-2-22",
            meta: { title: "Menu1-2-2" }
          }
        ]
      },
      {
        path: "location",
        component: '/views/nested/menu2/index',
        name: "Location",
        meta: { title: "Location" },
        children: [
          {
            path: "menu1-2-1",
            component: '/views/nested/menu1/menu1-2/menu1-2-1',
            name: "Menu1-2-1",
            meta: { title: "Menu1-2-1" }
          },
          {
            path: "menu1-2-2",
            component: '/views/nested/menu1/menu1-2/menu1-2-2',
            name: "Menu1-2-2",
            meta: { title: "Menu1-2-2" }
          }
        ]
      },
      {
        path: "organization",
        component: '/views/nested/menu2/index',
        name: "Organization",
        meta: { title: "Organization" },
        children: [
          {
            path: "menu1-2-1",
            component: '/views/nested/menu1/menu1-2/menu1-2-1',
            name: "Menu1-2-1111",
            meta: { title: "Menu1-2-1" }
          },
          {
            path: "menu1-2-2",
            component: '/views/nested/menu1/menu1-2/menu1-2-2',
            name: "Menu1-2-2222",
            meta: { title: "Menu1-2-2" }
          }
        ]
      }
    ]
  },



  /* {
    path: '/profile',
    component: 'layout/Layout',
    redirect: '/profile/index',
    hidden: true,
    children: [
      {
        path: 'index',
        component: '@/views/profile/index',
        name: 'Profile',
        meta: { title: 'Profile', icon: 'user', noCache: true }
      }
    ]
  } */
]

const asyncRoutes = [

  {
    path: '/permission',
    component: 'layout/Layout',
    redirect: '/permission/role',
    alwaysShow: true, // will always show the root menu
    name: 'Permission',
    meta: {
      title: 'Permission',
      icon: 'lock',
      roles: ['admin', 'editor'] // you can set roles in root nav
    },
    /* children: [
      {
        path: 'page',
        component: () => import('@/views/permission/page'),
        name: 'PagePermission',
        meta: {
          title: 'Page Permission',
          roles: ['admin'] // or you can only set roles in sub nav
        }
      },
      {
        path: 'directive',
        component: () => import('@/views/permission/directive'),
        name: 'DirectivePermission',
        meta: {
          title: 'Directive Permission'
          // if do not set roles, means: this page does not require permission
        }
      },
      {
        path: 'role',
        component: '/views/permission/role',
        name: 'RolePermission',
        meta: {
          title: 'Role Permission',
          roles: ['admin']
        }
      }
    ] */
  },
  // 404 page must be placed at the end !!!
  {
    path: "*",
    redirect: "/404",
    hidden: true
  }
]

module.exports = {
  constantRoutes,
  asyncRoutes
}
