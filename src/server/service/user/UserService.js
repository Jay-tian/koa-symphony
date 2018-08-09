const BaseService = require('../BaseService.js');
const crypto = require('crypto');
const toolkit = require('../../../common/tookit.js');

class UserService extends BaseService{
  constructor(){
    super();
  }

  reigster(fields) {
    let salt =  crypto.randomBytes(16).toString('hex');
    let Signture = crypto.createHmac('sha1', salt);//定义加密方式
    let password = Signture.update(fields.password).digest().toString('base64');
    let user = {
      nickname: fields.username,
      password: password,
      salt: salt,
      roles: '|user|',
      registerIp: fields.registerIp,
      email: Math.random().toString(36).substr(2)+'0627@qq.com',
      loginIp: fields.registerIp,
      registerTime: toolkit.timestamp(),
    }; 

    return this.getCurrentDao().create(user);
  }

  getCurrentDao() {
    return this.createDao('User/UserDao');
  }
}

module.exports = new UserService();