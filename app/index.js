'use strict'

global.__MONGO_URI__ = /*global.__MONGO_URI__ ||*/ 'mongodb://127.0.0.1:27017/'

const Koa = require('koa')
const Router = require('koa-router')
const BodyParser = require('koa-bodyparser')

const app = new Koa()
const router = new Router()

app.use(router.allowedMethods())
app.use(router.routes())
app.use(BodyParser())

// Require the routes
const indexRoute = require('./routes/index')

//Use the routes
app.use(indexRoute.routes())

//TODO: 404 route

if (!module.parent) {
	app.listen(3000).on('error', err => {
		console.error(err)
	})
}

module.exports = app
