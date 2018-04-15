const process = require('process');
const path = require('path');
const dbConfig = require('./db.js');
let rootPath = process.cwd();
module.exports = {
  rootPath: rootPath,
  configPath: path.join(rootPath + '/src/server/config'),
  viewPath: path.join(rootPath, './src/server/view/'),
  dbConfig: dbConfig,
};