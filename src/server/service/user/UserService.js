const BaseService = require('../BaseService.js');
class UserService extends BaseService{
  constructor(){
    super();
  }

  getById(id)
  {
    return this.getUserDao().getById(id);
  }
}

module.exports = new UserService();