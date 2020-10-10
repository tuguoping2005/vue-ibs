const Mock = require("mockjs");

let list = [];
let count = 20;
for (let a = 1; a <= count; a++) {
  list.push(
    Mock.mock({
      id: '@increment',
      name: "app" + a,
      objectId: "@integer(10000,50000)",
      uri: "uri" + a,
      createdTime: "2020-09-05 09:21:20",
      modifiedTime: '@now("yyyy-MM-dd HH:mm:ss")',
      modifiedBy: "@first",
      createdBy: "@first"
    })
  );
}

module.exports = [
  {
    url: "/app/getAppList",
    type: "get",
    response: config => {
      const items = list;
      // console.log(list);
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
    url: "/app/createApp",
    type: "post",
    response: config => {
    /*  var num = 1+count++

      const { name, objectId, createdTime, uri, createdBy } = config.body;
      list.push(
        Mock.mock({
          id: num,
          name: name +num,
          objectId: "@integer(10000,50000)",
          uri: uri + num,
          createdTime: createdTime,
          modifiedTime: '@now("yyyy-MM-dd HH:mm:ss")',
          modifiedBy: "@first",
          createdBy: createdBy
        })
      );
      // console.log(list); */
      return {
        code: 20000,
        data: "success"
      };
    }
  },
  {
    url: "/app/updatedApp",
    type: "post",
    response: config => {
      return {
        code: 20000,
        data: "success"
      };
    }
  }
];
