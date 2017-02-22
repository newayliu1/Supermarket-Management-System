'use strict';
const store = require('../store');

const getProduct = function(productName) {
  let product;
  store.products.forEach((el) => {
    if (el.name === productName) {
      product= {product:el};
    }
  });
  return product;
};


const getExpiredOrder = function(orders) {
  let today = new Date();
  let arr = [];
  today.getDate();
  orders.forEach((order) => {
    if (Date.parse(order.expiration_date) < today) {
      arr.push(order);
    }
  });
  return arr;
};

    module.exports = {
      getProduct,
      getExpiredOrder
    };
