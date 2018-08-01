const BaseDao = require('../BaseDao.js');
const Sequelize = require('sequelize');

class UserDao extends BaseDao{
  constructor(){
    super('user');
  }

  create() {
  }

  config() {
    return {
      email: {type:Sequelize.STRING(128),  unique: true },
      password: {type:Sequelize.STRING(64),  allowNull: false},
      salt: {type:Sequelize.STRING(32),  allowNull: false},
      nickname: {type:Sequelize.STRING(64),  allowNull: false, unique: true},
      roles: {type:Sequelize.STRING(255),  allowNull: false},
      locked: {type: Sequelize.BOOLEAN,  defaultValue: 0,},
      lockDeadline: {type: Sequelize.INTEGER,  defaultValue: 0,},
      loginTime: {type: Sequelize.INTEGER,  defaultValue: 0},
      loginIp: {type:Sequelize.STRING(64),  allowNull: false, defaultValue: ''},
      loginSessionId: {type:Sequelize.STRING(255), defaultValue: ''},
      registerIp: { type:Sequelize.STRING(64),  allowNull: false},
    };
  }
}

module.exports = new UserDao();