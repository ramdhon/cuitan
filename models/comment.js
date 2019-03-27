'use strict';
module.exports = (sequelize, DataTypes) => {
  const Comment = sequelize.define('Comment', {
    UserId: DataTypes.INTEGER,
    CuitId: DataTypes.INTEGER,
    ParentId: DataTypes.INTEGER,
    body: DataTypes.TEXT
  }, {});
  Comment.associate = function(models) {
    // associations can be defined here
    Comment.belongsTo(models.Cuit,{});
    Comment.belongsTo(models.User,{});

    //self-reference one:many
    Comment.belongsTo(models.Comment,{foreignKey:'ParentId'});
    Comment.hasMany(models.Comment,{as: 'Children', foreignKey:'ParentId'});
  };
  return Comment;
};