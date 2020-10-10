const Mock = require("mockjs");
const data = Mock.mock({
  items: [
    {
      id: 1,
      name: "US English",
      code: "en_US",
      objectId: "@integer(10000,50000)",
      createdTime: "2020-09-05 09:21:20",
      modifiedTime: '@now("yyyy-MM-dd HH:mm:ss")',
      modifiedBy: "@first",
      createdBy: "@first"
    },
    {
      id: 2,
      name: "Norwegian",
      code: "no_NO",
      objectId: "@integer(10000,50000)",
      createdTime: "2020-09-05 09:21:20",
      modifiedTime: '@now("yyyy-MM-dd HH:mm:ss")',
      modifiedBy: "@first",
      createdBy: "@first"
    },
    {
      id: 3,
      name: "Brazilian Portuguese",
      code: "pt_BR",
      objectId: "@integer(10000,50000)",
      createdTime: "2020-09-05 09:21:20",
      modifiedTime: '@now("yyyy-MM-dd HH:mm:ss")',
      modifiedBy: "@first",
      createdBy: "@first"
    },
    {
      id: 4,
      name: "Czech",
      code: "cs_CZ",
      objectId: "@integer(10000,50000)",
      createdTime: "2020-09-05 09:21:20",
      modifiedTime: '@now("yyyy-MM-dd HH:mm:ss")',
      modifiedBy: "@first",
      createdBy: "@first"
    },
    {
      id: 5,
      name: "Spanish",
      code: "es_ES",
      objectId: "@integer(10000,50000)",
      createdTime: "2020-09-05 09:21:20",
      modifiedTime: '@now("yyyy-MM-dd HH:mm:ss")',
      modifiedBy: "@first",
      createdBy: "@first"
    },
    {
      id: 6,
      name: "Hungarian",
      code: "hu_HU",
      objectId: "@integer(10000,50000)",
      createdTime: "2020-09-05 09:21:20",
      modifiedTime: '@now("yyyy-MM-dd HH:mm:ss")',
      modifiedBy: "@first",
      createdBy: "@first"
    },
    {
      id: 7,
      name: "Japanese",
      code: "ja_JP",
      objectId: "@integer(10000,50000)",
      createdTime: "2020-09-05 09:21:20",
      modifiedTime: '@now("yyyy-MM-dd HH:mm:ss")',
      modifiedBy: "@first",
      createdBy: "@first"
    },
    {
      id: 8,
      name: "Italian",
      code: "it_IT",
      objectId: "@integer(10000,50000)",
      createdTime: "2020-09-05 09:21:20",
      modifiedTime: '@now("yyyy-MM-dd HH:mm:ss")',
      modifiedBy: "@first",
      createdBy: "@first"
    },
    {
      id: 9,
      name: "Korean",
      code: "ko_KR",
      objectId: "@integer(10000,50000)",
      createdTime: "2020-09-05 09:21:20",
      modifiedTime: '@now("yyyy-MM-dd HH:mm:ss")',
      modifiedBy: "@first",
      createdBy: "@first"
    },
    {
      id: 10,
      name: "Polish",
      code: "pl_PL",
      objectId: "@integer(10000,50000)",
      createdTime: "2020-09-05 09:21:20",
      modifiedTime: '@now("yyyy-MM-dd HH:mm:ss")',
      modifiedBy: "@first",
      createdBy: "@first"
    },
    {
      id: 11,
      name: "Danish",
      code: "da_DK",
      objectId: "@integer(10000,50000)",
      createdTime: "2020-09-05 09:21:20",
      modifiedTime: '@now("yyyy-MM-dd HH:mm:ss")',
      modifiedBy: "@first",
      createdBy: "@first"
    },
    {
      id: 12,
      name: "German",
      code: "de_DE",
      objectId: "@integer(10000,50000)",
      createdTime: "2020-09-05 09:21:20",
      modifiedTime: '@now("yyyy-MM-dd HH:mm:ss")',
      modifiedBy: "@first",
      createdBy: "@first"
    },
    {
      id: 13,
      name: "Russian",
      code: "ru_RU",
      objectId: "@integer(10000,50000)",
      createdTime: "2020-09-05 09:21:20",
      modifiedTime: '@now("yyyy-MM-dd HH:mm:ss")',
      modifiedBy: "@first",
      createdBy: "@first"
    },
    {
      id: 14,
      name: "Finnish",
      code: "fi_FI",
      objectId: "@integer(10000,50000)",
      createdTime: "2020-09-05 09:21:20",
      modifiedTime: '@now("yyyy-MM-dd HH:mm:ss")',
      modifiedBy: "@first",
      createdBy: "@first"
    },
    {
      id: 15,
      name: "French",
      code: "fr_FR",
      objectId: "@integer(10000,50000)",
      createdTime: "2020-09-05 09:21:20",
      modifiedTime: '@now("yyyy-MM-dd HH:mm:ss")',
      modifiedBy: "@first",
      createdBy: "@first"
    },
    {
      id: 16,
      name: "Swedish",
      code: "sv_SE",
      objectId: "@integer(10000,50000)",
      createdTime: "2020-09-05 09:21:20",
      modifiedTime: '@now("yyyy-MM-dd HH:mm:ss")',
      modifiedBy: "@first",
      createdBy: "@first"
    },
    {
      id: 17,
      name: "British English",
      code: "en_GB",
      objectId: "@integer(10000,50000)",
      createdTime: "2020-09-05 09:21:20",
      modifiedTime: '@now("yyyy-MM-dd HH:mm:ss")',
      modifiedBy: "@first",
      createdBy: "@first"
    },
    {
      id: 18,
      name: "Dutch",
      code: "nl_NL",
      objectId: "@integer(10000,50000)",
      createdTime: "2020-09-05 09:21:20",
      modifiedTime: '@now("yyyy-MM-dd HH:mm:ss")',
      modifiedBy: "@first",
      createdBy: "@first"
    },
    {
      id: 19,
      name: "Simplified Chinese",
      code: "zh_CN",
      objectId: "@integer(10000,50000)",
      createdTime: "2020-09-05 09:21:20",
      modifiedTime: '@now("yyyy-MM-dd HH:mm:ss")',
      modifiedBy: "@first",
      createdBy: "@first"
    },

    {
      id: 20,
      name: "Traditional Chinese",
      code: "zh_TW",
      objectId: "@integer(10000,50000)",
      createdTime: "2020-09-05 09:21:20",
      modifiedTime: '@now("yyyy-MM-dd HH:mm:ss")',
      modifiedBy: "@first",
      createdBy: "@first"
    },
    {
      id: 21,
      name: "Hebrew",
      code: "iw_IL",
      objectId: "@integer(10000,50000)",
      createdTime: "2020-09-05 09:21:20",
      modifiedTime: '@now("yyyy-MM-dd HH:mm:ss")',
      modifiedBy: "@first",
      createdBy: "@first"
    },
    {
      id: 22,
      name: "Arabic",
      code: "ar_EG",
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
    url: "/language/getLanguageList",
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
