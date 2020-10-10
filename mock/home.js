const Mock = require("mockjs");
const data = Mock.mock({
  items: [
    {
      id: 1,
      name: "home1",
      appName: "app1",
      objectId: "@integer(10000,50000)",
      defaultPageURI:'uri1',
      createdTime: "2020-09-05 09:21:20",
      modifiedTime: '@now("yyyy-MM-dd HH:mm:ss")',
      modifiedBy: "@first",
      createdBy: "@first"
    },
    {
      id: 2,
      name: "home2",
      appName: "app2",
      objectId: "@integer(10000,50000)",
      defaultPageURI:'uri2',
      createdTime: "2020-09-05 09:21:20",
      modifiedTime: '@now("yyyy-MM-dd HH:mm:ss")',
      modifiedBy: "@first",
      createdBy: "@first"
    },
  ]
});

module.exports = [
  {
    url: "/home/getHomeList",
    type: "get",
    response: config => {
      const items = data.items;
      return {
        code: 20000,
        data: {
          total: items.length,
          items: items
        }
      };
    }
  },
  {
    url: "/home/createHome",
    type: "post",
    response: config => {
      return {
        code: 20000,
        data: "success"
      };
    }
  },
  {
    url: "/home/updatedHome",
    type: "post",
    response: config => {
      return {
        code: 20000,
        data: "success"
      };
    }
  }
];
