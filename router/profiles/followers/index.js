const followers = require('express').Router({ mergeParams: true });
const Models = require('../../../models');

followers.get('/', (req, res) => {
  Models.User.findOne({ 
    include: [{ 
      model: Models.Cuit,
      include: [Models.Comment]
    }, 'Following', 'Follower'],
    where: {
      username: req.params.username
    },
    order: [['Follower', 'id', 'ASC']]
  })
  .then(user => {
    let username = req.session.username;
    let path = 'Follower'
    res.render('follow', {user, username, path});
  })
  .catch(error => {
    let username = req.session.username;
    res.render('error', { error, username })
  })
})

followers.get('/:error', (req, res) => {
  let username = req.session.username;
  let error = new Error ('not found');
  res.render('error', { error, username })
})

module.exports = followers;