const router = require('express').Router();
const profiles = require('./profiles');

const login = require('./login');
const register = require('./register');


router.get('/', (req, res) => {
  req.session.username = "ramdhon" ;
  console.log(req.session);
  let user = {
    username: req.session.username
  }
  res.render('../views', user);
})

router.use('/login', login);
router.use('/register', register);


router.use('/profiles/:username', profiles);

module.exports = router;