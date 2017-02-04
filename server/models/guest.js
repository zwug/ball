'use strict';
module.exports = function(sequelize, DataTypes) {
  var Guest = sequelize.define('guest', {
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
    }
  }, {});
  return Guest;
};
