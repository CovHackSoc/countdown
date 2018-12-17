'use strict';

const mongoose = require( 'mongoose' );

mongoose.connection.on('connected', () => {
  console.log('Mongoose connected to ' + global.__MONGO_URI__);
});

mongoose.connection.on('error', (err) => {
  console.log('Mongoose error: ' + err);
});

mongoose.connection.on('disconnected', () => {
  console.log('Mongoose disconnected');
});

process.on('SIGINT', () => {
  mongoose.connection.close(() => {
    console.log('Mongoose connection disconnected by SIGINT');
    process.exit(0);
  });
});

//Schemas and models:
require('./models/countdownModel.js');

module.exports.connect = (url) => {
  mongoose.connect(url || global.__MONGO_URI__, { useNewUrlParser: true });
};

module.exports.disconnect = () => {
  mongoose.disconnect();
};
