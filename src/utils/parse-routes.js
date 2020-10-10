

/**
 * @desc: 解析原始路由信息（路由之间通过pid确定上下级）并动态添加路由及跳转页面
 * @param {Array} menus - (从后端获取的)菜单路由信息
 * @param {String} to - 解析成功后需要跳转的路由路径
 * // 引入parse_routes
 * const menus = [ // 由后端传入
 *  { "id": 1, "pid": 0, "path": "/receipt", "name": "", "component": "layout/Layout", "redirect": "", "hidden": "false", "meta": "" },
 *  { "id": 2, "pid": 1, "path": "index", "name": "Receipt", "component": "receipt/index", "redirect": "","hidden": "false", "meta": "{\"title\": \"收款管理\", \"icon\": \"receipt\"}" },
 *  { "id": 3, "pid": 0, "path": "/payment", "name": "", "component": "layout/Layout", "redirect": "", "hidden": "false", "meta": "" },
 *  { "id": 4, "pid": 3, "path": "index", "name": "Payment", "component": "payment/index", "redirect": "", "hidden": "false", "meta": "{\"title\": \"付款管理\", \"icon\": \"payment\"}" },
 *  { "id": 5, "pid": 0, "path": "/crm", "name":"", "component": "layout/Layout", "redirect": "", "hidden": "false", "meta": "" },
 *  { "id": 6, "pid": 5, "path": "index","name": "Crm", "component": "crm/index", "redirect": "","hidden": "false", "meta": "{\"title\": \"客户管理\", \"icon\": \"people\"}" },
 *  { "id": 7, "pid": 0, "path": "/upload_product", "name":"", "component": "layout/Layout", "redirect": "", "hidden": "false", "meta": ""},
 *  { "id": 8, "pid": 7, "path": "index","name": "productUpload", "component": "productUpload/index", "redirect": "","hidden": "false", "meta": "{\"title\": \"测评商品上传\", \"icon\": \"upload\"}" }
 * ]
 * ParseRoutes(menus, '/payment/index')
 */

export default (menus, to = "/") => {
  // 初始化路由信息对象
  const menusMap = {};
  menus.map(v => {
    const { path, name, component, redirect, hidden, meta } = v;
    // 重新构建路由对象
    const item = {
      path,
      name,
      component: () => import(`@/views/${component}`),
      redirect,
      hidden: JSON.parse(hidden)
    };
    meta.length !== 0 && (item.meta = JSON.parse(meta));
    // 判断是否为根节点
    if (v.pid === 0) {
      menusMap[v.id] = item;
    } else {
      !menusMap[v.pid].children && (menusMap[v.pid].children = []);
      menusMap[v.pid].children.push(item);
    }
  });

  // 将生成数组树结构的菜单
  const routes = Object.values(menusMap);


  return routes;
};

