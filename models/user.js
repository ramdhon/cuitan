'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    username: DataTypes.STRING,
    password: DataTypes.STRING,
    bio: DataTypes.TEXT
  }, {});
  User.associate = function(models) {
    // associations can be defined here
     User.hasMany(models.Comment, {});
     User.hasMany(models.Cuit,{});
     // self-reference many:many
     User.belongsToMany(models.User, {as: 'Following', through: 'Follow', foreignKey:'UserId'});
     User.belongsToMany(models.User, {as: 'Follower', through: 'Follow', foreignKey:'FollowingId'});
  };
  return User;
};