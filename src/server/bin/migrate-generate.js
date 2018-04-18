const fs = require('fs');
const toolkit = require('../../common/tookit.js');
const parameters = require('../config/parameters.js');
let fileName = toolkit.timestamp();
var argv = require('yargs').argv;

fileName = parameters.migrationPath + fileName + '_' + argv._.shift() + '.js';
fs.appendFile(fileName, '', function(){});