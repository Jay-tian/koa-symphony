const DaoProxy = require('../db/Proxy.js');

module.exports = class BaseService{
  constructor() {
    this.DaoProxy = DaoProxy;
  }

  count() {
  }

  search() {
  }

  get(id) {
    console.log(id);
  }

  findByIds() {

  }

  geetUserDao() {
    return new this.DaoProxy('User/UserDao');
  }
};