const router = require('express').Router();
const profiles = require('./profiles');
const login = require('./login');
const register = require('./register');
const home = require('./home');


router.get('/', (req, res) => {
  let username = req.session.username
  res.render('index', {username});
})

router.get('/signout', (req, res) => {
  req.session.username = null;
  res.redirect('/');
})

router.use('/login', login);
router.use('/register', register);
router.use('/home', home);
router.use('/profiles/:username', profiles);

router.get('/:error', (req, res) => {
  let username = req.session.username;
  let error = new Error ('not found');
  res.render('error', { error, username })
})

module.exports = router;