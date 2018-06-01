const Koa = require('koa');
const path = require('path');
const glob = require('glob');
const parameters = require('./loader/ConfigLoader.js');
require('./loader/TwigExtensionLoader.js');
const toolkit = require('../common/tookit.js');
const app = new Koa();

//自动加载中间件
let middlewarePaths = glob.sync(path.join(__dirname, './middleware/*Middleware.js'));
middlewarePaths = toolkit.unique(middlewarePaths.concat(glob.sync(path.join(parameters.serverPath, 'middleware/*Middleware.js'))));
let middlewares = {};
middlewarePaths.forEach(function(path) {
  let data = require(path);
  if (middlewares[data.priority]) {
    middlewares[data.priority].push(data.middleware);
  } else {
    middlewares[data.priority] = [data.middleware];
  }
});

let sort = Object.keys(middlewares).sort().reverse();
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

//  todo 加载service
// app.use(async (ctx, next) => {
//   const serviceManage = new ServiceManage();
//   ctx.state.serviceManage = serviceManage;
//   await next();
// });
// app.use(async (ctx, next) => {
//   let userService = ctx.state.serviceManage.create('user/UserService');
//   await next();
// });

module.exports = app;