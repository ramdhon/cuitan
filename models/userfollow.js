'use strict';
module.exports = (sequelize, DataTypes) => {
  const UserFollow = sequelize.define('UserFollow', {
    UserId: DataTypes.INTEGER,
    FollowingId: DataTypes.INTEGER
  }, {});
  UserFollow.associate = function(models) {
    // associations can be defined here
  };
  return UserFollow;
};