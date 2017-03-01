'use strict';

const getFormFields = require(`../../../lib/get-form-fields`);

const api = require('./api');
const ui = require('./ui');
const store = require('../store');


const onSignUp = function (event) {
    event.preventDefault();

  let data = getFormFields(event.target);

  api.signUp(data)
    .then(ui.signUpSuccess)
    .catch(ui.signUpFailure);

};

const onSignIn = function (event) {
    event.preventDefault();

  let data = getFormFields(event.target);

  api.signIn(data)
    .then((response) => {
      store.user = response.user;
      return store;
    })
    .then(ui.signInSuccess)
    .catch(ui.signInFailure);

};

const onChangePassword = function (event) {
  event.preventDefault();

  let data = getFormFields(event.target);

  api.changePassword(data)
    .then(ui.changePasswordSuccess)
    .catch(ui.changePasswordFailure)
    ;
};

const onSignOut = function (event) {
  event.preventDefault();
  api.signOut()
    .then(ui.signOutSuccess)
    .catch(ui.failure);
};





const addHandlers = () => {
  $('#sign-up').show();
  $('#sign-in').show();
  $('#sign-out').hide();
  $('.change-password').hide();
  $('#sign-up').on('submit', onSignUp);
  $('#sign-in').on('submit', onSignIn);
  $('#change-password').on('submit', onChangePassword);
  $('#sign-out').on('click', onSignOut);
};
module.exports = {
  addHandlers,
};
