const bodyParser = require('koa-bodyparser');

module.exports = {
  priority: 40,
  middleware: bodyParser(),
};