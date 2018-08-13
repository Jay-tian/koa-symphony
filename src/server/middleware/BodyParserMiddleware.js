const koaBody = require('koa-body');

module.exports = {
  priority: 0,
  middleware: koaBody({ multipart: true }),
};