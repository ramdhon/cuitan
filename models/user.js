'use strict';
const bcrypt = require('bcryptjs');

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    username: DataTypes.STRING,
    password: DataTypes.STRING,
    bio: DataTypes.TEXT
  }, {
    hooks: {
      beforeCreate: (user, options) =>{
        let salt = bcrypt.genSaltSync(8);
        let hash =  bcrypt.hashSync(user.password, salt);
        user.password = hash;
      }
    }
  });
  User.associate = function(models) {
    // associations can be defined here
     User.hasMany(models.Cuit);
     User.hasMany(models.Comment);
    
     // self-reference many:many
     User.belongsToMany(models.User, {as: 'Following', through: 'Follow', foreignKey:'UserId'});
     User.belongsToMany(models.User, {as: 'Follower', through: 'Follow', foreignKey:'FollowingId'});
  };

  User.prototype.sayHi = function(){
    return `Hi, i'm ${this.username}`
  }

  return User;
};