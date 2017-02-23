'use strict';

const getFormFields = require(`../../../lib/get-form-fields`);

const api = require('./api');
const ui = require('./ui');
const store = require('../store');
const data_analyst = require('./data_analyst');

const onSearch = function(event) {
  event.preventDefault();
  //
  let productName = $('#search_input').val();
  api.search()
    .then((response) => {
      store.products = response.products;
      let product = data_analyst.getProduct(productName);
      ui.showProduct(product);
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
      store.product = response;
      ui.createProductSuccess(store.product);
      return store;
    })
    .catch(ui.failure);
};

const onExpiredOrder = function(event) {
  event.preventDefault();

  api.getAllOrders()
    .then((response) => {
      store.orders = response.orders;
      let data = data_analyst.getExpiredOrder(store.orders);
      ui.createOrderSuccess(data);
      return store;
    })
    .catch(ui.failure);
};

const onSearchInv = function(event) {
  event.preventDefault();
  let data = getFormFields(event.target);
  api.getInventory(data)
    .then((response) => {
      store.inventory = response;
      ui.createInvSuccess(store.inventory);
      return store;
    })
    .catch(ui.failure);
};

const onSearchOrder = function(event) {
  event.preventDefault();
  let data = getFormFields(event.target);
  api.getOrder(data)
    .then((response) => {
      store.order = response;
      ui.createOrderSuccess(store.order);
      return store;
    })
    .catch(ui.failure);
};

const onDeleteOrder = function(event) {
  event.preventDefault();
  let data = getFormFields(event.target);
  api.deleteOrder(data)
    .then(ui.deleteSuccess)
    .catch(ui.failure);
};

const onDeleteInv = function(event) {
  event.preventDefault();
  let data = getFormFields(event.target);
  api.deleteInv(data)
    .then(ui.deleteSuccess)
    .catch(ui.failure);
};

const onUpdatePrice = function(event) {
  event.preventDefault();
  let data = getFormFields(event.target);
  api.updatePrice(data)
    .then(ui.updateSuccess)
    .catch(ui.failure);
};

const onUpdateSection = function(event) {
  event.preventDefault();
  let data = getFormFields(event.target);
  api.updateSection(data)
    .then(ui.updateSuccess)
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
  $('#expired-orders').on('click', onExpiredOrder);
  $('#search-inv').on('submit', onSearchInv);
  $('#search-order').on('submit', onSearchOrder);
  $('#order-delete').on('submit', onDeleteOrder);
  $('#inventory-delete').on('submit', onDeleteInv);
  $('#update-inv-price').on('submit', onUpdatePrice);
  $('#update-inv-section').on('submit', onUpdateSection);
  $('aside').hide();
};
module.exports = {
  addHandlers,
};
