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
      ctx.body = {s: 'asd'}
      next();
    };      
  }
}

module.exports = SystemController;