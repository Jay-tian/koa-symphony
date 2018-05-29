// 设置快捷路径
process.env.NODE_PATH = __dirname + '/src/server/';
require('module').Module._initPaths();
const app = require('./src/server/kernel.js');
app.listen(3000);