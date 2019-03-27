const express = require('express');
const router = express.Router();
const {User, Cuit, Comment} = require('../models');

router.get('/', (req, res)=>{
  Comment.findByPk(2, {
    include:{
      model: Comment,
      as: 'Children',
    }
  })
  .then((comments) => {
    res.json(comments)
  })
  .catch((error) => res.send(error));
})

 module.exports = router;