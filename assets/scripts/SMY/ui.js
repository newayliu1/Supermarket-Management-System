'use strict';

const success = () => {};

const failure = () => {
  $('#result-display').text('Error!! Unable to Connect With Back End Server!');
  $('#result-display').fadeIn(1000).delay(1000).fadeOut(300);
  $('.input-field').val('');
};

// product name search message in create tab
const searchFailure = () => {
  $('#result-display').text('No Such Product in Database. Please Create Product First!');
  $('#result-display').fadeIn(1000).delay(1000).fadeOut(300);
  $('.input-field').val('');
};

const searchSucess = () => {
  $('#result-display').text('Product Search Successfully!');
  $('#result-display').fadeIn(1000).delay(1000).fadeOut(300);
  $('.input-field').val('');
};

const showProduct = function(product) {
  if (product === undefined) {
    searchFailure();
  } else {
    $('#table-container').html(inventoryTable({
      products: product
    }));
    searchSucess();
  }
};

// create product message in create tab
const createProductSuccess = () => {
  $('#result-display').text('Product Create Successfully!');
  $('#result-display').fadeIn(1000).delay(1000).fadeOut(300);
  $('.input-field').val('');
};

const createProductFailure = () => {
  $('#result-display').text('Product Name Exists in Database OR Invalid Input!');
  $('#result-display').fadeIn(1000).delay(1000).fadeOut(300);
  $('.input-field').val('');
};

let inventoryTable = require('../templates/product_tables.handlebars');
const showCreateProductTable = (productData) => {
  $('#table-container').html(inventoryTable({
    products: productData
  }));
  $('.input-field').val('');
};

// create inventory message in create tab
const showCreateInvTable = (inventoryData) => {
  let inventoryTable = require('../templates/inventory_tables.handlebars');
  $('#table-container').html(inventoryTable({
    inventories: inventoryData
  }));
  $('.input-field').val('');
  $('#result-display').text('');
};

const createInvSuccess = () => {
  $('#result-display').text('Create Inventory Successfully!');
  $('#result-display').fadeIn(1000).delay(1000).fadeOut(300);
  $('.input-field').val('');
};

const createInvFailure = () => {
  $('#result-display').text('Invalid Input Field Or Empty Input Field!');
  $('#result-display').fadeIn(1000).delay(1000).fadeOut(300);
  $('.input-field').val('');
};

// create order message in create tab
const showCreateOrderTable = (orderData) => {
  let inventoryTable = require('../templates/order_tables.handlebars');
  $('#table-container').html(inventoryTable({
    orders: orderData
  }));
};

const createOrderSuccess = () => {
  $('#result-display').text('Create Order Successfully!');
  $('#result-display').fadeIn(1000).delay(1000).fadeOut(300);
  $('.input-field').val('');
};

const createOrderFailure = () => {
  $('#result-display').text('Invalid Input Field Or Empty Input Field!');
  $('#result-display').fadeIn(1000).delay(1000).fadeOut(300);
  $('.input-field').val('');
};

// delete
const deleteSuccess = () => {
  $('#result-display').text('Delete Successfully!');
  $('#result-display').fadeIn(1000).delay(1000).fadeOut(300);
  $('.input-field').val('');
  $('#table-container').html('');
};

const deleteFailure = () => {
  $('#result-display').text('Delete Unsuccessfully!! Since Invalid ID!!');
  $('#result-display').fadeIn(1000).delay(1000).fadeOut(300);
  $('.input-field').val('');
};

// update
const updateSuccess = () => {
  $('#result-display').text('Update Successfully!');
  $('#result-display').fadeIn(1000).delay(1000).fadeOut(300);
  $('.input-field').val('');
};

const updateFailure = () => {
  $('#result-display').text('Update Unsuccessfully!! Since Invalid ID Or Invalid Input!!');
  $('#result-display').fadeIn(1000).delay(1000).fadeOut(300);
  $('.input-field').val('');
};

// message for searching expiration order, inventory, order in search tab
const searchExpirationOrderSuccess = () => {
  $('#result-display').text('Search Expiration Order Successfully!');
  $('#result-display').fadeIn(1000).delay(1000).fadeOut(300);
  $('.input-field').val('');
};
const searchInvSuccess = () => {
  $('#result-display').text('Search Inventory Successfully!');
  $('#result-display').fadeIn(1000).delay(1000).fadeOut(300);
  $('.input-field').val('');
};
const searchInvFailure = () => {
  $('#result-display').text('Invalid Inventory ID!!');
  $('#result-display').fadeIn(1000).delay(1000).fadeOut(300);
  $('.input-field').val('');
};
const searchOrderSuccess = () => {
  $('#result-display').text('Search Order Successfully!');
  $('#result-display').fadeIn(1000).delay(1000).fadeOut(300);
  $('.input-field').val('');
};
const searchOrderFailure = () => {
  $('#result-display').text('Invalid Order ID!!');
  $('#result-display').fadeIn(1000).delay(1000).fadeOut(300);
  $('.input-field').val('');
};


module.exports = {
  showCreateInvTable,
  createInvSuccess,
  createInvFailure,
  showCreateOrderTable,
  createOrderSuccess,
  createOrderFailure,
  createProductSuccess,
  failure,
  success,
  showProduct,
  deleteSuccess,
  deleteFailure,
  updateSuccess,
  updateFailure,
  searchFailure,
  searchSucess,
  showCreateProductTable,
  createProductFailure,
  searchExpirationOrderSuccess,
  searchInvSuccess,
  searchOrderSuccess,
  searchInvFailure,
  searchOrderFailure
};
