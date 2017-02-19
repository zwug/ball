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
        type: DataTypes.STRING
      },
      'email': {
        allowNull: false,
        primaryKey: true,
        type: DataTypes.STRING
      },
      'phone': {
        allowNull: false,
        type: DataTypes.STRING
      },
      'tickets_count': {
        allowNull: false,
        type: DataTypes.INTEGER
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
