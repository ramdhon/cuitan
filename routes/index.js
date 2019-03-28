const express = require('express');
const router = express.Router();
const Models = require('../models');
const {Comment, Cuit, User} = Models

router.get("/", (req, res) => {
  Cuit.findAll({
    include: [{
      model: Comment
    }, {
      model: User
    }
  ],
  order:[['updatedAt', 'ASC']]
  })
  .then((cuits) => {
    res.render('index', {cuits})
  })
  .catch((error)=> res.send(error))

})

router.post('/', (req, res) => {
  res.json(req.body)
})

router.get('/login', (req, res) => {
  res.render('login')
})

router.post('/login', (req, res) =>{
  
})  

router.get('/register', (req, res) => {
  res.render('register')
})


module.exports = router;