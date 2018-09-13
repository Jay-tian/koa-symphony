const BaseService = require('../BaseService.js');
const toolkit = require('../../toolkit/index.js');
const crypto = require('crypto');

class UserService extends BaseService{
  constructor(){
    super();
  }

  // 加密方式抽离，支持重写
  async reigster(fields) {
    let salt =  crypto.randomBytes(16).toString('hex');
    let signture = crypto.createHmac('sha1', salt);//定义加密方式
    let password = signture.update(fields.password).digest().toString('base64');

    let user = toolkit.objectParts(fields, ['nickname', 'registerIp', 'email', 'locked']);
    user = Object.assign(user, {
      password: password,
      salt: salt,
      roles: '|user|',
      loginIp: fields.registerIp,
      registerTime: toolkit.timestamp(),
    }); 

    return await this.getCurrentDao().create(user);
  }

  async login(fields) {
    let user = await this.getByNickname(fields.nickname);
    if (!user) {
      return;
    }

    let signture = crypto.createHmac('sha1', user.get('salt'));//定义加密方式
    return user.password == signture.update(fields.password).digest().toString('base64') ? user : null;  
  }

  getByNickname(nickname) {
    return this.getCurrentDao().getByNickname(nickname);
  }

  getByEmail(email) {
    return this.getCurrentDao().getByEmail(email);
  }

  getCurrentDao() {
    return this.createDao('user/UserDao');
  }

  getSessionDao() {
    return this.createDao('system/SessionDao');
  }
}

module.exports = new UserService();