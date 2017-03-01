'use strict';
const store = require('../store');

const getProduct = function(productName) {
  let product;
  store.products.forEach((el) => {
    if (el.name === productName) {
      product = {product:el};
      let inventories =[];
      let inventoriesID =[];
      let ordersID = [];
      el.inventories.forEach((inventory) => {
        inventories.push(inventory.section);
        inventoriesID.push(inventory.id);
      });
      el.orders.forEach((order) => {
        ordersID.push(order.id);
      });
      product.product.sections = inventories;
      product.product.inventoriesID = inventoriesID;
      product.product.ordersID = ordersID;
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
