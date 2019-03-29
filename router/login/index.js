const login = require('express').Router();
const {User} = require('../../models');
const bcrypt = require('bcryptjs')

login.get('/', (req, res) => {
  let error = req.query.error;
  console.log(error)
  res.render('login.ejs', {error});
})

login.post('/', (req, res) => {
 let {username, password} = req.body;
  User.findOne({where:{username}})
  .then((user) => {
    // res.send(bcrypt.compareSync(password, user.password))
    if(bcrypt.compareSync(password, user.password)){
      req.session.username = username;
      let success = 'Welcome to your home page, use the search bar above to connect with others'
      res.redirect(`/home?success=${success}`);
    } else {
      throw new Error('Username atau password salah')
    }

  })
  .catch((error) => {
    res.redirect(`/login/?error=${error}`)
  });
})


module.exports = login;