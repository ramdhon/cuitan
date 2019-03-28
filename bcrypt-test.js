// 'use strict';
var bcrypt = require('bcryptjs')

// module.exports = (sequelize, DataTypes) => {
//   const User = sequelize.define('User', {
//     name: DataTypes.STRING,
//     email: DataTypes.STRING,
//     password: DataTypes.STRING
//   }, {
//     hooks: {
//       beforeCreate: (user, options) => {
//         // console.log(user.name)
//         // console.log(user.email)
//         let password = 'hacktiv8' + user.name
//         console.log(password)
//         let salt = bcrypt.genSaltSync(10)
//         let hash = bcrypt.hashSync(password, salt)
//         user.password = hash
//       }
//     }
//   });
//   User.associate = function(models) {
//     // associations can be defined here
//   };
//   return User;
// };

var salt = bcrypt.genSaltSync(10);
var password = 'password'
var hash = bcrypt.hashSync(password, salt);

console.log(bcrypt.compareSync('password', '$2a$08$ZuL3OkhYObBiScGBDfZ65uHaffvmrI1wsYCTc8zNi4f0MKh9zDmwq')); // true
// console.log(bcrypt.compareSync("not_bacon", hash)); // false





