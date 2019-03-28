const followings = require('express').Router({ mergeParams: true });
const Models = require('../../../models');

followings.get('/', (req, res) => {
  Models.User.findOne({ 
    include: [{ 
      model: Models.Cuit,
      include: [Models.Comment]
    }, 'Following', 'Follower'],
    where: {
      username: req.params.username
    },
    order: [['Following', 'id', 'ASC']]
  })
  .then(user => {
    let username = req.session.username;
    res.render('follow', {user, username});
  })
  .catch(error => {
    res.send(error);
  })
})

module.exports = followings;