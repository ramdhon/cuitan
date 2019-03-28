'use strict';
const bcrypt = require('bcryptjs');

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    first_name: {
      type: DataTypes.STRING,
      validate: {
        isAlpha: {
          args: true,
          msg: 'Nama tidak boleh angka'
        }
      }
    },
    last_name: {
      type: DataTypes.STRING,
      validate: {
        isAlpha: {
          args:true,
          msg: 'Nama tidak boleh angka'
        }
      }
    },
    username:{ 
     type: DataTypes.STRING,
     validate: {
       len: {
         args: [3,16],
         msg: 'Username minimum 3 karakter, maksimum 16 karakter'
       },
       isUnique(value){
         return User.findOne({where: {username: value}})
         .then((user)=>{
           if(user){  throw new Error('Sudah ada user dengan username tersebut') }
        })
       }
     }
    },
    password: {
      type: DataTypes.STRING,
      validate: {
        passwordLength(value) {
          if(value.length < 8) {
            throw new Error('Password minimal 8 karakter')
          }
        }
      }
    },
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