// const routers = require(rootPath+'config/router.js');
// const rootPath = './src/server/';
const Koa = require('koa'); 
const Router = require('koa-router'); 
var fs = require('fs');

const app = new Koa();
const router = new Router();
router.get('/', async (ctx) => { 
  let html = `<ul> <li><a href="/">/</a></li> <li><a href="/login">login</a></li> </ul> ` ;
  ctx.body = html
});

app.use(router.routes(), router.allowedMethods());
app.listen(3000);

console.log('app started at port 3000...');