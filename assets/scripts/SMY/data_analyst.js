'use strict';
const store = require('../store');

const getProductID = function(product) {
  let productID = 0;
  store.products.forEach((el) => {
    if (el.name === product){
      productID = el.id;}
  });
  if (productID === 0){
    return "Please create your product first.";
  }
  return `The product ID is ${productID}.`;
};

module.exports = {
  getProductID
};
