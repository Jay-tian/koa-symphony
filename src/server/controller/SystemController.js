const BaseController = require('./BaseController');
const fs = require('fs');
const os = require('os');
const path = require('path');

class SystemController extends BaseController {
  constructor(){
    super();
  }

  imageUpload() {
    return async (ctx) => {
      return async function(ctx) {
        const tmpdir = os.tmpdir();
        const filePaths = [];
        const files = ctx.request.body.files || {};
      
        for (let key in files) {
          const file = files[key];
          const filePath = path.join(tmpdir, file.name);
          const reader = fs.createReadStream(file.path);
          const writer = fs.createWriteStream(filePath);
          reader.pipe(writer);
          filePaths.push(filePath);
        }
      
        ctx.body = filePaths;
      };      
    };
  }
}

module.exports = SystemController;