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
    return this.getCurrentDao().getById(id);
  }

  findByIds() {

  }

  getCurrentDao() {
    return new this.DaoProxy('User/UserDao');
  }
};