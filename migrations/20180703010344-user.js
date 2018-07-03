'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    console.log(Sequelize);
    console.log(queryInterface);
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.createTable('users', { id: Sequelize.INTEGER });
    */
  },

  down: (queryInterface, Sequelize) => {
    console.log(Sequelize);
    console.log(queryInterface);
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.dropTable('users');
    */
  }
};
