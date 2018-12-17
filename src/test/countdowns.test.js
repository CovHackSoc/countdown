'use strict';

/* eslint max-lines-per-function: [0, 25] */
/* eslint max-statements: [0, 25] */

const expect = require('chai').expect;

const {MongoMemoryServer} = require('mongodb-memory-server');
const mongoose = require('mongoose');
const db = require('../app/db/index.js');
const countDown = require('../app/modules/countdowns.js');

describe('createCountdown() - Add a new countdown to the db', () => {
  let mongoServer;

  before(async() => {
    mongoServer = new MongoMemoryServer();
    global.__MONGO_URI__ = await mongoServer.getConnectionString();
    db.connect(global.__MONGO_URI__);
  });

  after(() => {
    db.disconnect();
    mongoServer.stop();
  });

  const countdownName = 'Test Countdown';
  const countdownPassword = 'que38shQPL12';
  let returnedObj;

  it('Adds a new countdown to the databse', async() => {
    //Call the fucntion to make a new countdown called Test Countdown
    returnedObj = await countDown.create(countdownName, countdownPassword);

    mongoose.model('Countdown').find({token: returnedObj.token}, (err, docs) => {
      if(err) throw err;
      expect(docs).to.have.lengthOf(1);

      expect(docs[0].name).to.equal(countdownName);
      expect(docs[0].password.password).to.be.a('string');
      //expect(docs[0].password.password).to.have.lengthOf(128);
      expect(docs[0].password.salt).to.be.a('string');
      expect(docs[0].password.salt).to.have.lengthOf(64);
    });
  });

  it('Token is unique'); //Test the mongoose validator that checks if a token is unique

  it('Token matches the spec'); //Check the token length

  it('Passing undefined or missing args'); //Pass missing args to the fucntion

  it('Password should be hashed with salt'); //Test hashing of password and salt
});
