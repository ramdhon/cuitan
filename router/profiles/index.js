const profiles = require('express').Router({ mergeParams: true });
const Models = require('../../models');
const updates = require('./updates');
const followings = require('./followings');
const followers = require('./followers');

profiles.get('/', (req, res) => {
  Models.User.findOne({ 
    include: [{ 
        model: Models.Cuit,
        include: [Models.Comment]
      }, 'Following', 'Follower'],
    where: {
      username: req.params.username
    },
    order: [[Models.Cuit, 'createdAt', 'DESC']]
  })
  .then(user => {
    let username = req.session.username;
    res.render('../views/profile.ejs', {user, username});
  })
  .catch(error => {
    res.send(error);
  })
})

profiles.use('/updates', updates);

profiles.use('/followings', followings);

profiles.use('/followers', followers);



module.exports = profiles;