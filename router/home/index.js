const home = require('express').Router();

const {Cuit, User, Comment} = require('../../models');
const Op = require('../../models').Sequelize.Op

home.get('/', (req, res, next) => {

  if (req.session.username ) {
    next()
  } else {
    res.redirect('/')
  }
},(req, res) => {
  let success = req.query.success;
  let username = req.session.username;
  let cuits = [];
  let ids= [];

  User.findOne({
    where:{username},
    include: ['Following']
  })
  .then((joined)=> {
      
     joined.Following.forEach((following) => {
       ids.push(following.id)
     })
     ids.push(joined.id);
     return Cuit.findAll({
       include: User,
       where:{
         UserId:{
           [Op.in] : ids
         }
       },
       order:[['createdAt', 'DESC']]
     })
    .then((cuits) =>{
     res.render('home', {cuits, username, success})
    })
  })
  .catch((error) => {
    username = req.session.username;
    res.render('error', { error, username })
  } )
})

home.post('/', (req, res) => {
  let {body} = req.body
  User.findOne({where:{
    username : req.session.username
  }})
  .then((user)=>{
    let UserId = user.id
    let obj ={body, UserId}
    return Cuit.create(obj)
  })
  .then(_=> {
    res.redirect('/home')
  })
  .catch((error) => {
    let username = req.session.username;
    res.render('error', { error, username })
  });
})

home.post('/search', (req, res) => {
  let {username} = req.body
  res.redirect(`/profiles/${username}`);
})

home.get('/:error', (req, res) => {
  let username = req.session.username;
  let error = new Error ('not found');
  res.render('error', { error, username })
})

module.exports = home;
