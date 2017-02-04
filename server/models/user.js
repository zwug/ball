'use strict';
module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define('user', {
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
    'balls': DataTypes.TEXT,
    'birth_date': {
      allowNull: false,
      type: DataTypes.DATEONLY,
    },
    'debut': {
      allowNull: false,
      type: DataTypes.BOOLEAN
    },
    'has_partner': {
      allowNull: false,
      type: DataTypes.BOOLEAN
    },
    'partner': DataTypes.STRING,
    'sex': {
      allowNull: false,
      type: DataTypes.ENUM('male', 'female')
    },
    'level': {
      allowNull: false,
      type: DataTypes.INTEGER
    },
    'vk': {
      allowNull: false,
      type: DataTypes.STRING
    }
  }, {});
  return User;
};
