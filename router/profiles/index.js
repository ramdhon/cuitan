const profiles = require('express').Router();
const Models = require('../../models');

profiles.get('/', (req, res) => {
  // console.log(req.session.username);
  Models.User.findOne({ 
    include: [Models.Cuit, 'Following', 'Follower'],
    where: {
      username: req.session.username
    },
    order: [[Models.Cuit, 'createdAt', 'DESC']]
  })
  .then(user => {
    // console.log(user);
    let username = req.body.username;
    res.render('../views/profile.ejs', {user, username});
  })
  .catch(error => {
    res.send(error);
  })
})

profiles.get('/followings', (req, res) => {
  // console.log(req.session.username);
  Models.User.findOne({ 
    include: [Models.Cuit, 'Following', 'Follower'],
    where: {
      username: req.session.username
    },
    // order: [['Following', 'id', 'DESC']]
  })
  .then(user => {
    res.send(user);
    // res.render('../views/profile.ejs', user);
  })
  .catch(error => {
    res.send(error);
  })
})

profiles.get('/followers', (req, res) => {
  console.log(req.session.username);
  Models.User.findOne({ 
    include: [{
      model: Models.Cuit,
    }, 'Following', 'Follower'],
    where: {
      username: req.session.username
    },
    order: [[Models.Cuit, 'createdAt', 'DESC']]
  })
  .then(user => {
    // res.send(user);
    user.username = req.session.username;
    res.render('../views/profile.ejs', user);
  })
  .catch(error => {
    res.send(error);
  })
})



module.exports = profiles;