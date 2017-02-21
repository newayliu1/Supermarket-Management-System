'use strict';

const getFormFields = require(`../../../lib/get-form-fields`);

const api = require('./api');
const ui = require('./ui');
const store = require('../store');

const getProductID = function(product) {
  // let productID = 0;
  //
  // store.products.forEach((el) => {
  //   if (el.name === product){
  //     productID = el.id;}
  // });
  // return productID;

};

const onSearch = function(event) {
  event.preventDefault();
  //
  let product = $('#search_input').val();
  api.search()
    .then((response) => {
      store.products = response.products;
      console.log(store.products);
      return store;
    })
    .catch(ui.failure);
};

// const onSignIn = function(event) {
//   event.preventDefault();
//
//   let data = getFormFields(event.target);
//
//   api.signIn(data)
//     .then((response) => {
//       store.products = response.products;
//       return store;
//     })
//     .then(ui.signInSuccess)
//     .catch(ui.failure);
//
// };
//
// const onChangePassword = function(event) {
//   event.preventDefault();
//
//   let data = getFormFields(event.target);
//
//   api.changePassword(data)
//     .then(ui.changePasswordSuccess)
//     .catch(ui.failure);
// };
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
  // $('#sign-in').on('submit', onSignIn);
  // $('#change-password').on('submit', onChangePassword);
  // $('#sign-out').on('click', onSignOut);
};
module.exports = {
  addHandlers,
};
