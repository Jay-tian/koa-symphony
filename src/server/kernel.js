const Koa = require('koa'); 
const koaStatic = require('koa-static');
const path = require('path');
const parameters = require('config/parameters.js');
const views = require('tsj-koa-views');
const app = new Koa();

app.use(koaStatic(
  path.join(parameters.rootPath, '/public/')
));

app.use(async (ctx, next) => {
  ctx.state.version = '1.0.0';
  ctx.state.rootPath = parameters.rootPath;
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

module.exports = app;