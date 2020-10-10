const Mock = require("mockjs");
Mock.Random.extend({
  phone: function() {
    var phonePrefixs = ["132", "137", "135"]; // 自己写前缀哈
    return this.pick(phonePrefixs) + Mock.mock(/\d{8}/); //Number()
  }
});

let personList = [];
let count = 20;
for (let a = 1; a <= count; a++) {
  personList.push(
    Mock.mock({
      id: '@increment',
      name: "@first",
      objectId: "@integer(10000,50000)",
      createdTime: "2020-09-05 09:21:20",
      modifiedTime: '@now("yyyy-MM-dd HH:mm:ss")',
      modifiedBy: "@first",
      createdBy: "@first",
      email: "@email()",
      phone: "@phone()"
    })
  );
}

/* const data = Mock.mock({
  "items|100": [
    {
      "id|+1": 1,
      name: "@first",
      objectId: "@integer(10000,50000)",
      createdTime: "2020-09-05 09:21:20",
      modifiedTime: '@now("yyyy-MM-dd HH:mm:ss")',
      modifiedBy: "@first",
      createdBy: "@first",
      email: "@email()",
      phone: "@phone()"
    }
  ]
}); */

module.exports = [
  {
    url: "/vue-ibs/person/getPersonList",
    type: "get",
    response: config => {
      const { page = 1, limit = 20 } = config.query;

      const pageList = personList.filter(
        (item, index) => index < limit * page && index >= limit * (page - 1)
      );

      return {
        code: 20000,
        data: {
          total: personList.length,
          items: pageList
        }
      };
    }
  },
  //add user
  {
    url: "/vue-ibs/person/createPerson",
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
    url: "/vue-ibs/person/updatedPerson",
    type: "post",
    response: config => {
      return {
        code: 20000,
        data: "success"
      };
    }
  },
];
