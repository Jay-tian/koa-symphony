// 设置快捷路径
process.env.NODE_PATH = __dirname + '/src/server/';
require('module').Module._initPaths();
const tookit = require('./src/common/tookit.js')
const Router = require('koa-router'); 
const app = require('./src/server/kernel.js');
const router = new Router();

router.get('/', async function (ctx, next) {
  if(tookit.isMobileClient(ctx.request.header['user-agent'])){
    return ctx.render('furrytail/mobile-index.twig', {});
  }
  return ctx.render('furrytail/index.twig', {});
});

app.use(router.routes());
app.listen(3000);

console.log('app started at port 3000...');