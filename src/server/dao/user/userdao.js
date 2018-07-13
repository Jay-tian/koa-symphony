const BaseDao = require('../BaseDao.js');
class UserDao extends BaseDao{
  constructor(){
    super('user');
  }

  create($fields) {
    console.log($fields);
  }
}

module.exports = new UserDao();