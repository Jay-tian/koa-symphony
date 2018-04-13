const Koa = require('koa'); 
const app = new Koa();

//初始化模版渲染路径
app.use(views(path.join(__dirname, './src/server/view'), {
  extension: 'ejs'
}))


//初始化静态资源路径
app.use(koaStatic(
  path.join( __dirname,  staticPath)
))


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
