'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    name: DataTypes.STRING,
    email: DataTypes.STRING
  }, {});
  User.associate = function(models) {
    // associations can be defined here

    // self-reference many:many
    User.belongsToMany(models.User, {as: 'Following', through: 'UserFollow', foreignKey:'UserId'});
    User.belongsToMany(models.User, {as: 'Follower', through: 'UserFollow', foreignKey:'FollowingId'});
  };
  return User;
};