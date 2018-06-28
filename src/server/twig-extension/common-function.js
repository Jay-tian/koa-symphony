const parameters = require('../loader/ConfigLoader.js');
const routers = require('../loader/RouterLoader.js');
const webpackConfig = require(parameters.rootPath+'/webpack/setting.js');
const assets = 'production' == parameters.env ? require(webpackConfig.output+'webpack.assets.json') : {};

module.exports = {
  asset: function(url, version = true) {
    let distAddress = parameters.distAddress ? parameters.distAddress : '';
    if (!version) {
      return url;
    }
    
    let urls = url.replace(webpackConfig.publicPath, '').split('.');
    url = 'development' == parameters.env ? url: assets[urls[0]][urls[1]];

    return distAddress + url;
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