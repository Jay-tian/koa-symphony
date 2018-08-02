const session = require('koa-session');
const tookit = require('../../common/tookit.js');
const sessionDao = global.service.load('dao', '/system/sessionDao.js');

class Store {
  constructor() {

  }

  async get(sid) {
    return 123;
  }

  async set(session, opts) {
    let sess = {
      sessId: session,
      deadline: parseInt(opts._expire / 1000) + opts._maxAge,
      data: '',
    }

    sessionDao.create(sess);
  }

  async destroy(sid) {
  }
}

const CONFIG = {
  key: 'SESSID',
  maxAge: 86400000,
  overwrite: true,
  httpOnly: true,
  signed: false,
  rolling: false,
  store: new Store(),
};

module.exports = function (app) {
  app.use(session(CONFIG, app));
};

