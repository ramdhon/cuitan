const express = require('express');
const router = express.Router();
const {User, Cuit, Comment} = require('../models');

router.get('/', (req, res)=>{
  Cuit.findByPk(1, {
    include:{
      model: Comment,
      where:{
        ParentId :null
      }
    }
  })
  .then((cuits) =>{
    res.json(cuits)
  })
  .catch((error) => {
    res.send(error);
  })
})

// router.get('/:id/comment', (req, res) => {
 
// })

 module.exports = router;