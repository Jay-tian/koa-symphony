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
      let body = ctx.request.body;
      console.log(ctx.request.query);

      const tmpdir = os.tmpdir();
      const filePaths = [];
     
      console.log(ctx.request.body);
      console.log(123123);
      const files = ctx.request.body.files || {};
      for (let key in files) {
        const file = files[key];
        const filePath = path.join(tmpdir, file.name);
        const reader = fs.createReadStream(file.path);
        const writer = fs.createWriteStream(filePath);
        reader.pipe(writer);
        filePaths.push(filePath);
      }
    
      ctx.body = {path: 'lalalalal'};
      next();
    };      
  }
}

module.exports = SystemController;