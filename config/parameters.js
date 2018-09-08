const process = require('process');
const path = require('path');
let rootPath = process.cwd();

module.exports = {
  rootPath: rootPath,
  serverPath: path.join(rootPath + '/src/server/'),
  version: '1.0.0',
  // distAddress: 'http://dist.koa-dev.com',
  email: {
    service: 'qq',
    port: 465,
    secureConnection: true,
    auth: {
      user: '',
      pass: '',
    } 
  }
};