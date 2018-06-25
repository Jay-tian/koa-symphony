const parameters = require('../loader/ConfigLoader.js');
const routers = require('../loader/RouterLoader.js');
const webpackConfig = require(parameters.rootPath+'/webpack/setting.js');
const assets = 'production' == parameters.env ? require(webpackConfig.output+'webpack.assets.json') : {};

module.exports = {
  asset: function(url, version = true) {
    let rootPath = parameters.distAddress ? parameters.distAddress : '';
    url = rootPath + url;
    if (!version) {
      return url;
    }
    
    url = url.replace(webpackConfig.publicPath, '');
    let urls = url.split('.');
    console.log(assets);
    console.log(urls[0]);
    console.log(urls[1]);
    return 'development' == parameters.env ? url: assets[urls[0]][urls[1]];
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