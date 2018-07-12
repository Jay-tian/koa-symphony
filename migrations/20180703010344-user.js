'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('User', {
      name: Sequelize.STRING,
    });
  },

  down: (queryInterface) => {
    return queryInterface.dropTable('User');
  }
};
