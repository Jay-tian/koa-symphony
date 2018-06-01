const staticCache = require('koa-static-cache');
const parameters = require('../loader/ConfigLoader.js');
const path = require('path');

let middleware = staticCache(path.join(parameters.rootPath, '/public/'), {
  maxAge: 365 * 24 * 60 * 60
});

module.exports = {
  priority: 15,
  middleware: middleware
};