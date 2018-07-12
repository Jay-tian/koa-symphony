
const db = require('../db/init.js');
module.exports = class BaseDao{
  constructor() {
    this.db = db;
  }

  create() {

  }

  count() {

  }

  search() {
    return;
  }

  get() {
  }

  findByIds() {
  }
};