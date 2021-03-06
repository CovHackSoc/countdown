'use strict';

const config = require('config');

const Koa = require('koa');
const BodyParser = require('koa-bodyparser');
const Router = require('koa-router');

const app = new Koa();
const router = new Router();

global.__MONGO_URI__ = global.__MONGO_URI__ || config.database.uri;

console.log('Mongo URI: ' + global.__MONGO_URI__);

/* Add our routes to the server */
const index = require('./routes/index');

router.all('/', index.index);

app.use(router.routes());
app.use(router.allowedMethods());
app.use(BodyParser());

if (!module.parent) {
  app.listen(config.net.port, config.net.host).on('error', err => {
    console.error(err);
  });
}

module.exports = app;
