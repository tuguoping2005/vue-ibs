const Mock = require("mockjs");

const tokens = {
  admin: {
    token: "admin-token"
  },
  editor: {
    token: "editor-token"
  },
  developer: {
    token: "developer-token"
  }
};

const users = {
  "admin-token": {
    roles: ["admin"],
    introduction: "I am a super administrator",
    avatar:
      "https://gss0.baidu.com/-fo3dSag_xI4khGko9WTAnF6hhy/zhidao/pic/item/574e9258d109b3de024dd923ccbf6c81810a4c8e.jpg",
    name: "Super Admin"
  },
  "editor-token": {
    roles: ["editor"],
    introduction: "I am an editor",
    avatar:
      "http://img1.3lian.com/gif/more/11/201209/d93c551d50c91b94b011555a4c044f17.jpg",
    name: "Normal Editor"
  },
  "developer-token": {
    roles: ["developer"],
    introduction: "I am an developer",
    avatar:
      "http://img1.3lian.com/gif/more/11/201209/d93c551d50c91b94b011555a4c044f17.jpg",
    name: "Normal Developer"
  }
};

let userList = [];
let count = 20;
for (let a = 1; a <= count; a++) {
  userList.push(
    Mock.mock({
      userId: "@increment",
      personName: "@first",
      password: "",
      status: "Active",
      language: "US English",
      defaultTimeZone: "Asia/Chongqing",
      homeURI: "",
      home: "",
      objectID: "",
      personObjectID: "",
      modifiedBy: "",
      createdBy: "@first",
      createdTime: "2020-09-04 13:51:17",
      modifiedTime: '@now("yyyy-MM-dd HH:mm:ss")'
    })
  );
}

let routerList = [

  {
    id: 79,
    haschildren: 1,
    pid: 0,
    name: "Report",
    type: 1,
    hidden: "1",
    title: "Report",
    icon: "component",
    path: "/report",
    permission: "",
    sort: 98,
    component: "Layout",
    status: 1,
    meta: {
      title: "Report",
      icon: "component",
      roles: ['admin']
    },
    children: [
      {
        id: 80,
        haschildren: 0,
        pid: 79,
        name: "users",
        type: 2,
        hidden: "1",
        title: "Users",
        icon: "",
        path: "/report/users",
        permission: "",
        sort: 0,
        component: "report/user/index",
        status: 1,
        meta: {
          title: "Users",
          icon: "peoples",
          roles: []
        }
      },
      {
        id: 81,
        haschildren: 0,
        pid: 79,
        name: "persons",
        type: 2,
        hidden: "1",
        title: "Persons",
        icon: "",
        path: "/report/person",
        permission: "",
        sort: 0,
        component: "report/person/index",
        status: 1,
        meta: {
          title: "Persons",
          icon: "peoples",
          roles: []
        }
      },
      {
        id: 82,
        haschildren: 0,
        pid: 79,
        name: "Language",
        type: 2,
        hidden: "1",
        title: "Language",
        icon: "",
        path: "/report/language",
        permission: "",
        sort: 0,
        component: "report/language/index",
        status: 1,
        meta: {
          title: "Language",
          icon: "language",
          roles: []
        }
      },
      {
        id: 83,
        haschildren: 0,
        pid: 79,
        name: "TimeZone",
        type: 2,
        hidden: "1",
        title: "TimeZone",
        icon: "",
        path: "/report/timeZone",
        permission: "",
        sort: 0,
        component: "report/timeZone/index",
        status: 1,
        meta: {
          title: "Time Zone",
          icon: "el-icon-date",
          roles: []
        }
      },
      {
        id: 84,
        haschildren: 0,
        pid: 79,
        name: "Home",
        type: 2,
        hidden: "1",
        title: "Home",
        icon: "",
        path: "/report/home",
        permission: "",
        sort: 0,
        component: "report/home/index",
        status: 1,
        meta: {
          title: "Home",
          icon: "el-icon-house",
          roles: []
        }
      },
      {
        id: 85,
        haschildren: 0,
        pid: 79,
        name: "App",
        type: 2,
        hidden: "1",
        title: "App",
        icon: "",
        path: "/report/app",
        permission: "",
        sort: 0,
        component: "report/app/index",
        status: 1,
        meta: {
          title: "App",
          icon: "el-icon-s-shop",
          roles: []
        }
      },
    ]
  },
  {
    id: 1,
    haschildren: 1,
    pid: 0,
    name: "",
    title: "System Manager",
    type: 1,
    hidden: "1",
    icon: "form",
    path: "/system",
    permission: "",
    sort: 99,
    component: "Layout",
    status: 1,
    meta: {
      title: "System Manager",
      icon: "el-icon-setting",
      roles: []
    },
    children: [
      {
        id: 15,
        haschildren: 1,
        pid: 1,
        name: "menu",
        type: 2,
        hidden: "1",
        title: "Menu Manager",
        icon: "dashboard",
        path: "/system/menu",
        permission: "",
        sort: 12,
        component: "system/menu/index",
        status: 1,
        meta: {
          title: "Menu Manager",
          icon: "el-icon-menu",
          roles: ["add", "edit", "delete"]
        }
      },
      {
        id: 16,
        haschildren: 1,
        pid: 1,
        name: "user",
        type: 2,
        hidden: "1",
        title: "User Manager",
        icon: "peoples",
        path: "/system/user",
        permission: "",
        sort: 11,
        component: "system/user/index",
        status: 1,
        meta: {
          title: "User Manager",
          icon: "peoples",
          roles: ["add", "edit", "delete"]
        }
      },
      {
        id: 23,
        haschildren: 1,
        pid: 1,
        name: "role",
        type: 2,
        hidden: "1",
        title: "Role Manager",
        icon: "dashboard",
        path: "/system/role",
        permission: "",
        sort: 10,
        component: "system/roles/index",
        status: 1,
        meta: {
          title: "Role Manager",
          icon: "el-icon-s-custom",
          roles: ["add", "edit", "delete", "give"]
        }
      }
    ]
  },
];

module.exports = [
  // user login
  {
    url: "/user/login",
    type: "post",
    response: config => {
      const { username } = config.body;
      const token = tokens[username];

      // mock error
      if (!token) {
        return {
          code: 60204,
          message: "Account and password are incorrect."
        };
      }

      return {
        code: 20000,
        data: token
      };
    }
  },

  //get userList
  {
    url: "/user/getUserList",
    type: "get",
    response: config => {
      const { title, page = 1, limit = 20, sort } = config.query;
      const pageList = userList.filter(
        (item, index) => index < limit * page && index >= limit * (page - 1)
      );

      return {
        code: 20000,
        data: {
          total: userList.length,
          items: pageList
        }
      };
    }
  },

  //add user
  {
    url: "/user/createUser",
    type: "post",
    response: config => {
      return {
        code: 20000,
        data: "success"
      };
    }
  },

  //update user
  {
    url: "/user/updatedUser",
    type: "post",
    response: config => {
      return {
        code: 20000,
        data: "success"
      };
    }
  },

  // get user info
  {
    url: "/user/info.*",
    type: "get",
    response: config => {
      const { token } = config.query;
      const info = users[token];

      // mock error
      if (!info) {
        return {
          code: 50008,
          message: "Login failed, unable to get user details."
        };
      }

      return {
        code: 20000,
        data: info
      };
    }
  },

  // /group/subMenu
  {
    url: "/group/subMenu",
    type: "get",
    response: config => {
      // console.log("menu", routerList);
      return {
        code: 20000,
        message: "调用成功",
        data: {
          total: routerList.length,
          list: routerList
        }
      };
    }
  },

  // user logout
  {
    url: "/user/logout",
    type: "post",
    response: _ => {
      return {
        code: 20000,
        data: "success"
      };
    }
  }
];

/*
const data = Mock.mock({
  'userList|100':[
    {
      'userId|+1': 1,
      personName: '@first',
      password:'',
      status: 'Active',
      language: 'US English',
      defaultTimeZone: '(GMT +8) Beijing, Chongqing, Urumqi [Asia/Chongqing]',
      homeURI: '',
      home: '',
      objectID:'',
      personObjectID:'',
      modifiedBy:'',
      createdBy:'',
      createdTime: '2020-09-04 13:51:17',
      modifiedTime: '@now("yyyy-MM-dd HH:mm:ss")',
    }
  ]
}) */
