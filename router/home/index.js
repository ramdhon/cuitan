const home = require('express').Router();

const {Cuit, User, Comment} = require('../../models');
const Op = require('../../models').Sequelize.Op

home.get('/', (req, res, next) => {
  req.session.username = ""
  if (req.session.username ) {
    next()
  } else {
    res.redirect('/')
  }
},(req, res) => {
  // req.session.username = "jadont" ;
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
     res.render('home', {cuits, username})
    // res.json(cuits)
    })
  })
  .catch((error) => res.send(error) )

})

home.post('/', (req, res) => {
  // req.session.username = "ramdhon";
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
  .catch((error) => res.send(error));
 
})

module.exports = home;
