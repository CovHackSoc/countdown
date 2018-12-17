# countdown

[![Build Status](https://travis-ci.com/CovHackSoc/countdown.svg?branch=master)](https://travis-ci.com/CovHackSoc/countdown)

Count down + Scheduler for our Hackathons

### Why is Mocha ran with --timeout 60000?
Using the Mongodb in-memory server for the first time or during a CI check will cuase the Mongod binaries to download so Mocha might quit out too soon

### Changing config locally:
To point at your local mongodb server set:
`export NODE_CONFIG='{"database": {"uri":"mongodb://ubuntu.local/dev"}}'`
