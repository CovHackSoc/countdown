'use strict';

const Router = require('koa-router');

/* Routes */
const info = require('./info');

module.exports = () => {
  const router = new Router();
  router.all('/', info.index);
  return router;
};
