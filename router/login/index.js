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
      throw new Error('user/password invalid')
    }

  })
  .catch((error) => {
    let username = req.session.username;
    res.render('error', { error, username })
  });
})

login.get('/:error', (req, res) => {
  let username = req.session.username;
  let error = new Error ('not found');
  res.render('error', { error, username })
})

module.exports = login;