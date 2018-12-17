'use strict';

const crypto = require('crypto');
const mongoose = require('mongoose');

module.exports.create = (name, password) => new Promise((resolve, reject) => {
  const saltVal = crypto.randomBytes(32).toString('hex');
  const token = crypto.randomBytes(32).toString('hex');

  mongoose.model('Countdown').create({
    token: token,
    name: name,
    password: {
      password: password,
      salt: saltVal
    }
  }, (err, doc) => {
    if (err) reject(err);
    resolve(doc);
  });
});
