'use strict';
module.exports = {
  up: function(queryInterface, Sequelize) {
    return queryInterface.createTable('Users', {
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
      'balls': Sequelize.TEXT,
      'birth_date': {
        allowNull: false,
        type: Sequelize.DATEONLY,
      },
      'debut': {
        allowNull: false,
        type: Sequelize.BOOLEAN
      },
      'has_partner': {
        allowNull: false,
        type: Sequelize.BOOLEAN
      },
      'partner': Sequelize.STRING,
      'sex': {
        allowNull: false,
        type: Sequelize.ENUM('male', 'female')
      },
      'level': {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      'vk': {
        allowNull: false,
        type: Sequelize.STRING
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
    return queryInterface.dropTable('Users');
  }
};
