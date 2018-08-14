const BaseController = require('./BaseController');
const fs = require('fs');
const os = require('os');
const path = require('path');

class SystemController extends BaseController {
  constructor(){
    super();
  }

  imageUpload() {
    return async (ctx, next) => {
      
      ctx.body = {
        message: '上传成功', 
        success: 1, 
        url: '/data/upload_980a380eca4a0f49616d6ec72896a305.png'
      };
      return;
    };      
  }
}

module.exports = SystemController;