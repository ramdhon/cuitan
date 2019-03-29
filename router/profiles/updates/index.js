const updates = require('express').Router({ mergeParams: true });
const Models = require('../../../models');

updates.get('/', (req, res) => {
  Models.User.findOne({
    where: {
      username: req.params.username
    }
  })
  .then(user => {
    let username = req.params.username;
    res.render('update', { user, username });
  })
  .catch(err => {
    let username = req.session.username;
    res.render('error', { error, username })
  })
})

updates.post('/', (req, res) => {
  Models.User.findOne({
    where: {
      username: req.params.username
    }
  })
  .then(user => {
    return user.update(req.body)
  })
  .then (() => {
    let username = req.params.username;
    res.redirect(`/profiles/${username}`);
  })
  .catch(err => {
    let username = req.session.username;
    res.render('error', { error, username })
  })
})

updates.get('/:error', (req, res) => {
  let username = req.session.username;
  let error = new Error ('not found');
  res.render('error', { error, username })
})

module.exports = updates;