const parameters = require('config/parameters.js');
const Sequelize = require('sequelize');
let dbConfig = parameters.dbConfig;

const db = new Sequelize(
  dbConfig.database, 
  dbConfig.username, 
  dbConfig.password, {
    host: dbConfig.host,
    dialect: 'mysql',
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    },
    operatorsAliases: false
  }
);

module.exports = db;