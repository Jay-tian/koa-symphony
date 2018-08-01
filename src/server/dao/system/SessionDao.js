const BaseDao = require('../BaseDao.js');
const Sequelize = require('sequelize');

class SessionDao extends BaseDao{
  constructor(){
    super('session');
  }
  create($fields) {
    this.model.create($fields);
  }

  config() {
    return {
      sessId: {type:Sequelize.STRING(128),  unique: true },
      data: {type:Sequelize.BLOB},
      deadline: {type:Sequelize.INTEGER,  allowNull: false},
    };
  }
}

module.exports = new SessionDao();