const session = require('koa-session');
const service = require('../loader/ServiceLoader.js');

let store = {
  get (key, maxAge) {
    
    //return userService.getById(1);
  },
  set (key, sess, maxAge) {
    
  },
  destroy (key) {
  }
};

const CONFIG = {
  key: 'SESSID',
  maxAge: 86400000,
  overwrite: true,
  httpOnly: true,
  signed: false,
  rolling: false,
  store: store,
};

module.exports = function (app) {
  app.use(session(CONFIG, app));
};

