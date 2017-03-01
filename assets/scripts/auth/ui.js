'use strict';

const success = () => {
};

const failure = () => {
  // $('.result-display').text('Action Incomplete');
  $('.input-field').val('');
};

const changePasswordSuccess = () =>{
// $('#change-password').hide();
$('#result-display').text('Change Password Successfully!');
$('#result-display').fadeIn(1000).delay(1000).fadeOut(300);
$('.input-field').val('');
};

const changePasswordFailure = () =>{
// $('#change-password').hide();
$('#result-display').text('Change Password Successfully!');
$('#result-display').fadeIn(1000).delay(1000).fadeOut(300);
$('.input-field').val('');
};

const signUpSuccess = () =>{
// $('#signUp-form').hide();
$('#result-display').text('Sign Up Successfully!');
$('#result-display').fadeIn(1000).delay(1000).fadeOut(300);
$('.input-field').val('');
};

const signUpFailure = () =>{
// $('#signUp-form').hide();
$('#result-display').text('Invalid email. Please try again.');
$('#result-display').fadeIn(1000).delay(1000).fadeOut(300);
$('.input-field').val('');
};

const signInSuccess = () => {
  $('.input-field').val('');
  $('.sign-up').hide();
  $('.sign-in').hide();
  $('.change-password').show();
  $('#sign-out').show();
  $('aside').show();
  $('#result-display').text('Sign In Successfully.');
  $('#result-display').fadeIn(1000).delay(1000).fadeOut(300);
};

const signInFailure = () => {
  $('.input-field').val('');
  $('#result-display').text('Invalid email or password. Please try again.');
  $('#result-display').fadeIn(1000).delay(1000).fadeOut(300);
};

const signOutSuccess = () => {
  $('#sign-out').hide();
  $('.change-password').hide();
  $('.sign-in').show();
  $('.sign-up').show();
  $('section').text('');
  $('aside').hide();
};



module.exports = {
  failure,
  success,
  signInSuccess,
  signOutSuccess,
  changePasswordSuccess,
  signUpSuccess,
  signInFailure,
  signUpFailure
};
