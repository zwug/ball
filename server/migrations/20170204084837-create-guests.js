'use strict';
module.exports = {
  up: function(queryInterface, Sequelize) {
    return queryInterface.createTable('guests', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      'fio': {
        allowNull: false,
        type: Sequelize.STRING
      },
      'email': {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.STRING
      },
      'phone': {
        allowNull: false,
        type: Sequelize.STRING
      },
      'tickets_count': {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: function(queryInterface, Sequelize) {
    return queryInterface.dropTable('guests');
  }
};
