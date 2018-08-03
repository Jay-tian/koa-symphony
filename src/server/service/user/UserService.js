const BaseService = require('../BaseService.js');
class UserService extends BaseService{
  constructor(){
    super();
  }

  getCurrentDao() {
    return this.createDao('User/UserDao');
  }
}

module.exports = new UserService();