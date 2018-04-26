const process = require('process');
const rootPath = process.cwd();

let setting = {
  entry: rootPath + '/src/client/js/',
  output: rootPath + '/public/src/',
  publicPath: '/src/',
  author: 'tianshengjie',
};

module.exports = setting;