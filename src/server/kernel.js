const Koa = require('koa'); 
const staticCache = require('koa-static-cache');
const path = require('path');
const parameters = require('config/parameters.js');
const views = require('tsj-koa-views');
const ServiceManage = require('./service/ServiceManage.js');
const app = new Koa();

app.use(staticCache(path.join(parameters.rootPath, '/public/'), {
  maxAge: 365 * 24 * 60 * 60
}))

app.use(async (ctx, next) => {
  ctx.state.version = parameters.version;
  ctx.state.rootPath = parameters.rootPath;
  await next();
});

app.use(async (ctx, next) => {
  const serviceManage = new ServiceManage();
  ctx.state.serviceManage = serviceManage;
  await next();
});

//初始化模版渲染路径
app.use(
  views(parameters.viewPath,
    {
      extension: 'twig',
      map: {
        html: 'twig',
      },
      options: {
        path: parameters.viewPath,
      }
    }
  )
);

app.use(async (ctx, next) => {
  let userService = ctx.state.serviceManage.create('user/UserService');
  await next();
});

module.exports = app;