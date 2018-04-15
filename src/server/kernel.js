const Koa = require('koa'); 
const koaStatic = require('koa-static');
const path = require('path');
const parameters = require('./config/parameters.js');
const views = require('tsj-koa-views');

const app = new Koa();
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

//初始化静态资源路径
app.use(koaStatic(
  path.join(parameters.rootPath, 'static')
));

module.exports = app;