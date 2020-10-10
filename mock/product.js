const Mock = require("mockjs");

var data = Mock.mock({
  items: [
    {
      id: 1001,
      product: "华为",
      price: 3000,
      created: "2020-08-27 08:37:20",
      updated: "2020-08-27 08:37:20"
    },
    {
      id: 1002,
      product: "小米",
      price: 2000,
      created: "2020-08-27 08:37:20",
      updated: "2020-08-27 08:37:20"
    }
  ]
});

module.exports = [
  {
    url: "/product/selectAll",
    type: 'get',
    response: config => {
      const items = data.items
      return {
        code: 20000,
        data: {
          total: items.length,
          items: items
        }
      }
    }
  },
  {
    url: '/product/addProduct',
    type: 'post',
    response: config => {
      let product = {}
      const item = config.query;
      let name = item['productName']
      let price = item['price']
      product={
        id:'1003',
        productName:name,
        price:price,
        created:new Date().toLocaleString(),
        updated:new Date().toLocaleString(),
      }
      data.items.push(product);
      // console.log( data.items);

      return {
        code: 20000,
        data: {
          success:true
        }
      }
    }
  }
];
