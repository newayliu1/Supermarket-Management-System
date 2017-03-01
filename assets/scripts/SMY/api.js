'use strict';
const config = require('../config');
const store = require('../store');

const search = function () {
  return $.ajax({
    url: config.apiOrigin + '/products',
    method: 'GET',
    headers: {
      Authorization: `Token token=${store.user.token}`,
    },
  });
};

const createInv = function (data) {
  return $.ajax({
    url: config.apiOrigin + '/inventories',
    method: 'POST',
    headers: {
      Authorization: `Token token=${store.user.token}`,
    },
    data,
  });
};

const createOrder = function (data) {
  return $.ajax({
    url: config.apiOrigin + '/orders',
    method: 'POST',
    headers: {
      Authorization: `Token token=${store.user.token}`,
    },
    data,
  });
};

const createProduct = function (data) {
  return $.ajax({
    url: config.apiOrigin + '/products',
    method: 'POST',
    headers: {
      Authorization: `Token token=${store.user.token}`,
    },
    data,
  });
};

const getAllOrders = function () {
  return $.ajax({
    url: config.apiOrigin + '/orders',
    method: 'GET',
    headers: {
      Authorization: `Token token=${store.user.token}`,
    },
  });
};

const getInventory = function (data) {
  return $.ajax({
    url: `${config.apiOrigin}/inventories/${data.id}`,
    method: 'GET',
    headers: {
      Authorization: `Token token=${store.user.token}`,
    },
  });
};

const getOrder = function (data) {
  return $.ajax({
    url: `${config.apiOrigin}/orders/${data.id}`,
    method: 'GET',
    headers: {
      Authorization: `Token token=${store.user.token}`,
    },
  });
};

// const changePassword = function (data) {
//   return $.ajax({
//     url: `${config.apiOrigin}/change-password/${store.user.id}`,
//     method: 'PATCH',
//     headers: {
//       Authorization: `Token token=${store.user.token}`,
//     },
//     data,
//   });
// };
//
const deleteOrder = function (data) {
  return $.ajax({
    url: `${config.apiOrigin}/orders/${data.id}`,
    method: 'DELETE',
    headers: {
      Authorization: `Token token=${store.user.token}`,
    },
  });
};

const deleteInv = function (data) {
  return $.ajax({
    url: `${config.apiOrigin}/inventories/${data.id}`,
    method: 'DELETE',
    headers: {
      Authorization: `Token token=${store.user.token}`,
    },
  });
};

const updatePrice = function (data) {
  return $.ajax({
    url: `${config.apiOrigin}/inventories/${data.id}`,
    method: 'PATCH',
    headers: {
      Authorization: `Token token=${store.user.token}`,
    },
    data: {
      inventory: {
        price: `${data.price}`,
      },
    },
  });
};

const updateSection = function (data) {
  return $.ajax({
    url: `${config.apiOrigin}/inventories/${data.id}`,
    method: 'PATCH',
    headers: {
      Authorization: `Token token=${store.user.token}`,
    },
    data: {
      inventory: {
        section: `${data.section}`,
      },
    },
  });
};

module.exports = {
  search,
  createInv,
  createOrder,
  createProduct,
  getAllOrders,
  deleteOrder,
  deleteInv,
  getInventory,
  getOrder,
  updatePrice,
  updateSection
};
