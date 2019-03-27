const express = require('express');
const router = express.Router();
const {User, Cuit, Comment} = require('../models');

router.get('/', (req, res)=>{
  res.send('HOME PAGE')
})

router.get('/get', (req, res)=>{
  User.findByPk(1, {

    include:['Following','Follower']
  })

  .then((users) => res.json(users))
  .catch((error) => res.send(error));


})

 module.exports = router;