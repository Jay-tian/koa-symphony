// 设置快捷路径
process.env.NODE_PATH = __dirname + '/src/server/';
require('module').Module._initPaths();

const Router = require('koa-router'); 
const app = require('./src/server/kernel.js');
const router = new Router();


router.get('/', async function (ctx, next) {
  return ctx.render('index/index.twig');
});

router.get('/index', async function (ctx, next) {
  return ctx.render('index/index.twig', {});
});

app.use(router.routes());
app.listen(3000);

console.log('app started at port 3000...');