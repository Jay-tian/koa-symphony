const process = require('process');
const path = require('path');
let rootPath = process.cwd();

module.exports = {
  rootPath: rootPath,
  serverPath: path.join(rootPath + '/src/server/'),
  version: '1.0.0',
};