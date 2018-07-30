module.exports = class BaseService{
  constructor() {
  }

  count() {
  }

  search() {
  }

  getById(id) {
    return this.getUserDao().getById(id);
  }

  findByIds() {

  }

  getUserDao() {
    return this.createDao('User/UserDao');
  }

  createDao(name) {
    return global.service.load('dao', name);
  }
};