const Koa = require('koa');
const path = require('path');
const glob = require('glob');
global.symphony = {
  parameters: require('./loader/ConfigLoader.js'),
  service: require('./loader/ServiceLoader.js'),
};

require('./application/mailer.js');
require('./application/cropper.js');
require('./loader/TwigExtensionLoader.js');

const session = require('./middleware/Session.js');
const toolkit = require('./toolkit/index.js');
const app = new Koa(); 

session(app);

//自动加载中间件
let middlewarePaths = glob.sync(path.join(__dirname, './middleware/*Middleware.js'));
middlewarePaths = toolkit.unique(middlewarePaths.concat(glob.sync(path.join(global.symphony.parameters.serverPath, 'middleware/*Middleware.js'))));
let middlewares = {};
middlewarePaths.forEach(function(path) {
  let data = require(path);
  if (middlewares[data.priority]) {
    middlewares[data.priority].push(data.middleware);
  } else {
    middlewares[data.priority] = [data.middleware];
  }
});

let sort = Object.keys(middlewares).sort(function (x,y) {
  return x-y;
});

sort.forEach(function(key) {
  middlewares[key].forEach(function(mdw) {
    if (Array.isArray(mdw)) {
      mdw.forEach(function(m) {
        app.use(m);
      }, this);
    } else {
      app.use(mdw);
    }
  });
}, this);

module.exports = app;