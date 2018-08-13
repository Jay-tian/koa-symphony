const koaBody = require('koa-body');
const path = require('path');
const parameters = require('../loader/ConfigLoader.js');

module.exports = {
  priority: 0,
  middleware: koaBody({
    multipart:true, // 支持文件上传
    encoding:'gzip',
    formidable:{
      uploadDir: path.join(parameters.rootPath,'public/data/'), // 设置文件上传目录
      keepExtensions: true,    // 保持文件的后缀
      maxFieldsSize:2 * 1024 * 1024, // 文件上传大小
    }}),
};