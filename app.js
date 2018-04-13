// const routers = require(rootPath+'config/router.js');
// const rootPath = './src/server/';
const Koa = require('koa'); 
const path = require('path');
const views = require('koa-views');
const Router = require('koa-router'); 
const koaStatic = require('koa-static');
const staticPath = './static';
const fs = require('fs');

const app = new Koa();
const router = new Router();

app.use(views(path.join(__dirname, './src/server/view'), {
  extension: 'ejs'
}))

router.get('/', async (ctx) => { 
  let data = {
    data: 'hello koa2'
  }
  await ctx.render('layout', data)
});

// app.keys = ['im a newer secret', 'i like turtle'];
// app.keys = new KeyGrip(['im a newer secret', 'i like turtle'], 'sha256');
// this.cookies.set('name', 'tobi', { signed: true });

app.use(koaStatic(
  path.join( __dirname,  staticPath)
))

// app.on('error', function(err, ctx){
//   log.error('server error', err, ctx);
// });

app.use(router.routes(), router.allowedMethods());
app.listen(3000);

console.log('app started at port 3000...');