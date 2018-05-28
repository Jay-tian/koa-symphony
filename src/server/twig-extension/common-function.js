const parameters = require('config/parameters.js');
const Router = require('koa-router');
const router = new Router();

module.exports = {
  asset: function(path) {
    return path + '?v=' + parameters.version;
  },
  url: function(url) {
    return router.url(url);
  },
};