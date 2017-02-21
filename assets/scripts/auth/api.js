'use strict';
const config = require('../config');
const store = require('../store');

const signUp = function (data) {
  return $.ajax({
    url: config.apiOrigin + '/sign-up',
    method: 'POST',
    data,
  });
};

const signIn = function (data) {
  return $.ajax({
    url: config.apiOrigin + '/sign-in',
    method: 'POST',
    data,
  });
};

const changePassword = function (data) {
  return $.ajax({
    url: `${config.apiOrigin}/change-password/${store.user.id}`,
    method: 'PATCH',
    headers: {
      Authorization: `Token token=${store.user.token}`,
    },
    data,
  });
};

const signOut = function () {
  return $.ajax({
    url: `${config.apiOrigin}/sign-out/${store.user.id}`,
    method: 'DELETE',
    headers: {
      Authorization: `Token token=${store.user.token}`,
    },
  });
};
//
// const addGame = function (data) {
//   return $.ajax({
//     url: config.apiOrigin + '/games',
//     method: 'POST',
//     headers: {
//       Authorization: `Token token=${player.playerOne.token}`,
//     },
//     data,
//   });
// };
//
// const updateCells = function (data,id) {
//   return $.ajax({
//     url: `${config.apiOrigin}/games/${id}`,
//     method: 'PATCH',
//     headers: {
//       Authorization: `Token token=${player.playerOne.token}`,
//     },
//     data,
//   });
// };
//
// const updateGame = function (data,id) {
//   return $.ajax({
//     url: `${config.apiOrigin}/games/${id}`,
//     method: 'PATCH',
//     headers: {
//       Authorization: `Token token=${player.playerOne.token}`,
//     },
//     data,
//   });
// };
//
// const getGame = function () {
//   return $.ajax({
//     url: `${config.apiOrigin}/games`,
//     method: 'GET',
//     headers: {
//       Authorization: `Token token=${player.playerOne.token}`,
//     },
//   });
// };

module.exports = {
  signUp,
  signIn,
  changePassword,
  signOut,
};
