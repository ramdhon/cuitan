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
    if (user) {
      let username = req.session.username;
      res.render('../views/profile.ejs', {user, username});
    } else {
      let username = req.session.username;
      let error = new Error ('person you are looking for is not found :)')
      res.render('error', { error, username })  
    }
  })
  .catch(error => {
    let username = req.session.username;
    res.render('error', { error, username })
  })
})

profiles.use('/updates', updates);

profiles.use('/followings', followings);

profiles.use('/followers', followers);

profiles.post('/follow/:idFollow/:cond', (req, res) => {
  if (req.params.cond === 'follow') {
    Models.User.findOne({
      where: {
        username: req.session.username
      }
    })
    .then(user => {
      // res.send(req.body.idFollow);
      return Models.Follow.create({
        UserId: user.id,
        FollowingId: req.params.idFollow
      })
    })
    .then(() => {
      res.redirect(`/profiles/${req.params.username}`);
    })
    .catch(error => {
      let username = req.session.username;
      res.render('error', { error, username });
    })
  } else if (req.params.cond === 'following') {
    Models.User.findOne({
      where: {
        username: req.session.username
      }
    })
    .then(user => {
      // res.send(req.params.idFollow)
      return Models.Follow.destroy({
        where: {
          UserId: user.id,
          FollowingId: req.params.idFollow
        }
      })
    })
    .then(() => {
      res.redirect(`/profiles/${req.params.username}`);
    })
    .catch(error => {
      let username = req.session.username;
      res.render('error', { error, username })
    })
  } else {
    let username = req.session.username;
    let error = new Error ('not found')
    res.render('error', { error, username })
  }
})

profiles.get('/:error', (req, res) => {
  let username = req.session.username;
  let error = new Error ('not found');
  res.render('error', { error, username })
})

module.exports = profiles;