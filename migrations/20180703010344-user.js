'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    console.log(queryInterface);
    console.log(Sequelize);
    return queryInterface.createTable('User', {
      name: Sequelize.STRING,
      isBetaMember: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
        allowNull: false
      }
    });
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.dropTable('users');
    */
  }
};
