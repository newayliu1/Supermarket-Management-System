'use strict';

const success = () => {
};

const failure = () => {
  $('.result-display').text('Action Incomplete');
  $('.input-field').val('');
};

const changePasswordSuccess = () =>{
// $('#change-password').hide();
$('.result-display').text('Change Password Successfully!');
$('.input-field').val('');
};

const signUpSuccess = () =>{
// $('#signUp-form').hide();
$('.result-display').text('Sign Up Successfully!');
$('.input-field').val('');
};

const signInSuccess = () => {
  $('.sign-up').val('');
  $('.input-field').val('');
  $('#start-button').show();
  $('.sign-up').hide();
  $('.sign-in').hide();
  $('.change-password').show();
  $('#sign-out').show();
   $('#board').show();
   $('#x').hide();
   $('#o').hide();
   $('.container').hide();
   $('.result-display').show();
   $('.games-played').show();
   $('.result-display').text('Sign In Successfully!');
};

const signOutSuccess = () => {
  $('#sign-out').hide();
  $('.change-password').hide();
  // $('#game-log').hide();
  $('#board').hide();
  $('.games-played').text('');
  $('.result-display').text('');
  $('.sign-in').show();
  $('.sign-up').show();
  $('#start-button').hide();
  offXO();
};

const selectedRole = () => {
  $('.container').show();
};

const createGameSuccess = () => {
  $('#x').show();
  $('#o').show();
  // $('.games-played').hide();
  // if (data) {
  //   console.log(data);
  // }
};

const showGameSuccess = (data) => {
  $('.games-played').text('You\'ve played ' + data.games.length + ' times!');
};

const offXO = () => {
  $('#x').hide();
  $('#o').hide();
};

module.exports = {
  failure,
  success,
  signInSuccess,
  signOutSuccess,
  createGameSuccess,
  showGameSuccess,
  selectedRole,
  changePasswordSuccess,
  signUpSuccess,
  offXO,
};
