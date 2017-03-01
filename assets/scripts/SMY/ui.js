'use strict';

const success = () => {
};

const deleteSuccess = () => {
  $('.input-field').val('');
  $('#result-display').text('Delete Successfully');
};

const updateSuccess = () => {
  $('.input-field').val('');
  $('#result-display').text('Update Successfully');
};

const failure = () => {
  // $('.result-display').text('Action Incomplete');
  $('.input-field').val('');
  $('#result-display').text('Wrong Input');
};

const createInvSuccess = (inventoryData) =>{
let inventoryTable = require('../templates/inventory_tables.handlebars');
$('#table-container').html(inventoryTable({inventories: inventoryData}));
$('.input-field').val('');
$('#result-display').text('');
};

const createOrderSuccess = (orderData) =>{
let inventoryTable = require('../templates/order_tables.handlebars');
$('#table-container').html(inventoryTable({orders: orderData}));
$('.input-field').val('');
$('#result-display').text('');
};

let inventoryTable = require('../templates/product_tables.handlebars');
const createProductSuccess = (productData) =>{
$('#table-container').html(inventoryTable({products: productData}));
$('.input-field').val('');
};

const showProduct = function (product) {
  if (product === undefined){
  $('#result-display').text('Please create product first!');}
  else {
    $('#table-container').html(inventoryTable({products: product}));
    $('#result-display').text('');
  }
  $('.input-field').val('');
};

// const signUpSuccess = () =>{
// // $('#signUp-form').hide();
// $('.result-display').text('Sign Up Successfully!');
// $('.input-field').val('');
// };
//
// const signInSuccess = () => {
//   $('.input-field').val('');
//   $('.sign-up').hide();
//   $('.sign-in').hide();
//   $('.change-password').show();
//   $('#sign-out').show();
// };
//
// const signOutSuccess = () => {
//   $('#sign-out').hide();
//   $('.change-password').hide();
//   $('.sign-in').show();
//   $('.sign-up').show();
// };
//
// const selectedRole = () => {
//   $('.container').show();
// };
//
// const createGameSuccess = () => {
//   $('#x').show();
//   $('#o').show();
//   // $('.games-played').hide();
//   // if (data) {
//   //   console.log(data);
//   // }
// };

module.exports = {
  createInvSuccess,
  createOrderSuccess,
  createProductSuccess,
  failure,
  success,
  showProduct,
  deleteSuccess,
  updateSuccess
};
