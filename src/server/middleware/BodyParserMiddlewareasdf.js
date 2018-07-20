const bodyParser = require('koa-bodyparser');

module.exports = {
  priority: 30,
  middleware: bodyParser(),
};