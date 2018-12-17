'use strict'

module.exports.index = async(ctx) => {
  ctx.status = 200;
  ctx.body = {
    status: 'success',
    data: null,
    message: 'Countdown API - Check the docs for info on how to use'
  };
};
