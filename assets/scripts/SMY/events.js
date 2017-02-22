'use strict';

const getFormFields = require(`../../../lib/get-form-fields`);

const api = require('./api');
const ui = require('./ui');
const store = require('../store');
const data_analyst = require('./data_analyst');

const onSearch = function(event) {
  event.preventDefault();
  //
  let product = $('#search_input').val();
  api.search()
    .then((response) => {
      store.products = response.products;
      let productID = data_analyst.getProductID(product);
      $('#product_id').text(productID);
      return store;
    })
    .catch(ui.failure);
};

const onCreateInv = function(event) {
  event.preventDefault();

  let data = getFormFields(event.target);
  data.inventory.user_id = store.user.id;
  api.createInv(data)
    .then((response) => {
      store.inventories = response;
      ui.createInvSuccess(store.inventories);
      return store;
    })
    .catch(ui.failure);

};
//
const onCreateOrder = function(event) {
  event.preventDefault();

  let data = getFormFields(event.target);
  data.order.user_id = store.user.id;
  api.createOrder(data)
    .then((response) => {
      store.orders = response;
      ui.createOrderSuccess(store.orders);
      return store;
    })
    .catch(ui.failure);
};

const onCreateProduct = function(event) {
  event.preventDefault();

  let data = getFormFields(event.target);
  data.product.user_id = store.user.id;
  api.createProduct(data)
    .then((response) => {
      store.products = response;
      ui.createProductSuccess(store.products);
      return store;
    })
    .catch(ui.failure);
};
//
// const onSignOut = function(event) {
//   event.preventDefault();
//   api.signOut()
//     // .then(() => {
//     //   delete player.playerOne;
//     //   return player;
//     // })
//     .then(ui.signOutSuccess)
//     .catch(ui.failure);
// };
//




const addHandlers = () => {
  $('#search').on('click', onSearch);
  $('#new-inventory').on('submit', onCreateInv);
  $('#new-order').on('submit', onCreateOrder);
  $('#new-product').on('submit', onCreateProduct);
  // $('#change-password').on('submit', onChangePassword);
  // $('#sign-out').on('click', onSignOut);
};
module.exports = {
  addHandlers,
};
