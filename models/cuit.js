'use strict';
module.exports = (sequelize, DataTypes) => {
  const Cuit = sequelize.define('Cuit', {
    body: DataTypes.STRING,
    UserId: DataTypes.INTEGER
  }, {});
  Cuit.associate = function(models) {
    // associations can be defined here
    Cuit.belongsTo(models.User,{});
    Cuit.hasMany(models.Comment,{});
  };
  return Cuit;
};