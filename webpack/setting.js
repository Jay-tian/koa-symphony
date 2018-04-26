const process = require('process');
const rootPath = process.cwd();

let setting = {
  entry: rootPath + '/src/client/js/',
  output: rootPath + '/public/build/',
  publicPath: '/build/',
  author: 'tianshengjie',
};

module.exports = setting;