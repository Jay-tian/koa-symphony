const easyimage =  require('easyimage');
const stringRandom = require('string-random');
const path = require('path');
const toolkit = require('../toolkit/index');
const fs = require('fs');

global.symphony.cropper = function(filePath, params) {
  try {
    let dst = stringRandom(32)+toolkit.timestamp();
    dst = path.dirname(filePath)+'/'+dst+path.extname(filePath)

    return easyimage.crop({
      src: filePath,
      dst: dst,
      x: params.x,
      y: params.y,
      cropheight: params.height,
      cropwidth: params.width,
    }).then(function(data) {
      fs.unlink(filePath);
      return data;
    })
  } catch (e) {
    console.log("Error: ", e);
  }
};