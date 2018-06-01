const process = require('process');
const path = require('path');
const fs = require('fs');
const tookit = require('../../common/tookit.js');

let rootPath = process.cwd();
let parametersPath = path.join(rootPath, 'config/parameters.js');
let config;

let exists = fs.existsSync(parametersPath);
if(exists){
  config = require(parametersPath);

  if (!tookit.requires(config, ['rootPath', 'serverPath', 'version'])) {
    throw new Error('请正确填写配置文件！');
  }
} else {
  throw new Error('请填写配置文件！');
}
config['viewPath'] = path.join(config.serverPath, '/view/');
module.exports = config;