'use strict';

const getFormFields = require(`../../../lib/get-form-fields`);

const api = require('./api');
const ui = require('./ui');
const store = require('../store');
const data_analyst = require('./data_analyst');

const onSearch = function(event) {
  event.preventDefault();
  //
  let data = getFormFields(event.target);
  api.search()
    .then((response) => {
      store.products = response.products;
      let product = data_analyst.getProduct(data.product);
      ui.showProduct(product);
      return store;
    })
    .catch(ui.failure);
};

const onCreateInv = function(event) {
  event.preventDefault();

  let data = getFormFields(event.target);
  api.createInv(data)
    .then((response) => {
      store.inventories = response;
      ui.showCreateInvTable(store.inventories);
      return store;
    })
    .then(ui.createInvSuccess)
    .catch(ui.createInvFailure);

};
//
const onCreateOrder = function(event) {
  event.preventDefault();

  let data = getFormFields(event.target);
  api.createOrder(data)
    .then((response) => {
      store.orders = response;
      ui.showCreateOrderTable(store.orders);
      return store;
    })
    .then(ui.createOrderSuccess)
    .catch(ui.createOrderFailure);
};

const onCreateProduct = function(event) {
  event.preventDefault();

  let data = getFormFields(event.target);
  api.createProduct(data)
    .then((response) => {
      store.product = response;
      ui.showCreateProductTable(store.product);
      return store;
    })
    .then(ui.createProductSuccess)
    .catch(ui.createProductFailure);
};

const onExpiredOrder = function(event) {
  event.preventDefault();

  api.getAllOrders()
    .then((response) => {
      store.orders = response.orders;
      let data = data_analyst.getExpiredOrder(store.orders);
      ui.showCreateOrderTable(data);
      return store;
    })
    .then(ui.searchExpirationOrderSuccess)
    .catch(ui.failure);
};

const onSearchInv = function(event) {
  event.preventDefault();
  let data = getFormFields(event.target);
  api.getInventory(data)
    .then((response) => {
      store.inventory = response;
      ui.showCreateInvTable(store.inventory);
      return store;
    })
    .then(ui.searchInvSuccess)
    .catch(ui.searchInvFailure);
};

const onSearchOrder = function(event) {
  event.preventDefault();
  let data = getFormFields(event.target);
  api.getOrder(data)
    .then((response) => {
      store.order = response;
      ui.showCreateOrderTable(store.order);
      return store;
    })
    .then(ui.searchOrderSuccess)
    .catch(ui.searchOrderFailure);
};

const onDeleteOrder = function(event) {
  event.preventDefault();
  let data = getFormFields(event.target);
  api.deleteOrder(data)
    .then(ui.deleteSuccess)
    .catch(ui.deleteFailure);
};

const onDeleteInv = function(event) {
  event.preventDefault();
  let data = getFormFields(event.target);
  api.deleteInv(data)
    .then(ui.deleteSuccess)
    .catch(ui.deleteFailure);
};

const onUpdatePrice = function(event) {
  event.preventDefault();
  let data = getFormFields(event.target);
  api.updatePrice(data)
    .then((response) => {
      store.inventory = response;
      ui.showCreateInvTable(store.inventory);
      return store;
    })
    .then(ui.updateSuccess)
    .catch(ui.updateFailure);
};

const onUpdateSection = function(event) {
  event.preventDefault();
  let data = getFormFields(event.target);
  api.updateSection(data)
    .then((response) => {
      store.inventory = response;
      ui.showCreateInvTable(store.inventory);
      return store;
    })
    .then(ui.updateSuccess)
    .catch(ui.updateFailure);
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
  $('.search_input').on('submit', onSearch);
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
  $('#result-display').hide();
};
module.exports = {
  addHandlers,
};
