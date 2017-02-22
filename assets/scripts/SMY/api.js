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
// const signOut = function () {
//   return $.ajax({
//     url: `${config.apiOrigin}/sign-out/${store.user.id}`,
//     method: 'DELETE',
//     headers: {
//       Authorization: `Token token=${store.user.token}`,
//     },
//   });
// };

module.exports = {
  search,
  createInv,
  createOrder,
  createProduct
};
