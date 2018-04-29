
const db = require('../db/init.js');
module.exports = class BaseDao{
  constructor(table) {
    this.db = db;
    this.dao = this.db.define(table, {});
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