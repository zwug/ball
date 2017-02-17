'use strict';
module.exports = function(sequelize, DataTypes) {
  var admin = sequelize.define('admin', {
    'email': {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.STRING
    },
    'password': {
      allowNull: false,
      type: DataTypes.STRING
    },
    'salt': {
      allowNull: false,
      type: DataTypes.STRING
    }
  }, {});
  return admin;
};
