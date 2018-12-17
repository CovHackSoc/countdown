'use strict';

const mongoose = require( 'mongoose' );

const countdownSchema = new mongoose.Schema({
  token: {type: String, required: true},
  name: {type: String, required: true},
  password: {
    password: {type: String, required: true},
    salt: {type: String, required: true}
  }
});

const Countdown = module.exports = mongoose.model('Countdown', countdownSchema);
