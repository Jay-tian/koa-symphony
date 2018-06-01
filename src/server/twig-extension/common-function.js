const parameters = require('../loader/ConfigLoader.js');
const routers = require('../loader/RouterLoader.js');

module.exports = {
  asset: function(path) {
    return path + '?v=' + parameters.version;
  },
  url: function(url) {
    let path;
    routers.every(function(router) {
      path = router.url(url);
      return path instanceof Error;
    });

    return path instanceof Error ? '/' : path;
  },
};