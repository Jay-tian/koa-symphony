const parameters = require('../loader/ConfigLoader.js');
const routers = require('../loader/RouterLoader.js');
const webpackConfig = require(parameters.rootPath+'/webpack/setting.js');
const assets = require(webpackConfig.output+'webpack.assets.json');
console.log(assets);

module.exports = {
  asset: function(url, version = true) {
    let rootPath = parameters.distAddress ? parameters.distAddress : '';
    url = rootPath + url;
    if (!version) {
      return url;
    }

    return url + '?v=' + parameters.version;
  },
  url: function(url) {
    let path;
    routers.every(function(router) {
      path = router.url(url);
      return path instanceof Error;
    });

    return path instanceof Error ? '/' : path;
  }
};