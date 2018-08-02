
const db = require('../db/init.js');
const Sequelize = require('sequelize');
module.exports = class BaseDao{
  constructor(table) {
    this.db = db;
    this.table = table;
    this.createModel();
  }

  getById(id) {
    return this.model.findById(id);
  }

  create(params) {
    return this.model.create(params);
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

  createModel(config = {}) {
    let defaultConfig = {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
    };

    config = Object.assign(defaultConfig, this.config());
    this.model = this.db.define(this.table, config, {
      timestamps: true,
      freezeTableName: true,
    });
  }

  config() {
  }
};