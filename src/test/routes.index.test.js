/* eslint no-magic-numbers: 0 */

'use strict';

const chai = require('chai');
const expect = chai.expect;
const request = require('supertest');
const app = require('./proxy');

describe('GET /', () => {
  let server;

  it('respond with json', async() => {
    const response = await request(server).get('/');
    expect(response.status).to.equal(200);
    expect(response.type).to.equal('application/json');
    expect(response.body.message).to.equal('Countdown API - Check the docs for info on how to use');
  });

  before(() => {
    server = app();
  });

  after(() => {
    server.close();
  });
});
