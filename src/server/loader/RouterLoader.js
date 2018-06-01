const parameters = require('./ConfigLoader.js');
const glob = require('glob');
const path = require('path');
const Router = require('koa-router');

let routerPaths = glob.sync(path.join(parameters.serverPath, 'router/*.js'));
let routers = [];
let controllers = require('./ControllerLoader.js');

routerPaths.forEach(function(rts){
 
  rts = require(rts);
  let options = Object.assign({profix: '/'}, rts.options);
  delete rts['options'];
  
  let router = new Router({
    prefix: options.profix
  });
  
  for(let rt in rts) {
    let data = rts[rt];
    let methods = data.methods || ['get'];
    let fun = controllers[data.controller][rt];
    router.register(data.path, methods, fun(), {
      name: rt,
    });
    routers.push(router);
  }
});

module.exports = routers;