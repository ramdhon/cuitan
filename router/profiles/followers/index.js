const followers = require('express').Router({ mergeParams: true });
const Models = require('../../../models');

followers.get('/', (req, res) => {
  res.send(req.params.username)
})

module.exports = followers;