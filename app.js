// const routers = require(rootPath+'config/router.js');
// const rootPath = './src/server/';
const Koa = require('koa'); 
const path = require('path');
const Router = require('koa-router'); 
const koaStatic = require('koa-static');
const staticPath = './static';
const fs = require('fs');

const app = new Koa();
const router = new Router();
router.get('/', async (ctx) => { 
  let html = `<ul> <li><a href="/">/</a></li> <li><a href="/login">login</a></li> </ul> ` ;
  ctx.body = html
});

// app.keys = ['im a newer secret', 'i like turtle'];
// app.keys = new KeyGrip(['im a newer secret', 'i like turtle'], 'sha256');
// this.cookies.set('name', 'tobi', { signed: true });

app.use(koaStatic(
  path.join( __dirname,  staticPath)
))

app.on('error', function(err, ctx){
  log.error('server error', err, ctx);
});

app.use(router.routes(), router.allowedMethods());
app.listen(3000);

console.log('app started at port 3000...');