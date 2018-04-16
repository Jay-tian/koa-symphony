const process = require('process');
const path = require('path');
const dbConfig = require('./db.js');
let rootPath = process.cwd();
module.exports = {
  rootPath: rootPath,
  serverPath: path.join(rootPath + '/src/server/'),
  configPath: path.join(rootPath + '/src/server/config/'),
  viewPath: path.join(rootPath, './src/server/view/'),
  dbConfig: dbConfig,
  migrationPath: path.join(rootPath + '/src/server/migration/'),
};