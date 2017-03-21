'use strict';
module.exports = function(sequelize, DataTypes) {
  var Request = sequelize.define('request', {
    'email': {
      type: DataTypes.STRING,
      defaultValue: '',
      allowNull: false
    },
    'fio': {
      allowNull: false,
      type: DataTypes.STRING
    },
    'phone': {
      allowNull: false,
      type: DataTypes.STRING
    }
  }, {});
  return Request;
};
