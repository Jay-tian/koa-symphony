
const db = require('../db/init.js');
module.exports = class BaseDao{
  constructor(table) {
    this.db = db;
    this.table = table;
    this.model = this.db.define(table,  { /* bla */ }, {
      timestamps: true,
      freezeTableName: true,
      createdAt: 'createdTime',
      updatedAt: 'updatedTime',
    });
  }

  getById(id) {
    this.model.findById(id).then((a) => {
    });

    return this.model.findById(id);
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