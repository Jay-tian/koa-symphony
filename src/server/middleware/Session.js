const session = require('koa-session');
const tookit = require('../../common/tookit.js');

class Store {
  constructor() {
    this.sessionDao = global.service.load('dao', 'system/sessionDao.js');
  }

  async get(sid) {
    let result = await this.sessionDao.getBySessId(sid);
    if (!result) {
      return;
    }

    result = {
      id: result.dataValues['id'],
      deadline: result.dataValues['deadline'],
      sessId: result.get('sessId'),
      data: result.get('data'),
      userId: result.get('data').userId|0,
    };

    return result;
  }

  async set(session, opts = {}) {
    // var content = 'admin';
    // var salt =  crypto.randomBytes(16).toString('hex');
    // var Signture = crypto.createHmac('sha1', salt);//定义加密方式
    // var password = Signture.update(content).digest().toString('base64');
    // console.log("加密的结果：" + password);
    // console.log("salt12: " + salt);

    let result = await this.sessionDao.getBySessId(session);
    if (result) {
      let data = result.get('data');
      data = JSON.stringify(Object.assign(data, opts.data));
      
      return this.sessionDao.update(session, {data: data});
    }

    let data = {
      userId: 1,
    };
    let sess = {
      sessId: session,
      deadline: parseInt(opts._expire / 1000) + opts._maxAge,
      data: JSON.stringify(Object.assign(data, opts.data)),
    };

console.log(sess);
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

