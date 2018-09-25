const easyimage =  require('easyimage');
const stringRandom = require('string-random');
const path = require('path');
const fs = require('fs');
const toolkit = require('../toolkit/index');

global.symphony.cropper = function(filePath, params) {
  try {
    let dst = stringRandom(16)+toolkit.timestamp();
    dst = path.dirname(filePath)+'/'+dst+'.'+path.extname(filePath)

    easyimage.crop({
      src: filePath,
      dst: dst,
      x: params.x,
      y: params.y,
      cropheight: params.height,
      cropwidth: params.width,
    })
  } catch (e) {
    console.log("Error: ", e);
  }

  fs.unlink(filePath);
  return dst;
};