const Koa = require('koa'); 
const koaStatic = require('koa-static');
const path = require('path');
const parameters = require('config/parameters.js');
const views = require('tsj-koa-views');
const app = new Koa();
const db = require('db/init.js');

app.context.db = db;

// const User = sequelize.define('user', {
//   username: Sequelize.STRING,
//   birthday: Sequelize.DATE
// });
// sequelize.sync()
//   .then(() => User.create({
//     username: 'janedoe',
//     birthday: new Date(1980, 6, 20)
//   }))
//   .then(jane => {
//     console.log(jane.toJSON());
//   });

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