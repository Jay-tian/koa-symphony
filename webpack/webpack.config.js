
const process = require('process');
process.env.setting_path = '/webpack/setting.js';
const webpackConfig = require('jay-webpack-scaffold');

module.exports = webpackConfig;