'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.addColumn(
      'requests',
      'email',
      {
        type: Sequelize.STRING,
        defaultValue: '',
        allowNull: false
      }
    )
  },
  down: function (queryInterface, Sequelize) {
    return queryInterface.removeColumn('requests', 'email');
  }
};
