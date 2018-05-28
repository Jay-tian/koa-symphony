const glob = require('glob');
const path = require('path');
const parameters = require('config/parameters.js');
const Router = require('koa-router');

let routers = glob.sync(path.join(parameters.serverPath, 'router/*.js'));
let middlewares = [];

routers.forEach(function(rts){
  let router = new Router(); 
  rts = require(rts);
  let options = rts.options;
  delete rts['options'];

  for(let rt in rts) {
    let data = rts[rt];
    let methods = data.methods || ['get'];
    router.register(data.path, methods, function(){}, {
      name: options.profix
    });
  }

  middlewares.push(router.routes());
});

