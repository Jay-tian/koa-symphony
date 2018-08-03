module.exports = class BaseService{
  constructor() {
  }

  count() {
  }

  search() {
  }

  getById(id) {
    console.log(id);
    return this.getCurrentDao().getById(id);
  }

  findByIds() {
  }

  createDao(name) {
    return global.service.load('dao', name);
  }
};