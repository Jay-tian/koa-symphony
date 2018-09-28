const gm = require('gm');
const stringRandom = require('string-random');
const path = require('path');
const fs = require('fs');
const toolkit = require('../toolkit/index');

global.symphony.cropper = function(filePath, params) {
  let dst = stringRandom(16)+toolkit.timestamp();
  dst = path.dirname(filePath)+'/'+dst+path.extname(filePath)
  return new Promise(function (resolve, reject) {
    gm(filePath).crop(params.width, params.height, params.x, params.y)
    .write(dst, function (err) {
      fs.unlink(filePath);
      resolve(dst);
      if (!err) {
        console.log('crazytown has arrived');
        reject(dst);
      }
    })
  });
};