import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

/* Layout */
import Layout from "@/layout";
export const constantRoutes = [
  {
    path: "/login",
    component: () => import("@/views/login/index"),
    hidden: true
  },

  {
    path: "/",
    component: Layout,
    redirect: "/main",
    children: [
      {
        path: "main",
        name: "Main",
        component: () => import("@/views/main/index"),
        meta: { title: "Main", icon: "el-icon-s-home" }
      }
    ]
  },

  /* {
    path: "/component",
    component: Layout,
    redirect: "/player",
    meta: { title: "Component", icon: "component" },
    children: [
      {
        path: "player",
        name: "Player",
        component: () => import("@/views/player/index"),
        meta: { title: "Player", icon: "el-icon-video-play" }
      },
      {
        path: "map",
        component: () => import("@/views/map/index"),
        name: "Map",
        meta: { title: "Map", icon: "el-icon-location" }
      }
    ]
  },
 */
  /* {
    path: "/report",
    component: Layout,
    redirect: "/report/user",
    name: "Report",
    meta: { title: "Report", icon: "component" },
    children: [
      {
        path: "user",
        name: "Users",
        component: () => import("@/views/report/user"),
        meta: { title: "User", icon: "peoples" }
      },
      {
        path: "person",
        name: "Persons",
        component: () => import("@/views/report/person"),
        meta: { title: "Persons", icon: "peoples" }
      },
      {
        path: "language",
        name: "Language",
        component: () => import("@/views/report/language"),
        meta: { title: "Languages", icon: "language" }
      },
      {
        path: "timeZone",
        name: "TimeZone",
        component: () => import("@/views/report/timeZone"),
        meta: { title: "TimeZones", icon: "el-icon-date" }
      },
      {
        path: "home",
        name: "Home",
        component: () => import("@/views/report/home"),
        meta: { title: "Homes", icon: "el-icon-house" }
      },
      {
        path: "app",
        name: "App",
        component: () => import("@/views/report/app"),
        meta: { title: "Apps", icon: "el-icon-s-shop" }
      }
    ]
  }, */

  /* {
    path: "/dataModule",
    component: Layout,
    redirect: "/dataModule/person",
    name: "DataModule",
    meta: {
      title: "Data Modeler",
      icon: "nested"
    },
    children: [
      {
        path: "person",
        component: () => import("@/views/dataModule/person/index"), // Parent router-view
        name: "Person",
        alwaysShow: true,
        meta: { title: "Person" },
        children: [
          {
            path: "user",
            component: () => import("@/views/dataModule/person/user/index"),
            name: "User",
            meta: { title: "User" }
          }
        ]
      }, */
      /* {
        path: "geography",
        component: () => import("@/views/nested/menu2/index"),
        name: "Geography",
        meta: { title: "Geography" },
        children: [
          {
            path: "menu1-2-1",
            component: () => import("@/views/nested/menu1/menu1-2/menu1-2-1"),
            name: "Menu1-2-11",
            meta: { title: "Menu1-2-1" }
          },
          {
            path: "menu1-2-2",
            component: () => import("@/views/nested/menu1/menu1-2/menu1-2-2"),
            name: "Menu1-2-22",
            meta: { title: "Menu1-2-2" }
          }
        ]
      },
      {
        path: "location",
        component: () => import("@/views/nested/menu2/index"),
        name: "Location",
        meta: { title: "Location" },
        children: [
          {
            path: "menu1-2-1",
            component: () => import("@/views/nested/menu1/menu1-2/menu1-2-1"),
            name: "Menu1-2-1",
            meta: { title: "Menu1-2-1" }
          },
          {
            path: "menu1-2-2",
            component: () => import("@/views/nested/menu1/menu1-2/menu1-2-2"),
            name: "Menu1-2-2",
            meta: { title: "Menu1-2-2" }
          }
        ]
      },
      {
        path: "organization",
        component: () => import("@/views/nested/menu2/index"),
        name: "Organization",
        meta: { title: "Organization" },
        children: [
          {
            path: "menu1-2-1",
            component: () => import("@/views/nested/menu1/menu1-2/menu1-2-1"),
            name: "Menu1-2-1111",
            meta: { title: "Menu1-2-1" }
          },
          {
            path: "menu1-2-2",
            component: () => import("@/views/nested/menu1/menu1-2/menu1-2-2"),
            name: "Menu1-2-2222",
            meta: { title: "Menu1-2-2" }
          }
        ]
      }
    ]
  } */

  /*


  {
    path: '/profile',
    component: Layout,
    redirect: '/profile/index',
    hidden: true,
    children: [
      {
        path: 'index',
        component: () => import('@/views/profile/index'),
        name: 'Profile',
        meta: { title: 'Profile', icon: 'user', noCache: true }
      }
    ]
  } */
];

/* export const asyncRoutes = [

  {
    path: '/permission',
    component: Layout,
    redirect: '/permission/role',
    alwaysShow: true, // will always show the root menu
    name: 'Permission',
    meta: {
      title: 'Permission',
      icon: 'lock',
      roles: ['admin', 'editor'] // you can set roles in root nav
    },
    children: [
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
        component: () => import('@/views/permission/role'),
        name: 'RolePermission',
        meta: {
          title: 'Role Permission',
          roles: ['admin']
        }
      }
    ]
  },

  // 404 page must be placed at the end !!!
  {
    path: "*",
    redirect: "/404",
    hidden: true
  },
]; */

const createRouter = () =>
  new Router({
    // mode: 'history', // require service support
    scrollBehavior: () => ({ y: 0 }),
    routes: constantRoutes
  });

const router = createRouter();

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter();
  router.matcher = newRouter.matcher; // reset router
}

export default router;
