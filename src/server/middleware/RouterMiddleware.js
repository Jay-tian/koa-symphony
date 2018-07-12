const routers = require('../loader/RouterLoader.js');

let middleware = [];
routers.forEach(function(router) {
  middleware.push(router.routes());
}, this);

module.exports = {
  priority: 1,
  middleware: middleware,
};