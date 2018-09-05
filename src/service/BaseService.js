module.exports = class BaseService{
  constructor() {
  }

  delete(id) { 
    return this.getCurrentDao().delete(id);
  }

  count() {
  }

  update(id, fields) {
    this.getCurrentDao().update(id, fields);
    return this.getCurrentDao().getById(id);
  }

  search(condition, order, start, limit) {
    return this.getCurrentDao().search(condition, order, start, limit);
  }

  getById(id) {
    return this.getCurrentDao().getById(id);
  }

  findByIds(ids) {
    return this.getCurrentDao().findByIds(ids);
  }

  createDao(name) {
    return global.service.load('dao', name);
  }
};