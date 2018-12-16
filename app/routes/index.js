'use strict'

const Router = require('koa-router')
const router = new Router()

router.all('/', async(ctx) => {
	ctx.status = 200
	ctx.body = {
		status: 'success',
		data: null,
		message: 'Countdown API - Check the docs for info on how to use'
	}
})

module.exports = router
