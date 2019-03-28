const register = require('express').Router();
const models = require('../../models');

register.get('/', (req, res) => {
  res.render('../views/register.ejs');
})

register.post('/', (req, res) => {
  // res.send(req.body);
  models.User.create(req.body)
  .then(() => {
    req.session.username = req.body.username;
    res.redirect('/profiles')
  })
  .catch(err => {
    res.send(err.message);
  })
})

module.exports = register;