'use strict';

const Koa = require('koa');
const BodyParser = require('koa-bodyparser');

const routes = require('./routes');

module.exports = (network, database) => {
  const app = new Koa();

  global.__MONGO_URI__ = database.uri;

  /* Add our routes to the server */
  const router = routes();
  app.use(router.routes());
  app.use(router.allowedMethods());
  app.use(BodyParser());

  return app.listen(network.port, network.host);
};
