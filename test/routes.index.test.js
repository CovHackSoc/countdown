/* eslint no-magic-numbers: 0 */
/*eslint no-undef: 1*/

'use strict'

const chai = require('chai')
const expect = chai.expect
const request = require('supertest')

const app = require('../app/index.js')

describe('GET /', () => {
	let server
	before(() => server = app.listen())

	it('respond with json', async() => {
		const response = await request(server).get('/')
		expect(response.status).to.equal(200)
		expect(response.type).to.equal('application/json')
		expect(response.body.message).to.equal('Check the docs for info on how to use this API')
	})

	after(() => server.close())
})
