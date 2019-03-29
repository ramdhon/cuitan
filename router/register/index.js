const register = require('express').Router();
const models = require('../../models');

register.get('/', (req, res) => {
  let error = req.query.error
  res.render('../views/register.ejs', {error});
})

register.post('/', (req, res) => {
  // res.send(req.body);
  models.User.create(req.body)
  .then(() => {
    req.session.username = req.body.username;
    let success ='Welcome to your home page, use the search bar above to connect with others'
    res.redirect(`/home/?success=${success}`)
  })
  .catch((error) => res.redirect(`/register/?error=${error}`))
})

register.get('/:error', (req, res) => {
  let username = req.session.username;
  let error = new Error ('not found');
  res.render('error', { error, username })
})

module.exports = register;