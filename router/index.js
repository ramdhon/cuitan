const router = require('express').Router();
const profiles = require('./profiles');
const login = require('./login');
const register = require('./register');
const home = require('./home');



router.get('/', (req, res) => {
  let username = req.session.username
  res.render('index', {username});
})


router.use('/profiles', profiles);
router.use('/login', login);
router.use('/register', register);
router.use('/home', home);

module.exports = router;