const BaseDao = require('../BaseDao.js');
const Sequelize = require('sequelize');

class ArticleDao extends BaseDao{
  constructor(){
    super('article');
  }
  
  config() {
    return {
      sessId: {
        type:Sequelize.STRING(128),
        unique: true,
        get: function(name) {
          let sessId = this.getDataValue(name);
          return sessId ? this.getDataValue(name).toString() : '';
        }
      },
      data: {
        type:Sequelize.BLOB,
        get: function(name) {
          let data = this.getDataValue(name);
          return data ? JSON.parse(data.toString()) : {};
        }
      },
      deadline: {
        type:Sequelize.INTEGER,
        allowNull: false,
      },
    };
  }
}

module.exports = new ArticleDao();