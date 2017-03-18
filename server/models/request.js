'use strict';
module.exports = function(sequelize, DataTypes) {
  var Request = sequelize.define('request', {
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
