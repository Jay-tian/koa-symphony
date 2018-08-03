const session = require('koa-session');
const tookit = require('../../common/tookit.js');

class Store {
  constructor() {
    this.sessionDao = global.service.load('dao', '/system/sessionDao.js');
  }

  async get(sid) {
    let result = await this.sessionDao.getBySessId(sid);

    return result;
  }

  async set(session, opts = {}) {
    let result = await this.sessionDao.getBySessId(session);
    if (result) {
      let data = result.get('data');
      data = JSON.stringify(Object.assign(data, opts.data));
      
      return this.sessionDao.update(session, {data: data});
    }

    let sess = {
      sessId: session,
      deadline: parseInt(opts._expire / 1000) + opts._maxAge,
      data: JSON.stringify(opts.data),
    };

    return this.sessionDao.create(sess);
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

