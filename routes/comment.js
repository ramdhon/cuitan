const express = require('express');
const router = express.Router();
const {User, Cuit, Comment} = require('../models');

router.get('/', (req, res)=>{
  Comment.findAll()
  .then((comments) => {
    res.json(comments)
  })
  .catch((error) => res.send(error));
})

 module.exports = router;