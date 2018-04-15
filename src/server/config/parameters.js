const process = require('process');
const path = require('path');
let rootPath = process.cwd();

module.exports = {
  rootPath: rootPath,
  configPath: path.join(rootPath + '/src/server/config'),
  viewPath: path.join(rootPath, './src/server/view/'),
};