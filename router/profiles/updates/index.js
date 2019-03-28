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
    res.send(err);
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
    res.send(err);
  })
})

module.exports = updates;