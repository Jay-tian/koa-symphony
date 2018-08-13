const koaBody = require('koa-body');

module.exports = {
  priority: 10,
  middleware: koaBody({ multipart: true }),
};