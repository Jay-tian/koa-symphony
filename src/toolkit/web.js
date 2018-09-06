const routers = require('../loader/RouterLoader.js');

exports.urlGenerater = function(url, params = {}) {
  let path;
  routers.every(function(router) {
    path = router.url(url, params);
    return path instanceof Error;
  });

  return path instanceof Error ? '/' : path;
};
