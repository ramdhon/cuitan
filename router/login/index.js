const login = require('express').Router();
const {User} = require('../../models');
const bcrypt = require('bcryptjs')

login.get('/', (req, res) => {
  res.render('../views/login.ejs');
})

login.post('/', (req, res) => {
 let {username, password} = req.body;
  User.findOne({where:{username}})
  .then((user) => {
    // res.send(bcrypt.compareSync(password, user.password))
    if(bcrypt.compareSync(password, user.password)){
      req.session.username = username;
      res.redirect('/home');
    } else {
      throw new Error('user/password salah')
    }

  })
  .catch((error) => res.send(error));
})


module.exports = login;