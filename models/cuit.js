'use strict';
module.exports = (sequelize, DataTypes) => {
  const Cuit = sequelize.define('Cuit', {
    UserId: DataTypes.INTEGER,
    body: DataTypes.STRING
  }, {});
  Cuit.associate = function(models) {
    // associations can be defined here
    Cuit.belongsTo(models.User,{})
    Cuit.hasMany(models.Comment,{});
  };
  return Cuit;
};