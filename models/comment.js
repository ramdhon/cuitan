'use strict';
module.exports = (sequelize, DataTypes) => {
  const Comment = sequelize.define('Comment', {
    body: DataTypes.TEXT,
    UserId: DataTypes.INTEGER,
    CuitId: DataTypes.INTEGER,
    CommentId: DataTypes.INTEGER
  }, {});
  Comment.associate = function(models) {
    // associations can be defined here
    Comment.belongsTo(models.Cuit,{});
    Comment.belongsTo(models.User,{});

    //self-reference one:many
    Comment.belongsTo(models.Comment,{foreignKey:'CommentId'});
    Comment.hasMany(models.Comment,{as: 'Children', foreignKey:'CommentId'});
  };
  return Comment;
};