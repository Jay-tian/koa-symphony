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
const mysql = require('mysql');


const pool  = mysql.createPool({
  host     : '127.0.0.1',   // 数据库地址
  user     : 'root',    // 数据库用户
  password : '',   // 数据库密码
  database : 'try6.edusoho.cn'  // 选中数据库
})
 
pool.getConnection(function(err, connection) { 
  connection.query('SELECT * FROM user limit 1',  (error, results, fields) => {
    console.log(results);
    // 结束会话
    connection.release();
 
    // 如果有错误就抛出
    if (error) throw error;
  })
});
 

app.use(views(path.join(__dirname, './src/server/view'), {
  extension: 'ejs'
}))

router.get('/', async (ctx) => { 
  let data = {
    data: 'hello koa2'
  }
  ctx.render('layout', data);
});

app.use(koaStatic(
  path.join( __dirname,  staticPath)
))

app.use(router.routes(), router.allowedMethods());
app.listen(3000);

console.log('app started at port 3000...');