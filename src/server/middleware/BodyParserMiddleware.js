const bodyParser = require('koa-bodyparser');

module.exports = {
  priority: 5,
  middleware: bodyParser(),
};