const Mock = require("mockjs");

/*

代码                              时区                              与GMT的时差
gmt                         格林威治标准时间                             0
est                         东部标准时间                                 5
edt                         东部夏令时                                   5
cst                         中部标准时间                                 6
cdt                         中部夏令时                                    6
mst                         山地标准时间                                  7
mdt                         山地夏令时                                    7
pst                         太平洋标准时间                                 8
pdt                         太平洋夏令时                                   8


*/
const data = Mock.mock({
  items: [
    {
      id: 1,
      name: "(GMT +8) Beijing, Chongqing, Urumqi [Asia/Chongqing]",
      code: "GMT",
      value:'8',
      objectId: "@integer(10000,50000)",
      createdTime: "2020-09-05 09:21:20",
      modifiedTime: '@now("yyyy-MM-dd HH:mm:ss")',
      modifiedBy: "@first",
      createdBy: "@first"
    },
    {
      id: 2,
      name: "(GMT -10) Hawaii [US/Hawaii]",
      code: "GMT",
      value:'-10',
      objectId: "@integer(10000,50000)",
      createdTime: "2020-09-05 09:21:20",
      modifiedTime: '@now("yyyy-MM-dd HH:mm:ss")',
      modifiedBy: "@first",
      createdBy: "@first"
    },
    {
      id: 3,
      name: "GMT +9) Tokyo, Osaka, Sapporo, Seoul, Yakutsk [Asia/Tokyo]",
      code: "GMT",
      value:'9',
      objectId: "@integer(10000,50000)",
      createdTime: "2020-09-05 09:21:20",
      modifiedTime: '@now("yyyy-MM-dd HH:mm:ss")',
      modifiedBy: "@first",
      createdBy: "@first"
    },
    {
      id: 4,
      name: "(GMT +9) Korea Standard Time [Asia/Seoul]",
      code: "GMT",
      value:'9',
      objectId: "@integer(10000,50000)",
      createdTime: "2020-09-05 09:21:20",
      modifiedTime: '@now("yyyy-MM-dd HH:mm:ss")',
      modifiedBy: "@first",
      createdBy: "@first"
    },
    {
      id: 5,
      name: "(GMT +2) Eastern Europe [Europe/Malta]",
      code: "GMT",
      value:'2',
      objectId: "@integer(10000,50000)",
      createdTime: "2020-09-05 09:21:20",
      modifiedTime: '@now("yyyy-MM-dd HH:mm:ss")',
      modifiedBy: "@first",
      createdBy: "@first"
    },
  ]
});

module.exports = [
  {
    url: "/vue-ibs/timeZone/getTimeZoneList",
    type: "get",
    response: config => {
      const items = data.items;
      // console.log("items", items);
      return {
        code: 20000,
        data: {
          total: items.length,
          items: items
        }
      };
    }
  }
];
