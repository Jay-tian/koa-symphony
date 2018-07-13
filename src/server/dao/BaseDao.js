
const db = require('../db/init.js');
module.exports = class BaseDao{
  constructor(table) {
    this.db = db;
    this.table = table;
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