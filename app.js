const Router = require('koa-router'); 
const app = require('./src/server/kernel.js');
const router = new Router();


// router.get('/', function *(){
//   let data = {
//     data: 'hello koa2',
//   }
//   console.log(ctx.render('index', data));
//   yield this.render('index.xtpl', data);
//   //ctx.render('index', data);
//   //await ctx.render('index', data);
// });

router.get('/', async function (ctx, next) {
  return ctx.render('index.twig');
});

router.get('/index', async function (ctx, next) {
  return ctx.render('index/index.twig', {});
});

app.use(router.routes(), router.allowedMethods());
app.listen(3000);

console.log('app started at port 3000...');