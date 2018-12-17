'use strict';

const config = require('config');

const app = require('../app');

/* Create an instance of the app for testing. */
module.exports = () => {
  const instance = app(config.net, config.database);
  return instance;
};
