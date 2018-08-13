const koaBody = require('koa-body');

module.exports = {
  priority: 40,
  middleware: koaBody({ multipart: true }),
};