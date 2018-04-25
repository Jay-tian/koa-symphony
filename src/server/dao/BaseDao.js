
const db = require('../db/init.js');
module.exports = class BaseDao{
  constructor(table) {
    this.db = db;
    this.table = table;
    this.dao = this.db.define(this.table, {});
  }

  count() {

  }

  search() {
    return ;
  }

  get() {

  }

  findByIds() {

  }
};