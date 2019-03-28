const express = require('express');
const router = express.Router();
const Models = require('../models');
const {Cuit, Comment, User} = Models;

router.get('/', (req, res) => {
  User.findAll()
  .then((users) => res.json(users))
  .catch((error) => res.send(error))
} )

module.exports = router;