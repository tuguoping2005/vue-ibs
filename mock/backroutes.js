const items = [
  // 由后端传入
  {
    id: 1,
    pid: 0,
    path: "/permission",
    name: "Permission",
    component: "layout",
    redirect: "/permission/role",
    hidden: "false",
    meta: '{"title": "Permission", "icon": "lock"}'
  },
  {
    id: 2,
    pid: 1,
    path: "role",
    name: "RolePermission",
    component: "permission/role",
    redirect: "",
    hidden: "false",
    meta: '{"title": "Role Permission"}'
  }

];

module.exports = [
  {
    url: 'vue-ibs/routes/getRoutes',
    method: 'get',
    response: config => {
      return {
        code: 20000,
        data: {
          total: items.length,
          menus: items
        }
      };
    }
  }
]
