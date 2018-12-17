'use strict';

const config = require('config');
const app = require('./app');

/* Configure any database connections here before spawning the server up */

console.log(`Listening on ${config.net.host}:${config.net.port}`);
app(config.net, config.database);
