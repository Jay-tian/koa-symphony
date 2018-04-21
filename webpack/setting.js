const process = require('process');
const rootPath = process.cwd();

let setting = {
  entry: rootPath + '/src/client/js/',
  output: rootPath + '/public/static/',
  publicPath: '/static/',
  author: 'tianshengjie',
};

module.exports = setting;